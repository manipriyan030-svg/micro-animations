'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function BellAlert({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.5 / speed;
  const id = 'bell-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <style>{`
        @keyframes ${id}-swing {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(12deg); }
          30% { transform: rotate(-10deg); }
          45% { transform: rotate(8deg); }
          60% { transform: rotate(-6deg); }
          75% { transform: rotate(3deg); }
        }
        .${id}-bell { animation: ${id}-swing ${dur * 2}s ease-in-out infinite; transform-origin: 12px 2px; }
      `}</style>
      <g className={`${id}-bell`}>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </g>
    </svg>
  );
}

export function generateBellCode(opts: CustomizeOptions) {
  const dur = 1 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
  <g class="bell-icon">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </g>
</svg>`;
  const css = `@keyframes bell-swing {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(12deg); }
  30% { transform: rotate(-10deg); }
  45% { transform: rotate(8deg); }
  60% { transform: rotate(-6deg); }
  75% { transform: rotate(3deg); }
}
.bell-icon { animation: bell-swing ${dur}s ease-in-out infinite; transform-origin: 12px 2px; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
