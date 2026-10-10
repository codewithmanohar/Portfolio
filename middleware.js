import { NextResponse } from 'next/server';
import { decrypt } from './lib/session';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Protect admin routes except login
  if (pathname.startsWith('/admin/analytics') && pathname !== '/admin/analytics/login') {
    const sessionCookie = request.cookies.get('analytics_session')?.value;
    
    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/admin/analytics/login', request.url));
    }

    const payload = await decrypt(sessionCookie);
    if (!payload || payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/admin/analytics/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/analytics/:path*'],
};
