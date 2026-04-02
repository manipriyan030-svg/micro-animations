'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function RefreshIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.6 / speed;
  const id = 'ref-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={id}>
      <style>{`
        @keyframes ${id}-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .${id} { cursor: pointer; }
        .${id} .ref-group { transform-origin: center; transition: transform ${dur}s ease; }
        .${id}:hover .ref-group { animation: ${id}-spin ${dur}s ease; }
      `}</style>
      <g className="ref-group">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </g>
    </svg>
  );
}

export function generateRefreshCode(opts: CustomizeOptions) {
  const dur = 0.6 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="refresh-icon">
  <g class="ref-group">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </g>
</svg>`;
  const css = `@keyframes ref-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.refresh-icon { cursor: pointer; }
.refresh-icon .ref-group { transform-origin: center; transition: transform ${dur}s ease; }
.refresh-icon:hover .ref-group { animation: ref-spin ${dur}s ease; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
