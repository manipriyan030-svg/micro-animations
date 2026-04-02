'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function LoadingBar({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 1.5 / speed;
  const id = 'lbar-' + Math.random().toString(36).slice(2, 6);
  const h = Math.max(4, strokeWidth * 2);

  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <style>{`
        @keyframes ${id}-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .${id}-track { fill: ${color}; opacity: 0.15; rx: ${h / 2}; }
        .${id}-bar { fill: ${color}; animation: ${id}-slide ${dur}s ease-in-out infinite; rx: ${h / 2}; }
      `}</style>
      <rect className={`${id}-track`} x="4" y={24 - h / 2} width="40" height={h} rx={h / 2} />
      <rect className={`${id}-bar`} x="4" y={24 - h / 2} width="20" height={h} rx={h / 2} />
    </svg>
  );
}

export function generateLoadingBarCode(opts: CustomizeOptions) {
  const dur = 1.5 / opts.speed;
  const h = Math.max(4, opts.strokeWidth * 2);
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 48 48">
  <rect class="bar-track" x="4" y="${24 - h / 2}" width="40" height="${h}" rx="${h / 2}"/>
  <rect class="bar-fill" x="4" y="${24 - h / 2}" width="20" height="${h}" rx="${h / 2}"/>
</svg>`;
  const css = `@keyframes bar-slide { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
.bar-track { fill: ${opts.color}; opacity: 0.15; }
.bar-fill { fill: ${opts.color}; animation: bar-slide ${dur}s ease-in-out infinite; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
