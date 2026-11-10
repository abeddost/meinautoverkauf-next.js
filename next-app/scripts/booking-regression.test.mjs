import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import test from 'node:test';
const require = createRequire(import.meta.url);
const ts = require('typescript');

function loadComponent(file, initialState, bookAppointment) {
  const state = [...initialState];
  let index = 0;
  const react = {
    createElement: (type, props, ...children) => ({ type, props: props ?? {}, children }),
    useState: () => {
      const slot = index++;
      return [state[slot], (value) => { state[slot] = value; }];
    },
  };
  const source = ts.transpileModule(readFileSync(new URL(file, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React, esModuleInterop: true },
  }).outputText;
  const exports = {};
  vm.runInNewContext(source, {
    exports,
    require: (name) => {
      if (name === 'react') return react;
      if (name === '@/lib/supabaseFunctions') return { bookAppointment };
      throw new Error(`Unexpected import: ${name}`);
    },
    Date,
  });
  return { Component: exports.default, state };
}
function find(node, predicate) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (const child of node) { const result = find(child, predicate); if (result) return result; }
  } else {
    if (predicate(node)) return node;
    return find(node.children, predicate);
  }
}
async function submit({ estimationId = 'estimate-1', response, failure } = {}) {
  let calls = 0;
  let completions = 0;
  const { Component, state } = loadComponent('../components/BookingStep.tsx',
    ['wiesbaden', '2026-11-11', '10:00', null, false], async () => {
      calls++;
      if (failure) throw failure;
      return response;
    });
  const tree = Component({ estimationId, onComplete: () => completions++, onBack: () => {} });
  await find(tree, (node) => node.type === 'form').props.onSubmit({ preventDefault() {} });
  return { calls, completions, error: state[3], loading: state[4] };
}
const confirmed = { appointmentId: 'appointment-1', estimationId: 'estimate-1', status: 'appointment_booked' };

test('missing valuation cannot produce booking success or call API', async () => {
  const result = await submit({ estimationId: null });
  assert.equal(result.calls, 0);
  assert.equal(result.completions, 0);
  assert.match(result.error, /noch nicht gespeichert/);
});
test('confirmed saved appointment completes once', async () => {
  const result = await submit({ response: { data: confirmed, status: 200 } });
  assert.equal(result.calls, 1);
  assert.equal(result.completions, 1);
  assert.equal(result.loading, false);
});
for (const [name, response] of [
  ['API failure', { error: { error: 'Buchung fehlgeschlagen.' }, status: 500 }],
  ['empty response', { data: {}, status: 200 }],
  ['missing appointment ID', { data: { ...confirmed, appointmentId: undefined }, status: 200 }],
  ['wrong valuation', { data: { ...confirmed, estimationId: 'other' }, status: 200 }],
  ['unconfirmed status', { data: { ...confirmed, status: 'pending' }, status: 200 }],
]) {
  test(`${name} cannot produce success`, async () => {
    const result = await submit({ response });
    assert.equal(result.completions, 0);
    assert.ok(result.error);
    assert.equal(result.loading, false);
  });
}
test('network failure displays an error and releases loading', async () => {
  const result = await submit({ failure: new Error('offline') });
  assert.equal(result.completions, 0);
  assert.match(result.error, /Verbindung/);
  assert.equal(result.loading, false);
});
test('valuation results disable booking until saving succeeds', () => {
  const { Component } = loadComponent('../components/ValuationResults.tsx', []);
  for (const [canBook, isSubmitting, disabled] of [[false, false, true], [true, true, true], [true, false, false]]) {
    const tree = Component({
      valuation: { estimatedPrice: 10000, priceRange: { min: 9000, max: 11000 }, explanation: 'Bewertung' },
      carDetails: {}, onNext() {}, onBack() {}, canBook, isSubmitting,
    });
    const button = find(tree, (node) => node.type === 'button' && node.props['aria-busy'] !== undefined);
    assert.equal(button.props.disabled, disabled);
  }
});
