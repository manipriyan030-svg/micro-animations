'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function SpinnerBars({ color = '#EB742E', size = 48, speed = 1 }: AnimationProps) {
  const dur = 1.2 / speed;
  const id = 'sb-' + Math.random().toString(36).slice(2, 6);
  const bars = 8;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <style>{`@keyframes ${id}-fade{0%{opacity:1}100%{opacity:0.15}}`}</style>
      {Array.from({ length: bars }).map((_, i) => {
        const angle = (360 / bars) * i;
        const delay = (dur / bars) * i;
        return <rect key={i} x="11" y="2" width="2" height="6" rx="1" fill={color} style={{ transformOrigin: '12px 12px', transform: `rotate(${angle}deg)`, animation: `${id}-fade ${dur}s linear ${delay.toFixed(2)}s infinite` }} />;
      })}
    </svg>
  );
}
export function generateSpinnerBarsCode(opts: CustomizeOptions) {
  const dur = 1.2 / opts.speed;
  let rects = '';
  for (let i = 0; i < 8; i++) { rects += `<rect x="11" y="2" width="2" height="6" rx="1" fill="${opts.color}" style="transform-origin:12px 12px;transform:rotate(${(360/8)*i}deg);animation:sb-fade ${dur}s linear ${((dur/8)*i).toFixed(2)}s infinite"/>`; }
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24">${rects}</svg>`;
  const css = `@keyframes sb-fade{0%{opacity:1}100%{opacity:0.15}}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
