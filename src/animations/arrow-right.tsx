'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function ArrowRight({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.4 / speed;
  const id = 'ar-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={id}>
      <style>{`
        .${id} { cursor: pointer; }
        .${id} .arrow-group { transition: transform ${dur}s ease; }
        .${id}:hover .arrow-group { transform: translateX(3px); }
      `}</style>
      <g className="arrow-group">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </g>
    </svg>
  );
}

export function generateArrowRightCode(opts: CustomizeOptions) {
  const dur = 0.4 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="arrow-right">
  <g class="arrow-group">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </g>
</svg>`;
  const css = `.arrow-right { cursor: pointer; }
.arrow-right .arrow-group { transition: transform ${dur}s ease; }
.arrow-right:hover .arrow-group { transform: translateX(3px); }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
