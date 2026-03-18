export interface PendingPhotoPath {
  storagePath: string;
  originalFilename?: string;
  contentType?: string;
  sizeBytes?: number;
}

let _promise: Promise<PendingPhotoPath[]> | null = null;

export function setPendingPhotoPromise(p: Promise<PendingPhotoPath[]>): void {
  _promise = p;
}

export function consumePendingPhotoPromise(): Promise<PendingPhotoPath[]> {
  const p = _promise;
  _promise = null;
  return p ?? Promise.resolve([]);
}
