'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function HamburgerToggle({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [open, setOpen] = useState(false);
  const dur = 0.3 / speed;

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
      style={{ cursor: 'pointer' }}
    >
      <line
        x1="4" y1="6" x2="20" y2="6"
        style={{
          transition: `all ${dur}s ease`,
          transformOrigin: 'center',
          transform: open ? 'rotate(45deg) translateY(0px)' : 'none',
          ...(open ? { x1: 5, y1: 12, x2: 19, y2: 12 } : {}),
        }}
      >
        {open && (
          <animate attributeName="y1" from="6" to="12" dur={`${dur}s`} fill="freeze" />
        )}
      </line>
      <line
        x1="4" y1="12" x2="20" y2="12"
        style={{
          transition: `opacity ${dur}s ease`,
          opacity: open ? 0 : 1,
        }}
      />
      <line
        x1="4" y1="18" x2="20" y2="18"
        style={{
          transition: `all ${dur}s ease`,
          transformOrigin: 'center',
          transform: open ? 'rotate(-45deg)' : 'none',
          ...(open ? { x1: 5, y1: 12, x2: 19, y2: 12 } : {}),
        }}
      />
      <style>{`
        svg line {
          transition: all ${dur}s ease;
        }
      `}</style>
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
.hamburger-toggle line { transition: all ${dur}s ease; transform-origin: center; }
.hamburger-toggle.open .line-top { transform: rotate(45deg); y1: 12; y2: 12; }
.hamburger-toggle.open .line-mid { opacity: 0; }
.hamburger-toggle.open .line-bot { transform: rotate(-45deg); y1: 12; y2: 12; }`;

  const html = `<style>${css}</style>\n${svg}`;
  return { css, svg, html };
}
