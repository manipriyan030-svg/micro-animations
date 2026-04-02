'use client';
import { AnimationProps, CustomizeOptions } from './types';

export default function ChatBubble({ color = '#EB742E', size = 48, speed = 1, strokeWidth = 2 }: AnimationProps) {
  const dur = 0.4 / speed;
  const id = 'chat-' + Math.random().toString(36).slice(2, 6);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={id} style={{ overflow: 'visible' }}>
      <style>{`
        .${id} { cursor: pointer; }
        .${id} g { transition: transform ${dur}s ease; transform-origin: center; }
        .${id}:hover g { transform: scale(1.08) rotate(-3deg); }
      `}</style>
      <g><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></g>
    </svg>
  );
}
export function generateChatBubbleCode(opts: CustomizeOptions) {
  const dur = 0.4 / opts.speed;
  const svg = `<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 24 24" fill="none" stroke="${opts.color}" stroke-width="${opts.strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="chat-bubble"><g><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></g></svg>`;
  const css = `.chat-bubble{cursor:pointer}.chat-bubble g{transition:transform ${dur}s ease;transform-origin:center}.chat-bubble:hover g{transform:scale(1.08) rotate(-3deg)}`;
  return { css, svg, html: `<style>${css}</style>\n${svg}` };
}
