'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function MenuDots({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [vertical, setVertical] = useState(false);
  const dur = 0.3 / speed;
  const id = 'md-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} onClick={() => setVertical(!vertical)} style={{ cursor: 'pointer' }}>
      <style>{`
        .${id}-dots { transform-origin: center; transition: transform ${dur}s ease; }
        .${id}-dots.vert { transform: rotate(90deg); }
      `}</style>
      <g className={`${id}-dots ${vertical ? 'vert' : ''}`}>
        <circle cx="5" cy="12" r={strokeWidth} />
        <circle cx="12" cy="12" r={strokeWidth} />
        <circle cx="19" cy="12" r={strokeWidth} />
      </g>
    </svg>
  );
}

export function generateMenuDotsCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="${opts.color}" class="menu-dots" onclick="this.classList.toggle('vertical')">
  <g class="md-dots">
    <circle cx="5" cy="12" r="${opts.strokeWidth}"/>
    <circle cx="12" cy="12" r="${opts.strokeWidth}"/>
    <circle cx="19" cy="12" r="${opts.strokeWidth}"/>
  </g>
</svg>`;
  const css = `.menu-dots { cursor: pointer; }
.md-dots { transform-origin: center; transition: transform ${dur}s ease; }
.menu-dots.vertical .md-dots { transform: rotate(90deg); }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
