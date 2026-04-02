'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function StarFavorite({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [starred, setStarred] = useState(false);
  const dur = 0.3 / speed;
  const id = 'star-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" onClick={() => setStarred(!starred)} style={{ cursor: 'pointer' }}>
      <style>{`
        @keyframes ${id}-pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        .${id}-star { transform-origin: center; }
        .${id}-star.active { animation: ${id}-pop ${dur}s ease; }
      `}</style>
      <polygon
        className={`${id}-star ${starred ? 'active' : ''}`}
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill={starred ? color : 'none'}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        key={starred ? 'on' : 'off'}
      />
    </svg>
  );
}

export function generateStarCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" class="star-toggle" onclick="this.classList.toggle('starred')">
  <polygon class="star-path" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  const css = `@keyframes star-pop { 0% { transform: scale(1); } 50% { transform: scale(1.3); } 100% { transform: scale(1); } }
.star-path { transform-origin: center; transition: fill ${dur}s ease; }
.star-toggle { cursor: pointer; }
.star-toggle.starred .star-path { fill: ${opts.color}; animation: star-pop ${dur}s ease; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
