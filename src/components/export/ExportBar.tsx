'use client';
import { useState } from 'react';
import { useCustomizerStore } from '@/stores/customizer-store';
import DownloadModal from './DownloadModal';
import WebflowModal from './WebflowModal';

export default function ExportBar() {
  const [showDownload, setShowDownload] = useState(false);
  const [showWebflow, setShowWebflow] = useState(false);
  const { selectedAnimationId } = useCustomizerStore();

  if (!selectedAnimationId) return null;

  return (
    <>
      <div className="flex gap-3">
        <button
          onClick={() => setShowDownload(true)}
          className="flex-1 rounded-xl bg-accent py-3 text-sm font-semibold text-black transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
        >
          Download
        </button>
        <button
          onClick={() => setShowWebflow(true)}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
        >
          Webflow
        </button>
      </div>

      {showDownload && <DownloadModal onClose={() => setShowDownload(false)} />}
      {showWebflow && <WebflowModal onClose={() => setShowWebflow(false)} />}
    </>
  );
}
