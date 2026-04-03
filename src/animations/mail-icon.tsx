'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function MailIcon({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.3 / speed;
  const id = 'mail-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={id} style={{ overflow: 'visible' }}>
      <style>{`.${id}{cursor:pointer}.${id} .flap{transition:transform ${dur}s ease;transform-origin:12px 5px}.${id}:hover .flap{transform:rotateX(180deg)}`}</style>
      <rect x="2" y="5" width="20" height="14" rx="2"/><polyline className="flap" points="2 5 12 13 22 5"/></svg>
  );
}
export function generateMailCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="mail-icon"><rect x="2" y="5" width="20" height="14" rx="2"/><polyline class="flap" points="2 5 12 13 22 5"/></svg>`;
  const css = `.mail-icon{cursor:pointer}.mail-icon .flap{transition:transform ${dur}s ease;transform-origin:12px 5px}.mail-icon:hover .flap{transform:rotateX(180deg)}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
