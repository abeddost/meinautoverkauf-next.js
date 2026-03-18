'use client';

import React from 'react';

type Verkaufsstatus = 'Pending' | 'Accepted' | 'Rejected';

interface VerkaufsstatusChangerProps {
  currentStatus: Verkaufsstatus;
  estimationId: string;
  onStatusChange: (newStatus: Verkaufsstatus) => Promise<void>;
}

const VerkaufsstatusChanger: React.FC<VerkaufsstatusChangerProps> = ({
  currentStatus,
  estimationId,
  onStatusChange,
}) => {
  const [updating, setUpdating] = React.useState(false);

  const statusOptions: { value: Verkaufsstatus; label: string; color: string; emoji: string }[] = [
    { value: 'Pending', label: 'Ausstehend', color: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200', emoji: '⏳' },
    { value: 'Accepted', label: 'Angenommen', color: 'bg-green-100 text-green-800 hover:bg-green-200', emoji: '✅' },
    { value: 'Rejected', label: 'Abgelehnt', color: 'bg-red-100 text-red-800 hover:bg-red-200', emoji: '❌' },
  ];

  const handleChange = async (newStatus: Verkaufsstatus) => {
    if (newStatus === currentStatus) return;

    setUpdating(true);
    try {
      await onStatusChange(newStatus);
    } finally {
      setUpdating(false);
    }
  };

  const currentOption = statusOptions.find((opt) => opt.value === currentStatus);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm font-semibold text-slate-600">Verkaufsstatus:</span>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            currentStatus === 'Pending'
              ? 'bg-yellow-100 text-yellow-800'
              : currentStatus === 'Accepted'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {currentOption?.emoji} {currentOption?.label}
        </span>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-600 mb-2">Status ändern:</p>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleChange(option.value)}
              disabled={updating || option.value === currentStatus}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                option.value === currentStatus
                  ? option.color.replace('hover:', '') + ' ring-2 ring-offset-2 ring-brand-orange'
                  : option.color
              }`}
            >
              {option.emoji} {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerkaufsstatusChanger;
