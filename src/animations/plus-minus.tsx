'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function PlusMinus({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [toggled, setToggled] = useState(false);
  const dur = 0.3 / speed;
  const id = 'pm-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => setToggled(!toggled)} style={{ cursor: 'pointer' }}>
      <style>{`
        .${id}-group { transform-origin: center; transition: transform ${dur}s ease; }
        .${id}-group.rotated { transform: rotate(90deg); }
        .${id}-vert { transition: opacity ${dur}s ease, transform ${dur}s ease; }
        .${id}-vert.hidden { opacity: 0; transform: scaleY(0); }
      `}</style>
      <g className={`${id}-group ${toggled ? 'rotated' : ''}`}>
        <line x1="12" y1="5" x2="12" y2="19" className={`${id}-vert ${toggled ? 'hidden' : ''}`} />
        <line x1="5" y1="12" x2="19" y2="12" />
      </g>
    </svg>
  );
}

export function generatePlusMinusCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="plus-minus" onclick="this.classList.toggle('toggled')">
  <g class="pm-group">
    <line class="pm-vert" x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </g>
</svg>`;
  const css = `.plus-minus { cursor: pointer; }
.pm-group { transform-origin: center; transition: transform ${dur}s ease; }
.plus-minus.toggled .pm-group { transform: rotate(90deg); }
.pm-vert { transition: opacity ${dur}s ease, transform ${dur}s ease; transform-origin: center; }
.plus-minus.toggled .pm-vert { opacity: 0; transform: scaleY(0); }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
