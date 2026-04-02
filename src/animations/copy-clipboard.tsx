'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function CopyClipboard({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [copied, setCopied] = useState(false);
  const dur = 0.3 / speed;

  const handleClick = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <style>{`
        .copy-el { transition: all ${dur}s ease; }
      `}</style>
      {copied ? (
        <polyline className="copy-el" points="9 11 12 14 22 4" />
      ) : (
        <>
          <rect className="copy-el" x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path className="copy-el" d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </>
      )}
    </svg>
  );
}

export function generateCopyCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="copy-icon">
  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
</svg>`;
  const css = `.copy-icon { cursor: pointer; transition: all ${dur}s ease; }
.copy-icon:active { transform: scale(0.9); }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
