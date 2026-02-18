import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';

interface PhotoUploadModalProps {
  estimationId: string;
  onComplete: () => void;
  onClose: () => void;
}

const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  estimationId,
  onComplete,
  onClose,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState<{ uploaded: number; total: number }>({ uploaded: 0, total: 0 });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      
      // Validate file types
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      const invalidFiles = selectedFiles.filter((f) => !validTypes.includes(f.type));
      
      if (invalidFiles.length > 0) {
        setError(`Ungültige Dateitypen: ${invalidFiles.map((f) => f.name).join(', ')}`);
        return;
      }
      
      // Validate file sizes (max 5MB each)
      const oversizedFiles = selectedFiles.filter((f) => f.size > 5 * 1024 * 1024);
      if (oversizedFiles.length > 0) {
        setError(`Dateien zu groß (max 5MB): ${oversizedFiles.map((f) => f.name).join(', ')}`);
        return;
      }
      
      setFiles((prev) => {
        const combined = [...prev, ...selectedFiles];
        const seen = new Set<string>();
        return combined
          .filter((f) => {
            const key = `${f.name}_${f.size}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
          })
          .slice(0, 10);
      });
      setError('');
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setError('Bitte wählen Sie mindestens eine Datei aus');
      return;
    }

    setUploading(true);
    setError('');
    setProgress({ uploaded: 0, total: files.length });

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const timestamp = Date.now();
        const randomSuffix = Math.random().toString(36).substring(7);
        const fileName = `${timestamp}_${randomSuffix}_${file.name}`;
        const storagePath = `${estimationId}/${fileName}`;

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from('car-photos')
          .upload(storagePath, file, {
            contentType: file.type,
            upsert: false,
          });

        if (uploadError) {
          throw new Error(`Upload fehlgeschlagen für ${file.name}: ${uploadError.message}`);
        }

        // Insert into estimation_photos table
        const { error: dbError } = await supabase.from('estimation_photos').insert({
          estimation_id: estimationId,
          storage_path: storagePath,
          original_filename: file.name,
          content_type: file.type,
          size_bytes: file.size,
        });

        if (dbError) {
          throw new Error(`Datenbank-Fehler für ${file.name}: ${dbError.message}`);
        }

        setProgress({ uploaded: i + 1, total: files.length });
      }

      // Success
      onComplete();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Upload fehlgeschlagen');
    } finally {
      setUploading(false);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-brand-dark">Fotos hinzufügen</h2>
          <button
            onClick={onClose}
            disabled={uploading}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
            {error}
          </div>
        )}

        <div className="mb-6">
          <label className="block w-full p-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-brand-orange hover:bg-orange-50/50 transition-colors cursor-pointer">
            <input
              type="file"
              multiple
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={handleFileSelect}
              disabled={uploading}
              className="hidden"
            />
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-slate-600 font-semibold mb-1">
                {files.length > 0 ? `Weitere Fotos hinzufügen (${files.length} ausgewählt)` : 'Klicken Sie hier, um Fotos auszuwählen'}
              </p>
              <p className="text-slate-400 text-sm">JPEG, PNG, WebP (max 5MB pro Foto, max 10 gesamt)</p>
            </div>
          </label>
        </div>

        {files.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-semibold text-slate-700 mb-3">
              {files.length} Datei(en) ausgewählt:
            </p>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-700 truncate">{file.name}</p>
                      <p className="text-xs text-slate-400">{(file.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    disabled={uploading}
                    className="p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50"
                  >
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {uploading && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">Uploading...</span>
              <span className="text-sm text-slate-600">
                {progress.uploaded} / {progress.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-brand-orange h-2 rounded-full transition-all duration-300"
                style={{ width: `${(progress.uploaded / progress.total) * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={uploading}
            className="px-6 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 rounded-lg font-semibold transition-colors"
          >
            Abbrechen
          </button>
          <button
            onClick={handleUpload}
            disabled={uploading || files.length === 0}
            className="px-6 py-2 bg-brand-orange hover:bg-orange-600 disabled:opacity-50 text-white rounded-lg font-semibold transition-colors"
          >
            {uploading ? `${progress.uploaded}/${progress.total} wird hochgeladen...` : 'Hochladen'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoUploadModal;
