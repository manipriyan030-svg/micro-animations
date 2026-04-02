'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function VolumeMute({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [muted, setMuted] = useState(false);
  const dur = 0.3 / speed;
  const id = 'vol-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => setMuted(!muted)} style={{ cursor: 'pointer' }}>
      <style>{`
        .${id}-wave { transition: opacity ${dur}s ease; }
        .${id}-wave.hidden { opacity: 0; }
        .${id}-x { transition: opacity ${dur}s ease; }
        .${id}-x.hidden { opacity: 0; }
      `}</style>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill={color} />
      <g className={`${id}-wave ${muted ? 'hidden' : ''}`}>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </g>
      <g className={`${id}-x ${muted ? '' : 'hidden'}`}>
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </g>
    </svg>
  );
}

export function generateVolumeCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="volume-icon" onclick="this.classList.toggle('muted')">
  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="${opts.color}"/>
  <g class="vol-waves">
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </g>
  <g class="vol-x">
    <line x1="23" y1="9" x2="17" y2="15"/>
    <line x1="17" y1="9" x2="23" y2="15"/>
  </g>
</svg>`;
  const css = `.volume-icon { cursor: pointer; }
.vol-waves, .vol-x { transition: opacity ${dur}s ease; }
.vol-x { opacity: 0; }
.volume-icon.muted .vol-waves { opacity: 0; }
.volume-icon.muted .vol-x { opacity: 1; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
