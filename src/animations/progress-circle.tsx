'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function ProgressCircle({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 2 / speed;
  const id = 'pc-' + Math.random().toString(36).slice(2, 6);
  const r = 10;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <style>{`@keyframes ${id}-fill{0%{stroke-dashoffset:${circ.toFixed(1)}}100%{stroke-dashoffset:0}}`}</style>
      <circle cx="12" cy="12" r={r} fill="none" stroke={color} strokeWidth={strokeWidth} opacity="0.15"/>
      <circle cx="12" cy="12" r={r} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={circ.toFixed(1)} style={{ animation: `${id}-fill ${dur}s ease-in-out infinite`, transformOrigin: '12px 12px', transform: 'rotate(-90deg)' }}/>
    </svg>
  );
}
export function generateProgressCircleCode(opts: CustomizeOptions) {
  const dur = 2 / opts.speed;
  const r = 10;
  const circ = (2 * Math.PI * r).toFixed(1);
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24"><circle cx="12" cy="12" r="${r}" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" opacity="0.15"/><circle cx="12" cy="12" r="${r}" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-dasharray="${circ}" class="pc" style="transform-origin:12px 12px;transform:rotate(-90deg)"/></svg>`;
  const css = `@keyframes pc-fill{0%{stroke-dashoffset:${circ}}100%{stroke-dashoffset:0}}.pc{animation:pc-fill ${dur}s ease-in-out infinite}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
