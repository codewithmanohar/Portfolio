import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Extract IP from headers
    const forwardedFor = request.headers.get('x-forwarded-for');
    let ip = 'unknown';
    if (forwardedFor) {
      ip = forwardedFor.split(',')[0].trim();
    } else {
      ip = request.headers.get('x-real-ip') || 'unknown';
    }

    const { pathname, search, referrer, userAgent, screenWidth } = data;
    
    let device = 'desktop';
    if (screenWidth < 768) {
      device = 'mobile';
    } else if (screenWidth < 1024) {
      device = 'tablet';
    }

    // Try to extract some basic browser info from userAgent
    let browser = 'Unknown';
    if (userAgent) {
      if (userAgent.includes('Firefox')) browser = 'Firefox';
      else if (userAgent.includes('Chrome')) browser = 'Chrome';
      else if (userAgent.includes('Safari')) browser = 'Safari';
      else if (userAgent.includes('Edge')) browser = 'Edge';
    }

    let os = 'Unknown';
    if (userAgent) {
      if (userAgent.includes('Windows')) os = 'Windows';
      else if (userAgent.includes('Mac OS')) os = 'Mac OS';
      else if (userAgent.includes('Linux')) os = 'Linux';
      else if (userAgent.includes('Android')) os = 'Android';
      else if (userAgent.includes('iOS')) os = 'iOS';
    }

    // Location could be pulled from headers like x-vercel-ip-city, x-vercel-ip-country on Vercel
    const city = request.headers.get('x-vercel-ip-city') || 'Unknown City';
    const country = request.headers.get('x-vercel-ip-country') || 'Unknown Country';

    const client = await clientPromise;
    if (!client) {
      throw new Error('Database connection not established. Check MONGODB_URI.');
    }
    const db = client.db();

    const visitorRecord = {
      ip,
      timestamp: new Date(),
      path: pathname,
      query: search,
      method: 'GET', // visits are inherently page views
      browser,
      os,
      device,
      location: `${city}, ${country}`,
      referrer: referrer || 'Direct',
    };

    await db.collection('visitors').insertOne(visitorRecord);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return NextResponse.json({ error: 'Failed to track visitor' }, { status: 500 });
  }
}
