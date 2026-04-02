'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function SpinnerRing({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 1.5 / speed;
  const id = 'sring-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <style>{`
        @keyframes ${id}-spin { 100% { transform: rotate(360deg); } }
        @keyframes ${id}-dash {
          0% { stroke-dasharray: 1, 60; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 30, 60; stroke-dashoffset: -10; }
          100% { stroke-dasharray: 1, 60; stroke-dashoffset: -40; }
        }
        .${id}-ring { animation: ${id}-spin ${dur}s linear infinite; transform-origin: center; }
        .${id}-path { animation: ${id}-dash ${dur}s ease-in-out infinite; }
      `}</style>
      <g className={`${id}-ring`}>
        <circle className={`${id}-path`} cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function generateSpinnerRingCode(opts: CustomizeOptions) {
  const dur = 1.5 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none">
  <g class="spinner-ring">
    <circle class="spinner-path" cx="12" cy="12" r="9" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round"/>
  </g>
</svg>`;
  const css = `@keyframes spin { 100% { transform: rotate(360deg); } }
@keyframes dash {
  0% { stroke-dasharray: 1, 60; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 30, 60; stroke-dashoffset: -10; }
  100% { stroke-dasharray: 1, 60; stroke-dashoffset: -40; }
}
.spinner-ring { animation: spin ${dur}s linear infinite; transform-origin: center; }
.spinner-path { animation: dash ${dur}s ease-in-out infinite; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
