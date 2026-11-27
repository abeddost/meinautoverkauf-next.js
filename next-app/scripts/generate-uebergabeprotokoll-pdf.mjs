#!/usr/bin/env node
/**
 * Generates public/downloads/uebergabeprotokoll-auto.pdf, the printable handover protocol
 * linked from /ratgeber/fahrzeuguebergabe-checkliste. Uses jspdf (already a dependency).
 * Run: node scripts/generate-uebergabeprotokoll-pdf.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { jsPDF } from 'jspdf';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../public/downloads');
const outFile = path.join(outDir, 'uebergabeprotokoll-auto.pdf');

const doc = new jsPDF({ unit: 'mm', format: 'a4' });
const LEFT = 18;
const RIGHT = 192;
const ORANGE = [234, 88, 12];
const DARK = [15, 23, 42];
const GREY = [100, 116, 139];
let y = 20;

const heading = (text) => {
  y += 3;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...ORANGE);
  doc.text(text, LEFT, y);
  y += 2;
  doc.setDrawColor(...ORANGE);
  doc.setLineWidth(0.4);
  doc.line(LEFT, y, RIGHT, y);
  y += 5;
};

const field = (label, x = LEFT, width = RIGHT - LEFT) => {
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...GREY);
  doc.text(label, x, y);
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.2);
  doc.line(x, y + 5, x + width, y + 5);
};

const fieldRow = (labels) => {
  const gap = 6;
  const width = (RIGHT - LEFT - gap * (labels.length - 1)) / labels.length;
  labels.forEach((label, index) => field(label, LEFT + index * (width + gap), width));
  y += 9.5;
};

const signatureRow = (labels) => {
  const gap = 12;
  const width = (RIGHT - LEFT - gap * (labels.length - 1)) / labels.length;
  y += 12;
  labels.forEach((label, index) => {
    const x = LEFT + index * (width + gap);
    doc.setDrawColor(100, 116, 139);
    doc.setLineWidth(0.3);
    doc.line(x, y, x + width, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...GREY);
    doc.text(label, x, y + 4);
  });
  y += 4; // baseline of the signature labels
};

const checkboxes = (items, columns = 2) => {
  const colWidth = (RIGHT - LEFT) / columns;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...DARK);
  items.forEach((item, index) => {
    const col = index % columns;
    const x = LEFT + col * colWidth;
    if (col === 0 && index > 0) y += 6;
    doc.setDrawColor(100, 116, 139);
    doc.rect(x, y - 3.2, 3.6, 3.6);
    doc.text(item, x + 6, y);
  });
  y += 8;
};

// Title
doc.setFont('helvetica', 'bold');
doc.setFontSize(18);
doc.setTextColor(...DARK);
doc.text('Übergabeprotokoll für den Gebrauchtwagenverkauf', LEFT, y);
y += 6;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...GREY);
doc.text('Ergänzung zum Kaufvertrag. Bitte zweifach ausfüllen – je ein Exemplar für Verkäufer und Käufer.', LEFT, y);
y += 4;

heading('1. Übergabe');
fieldRow(['Datum', 'Uhrzeit', 'Ort']);

heading('2. Verkäufer');
fieldRow(['Name, Vorname', 'Telefon']);
fieldRow(['Anschrift', 'Ausweisnummer']);

heading('3. Käufer');
fieldRow(['Name, Vorname', 'Telefon']);
fieldRow(['Anschrift', 'Ausweisnummer']);

heading('4. Fahrzeug');
fieldRow(['Marke und Modell', 'Amtliches Kennzeichen']);
fieldRow(['Fahrzeug-Identifizierungsnummer (FIN)', 'Erstzulassung']);
fieldRow(['Kilometerstand bei Übergabe', 'Anzahl übergebener Schlüssel']);

heading('5. Übergebene Unterlagen und Zubehör');
checkboxes([
  'Zulassungsbescheinigung Teil I',
  'Zulassungsbescheinigung Teil II',
  'Bericht der letzten Hauptuntersuchung',
  'Serviceheft / Wartungsnachweise',
  'Reparatur- und Wartungsrechnungen',
  'COC-Papier',
  'Bedienungsanleitung / Bordmappe',
  'Abmeldebescheinigung',
  'Zweitsatz Räder',
  'Felgenschloss-Adapter',
]);
fieldRow(['Sonstiges Zubehör']);

heading('6. Zustand bei Übergabe (sichtbare Schäden, bekannte Mängel)');
for (let i = 0; i < 3; i += 1) {
  doc.setDrawColor(203, 213, 225);
  doc.line(LEFT, y, RIGHT, y);
  y += 6.5;
}

heading('7. Zahlung');
fieldRow(['Kaufpreis in Euro', 'Zahlungsart (Überweisung / bar)']);
checkboxes(['Zahlungseingang vom Verkäufer bestätigt'], 1);

heading('8. Unterschriften');
signatureRow(['Ort, Datum, Unterschrift Verkäufer', 'Ort, Datum, Unterschrift Käufer']);
if (y > 283) throw new Error(`Layout overflow: content ends at ${y} mm`);

doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(...GREY);
doc.text(
  'Vorlage von Meinautoverkauf.de. Ohne Gewähr; das Protokoll ersetzt keinen schriftlichen Kaufvertrag. www.meinautoverkauf.de',
  LEFT,
  287,
);

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, Buffer.from(doc.output('arraybuffer')));
console.log(`Wrote ${path.relative(process.cwd(), outFile)}`);
