import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.WEBFLOW_CLIENT_ID;
  const redirectUri = process.env.WEBFLOW_REDIRECT_URI || `${process.env.NEXT_PUBLIC_APP_URL}/api/webflow/callback`;

  if (!clientId) {
    return NextResponse.json({ error: 'Webflow client ID not configured' }, { status: 500 });
  }

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    scope: 'assets:write sites:read',
    redirect_uri: redirectUri,
  });

  return NextResponse.redirect(`https://webflow.com/oauth/authorize?${params}`);
}
