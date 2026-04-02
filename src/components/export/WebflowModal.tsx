'use client';

interface WebflowModalProps {
  onClose: () => void;
}

export default function WebflowModal({ onClose }: WebflowModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md mx-4 rounded-2xl border border-card-border bg-[#111] p-6" onClick={e => e.stopPropagation()}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Use in Webflow</h2>
          <button onClick={onClose} className="text-muted hover:text-white transition-colors">&times;</button>
        </div>

        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#4353ff">
                <path d="M24 0v24H0V0h24zM7.7 14.4c-.2.9-.8 3.2-.8 3.2h-.1s-1-3.8-1.2-4.5C5.4 12.2 4.5 12 3.7 12H2v.3l2 7.4c.2.5.5.8 1 .8.6 0 .9-.3 1.1-.9.2-.7 1-3.5 1-3.5h.1s.8 2.8 1 3.5c.2.6.5.9 1.1.9.5 0 .8-.3 1-.8l2-7.4V12h-1.7c-.8 0-1.7.2-1.9 1.1-.2.7-1.2 4.5-1.2 4.5h-.1s-.6-2.3-.8-3.2zM19.5 12c-2 0-3.5 1.6-3.5 4s1.5 4 3.5 4 3.5-1.6 3.5-4-1.5-4-3.5-4zm0 1.4c1.1 0 1.8.9 1.8 2.6s-.7 2.6-1.8 2.6-1.8-.9-1.8-2.6.7-2.6 1.8-2.6z"/>
              </svg>
            </div>
          </div>

          <p className="mb-4 text-sm font-medium">Webflow Designer Extension</p>
          <p className="mb-6 text-sm text-muted">
            This animation is available directly inside the Webflow Designer. Open your site in Webflow, launch the <strong>Micro Animations</strong> app from the Apps panel, and insert animations with one click — no tokens or IDs needed.
          </p>

          <div className="space-y-3 text-left mb-6">
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">1</span>
              <p className="text-sm text-muted">Open your site in the Webflow Designer</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">2</span>
              <p className="text-sm text-muted">Click <strong>Apps</strong> in the left panel and open <strong>Micro Animations</strong></p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">3</span>
              <p className="text-sm text-muted">Browse, customize, and click <strong>Insert to Page</strong> or <strong>Save as Asset</strong></p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full rounded-xl bg-[#4353ff] py-3 text-sm font-semibold text-white transition-all hover:bg-[#3644e0]"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
