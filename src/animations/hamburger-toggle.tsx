'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function HamburgerToggle({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [open, setOpen] = useState(false);
  const dur = 0.3 / speed;
  const id = 'ham-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      onClick={() => setOpen(!open)}
      style={{ cursor: 'pointer', overflow: 'visible' }}
    >
      <style>{`
        .${id}-top, .${id}-mid, .${id}-bot {
          transition: all ${dur}s ease;
          transform-origin: 12px 12px;
        }
      `}</style>
      <line
        className={`${id}-top`}
        x1="4" y1={open ? '12' : '6'} x2="20" y2={open ? '12' : '6'}
        style={{ transform: open ? 'rotate(45deg)' : 'none' }}
      />
      <line
        className={`${id}-mid`}
        x1="4" y1="12" x2="20" y2="12"
        style={{ opacity: open ? 0 : 1 }}
      />
      <line
        className={`${id}-bot`}
        x1="4" y1={open ? '12' : '18'} x2="20" y2={open ? '12' : '18'}
        style={{ transform: open ? 'rotate(-45deg)' : 'none' }}
      />
    </svg>
  );
}

export function generateHamburgerCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" class="hamburger-toggle" onclick="this.classList.toggle('open')">
  <line x1="4" y1="6" x2="20" y2="6" class="line-top"/>
  <line x1="4" y1="12" x2="20" y2="12" class="line-mid"/>
  <line x1="4" y1="18" x2="20" y2="18" class="line-bot"/>
</svg>`;

  const css = `.hamburger-toggle { cursor: pointer; }
.hamburger-toggle line { transition: all ${dur}s ease; transform-origin: 12px 12px; }
.hamburger-toggle.open .line-top { transform: rotate(45deg); y1: 12; y2: 12; }
.hamburger-toggle.open .line-mid { opacity: 0; }
.hamburger-toggle.open .line-bot { transform: rotate(-45deg); y1: 12; y2: 12; }`;

  const html = `<style>${css}</style>\n${svg}`;
  return { css, svg, html };
}
