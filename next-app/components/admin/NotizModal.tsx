'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface NotizModalProps {
  estimationId: string;
  estimationLabel: string;
  onClose: () => void;
  onNoteSaved?: (estimationId: string) => void;
}

export default function NotizModal({ estimationId, estimationLabel, onClose, onNoteSaved }: NotizModalProps) {
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNote, setHasNote] = useState(false);
  const [draft, setDraft] = useState('');

  useEffect(() => {
    async function loadNote() {
      const { data } = await supabase
        .from('lead_notes')
        .select('content')
        .eq('estimation_id', estimationId)
        .maybeSingle();
      if (data) {
        setContent(data.content);
        setHasNote(true);
      }
      setIsLoading(false);
    }
    loadNote();
  }, [estimationId]);

  function handleStartEdit() {
    setDraft(content);
    setIsEditing(true);
  }

  function handleCancel() {
    setDraft('');
    setIsEditing(false);
  }

  async function handleSave() {
    setIsSaving(true);
    const { error } = await supabase
      .from('lead_notes')
      .upsert(
        { estimation_id: estimationId, content: draft },
        { onConflict: 'estimation_id' }
      );
    if (!error) {
      setContent(draft);
      setHasNote(true);
      setIsEditing(false);
      onNoteSaved?.(estimationId);
    }
    setIsSaving(false);
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Notiz</h2>
            <p className="text-xs text-slate-500 mt-0.5 truncate max-w-xs">{estimationLabel}</p>
          </div>
          <div className="flex items-center gap-2">
            {!isEditing && (
              <button
                type="button"
                onClick={handleStartEdit}
                className="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Bearbeiten
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              aria-label="Schließen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          {isLoading ? (
            <div className="text-center py-8 text-slate-400 text-sm">Lade Notiz…</div>
          ) : isEditing ? (
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={8}
              placeholder="Notiz eingeben…"
              className="w-full border border-gray-300 rounded-xl p-3 text-sm text-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
              autoFocus
            />
          ) : (
            <div className="bg-slate-50 rounded-xl p-4 min-h-[120px] text-sm text-slate-700 whitespace-pre-wrap">
              {hasNote && content ? content : (
                <span className="text-slate-400 italic">Noch keine Notiz vorhanden.</span>
              )}
            </div>
          )}
        </div>

        {/* Footer (edit mode only) */}
        {isEditing && (
          <div className="flex items-center justify-end gap-2 px-5 pb-5">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-bold transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white rounded-xl text-sm font-bold transition-colors"
            >
              {isSaving ? 'Speichere…' : 'Speichern'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
