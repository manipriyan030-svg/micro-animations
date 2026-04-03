'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function ShieldCheck({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.8 / speed;
  const id = 'sh-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <style>{`@keyframes ${id}-draw{0%{stroke-dashoffset:20}100%{stroke-dashoffset:0}}.${id}-ck{stroke-dasharray:20;animation:${id}-draw ${dur}s ease forwards}`}</style>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline className={`${id}-ck`} points="9 12 12 15 16 10"/></svg>
  );
}
export function generateShieldCheckCode(opts: CustomizeOptions) {
  const dur = 0.8 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline class="shield-ck" points="9 12 12 15 16 10"/></svg>`;
  const css = `@keyframes shield-draw{0%{stroke-dashoffset:20}100%{stroke-dashoffset:0}}.shield-ck{stroke-dasharray:20;animation:shield-draw ${dur}s ease forwards}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
