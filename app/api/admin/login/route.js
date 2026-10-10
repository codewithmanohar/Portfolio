import { NextResponse } from 'next/server';
import { encrypt } from '@/lib/session';

export async function POST(request) {
  try {
    const { password } = await request.json();

    const adminPassword = process.env.ANALYTICS_ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json({ error: 'Admin password not configured' }, { status: 500 });
    }

    if (password === adminPassword) {
      // Create session
      const session = await encrypt({ role: 'admin' });
      
      const response = NextResponse.json({ success: true });
      response.cookies.set('analytics_session', session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 7 * 24 * 60 * 60, // 7 days
      });
      
      return response;
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
