'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function ThumbsUp({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [liked, setLiked] = useState(false);
  const dur = 0.3 / speed;
  const id = 'thu-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={liked ? color : 'none'} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => setLiked(!liked)} style={{ cursor: 'pointer' }}>
      <style>{`.${id}-g{transition:transform ${dur}s ease}.${id}-g:active{transform:scale(1.2)}`}</style>
      <g className={`${id}-g`} style={{ transformOrigin: '12px 12px', transform: liked ? 'scale(1.1)' : 'scale(1)', transition: `transform ${dur}s ease` }}>
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
      </g>
    </svg>
  );
}
export function generateThumbsUpCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="thumb" onclick="this.classList.toggle('liked')"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`;
  const css = `.thumb{cursor:pointer;transition:transform ${dur}s ease}.thumb.liked{fill:${opts.color};transform:scale(1.1)}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
