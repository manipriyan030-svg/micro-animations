'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function CalendarIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 1.5 / speed;
  const id = 'cal-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <style>{`@keyframes ${id}-pop{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}.${id}-c{animation:${id}-pop ${dur}s ease-in-out infinite}`}</style>
      <g className={`${id}-c`} style={{ transformOrigin: '12px 12px' }}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </g>
    </svg>
  );
}
export function generateCalendarCode(opts: CustomizeOptions) {
  const dur = 1.5 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><g class="cal" style="transform-origin:12px 12px"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></g></svg>`;
  const css = `@keyframes cal-pop{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}.cal{animation:cal-pop ${dur}s ease-in-out infinite;transform-origin:12px 12px}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
