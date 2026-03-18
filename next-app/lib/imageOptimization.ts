import imageCompression from 'browser-image-compression';

const DEFAULT_OPTIONS = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1280,
  useWebWorker: true,
  initialQuality: 0.8,
};

/**
 * Resize and compress an image file for upload.
 * Returns a new File suitable for uploading.
 */
export async function optimizeImageFile(file: File): Promise<File> {
  return imageCompression(file, DEFAULT_OPTIONS);
}
