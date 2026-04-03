'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function ClockIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 4 / speed;
  const id = 'clk-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <style>{`@keyframes ${id}-tick{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.${id}-hand{transform-origin:12px 12px;animation:${id}-tick ${dur}s linear infinite}`}</style>
      <circle cx="12" cy="12" r="10"/><polyline className={`${id}-hand`} points="12 6 12 12 16 14"/></svg>
  );
}
export function generateClockCode(opts: CustomizeOptions) {
  const dur = 4 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline class="clock-hand" points="12 6 12 12 16 14"/></svg>`;
  const css = `@keyframes clock-tick{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.clock-hand{transform-origin:12px 12px;animation:clock-tick ${dur}s linear infinite}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
