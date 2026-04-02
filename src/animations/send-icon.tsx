'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function SendIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.3 / speed;
  const id = 'send-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={id}>
      <style>{`
        .${id} { cursor: pointer; }
        .${id} .send-plane { transform-origin: center; transition: transform ${dur}s ease; }
        .${id}:hover .send-plane { transform: translate(3px, -3px) rotate(-5deg); }
      `}</style>
      <g className="send-plane">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </g>
    </svg>
  );
}

export function generateSendCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="send-icon">
  <g class="send-plane">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </g>
</svg>`;
  const css = `.send-icon { cursor: pointer; }
.send-icon .send-plane { transform-origin: center; transition: transform ${dur}s ease; }
.send-icon:hover .send-plane { transform: translate(3px, -3px) rotate(-5deg); }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
