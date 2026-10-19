// Keep in sync with supabase/functions/_shared/photoPath.ts
const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
];

/** Month folder for a lead, e.g. '2026/10-october', based on Europe/Berlin time. */
export function photoMonthFolder(date: Date | string = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: '2-digit',
  }).formatToParts(new Date(date));
  const year = parts.find((p) => p.type === 'year')!.value;
  const month = parts.find((p) => p.type === 'month')!.value;
  return `${year}/${month}-${MONTHS[Number(month) - 1]}`;
}

/** Final storage path for a lead photo: '2026/10-october/<estimationId>/<filename>'. */
export function photoStoragePath(estimationId: string, filename: string, leadCreatedAt?: Date | string): string {
  return `${photoMonthFolder(leadCreatedAt)}/${estimationId}/${filename}`;
}
