'use client';
import { useState } from 'react';
import { useCustomizerStore } from '@/stores/customizer-store';
import { generateAnimationCode, generateJsonExport, downloadFile, downloadHtmlFile } from '@/lib/code-generator';

interface DownloadModalProps {
  onClose: () => void;
}

type Tab = 'svg' | 'css' | 'html' | 'json';

export default function DownloadModal({ onClose }: DownloadModalProps) {
  const { selectedAnimationId, color, size, speed, strokeWidth } = useCustomizerStore();
  const [tab, setTab] = useState<Tab>('svg');
  const [copied, setCopied] = useState(false);

  const opts = { color, size, speed, strokeWidth };
  const code = selectedAnimationId ? generateAnimationCode(selectedAnimationId, opts) : null;
  const jsonCode = selectedAnimationId ? generateJsonExport(selectedAnimationId, opts) : null;

  if (!code || !jsonCode) return null;

  const codeMap: Record<Tab, string> = {
    svg: code.svg,
    css: code.css,
    html: code.html,
    json: jsonCode,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeMap[tab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (tab === 'svg') {
      downloadFile(code.svg, `${selectedAnimationId}.svg`);
    } else if (tab === 'html') {
      downloadHtmlFile(code.svg, code.css, `${selectedAnimationId}.html`);
    } else if (tab === 'json') {
      downloadFile(jsonCode, `${selectedAnimationId}.json`, 'application/json');
    } else {
      downloadFile(code.css, `${selectedAnimationId}.css`, 'text/css');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-2xl mx-4 rounded-2xl border border-card-border bg-[#111] p-6" onClick={e => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Export Code</h2>
          <button onClick={onClose} className="text-muted hover:text-white transition-colors text-xl">&times;</button>
        </div>

        {/* Tabs */}
        <div className="mb-4 flex gap-1 rounded-lg bg-white/5 p-1">
          {(['svg', 'css', 'html', 'json'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 rounded-md py-1.5 text-sm uppercase font-medium transition-all ${
                tab === t ? 'bg-accent text-black' : 'text-muted hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Code */}
        <div className="relative rounded-xl bg-black/50 p-4 overflow-auto max-h-80">
          <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap break-words">{codeMap[tab]}</pre>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-3">
          <button
            onClick={handleCopy}
            className="flex-1 rounded-xl border border-white/10 py-2.5 text-sm font-medium transition-all hover:bg-white/5"
          >
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 rounded-xl bg-accent py-2.5 text-sm font-semibold text-black transition-all hover:bg-accent/90"
          >
            Download .{tab}
          </button>
        </div>
      </div>
    </div>
  );
}
