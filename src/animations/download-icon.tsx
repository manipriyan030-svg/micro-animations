'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function DownloadIcon({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.5 / speed;
  const id = 'dl-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={id}>
      <style>{`
        @keyframes ${id}-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
        .${id} { cursor: pointer; }
        .${id} .dl-arrow { transition: transform ${dur}s ease; }
        .${id}:hover .dl-arrow { animation: ${id}-bounce ${dur}s ease infinite; }
      `}</style>
      <g className="dl-arrow">
        <path d="M12 5v10" />
        <polyline points="8 11 12 15 16 11" />
      </g>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </svg>
  );
}

export function generateDownloadIconCode(opts: CustomizeOptions) {
  const dur = 0.5 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="download-icon">
  <g class="dl-arrow">
    <path d="M12 5v10"/>
    <polyline points="8 11 12 15 16 11"/>
  </g>
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
</svg>`;
  const css = `@keyframes dl-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(3px); } }
.download-icon { cursor: pointer; }
.download-icon:hover .dl-arrow { animation: dl-bounce ${dur}s ease infinite; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
