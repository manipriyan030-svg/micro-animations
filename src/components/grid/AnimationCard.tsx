'use client';
import Link from 'next/link';
import { AnimationDef } from '@/animations/types';

interface AnimationCardProps {
  animation: AnimationDef;
}

export default function AnimationCard({ animation }: AnimationCardProps) {
  const Component = animation.component;

  return (
    <Link
      href={`/animation/${animation.id}`}
      className="card-glow group relative z-10 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-card-border bg-card-bg p-4 sm:p-6 transition-all duration-200 hover:border-accent/30 hover:bg-card-hover no-underline"
    >
      <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center overflow-visible" style={{ pointerEvents: 'none' }}>
        <Component color="var(--accent)" size={40} speed={1} strokeWidth={2} />
      </div>
      <span className="text-xs sm:text-sm text-foreground/80 group-hover:text-foreground transition-colors font-medium" style={{ pointerEvents: 'none' }}>{animation.name}</span>
      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted/50 font-medium" style={{ pointerEvents: 'none' }}>{animation.trigger}</span>
    </Link>
  );
}
