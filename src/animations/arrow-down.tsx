'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function ArrowDown({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [open, setOpen] = useState(false);
  const dur = 0.3 / speed;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>
      <style>{`
        .chevron-path { transition: transform ${dur}s ease; transform-origin: center; }
      `}</style>
      <polyline points="6 9 12 15 18 9" className="chevron-path" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
    </svg>
  );
}

export function generateArrowDownCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="chevron-toggle" onclick="this.classList.toggle('open')">
  <polyline points="6 9 12 15 18 9" class="chevron-path"/>
</svg>`;
  const css = `.chevron-toggle { cursor: pointer; }
.chevron-path { transition: transform ${dur}s ease; transform-origin: center; }
.chevron-toggle.open .chevron-path { transform: rotate(180deg); }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
