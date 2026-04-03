'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function SortIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 1.5 / speed;
  const id = 'srt-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <style>{`@keyframes ${id}-up{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}@keyframes ${id}-down{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}`}</style>
      <g style={{ animation: `${id}-up ${dur}s ease-in-out infinite` }}><line x1="7" y1="20" x2="7" y2="4"/><polyline points="3 8 7 4 11 8"/></g>
      <g style={{ animation: `${id}-down ${dur}s ease-in-out infinite` }}><line x1="17" y1="4" x2="17" y2="20"/><polyline points="13 16 17 20 21 16"/></g>
    </svg>
  );
}
export function generateSortCode(opts: CustomizeOptions) {
  const dur = 1.5 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><g class="srt-up"><line x1="7" y1="20" x2="7" y2="4"/><polyline points="3 8 7 4 11 8"/></g><g class="srt-down"><line x1="17" y1="4" x2="17" y2="20"/><polyline points="13 16 17 20 21 16"/></g></svg>`;
  const css = `@keyframes srt-up{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}@keyframes srt-down{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.srt-up{animation:srt-up ${dur}s ease-in-out infinite}.srt-down{animation:srt-down ${dur}s ease-in-out infinite}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
