'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function SpinnerPulse({ color = '#EB742E', size = 48, speed = 1 }: AnimationProps) {
  const dur = 1.2 / speed;
  const id = 'sp-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <style>{`@keyframes ${id}-pulse{0%{opacity:0.3;r:8}50%{opacity:1;r:10}100%{opacity:0.3;r:8}}`}</style>
      <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2" opacity="0.2"/>
      <circle cx="12" cy="12" r="8" fill="none" stroke={color} strokeWidth="2.5" strokeDasharray="20 40" style={{ animation: `${id}-pulse ${dur}s ease-in-out infinite`, transformOrigin: '12px 12px' }}>
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur={`${dur}s`} repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}
export function generateSpinnerPulseCode(opts: CustomizeOptions) {
  const dur = 1.2 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="${opts.color}" stroke-width="2" opacity="0.2"/><circle cx="12" cy="12" r="8" fill="none" stroke="${opts.color}" stroke-width="2.5" stroke-dasharray="20 40" class="sp"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="${dur}s" repeatCount="indefinite"/></circle></svg>`;
  const css = `@keyframes sp-pulse{0%{opacity:0.3}50%{opacity:1}100%{opacity:0.3}}.sp{animation:sp-pulse ${dur}s ease-in-out infinite}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
