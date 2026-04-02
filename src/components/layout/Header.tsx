'use client';
import { useCustomizerStore } from '@/stores/customizer-store';

export default function Header() {
  const { selectedAnimationId, selectAnimation } = useCustomizerStore();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <button onClick={() => selectAnimation(null)} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00e5a0" strokeWidth="2" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Fresh<span className="text-accent">Boost</span>
          </span>
        </button>
        <div className="flex items-center gap-4">
          {selectedAnimationId && (
            <button
              onClick={() => selectAnimation(null)}
              className="text-sm text-muted hover:text-white transition-colors"
            >
              &larr; Back to all
            </button>
          )}
          <span className="text-xs text-muted/60 hidden sm:inline">Micro Animations</span>
        </div>
      </div>
    </header>
  );
}
