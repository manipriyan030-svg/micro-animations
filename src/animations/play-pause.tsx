'use client';
import { useState } from 'react';
import { AnimationProps, CustomizeOptions } from './types';

export default function PlayPause({ color = '#00e5a0', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const [playing, setPlaying] = useState(false);
  const dur = 0.3 / speed;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" onClick={() => setPlaying(!playing)} style={{ cursor: 'pointer' }}>
      <style>{`
        .pp-path { transition: all ${dur}s ease; }
      `}</style>
      {playing ? (
        <>
          <line className="pp-path" x1="8" y1="5" x2="8" y2="19" />
          <line className="pp-path" x1="16" y1="5" x2="16" y2="19" />
        </>
      ) : (
        <polygon className="pp-path" points="6 3 20 12 6 21 6 3" fill={color} />
      )}
    </svg>
  );
}

export function generatePlayPauseCode(opts: CustomizeOptions) {
  const dur = 0.3 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="play-pause" onclick="this.classList.toggle('playing')">
  <polygon class="play-icon" points="6 3 20 12 6 21 6 3" fill="${opts.color}"/>
  <g class="pause-icon" style="display:none">
    <line x1="8" y1="5" x2="8" y2="19"/>
    <line x1="16" y1="5" x2="16" y2="19"/>
  </g>
</svg>`;
  const css = `.play-pause { cursor: pointer; }
.play-pause .play-icon, .play-pause .pause-icon { transition: all ${dur}s ease; }
.play-pause.playing .play-icon { display: none; }
.play-pause.playing .pause-icon { display: block; }`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
