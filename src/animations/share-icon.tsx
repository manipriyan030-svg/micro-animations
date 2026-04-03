'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function ShareIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 2 / speed;
  const id = 'shr-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <style>{`@keyframes ${id}-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.${id}-g{animation:${id}-bounce ${dur}s ease-in-out infinite}`}</style>
      <g className={`${id}-g`}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></g>
    </svg>
  );
}
export function generateShareCode(opts: CustomizeOptions) {
  const dur = 2 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><g class="shr"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></g></svg>`;
  const css = `@keyframes shr-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.shr{animation:shr-bounce ${dur}s ease-in-out infinite}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
