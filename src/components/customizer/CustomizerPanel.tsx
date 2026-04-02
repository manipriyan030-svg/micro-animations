'use client';
import { useCustomizerStore } from '@/stores/customizer-store';
import { animations } from '@/animations';
import PreviewStage from './PreviewStage';
import ExportBar from '../export/ExportBar';

export default function CustomizerPanel() {
  const { selectedAnimationId, color, size, speed, strokeWidth, setColor, setSize, setSpeed, setStrokeWidth, reset } = useCustomizerStore();

  const anim = animations.find(a => a.id === selectedAnimationId);
  if (!anim) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-12">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_340px]">
        {/* Preview */}
        <div className="preview-box flex flex-col items-center justify-center rounded-2xl border border-card-border bg-card-bg p-8 sm:p-12 min-h-[280px] sm:min-h-[400px] overflow-visible">
          <PreviewStage animation={anim} color={color} size={size} speed={speed} strokeWidth={strokeWidth} />
          <p className="mt-6 text-lg font-semibold">{anim.name}</p>
          <p className="mt-1 text-sm text-muted capitalize">{anim.trigger} &middot; {anim.category}</p>
          {anim.trigger === 'click' && (
            <p className="mt-2 text-xs text-muted/50">Click the animation to interact</p>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-6 rounded-2xl border border-card-border bg-card-bg p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Customize</h3>

          {/* Color */}
          <div>
            <label className="mb-2 flex items-center justify-between text-sm">
              <span>Color</span>
              <span className="text-xs text-muted font-mono">{color}</span>
            </label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <input type="color" value={color} onChange={e => setColor(e.target.value)} />
                <input
                  type="text"
                  value={color}
                  onChange={e => {
                    const val = e.target.value;
                    if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) setColor(val);
                  }}
                  className="flex-1 rounded-lg border border-border-subtle bg-surface-2 px-3 py-1.5 text-sm font-mono outline-none focus:border-accent transition-colors"
                  placeholder="#EB742E"
                />
              </div>
              <div className="flex gap-1.5">
                {['#EB742E', '#FF4F00', '#3b82f6', '#ef4444', '#f59e0b', '#a855f7', '#ec4899', '#14b8a6', '#8b5cf6', '#1a1a1a'].map(c => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`h-6 w-6 rounded-full border-2 transition-transform hover:scale-110 ${color === c ? 'border-foreground scale-110' : 'border-transparent'}`}
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Size */}
          <div>
            <label className="mb-2 flex items-center justify-between text-sm">
              <span>Size</span>
              <span className="text-xs text-muted font-mono">{size}px</span>
            </label>
            <input type="range" min="16" max="128" value={size} onChange={e => setSize(Number(e.target.value))} />
          </div>

          {/* Speed */}
          <div>
            <label className="mb-2 flex items-center justify-between text-sm">
              <span>Speed</span>
              <span className="text-xs text-muted font-mono">{speed.toFixed(1)}x</span>
            </label>
            <input type="range" min="0.25" max="3" step="0.25" value={speed} onChange={e => setSpeed(Number(e.target.value))} />
          </div>

          {/* Stroke Width */}
          <div>
            <label className="mb-2 flex items-center justify-between text-sm">
              <span>Stroke Width</span>
              <span className="text-xs text-muted font-mono">{strokeWidth}px</span>
            </label>
            <input type="range" min="1" max="6" step="0.5" value={strokeWidth} onChange={e => setStrokeWidth(Number(e.target.value))} />
          </div>

          {/* Reset */}
          <button onClick={reset} className="text-xs text-muted hover:text-foreground transition-colors">
            Reset to defaults
          </button>

          <div className="mt-auto">
            <ExportBar />
          </div>
        </div>
      </div>
    </div>
  );
}
