'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function EditPencil({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.5 / speed;
  const id = 'pen-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={id}>
      <style>{`
        @keyframes ${id}-write {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(1px, -1px) rotate(-2deg); }
          50% { transform: translate(-1px, -1px) rotate(2deg); }
          75% { transform: translate(1px, 0) rotate(-1deg); }
        }
        .${id} { cursor: pointer; }
        .${id} .pen-group { transform-origin: bottom right; transition: transform ${dur}s ease; }
        .${id}:hover .pen-group { animation: ${id}-write ${dur}s ease infinite; }
      `}</style>
      <g className="pen-group">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </g>
    </svg>
  );
}

export function generateEditCode(opts: CustomizeOptions) {
  const dur = 0.5 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="edit-pencil">
  <g class="pen-group">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
  </g>
</svg>`;
  const css = `@keyframes pen-write { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(1px, -1px) rotate(-2deg); } 50% { transform: translate(-1px, -1px) rotate(2deg); } 75% { transform: translate(1px, 0) rotate(-1deg); } }
.edit-pencil { cursor: pointer; }
.edit-pencil .pen-group { transform-origin: bottom right; transition: transform ${dur}s ease; }
.edit-pencil:hover .pen-group { animation: pen-write ${dur}s ease infinite; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
