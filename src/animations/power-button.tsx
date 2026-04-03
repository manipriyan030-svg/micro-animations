'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function PowerButton({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [on, setOn] = useState(false);
  const dur = 0.3 / speed;
  const id = 'pw-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={on ? color : 'currentColor'} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => setOn(!on)} style={{ cursor: 'pointer', color }}>
      <style>{`.${id}-g{transition:all ${dur}s ease;transform-origin:12px 12px}`}</style>
      <g className={`${id}-g`} style={{ filter: on ? `drop-shadow(0 0 6px ${color})` : 'none' }}>
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>
      </g>
    </svg>
  );
}
export function generatePowerCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="power" onclick="this.classList.toggle('on')"><g class="pw"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></g></svg>`;
  const css = `.power{cursor:pointer}.pw{transition:all ${dur}s ease}.power.on .pw{filter:drop-shadow(0 0 6px ${opts.color})}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
