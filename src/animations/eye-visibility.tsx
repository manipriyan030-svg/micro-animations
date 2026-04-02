'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function EyeVisibility({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [visible, setVisible] = useState(true);
  const dur = 0.3 / speed;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => setVisible(!visible)} style={{ cursor: 'pointer' }}>
      <style>{`
        .eye-el { transition: all ${dur}s ease; }
      `}</style>
      <path className="eye-el" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle className="eye-el" cx="12" cy="12" r="3" />
      {!visible && (
        <line className="eye-el" x1="1" y1="1" x2="23" y2="23" strokeWidth={strokeWidth + 0.5} />
      )}
    </svg>
  );
}

export function generateEyeCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="eye-toggle" onclick="this.classList.toggle('hidden-eye')">
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
  <circle cx="12" cy="12" r="3"/>
  <line class="slash" x1="1" y1="1" x2="23" y2="23" style="display:none"/>
</svg>`;
  const css = `.eye-toggle { cursor: pointer; }
.eye-toggle * { transition: all ${dur}s ease; }
.eye-toggle.hidden-eye .slash { display: block !important; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
