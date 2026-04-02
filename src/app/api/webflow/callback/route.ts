import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const error = request.nextUrl.searchParams.get('error');
  if (error) {
    const desc = request.nextUrl.searchParams.get('error_description') || error;
    return new NextResponse(
      `<html><body><script>
        window.opener.postMessage({ type: 'webflow_auth_error', error: '${desc.replace(/'/g, "\\'")}' }, '*');
        window.close();
      </script><p>Error: ${desc}</p></body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }

  const code = request.nextUrl.searchParams.get('code');
  if (!code) {
    return new NextResponse('Missing authorization code', { status: 400 });
  }

  const clientId = process.env.WEBFLOW_CLIENT_ID!;
  const clientSecret = process.env.WEBFLOW_CLIENT_SECRET!;
  const redirectUri = process.env.WEBFLOW_REDIRECT_URI || `${process.env.NEXT_PUBLIC_APP_URL}/api/webflow/callback`;

  const tokenRes = await fetch('https://api.webflow.com/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    }),
  });

  if (!tokenRes.ok) {
    const errText = await tokenRes.text();
    console.error('Webflow token exchange failed:', tokenRes.status, errText);
    return new NextResponse(`Failed to exchange token: ${errText}`, { status: 500 });
  }

  const { access_token } = await tokenRes.json();

  // Send token back to opener window and close popup
  return new NextResponse(
    `<html><body><script>
      window.opener.postMessage({ type: 'webflow_auth', token: '${access_token}' }, '*');
      window.close();
    </script></body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}
