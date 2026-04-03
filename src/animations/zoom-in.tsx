'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function ZoomIn({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 1.5 / speed;
  const id = 'zi-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <style>{`@keyframes ${id}-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.${id}-g{animation:${id}-pulse ${dur}s ease-in-out infinite;transform-origin:11px 11px}`}</style>
      <g className={`${id}-g`}><circle cx="11" cy="11" r="8"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></g>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}
export function generateZoomInCode(opts: CustomizeOptions) {
  const dur = 1.5 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><g class="zi"><circle cx="11" cy="11" r="8"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></g><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
  const css = `@keyframes zi-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}.zi{animation:zi-pulse ${dur}s ease-in-out infinite;transform-origin:11px 11px}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
