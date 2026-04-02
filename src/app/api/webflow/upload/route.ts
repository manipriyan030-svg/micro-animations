import { NextRequest, NextResponse } from 'next/server';
import { animations } from '@/animations';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { siteId, animationId } = body;
  console.log('Upload request:', { siteId, animationId, hasToken: !!token });

  const anim = animations.find(a => a.id === animationId);
  if (!anim) {
    return NextResponse.json({ error: 'Animation not found' }, { status: 404 });
  }

  // Generate SVG code with defaults
  const code = anim.generateCode({ color: '#00e5a0', size: 48, speed: 1, strokeWidth: 2 });
  const svgContent = `${code.html}`;
  const fileHash = crypto.createHash('md5').update(svgContent).digest('hex');
  const fileName = `${animationId}.svg`;

  // Step 1: Create asset metadata
  const createRes = await fetch(`https://api.webflow.com/v2/sites/${siteId}/assets`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'accept-version': '2.0.0',
    },
    body: JSON.stringify({
      fileName,
      fileHash,
      contentType: 'image/svg+xml',
    }),
  });

  if (!createRes.ok) {
    const err = await createRes.text();
    console.error('Webflow create asset failed:', createRes.status, err);
    return NextResponse.json({ error: 'Failed to create asset', details: err }, { status: createRes.status });
  }

  const { uploadUrl, uploadDetails } = await createRes.json();

  // Step 2: Upload the file to S3
  const formData = new FormData();
  if (uploadDetails) {
    Object.entries(uploadDetails).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
  }
  formData.append('file', new Blob([svgContent], { type: 'image/svg+xml' }), fileName);

  const uploadRes = await fetch(uploadUrl, {
    method: 'POST',
    body: formData,
  });

  if (!uploadRes.ok && uploadRes.status !== 204) {
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
