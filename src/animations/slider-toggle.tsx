'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function SliderToggle({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [on, setOn] = useState(false);
  const dur = 0.3 / speed;
  const id = 'tog-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" onClick={() => setOn(!on)} style={{ cursor: 'pointer' }}>
      <style>{`.${id}-track{transition:fill ${dur}s ease}.${id}-knob{transition:cx ${dur}s ease}`}</style>
      <rect className={`${id}-track`} x="2" y="7" width="20" height="10" rx="5" fill={on ? color : 'none'} stroke={color} strokeWidth={strokeWidth}/>
      <circle className={`${id}-knob`} cx={on ? '17' : '7'} cy="12" r="3.5" fill={on ? '#fff' : color}/></svg>
  );
}
export function generateSliderToggleCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" class="slider-toggle" onclick="this.classList.toggle('on')"><rect class="track" x="2" y="7" width="20" height="10" rx="5" stroke="${opts.color}" stroke-width="${opts.strokeWidth}"/><circle class="knob" cx="7" cy="12" r="3.5" fill="${opts.color}"/></svg>`;
  const css = `.slider-toggle{cursor:pointer}.track{transition:fill ${dur}s ease}.knob{transition:cx ${dur}s ease}.slider-toggle.on .track{fill:${opts.color}}.slider-toggle.on .knob{cx:17;fill:#fff}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
