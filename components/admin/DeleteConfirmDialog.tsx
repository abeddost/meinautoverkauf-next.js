import React from 'react';

interface DeleteConfirmDialogProps {
  estimationId: string;
  vehicleInfo: string;
  photoCount: number;
  appointmentCount: number;
  onConfirm: (hardDelete: boolean) => Promise<void>;
  onCancel: () => void;
}

const DeleteConfirmDialog: React.FC<DeleteConfirmDialogProps> = ({
  estimationId,
  vehicleInfo,
  photoCount,
  appointmentCount,
  onConfirm,
  onCancel,
}) => {
  const [deleting, setDeleting] = React.useState(false);

  const handleDelete = async (hardDelete: boolean) => {
    setDeleting(true);
    try {
      await onConfirm(hardDelete);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onCancel}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-800 mb-2">Bewertung löschen?</h3>
            <p className="text-slate-600 text-sm mb-4">
              <strong>{vehicleInfo}</strong>
            </p>
            <div className="text-sm text-slate-600 space-y-1">
              {photoCount > 0 && <p>• {photoCount} Foto(s) werden entfernt</p>}
              {appointmentCount > 0 && <p>• {appointmentCount} Termin(e) werden entfernt</p>}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl mb-6">
          <p className="text-sm text-slate-700 font-semibold mb-3">Wählen Sie eine Option:</p>
          <div className="space-y-2">
            <button
              onClick={() => handleDelete(false)}
              disabled={deleting}
              className="w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white rounded-lg font-semibold text-sm transition-colors text-left"
            >
              <div className="font-bold">Archivieren (Empfohlen)</div>
              <div className="text-xs text-amber-100">Status wird auf 'archived' gesetzt, Daten bleiben erhalten</div>
            </button>
            <button
              onClick={() => handleDelete(true)}
              disabled={deleting}
              className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white rounded-lg font-semibold text-sm transition-colors text-left"
            >
              <div className="font-bold">Permanent Löschen</div>
              <div className="text-xs text-red-200">Alle Daten werden unwiderruflich gelöscht</div>
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            disabled={deleting}
            className="px-6 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 rounded-lg font-semibold transition-colors"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmDialog;
