'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function HomeIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.3 / speed;
  const id = 'hm-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={id}>
      <style>{`.${id}{cursor:pointer}.${id} g{transition:transform ${dur}s ease;transform-origin:center bottom}.${id}:hover g{transform:scale(1.06)}`}</style>
      <g><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></g></svg>
  );
}
export function generateHomeCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="home-icon"><g><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></g></svg>`;
  const css = `.home-icon{cursor:pointer}.home-icon g{transition:transform ${dur}s ease;transform-origin:center bottom}.home-icon:hover g{transform:scale(1.06)}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
