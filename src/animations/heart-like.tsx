'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function HeartLike({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [liked, setLiked] = useState(false);
  const dur = 0.3 / speed;
  const id = 'heart-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" onClick={() => setLiked(!liked)} style={{ cursor: 'pointer' }}>
      <style>{`
        @keyframes ${id}-pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        .${id}-heart { transform-origin: center; }
        .${id}-heart.active { animation: ${id}-pop ${dur}s ease; }
      `}</style>
      <path
        className={`${id}-heart ${liked ? 'active' : ''}`}
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        fill={liked ? color : 'none'}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        key={liked ? 'liked' : 'unliked'}
      />
    </svg>
  );
}

export function generateHeartCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" class="heart-toggle" onclick="this.classList.toggle('liked')">
  <path class="heart-path" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  const css = `@keyframes heart-pop { 0% { transform: scale(1); } 50% { transform: scale(1.3); } 100% { transform: scale(1); } }
.heart-path { transform-origin: center; transition: fill ${dur}s ease; }
.heart-toggle { cursor: pointer; }
.heart-toggle.liked .heart-path { fill: ${opts.color}; animation: heart-pop ${dur}s ease; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
