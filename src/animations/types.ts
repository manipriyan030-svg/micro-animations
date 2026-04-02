import { ComponentType } from 'react';

export interface CustomizeOptions {
  color: string;
  size: number;
  speed: number;
  strokeWidth: number;
}

export interface AnimationProps {
  color?: string;
  size?: number;
  speed?: number;
  strokeWidth?: number;
  isPlaying?: boolean;
}

export type AnimationCategory = 'navigation' | 'feedback' | 'loading' | 'action' | 'toggle';
export type AnimationTrigger = 'hover' | 'click' | 'auto-loop' | 'auto-play';

export interface AnimationDef {
  id: string;
  name: string;
  category: AnimationCategory;
  trigger: AnimationTrigger;
  component: ComponentType<AnimationProps>;
  generateCode: (opts: CustomizeOptions) => { css: string; svg: string; html: string };
}
