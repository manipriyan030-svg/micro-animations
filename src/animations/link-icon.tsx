'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function LinkIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 2 / speed;
  const id = 'lnk-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <style>{`@keyframes ${id}-rotate{0%,100%{transform:rotate(0)}50%{transform:rotate(10deg)}}.${id}-g{animation:${id}-rotate ${dur}s ease-in-out infinite;transform-origin:12px 12px}`}</style>
      <g className={`${id}-g`}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g>
    </svg>
  );
}
export function generateLinkCode(opts: CustomizeOptions) {
  const dur = 2 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><g class="lnk"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g></svg>`;
  const css = `@keyframes lnk-rotate{0%,100%{transform:rotate(0)}50%{transform:rotate(10deg)}}.lnk{animation:lnk-rotate ${dur}s ease-in-out infinite;transform-origin:12px 12px}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
