'use client';
import { useState } from 'react';
import { useCustomizerStore } from '@/stores/customizer-store';
import DownloadModal from './DownloadModal';

export default function ExportBar() {
  const [showDownload, setShowDownload] = useState(false);
  const { selectedAnimationId } = useCustomizerStore();

  if (!selectedAnimationId) return null;

  return (
    <>
      <button
        onClick={() => setShowDownload(true)}
        className="w-full rounded-xl bg-accent py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
      >
        Download Code
      </button>

      {showDownload && <DownloadModal onClose={() => setShowDownload(false)} />}
    </>
  );
}
