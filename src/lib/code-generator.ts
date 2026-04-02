import { animations } from '@/animations';
import { CustomizeOptions } from '@/animations/types';

export function generateAnimationCode(animationId: string, opts: CustomizeOptions) {
  const anim = animations.find(a => a.id === animationId);
  if (!anim) return null;
  return anim.generateCode(opts);
}

export function generateJsonExport(animationId: string, opts: CustomizeOptions) {
  const anim = animations.find(a => a.id === animationId);
  if (!anim) return null;
  const code = anim.generateCode(opts);
  return JSON.stringify({
    id: anim.id,
    name: anim.name,
    category: anim.category,
    trigger: anim.trigger,
    customization: {
      color: opts.color,
      size: opts.size,
      speed: opts.speed,
      strokeWidth: opts.strokeWidth,
    },
    code: {
      svg: code.svg,
      css: code.css,
      html: code.html,
    },
  }, null, 2);
}

export function generateSvgBlob(svgString: string): Blob {
  return new Blob([svgString], { type: 'image/svg+xml' });
}

export function downloadFile(content: string, filename: string, type: string = 'image/svg+xml') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadHtmlFile(html: string, css: string, filename: string) {
  const fullHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Micro Animation</title>
  <style>
    body { display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #0a0a0a; }
    ${css}
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
  downloadFile(fullHtml, filename, 'text/html');
}
