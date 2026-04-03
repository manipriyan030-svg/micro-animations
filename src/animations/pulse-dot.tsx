'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function PulseDot({ color = '#EB742E', size = 48, speed = 1 }: AnimationProps) {
  const dur = 1.5 / speed;
  const id = 'pd-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ overflow: 'visible' }}>
      <style>{`@keyframes ${id}-ripple{0%{r:3;opacity:1}100%{r:10;opacity:0}}@keyframes ${id}-beat{0%,100%{r:3}50%{r:4}}`}</style>
      <circle cx="12" cy="12" r="10" fill={color} opacity="0.15" style={{ animation: `${id}-ripple ${dur}s ease-out infinite` }}/>
      <circle cx="12" cy="12" r="3" fill={color} style={{ animation: `${id}-beat ${dur}s ease-in-out infinite` }}/>
    </svg>
  );
}
export function generatePulseDotCode(opts: CustomizeOptions) {
  const dur = 1.5 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" style="overflow:visible"><circle cx="12" cy="12" r="10" fill="${opts.color}" opacity="0.15" class="ripple"/><circle cx="12" cy="12" r="3" fill="${opts.color}" class="dot"/></svg>`;
  const css = `@keyframes pd-ripple{0%{r:3;opacity:1}100%{r:10;opacity:0}}@keyframes pd-beat{0%,100%{r:3}50%{r:4}}.ripple{animation:pd-ripple ${dur}s ease-out infinite}.dot{animation:pd-beat ${dur}s ease-in-out infinite}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
