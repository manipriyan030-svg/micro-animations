'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function BookmarkSave({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [saved, setSaved] = useState(false);
  const dur = 0.3 / speed;
  const id = 'bm-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" onClick={() => setSaved(!saved)} style={{ cursor: 'pointer' }}>
      <style>{`
        @keyframes ${id}-bounce {
          0% { transform: scale(1); }
          40% { transform: scale(1.2); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .${id}-bm { transform-origin: center; }
        .${id}-bm.active { animation: ${id}-bounce ${dur}s ease; }
      `}</style>
      <path
        className={`${id}-bm ${saved ? 'active' : ''}`}
        d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
        fill={saved ? color : 'none'}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        key={saved ? 'on' : 'off'}
      />
    </svg>
  );
}

export function generateBookmarkCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" class="bookmark-toggle" onclick="this.classList.toggle('saved')">
  <path class="bm-path" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  const css = `@keyframes bm-bounce { 0% { transform: scale(1); } 40% { transform: scale(1.2); } 70% { transform: scale(0.95); } 100% { transform: scale(1); } }
.bm-path { transform-origin: center; transition: fill ${dur}s ease; }
.bookmark-toggle { cursor: pointer; }
.bookmark-toggle.saved .bm-path { fill: ${opts.color}; animation: bm-bounce ${dur}s ease; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
