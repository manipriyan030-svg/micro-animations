'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function SearchIcon({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [active, setActive] = useState(false);
  const dur = 0.4 / speed;
  const id = 'srch-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" onClick={() => setActive(!active)} style={{ cursor: 'pointer' }}>
      <style>{`
        .${id}-circle { transition: all ${dur}s ease; transform-origin: center; }
        .${id}-line { transition: all ${dur}s ease; }
      `}</style>
      <circle className={`${id}-circle`} cx="11" cy="11" r="7" style={{ opacity: active ? 0 : 1, transform: active ? 'scale(0)' : 'scale(1)' }} />
      <line className={`${id}-line`} x1={active ? '3' : '16.5'} y1={active ? '12' : '16.5'} x2="21" y2={active ? '12' : '21'} />
    </svg>
  );
}

export function generateSearchCode(opts: CustomizeOptions) {
  const dur = 0.4 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" class="search-icon" onclick="this.classList.toggle('active')">
  <circle class="search-circle" cx="11" cy="11" r="7"/>
  <line class="search-line" x1="16.5" y1="16.5" x2="21" y2="21"/>
</svg>`;
  const css = `.search-icon { cursor: pointer; }
.search-circle { transition: all ${dur}s ease; transform-origin: center; }
.search-line { transition: all ${dur}s ease; }
.search-icon.active .search-circle { opacity: 0; transform: scale(0); }
.search-icon.active .search-line { x1: 3; y1: 12; y2: 12; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
