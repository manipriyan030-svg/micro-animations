'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function LockUnlock({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [unlocked, setUnlocked] = useState(false);
  const dur = 0.3 / speed;
  const id = 'lk-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => setUnlocked(!unlocked)} style={{ cursor: 'pointer' }}>
      <style>{`
        .${id}-shackle { transition: transform ${dur}s ease, d ${dur}s ease; transform-origin: center top; }
        .${id}-shackle.open { transform: translateY(-2px) rotate(-15deg); }
      `}</style>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path className={`${id}-shackle ${unlocked ? 'open' : ''}`} d={unlocked ? 'M7 11V7a5 5 0 0 1 9.9-1' : 'M7 11V7a5 5 0 0 1 10 0v4'} />
    </svg>
  );
}

export function generateLockCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="lock-icon" onclick="this.classList.toggle('unlocked')">
  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
  <path class="lk-shackle" d="M7 11V7a5 5 0 0 1 10 0v4"/>
</svg>`;
  const css = `.lock-icon { cursor: pointer; }
.lk-shackle { transition: transform ${dur}s ease; transform-origin: 60% 0%; }
.lock-icon.unlocked .lk-shackle { transform: translateY(-2px) rotate(-15deg); }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
