'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function UserIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 2 / speed;
  const id = 'usr-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <style>{`@keyframes ${id}-nod{0%,100%{transform:translateY(0)}50%{transform:translateY(-1px)}}.${id}-u{animation:${id}-nod ${dur}s ease-in-out infinite}`}</style>
      <g className={`${id}-u`}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g>
    </svg>
  );
}
export function generateUserCode(opts: CustomizeOptions) {
  const dur = 2 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><g class="usr"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g></svg>`;
  const css = `@keyframes usr-nod{0%,100%{transform:translateY(0)}50%{transform:translateY(-1px)}}.usr{animation:usr-nod ${dur}s ease-in-out infinite}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
