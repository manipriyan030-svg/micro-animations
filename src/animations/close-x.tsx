'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function CloseX({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.3 / speed;
  const id = 'cx-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" className={id}>
      <style>{`
        .${id} { cursor: pointer; transition: transform ${dur}s ease; }
        .${id}:hover { transform: rotate(90deg); }
      `}</style>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

export function generateCloseXCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" class="close-x">
  <line x1="6" y1="6" x2="18" y2="18"/>
  <line x1="18" y1="6" x2="6" y2="18"/>
</svg>`;
  const css = `.close-x { cursor: pointer; transition: transform ${dur}s ease; }
.close-x:hover { transform: rotate(90deg); }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
