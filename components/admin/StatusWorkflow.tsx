import React from 'react';

type EstimationStatus =
  | 'estimated'
  | 'appointment_booked'
  | 'converted_to_sale'
  | 'sold'
  | 'rejected'
  | 'archived';

interface StatusWorkflowProps {
  currentStatus: EstimationStatus;
  estimationId: string;
  onStatusChange: (newStatus: EstimationStatus, additionalData?: any) => Promise<void>;
}

const StatusWorkflow: React.FC<StatusWorkflowProps> = ({
  currentStatus,
  estimationId,
  onStatusChange,
}) => {
  const [showSoldModal, setShowSoldModal] = React.useState(false);
  const [showRejectModal, setShowRejectModal] = React.useState(false);
  const [soldData, setSoldData] = React.useState({
    final_sale_price: '',
    commission_percentage: '10',
  });
  const [rejectReason, setRejectReason] = React.useState('');
  const [updating, setUpdating] = React.useState(false);

  // Status lifecycle from migration 005
  const availableTransitions: Record<EstimationStatus, EstimationStatus[]> = {
    estimated: ['appointment_booked', 'converted_to_sale', 'rejected', 'archived'],
    appointment_booked: ['converted_to_sale', 'rejected', 'archived'],
    converted_to_sale: ['sold', 'archived'],
    sold: ['archived'],
    rejected: ['archived'],
    archived: [],
  };

  const statusLabels: Record<EstimationStatus, string> = {
    estimated: 'Bewertet',
    appointment_booked: 'Termin gebucht',
    converted_to_sale: 'Verkauf in Bearbeitung',
    sold: 'Verkauft',
    rejected: 'Abgelehnt',
    archived: 'Archiviert',
  };

  const statusColors: Record<EstimationStatus, string> = {
    estimated: 'bg-blue-100 text-blue-800',
    appointment_booked: 'bg-purple-100 text-purple-800',
    converted_to_sale: 'bg-yellow-100 text-yellow-800',
    sold: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
    archived: 'bg-gray-100 text-gray-800',
  };

  const handleTransition = async (newStatus: EstimationStatus) => {
    if (newStatus === 'sold') {
      setShowSoldModal(true);
      return;
    }
    if (newStatus === 'rejected') {
      setShowRejectModal(true);
      return;
    }

    setUpdating(true);
    try {
      await onStatusChange(newStatus);
    } finally {
      setUpdating(false);
    }
  };

  const handleSoldSubmit = async () => {
    const price = parseFloat(soldData.final_sale_price);
    const commission = parseFloat(soldData.commission_percentage);

    if (isNaN(price) || price <= 0) {
      alert('Bitte geben Sie einen gültigen Verkaufspreis ein');
      return;
    }
    if (isNaN(commission) || commission < 0 || commission > 100) {
      alert('Bitte geben Sie eine gültige Provision ein (0-100%)');
      return;
    }

    setUpdating(true);
    try {
      await onStatusChange('sold', {
        final_sale_price: price,
        commission_percentage: commission,
      });
      setShowSoldModal(false);
    } finally {
      setUpdating(false);
    }
  };

  const handleRejectSubmit = async () => {
    if (!rejectReason.trim()) {
      alert('Bitte geben Sie einen Ablehnungsgrund ein');
      return;
    }

    setUpdating(true);
    try {
      await onStatusChange('rejected', { rejection_reason: rejectReason });
      setShowRejectModal(false);
    } finally {
      setUpdating(false);
    }
  };

  const transitions = availableTransitions[currentStatus] || [];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm font-semibold text-slate-600">Aktueller Status:</span>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[currentStatus]}`}>
          {statusLabels[currentStatus]}
        </span>
      </div>

      {transitions.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-slate-600 mb-2">Verfügbare Aktionen:</p>
          <div className="flex flex-wrap gap-2">
            {transitions.map((status) => (
              <button
                key={status}
                onClick={() => handleTransition(status)}
                disabled={updating}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors disabled:opacity-50 ${
                  status === 'sold'
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : status === 'rejected'
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : status === 'archived'
                    ? 'bg-gray-400 hover:bg-gray-500 text-white'
                    : 'bg-brand-orange hover:bg-orange-600 text-white'
                }`}
              >
                {status === 'appointment_booked' && '📅 Als Termin markieren'}
                {status === 'converted_to_sale' && '🔄 Verkauf in Bearbeitung'}
                {status === 'sold' && '✅ Als verkauft markieren'}
                {status === 'rejected' && '❌ Ablehnen'}
                {status === 'archived' && '📦 Archivieren'}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sold Modal */}
      {showSoldModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowSoldModal(false)}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-black text-slate-800 mb-4">Als verkauft markieren</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Endgültiger Verkaufspreis (€)</label>
                <input
                  type="number"
                  value={soldData.final_sale_price}
                  onChange={(e) => setSoldData((prev) => ({ ...prev, final_sale_price: e.target.value }))}
                  min="0"
                  step="100"
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Provision (%)</label>
                <input
                  type="number"
                  value={soldData.commission_percentage}
                  onChange={(e) => setSoldData((prev) => ({ ...prev, commission_percentage: e.target.value }))}
                  min="0"
                  max="100"
                  step="0.5"
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none"
                />
              </div>
              {soldData.final_sale_price && soldData.commission_percentage && (
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Provision:</strong>{' '}
                    {(
                      (parseFloat(soldData.final_sale_price) * parseFloat(soldData.commission_percentage)) /
                      100
                    ).toFixed(2)}{' '}
                    €
                  </p>
                </div>
              )}
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowSoldModal(false)}
                disabled={updating}
                className="px-6 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 rounded-lg font-semibold transition-colors"
              >
                Abbrechen
              </button>
              <button
                onClick={handleSoldSubmit}
                disabled={updating}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white rounded-lg font-semibold transition-colors"
              >
                {updating ? 'Speichern...' : 'Speichern'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowRejectModal(false)}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-black text-slate-800 mb-4">Bewertung ablehnen</h3>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Ablehnungsgrund</label>
              <textarea
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                rows={4}
                required
                placeholder="Bitte geben Sie den Grund für die Ablehnung ein..."
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-0 outline-none resize-none"
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowRejectModal(false)}
                disabled={updating}
                className="px-6 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 rounded-lg font-semibold transition-colors"
              >
                Abbrechen
              </button>
              <button
                onClick={handleRejectSubmit}
                disabled={updating}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white rounded-lg font-semibold transition-colors"
              >
                {updating ? 'Speichern...' : 'Ablehnen'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusWorkflow;
