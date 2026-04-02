'use client';
import { AnimationDef } from '@/animations/types';
import { useCustomizerStore } from '@/stores/customizer-store';

interface AnimationCardProps {
  animation: AnimationDef;
}

export default function AnimationCard({ animation }: AnimationCardProps) {
  const selectAnimation = useCustomizerStore(s => s.selectAnimation);
  const Component = animation.component;

  const handleClick = () => {
    selectAnimation(animation.id);
    // Also update URL as fallback
    const url = new URL(window.location.href);
    url.searchParams.set('animation', animation.id);
    window.history.pushState({}, '', url.toString());
  };

  return (
    <a
      href={`?animation=${animation.id}`}
      onClick={(e) => { e.preventDefault(); handleClick(); }}
      className="card-glow group relative z-10 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-card-border bg-card-bg p-6 transition-all duration-200 hover:border-accent/20 hover:bg-card-hover no-underline"
    >
      <div className="flex h-20 w-20 items-center justify-center" style={{ pointerEvents: 'none' }}>
        <Component color="#00e5a0" size={40} speed={1} strokeWidth={2} />
      </div>
      <span className="text-sm text-muted group-hover:text-foreground transition-colors" style={{ pointerEvents: 'none' }}>{animation.name}</span>
      <span className="text-[10px] uppercase tracking-wider text-muted/40" style={{ pointerEvents: 'none' }}>{animation.trigger}</span>
    </a>
  );
}
