'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function SpinnerDots({ color = '#00e5a0', size = 48, speed = 1 }: AnimationProps) {
  const dur = 1.2 / speed;
  const id = 'sdots-' + Math.random().toString(36).slice(2, 6);

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <style>{`
        @keyframes ${id}-bounce {
          0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
        .${id}-dot { fill: ${color}; }
        .${id}-d1 { animation: ${id}-bounce ${dur}s ease-in-out infinite; }
        .${id}-d2 { animation: ${id}-bounce ${dur}s ease-in-out ${dur * 0.16}s infinite; }
        .${id}-d3 { animation: ${id}-bounce ${dur}s ease-in-out ${dur * 0.32}s infinite; }
      `}</style>
      <circle className={`${id}-dot ${id}-d1`} cx="5" cy="12" r="2.5" />
      <circle className={`${id}-dot ${id}-d2`} cx="12" cy="12" r="2.5" />
      <circle className={`${id}-dot ${id}-d3`} cx="19" cy="12" r="2.5" />
    </svg>
  );
}

export function generateSpinnerDotsCode(opts: CustomizeOptions) {
  const dur = 1.2 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24">
  <circle class="dot d1" cx="5" cy="12" r="2.5" fill="${opts.color}"/>
  <circle class="dot d2" cx="12" cy="12" r="2.5" fill="${opts.color}"/>
  <circle class="dot d3" cx="19" cy="12" r="2.5" fill="${opts.color}"/>
</svg>`;
  const css = `@keyframes dot-bounce {
  0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}
.dot { fill: ${opts.color}; }
.d1 { animation: dot-bounce ${dur}s ease-in-out infinite; }
.d2 { animation: dot-bounce ${dur}s ease-in-out ${(dur * 0.16).toFixed(2)}s infinite; }
.d3 { animation: dot-bounce ${dur}s ease-in-out ${(dur * 0.32).toFixed(2)}s infinite; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
