'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function ExpandArrows({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [expanded, setExpanded] = useState(false);
  const dur = 0.3 / speed;
  const id = 'exp-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
      <style>{`.${id}-g{transition:all ${dur}s ease}`}</style>
      {expanded ? (<><polyline className={`${id}-g`} points="4 14 10 14 10 20"/><polyline className={`${id}-g`} points="20 10 14 10 14 4"/><line className={`${id}-g`} x1="14" y1="10" x2="21" y2="3"/><line className={`${id}-g`} x1="3" y1="21" x2="10" y2="14"/></>) : (<><polyline className={`${id}-g`} points="15 3 21 3 21 9"/><polyline className={`${id}-g`} points="9 21 3 21 3 15"/><line className={`${id}-g`} x1="21" y1="3" x2="14" y2="10"/><line className={`${id}-g`} x1="3" y1="21" x2="10" y2="14"/></>)}
    </svg>
  );
}
export function generateExpandCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="expand-icon" onclick="this.classList.toggle('collapsed')"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`;
  const css = `.expand-icon{cursor:pointer}.expand-icon *{transition:all ${dur}s ease}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
