'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function TrashDelete({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.3 / speed;
  const id = 'trash-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={id}>
      <style>{`
        .${id} { cursor: pointer; }
        .${id} .lid { transition: transform ${dur}s ease; transform-origin: center 6px; }
        .${id}:hover .lid { transform: rotate(-15deg) translateY(-2px); }
        .${id} .can { transition: transform ${dur}s ease; }
        .${id}:hover .can { transform: translateX(1px); }
      `}</style>
      <g className="lid">
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </g>
      <g className="can">
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
      </g>
    </svg>
  );
}

export function generateTrashCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="trash-icon">
  <g class="lid"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></g>
  <g class="can"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></g>
</svg>`;
  const css = `.trash-icon { cursor: pointer; }
.trash-icon .lid { transition: transform ${dur}s ease; transform-origin: center 6px; }
.trash-icon:hover .lid { transform: rotate(-15deg) translateY(-2px); }
.trash-icon .can { transition: transform ${dur}s ease; }
.trash-icon:hover .can { transform: translateX(1px); }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
