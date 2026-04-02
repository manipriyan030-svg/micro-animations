'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function NotificationBadge({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 2 / speed;
  const id = 'notif-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <style>{`
        @keyframes ${id}-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes ${id}-ping {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .${id}-dot { fill: ${color}; stroke: none; transform-origin: 18px 5px; animation: ${id}-pulse ${dur}s ease-in-out infinite; }
        .${id}-ping { fill: ${color}; stroke: none; transform-origin: 18px 5px; animation: ${id}-ping ${dur}s ease-out infinite; }
      `}</style>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <circle className={`${id}-ping`} cx="18" cy="5" r="3" />
      <circle className={`${id}-dot`} cx="18" cy="5" r="3" />
    </svg>
  );
}

export function generateNotifCode(opts: CustomizeOptions) {
  const dur = 2 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <circle class="notif-ping" cx="18" cy="5" r="3"/>
  <circle class="notif-dot" cx="18" cy="5" r="3"/>
</svg>`;
  const css = `@keyframes notif-pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } }
@keyframes notif-ping { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(2.5); opacity: 0; } }
.notif-dot { fill: ${opts.color}; stroke: none; transform-origin: 18px 5px; animation: notif-pulse ${dur}s ease-in-out infinite; }
.notif-ping { fill: ${opts.color}; stroke: none; transform-origin: 18px 5px; animation: notif-ping ${dur}s ease-out infinite; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
