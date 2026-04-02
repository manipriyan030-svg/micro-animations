'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function UploadIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.5 / speed;
  const id = 'ul-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={id}>
      <style>{`
        @keyframes ${id}-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .${id} { cursor: pointer; }
        .${id} .ul-arrow { transition: transform ${dur}s ease; }
        .${id}:hover .ul-arrow { animation: ${id}-bounce ${dur}s ease infinite; }
      `}</style>
      <g className="ul-arrow">
        <path d="M12 19v-10" />
        <polyline points="8 13 12 9 16 13" />
      </g>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </svg>
  );
}

export function generateUploadCode(opts: CustomizeOptions) {
  const dur = 0.5 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="upload-icon">
  <g class="ul-arrow">
    <path d="M12 19v-10"/>
    <polyline points="8 13 12 9 16 13"/>
  </g>
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
</svg>`;
  const css = `@keyframes ul-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
.upload-icon { cursor: pointer; }
.upload-icon .ul-arrow { transition: transform ${dur}s ease; }
.upload-icon:hover .ul-arrow { animation: ul-bounce ${dur}s ease infinite; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
