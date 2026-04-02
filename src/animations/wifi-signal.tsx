'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function WifiSignal({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 1.5 / speed;
  const id = 'wifi-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={id}>
      <style>{`
        @keyframes ${id}-pulse1 { 0%, 100% { opacity: 0.3; } 33% { opacity: 1; } }
        @keyframes ${id}-pulse2 { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes ${id}-pulse3 { 0%, 100% { opacity: 0.3; } 66% { opacity: 1; } }
        .${id}-arc1 { animation: ${id}-pulse1 ${dur}s ease infinite; }
        .${id}-arc2 { animation: ${id}-pulse2 ${dur}s ease infinite; animation-delay: ${dur * 0.2}s; }
        .${id}-arc3 { animation: ${id}-pulse3 ${dur}s ease infinite; animation-delay: ${dur * 0.4}s; }
      `}</style>
      <path className={`${id}-arc1`} d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path className={`${id}-arc2`} d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path className={`${id}-arc3`} d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill={color} />
    </svg>
  );
}

export function generateWifiCode(opts: CustomizeOptions) {
  const dur = 1.5 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="wifi-icon">
  <path class="wifi-arc1" d="M1.42 9a16 16 0 0 1 21.16 0"/>
  <path class="wifi-arc2" d="M5 12.55a11 11 0 0 1 14.08 0"/>
  <path class="wifi-arc3" d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
  <circle cx="12" cy="20" r="1" fill="${opts.color}"/>
</svg>`;
  const css = `@keyframes wifi-pulse1 { 0%, 100% { opacity: 0.3; } 33% { opacity: 1; } }
@keyframes wifi-pulse2 { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
@keyframes wifi-pulse3 { 0%, 100% { opacity: 0.3; } 66% { opacity: 1; } }
.wifi-arc1 { animation: wifi-pulse1 ${dur}s ease infinite; }
.wifi-arc2 { animation: wifi-pulse2 ${dur}s ease infinite; animation-delay: ${dur * 0.2}s; }
.wifi-arc3 { animation: wifi-pulse3 ${dur}s ease infinite; animation-delay: ${dur * 0.4}s; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
