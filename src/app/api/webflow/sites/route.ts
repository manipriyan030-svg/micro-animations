import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const res = await fetch('https://api.webflow.com/v2/sites', {
    headers: {
      Authorization: `Bearer ${token}`,
      'accept-version': '2.0.0',
    },
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch sites' }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
