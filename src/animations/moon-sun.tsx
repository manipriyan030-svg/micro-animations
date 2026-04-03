'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function MoonSun({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [isSun, setIsSun] = useState(false);
  const dur = 0.4 / speed;
  const id = 'ms-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => setIsSun(!isSun)} style={{ cursor: 'pointer' }}>
      <style>{`.${id}-g{transition:transform ${dur}s ease;transform-origin:12px 12px}`}</style>
      <g className={`${id}-g`} style={{ transform: isSun ? 'rotate(180deg)' : 'rotate(0)' }}>
        {isSun ? (<><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>) : (<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>)}
      </g>
    </svg>
  );
}
export function generateMoonSunCode(opts: CustomizeOptions) {
  const dur = 0.4 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="moonsun" onclick="this.classList.toggle('sun')"><g class="ms-g"><path class="moon" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></g></svg>`;
  const css = `.moonsun{cursor:pointer}.ms-g{transition:transform ${dur}s ease;transform-origin:12px 12px}.moonsun.sun .ms-g{transform:rotate(180deg)}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
