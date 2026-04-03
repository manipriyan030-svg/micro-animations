'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function LoadingDotsWave({ color = '#EB742E', size = 48, speed = 1 }: AnimationProps) {
  const dur = 1.4 / speed;
  const id = 'wave-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <style>{`@keyframes ${id}-wave{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.${id}-d{fill:${color}}.${id}-1{animation:${id}-wave ${dur}s ease-in-out infinite}.${id}-2{animation:${id}-wave ${dur}s ease-in-out ${dur*0.15}s infinite}.${id}-3{animation:${id}-wave ${dur}s ease-in-out ${dur*0.3}s infinite}.${id}-4{animation:${id}-wave ${dur}s ease-in-out ${dur*0.45}s infinite}`}</style>
      <circle className={`${id}-d ${id}-1`} cx="4" cy="12" r="2"/><circle className={`${id}-d ${id}-2`} cx="9.33" cy="12" r="2"/><circle className={`${id}-d ${id}-3`} cx="14.66" cy="12" r="2"/><circle className={`${id}-d ${id}-4`} cx="20" cy="12" r="2"/></svg>
  );
}
export function generateLoadingDotsWaveCode(opts: CustomizeOptions) {
  const dur = 1.4 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24"><circle class="wd w1" cx="4" cy="12" r="2"/><circle class="wd w2" cx="9.33" cy="12" r="2"/><circle class="wd w3" cx="14.66" cy="12" r="2"/><circle class="wd w4" cx="20" cy="12" r="2"/></svg>`;
  const css = `@keyframes wd-wave{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.wd{fill:${opts.color}}.w1{animation:wd-wave ${dur}s ease-in-out infinite}.w2{animation:wd-wave ${dur}s ease-in-out ${(dur*0.15).toFixed(2)}s infinite}.w3{animation:wd-wave ${dur}s ease-in-out ${(dur*0.3).toFixed(2)}s infinite}.w4{animation:wd-wave ${dur}s ease-in-out ${(dur*0.45).toFixed(2)}s infinite}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
