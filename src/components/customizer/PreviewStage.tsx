'use client';
import { AnimationDef } from '@/animations/types';

interface PreviewStageProps {
  animation: AnimationDef;
  color: string;
  size: number;
  speed: number;
  strokeWidth: number;
}

export default function PreviewStage({ animation, color, size, speed, strokeWidth }: PreviewStageProps) {
  const Component = animation.component;

  return (
    <div className="flex items-center justify-center">
      <Component color={color} size={size} speed={speed} strokeWidth={strokeWidth} />
    </div>
  );
}
