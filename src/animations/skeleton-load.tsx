'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function SkeletonLoad({ color = '#EB742E', size = 48, speed = 1 }: AnimationProps) {
  const dur = 1.5 / speed;
  const id = 'sk-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs><linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor={color} stopOpacity="0.1"/><stop offset="50%" stopColor={color} stopOpacity="0.3"/><stop offset="100%" stopColor={color} stopOpacity="0.1"/><animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="1 0" dur={`${dur}s`} repeatCount="indefinite"/></linearGradient></defs>
      <rect x="2" y="3" width="20" height="4" rx="1" fill={`url(#${id}-grad)`}/>
      <rect x="2" y="10" width="14" height="4" rx="1" fill={`url(#${id}-grad)`}/>
      <rect x="2" y="17" width="18" height="4" rx="1" fill={`url(#${id}-grad)`}/>
    </svg>
  );
}
export function generateSkeletonCode(opts: CustomizeOptions) {
  const dur = 1.5 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24"><defs><linearGradient id="sk-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="${opts.color}" stop-opacity="0.1"/><stop offset="50%" stop-color="${opts.color}" stop-opacity="0.3"/><stop offset="100%" stop-color="${opts.color}" stop-opacity="0.1"/><animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="1 0" dur="${dur}s" repeatCount="indefinite"/></linearGradient></defs><rect x="2" y="3" width="20" height="4" rx="1" fill="url(#sk-grad)"/><rect x="2" y="10" width="14" height="4" rx="1" fill="url(#sk-grad)"/><rect x="2" y="17" width="18" height="4" rx="1" fill="url(#sk-grad)"/></svg>`;
  const css = '';
  return { css, svg, html: svg };
}
