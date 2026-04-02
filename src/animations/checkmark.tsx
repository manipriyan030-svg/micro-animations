'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function Checkmark({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.6 / speed;
  const id = 'chk-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <style>{`
        @keyframes ${id}-circle {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes ${id}-check {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .${id}-c { stroke-dasharray: 60; animation: ${id}-circle ${dur}s ease forwards; }
        .${id}-k { stroke-dasharray: 20; stroke-dashoffset: 20; animation: ${id}-check ${dur * 0.5}s ease ${dur}s forwards; }
      `}</style>
      <circle className={`${id}-c`} cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
      <path className={`${id}-k`} d="M8 12l3 3 5-6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function generateCheckmarkCode(opts: CustomizeOptions) {
  const dur = 0.6 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none">
  <circle class="check-circle" cx="12" cy="12" r="9" stroke="${opts.color}" stroke-width="${opts.strokeWidth}"/>
  <path class="check-mark" d="M8 12l3 3 5-6" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  const css = `@keyframes draw-circle { 0% { stroke-dashoffset: 60; } 100% { stroke-dashoffset: 0; } }
@keyframes draw-check { 0% { stroke-dashoffset: 20; } 100% { stroke-dashoffset: 0; } }
.check-circle { stroke-dasharray: 60; animation: draw-circle ${dur}s ease forwards; }
.check-mark { stroke-dasharray: 20; stroke-dashoffset: 20; animation: draw-check ${(dur * 0.5).toFixed(2)}s ease ${dur}s forwards; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
