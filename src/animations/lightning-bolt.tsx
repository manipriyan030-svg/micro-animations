'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function LightningBolt({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 2 / speed;
  const id = 'zap-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ overflow: 'visible' }}>
      <style>{`@keyframes ${id}-flash{0%,100%{opacity:1;filter:drop-shadow(0 0 0 transparent)}50%{opacity:0.6;filter:drop-shadow(0 0 6px ${color})}}.${id}-bolt{animation:${id}-flash ${dur}s ease-in-out infinite}`}</style>
      <polygon className={`${id}-bolt`} points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  );
}
export function generateLightningCode(opts: CustomizeOptions) {
  const dur = 2 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><polygon class="bolt" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
  const css = `@keyframes zap-flash{0%,100%{opacity:1;filter:drop-shadow(0 0 0 transparent)}50%{opacity:0.6;filter:drop-shadow(0 0 6px ${opts.color})}}.bolt{animation:zap-flash ${dur}s ease-in-out infinite}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
