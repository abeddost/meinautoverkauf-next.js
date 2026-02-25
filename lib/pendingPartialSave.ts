let _promise: Promise<string | null> | null = null;

export function setPendingPartialSavePromise(p: Promise<string | null>): void {
  _promise = p;
}

export function consumePendingPartialSavePromise(): Promise<string | null> {
  const p = _promise;
  _promise = null;
  return p ?? Promise.resolve(null);
}
