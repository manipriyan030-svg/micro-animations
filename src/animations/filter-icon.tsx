'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function FilterIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [active, setActive] = useState(false);
  const dur = 0.3 / speed;
  const id = 'flt-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => setActive(!active)} style={{ cursor: 'pointer' }}>
      <style>{`
        .${id}-line1 { transition: transform ${dur}s ease; transform-origin: center; }
        .${id}-line2 { transition: transform ${dur}s ease ${dur * 0.1}s; transform-origin: center; }
        .${id}-line3 { transition: transform ${dur}s ease ${dur * 0.2}s; transform-origin: center; }
        .${id}-active1 { transform: scaleX(0.6); }
        .${id}-active2 { transform: scaleX(0.8); }
        .${id}-active3 { transform: scaleX(0.4); }
      `}</style>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      <line className={`${id}-line1 ${active ? `${id}-active1` : ''}`} x1="6" y1="8" x2="18" y2="8" />
      <line className={`${id}-line2 ${active ? `${id}-active2` : ''}`} x1="8" y1="12" x2="16" y2="12" />
      <line className={`${id}-line3 ${active ? `${id}-active3` : ''}`} x1="10" y1="16" x2="14" y2="16" />
    </svg>
  );
}

export function generateFilterCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="filter-icon" onclick="this.classList.toggle('active')">
  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  <line class="flt-line1" x1="6" y1="8" x2="18" y2="8"/>
  <line class="flt-line2" x1="8" y1="12" x2="16" y2="12"/>
  <line class="flt-line3" x1="10" y1="16" x2="14" y2="16"/>
</svg>`;
  const css = `.filter-icon { cursor: pointer; }
.flt-line1 { transition: transform ${dur}s ease; transform-origin: center; }
.flt-line2 { transition: transform ${dur}s ease ${dur * 0.1}s; transform-origin: center; }
.flt-line3 { transition: transform ${dur}s ease ${dur * 0.2}s; transform-origin: center; }
.filter-icon.active .flt-line1 { transform: scaleX(0.6); }
.filter-icon.active .flt-line2 { transform: scaleX(0.8); }
.filter-icon.active .flt-line3 { transform: scaleX(0.4); }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
