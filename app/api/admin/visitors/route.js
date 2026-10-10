import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { decrypt } from '@/lib/session';

export async function GET(request) {
  try {
    // Basic auth check
    const sessionCookie = request.cookies.get('analytics_session')?.value;
    if (!sessionCookie) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const payload = await decrypt(sessionCookie);
    if (!payload || payload.role !== 'admin') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page')) || 1;
    const limit = parseInt(url.searchParams.get('limit')) || 20;
    const search = url.searchParams.get('search') || '';
    const dateFilter = url.searchParams.get('dateFilter') || 'all'; // 'all', 'today', '7days'
    
    const client = await clientPromise;
    if (!client) {
      throw new Error('Database connection not established. Check MONGODB_URI.');
    }
    const db = client.db();
    
    let query = {};

    // Search query (IP or Path)
    if (search) {
      query.$or = [
        { ip: { $regex: search, $options: 'i' } },
        { path: { $regex: search, $options: 'i' } }
      ];
    }

    // Date filter
    const now = new Date();
    if (dateFilter === 'today') {
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      query.timestamp = { $gte: today };
    } else if (dateFilter === '7days') {
      const lastWeek = new Date(now);
      lastWeek.setDate(now.getDate() - 7);
      query.timestamp = { $gte: lastWeek };
    }

    const skip = (page - 1) * limit;

    const totalRecords = await db.collection('visitors').countDocuments(query);
    const visitors = await db.collection('visitors')
      .find(query)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    // Stats calculations
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const lastWeek = new Date(now);
    lastWeek.setDate(now.getDate() - 7);

    // Use aggregation for stats to be efficient
    const totalViews = await db.collection('visitors').countDocuments();
    const uniqueVisitors = (await db.collection('visitors').distinct('ip')).length;
    const todayVisitorsCount = await db.collection('visitors').countDocuments({ timestamp: { $gte: today } });
    const weekVisitorsCount = await db.collection('visitors').countDocuments({ timestamp: { $gte: lastWeek } });

    return NextResponse.json({
      visitors,
      pagination: {
        total: totalRecords,
        page,
        limit,
        totalPages: Math.ceil(totalRecords / limit)
      },
      stats: {
        totalViews,
        uniqueVisitors,
        todayVisitors: todayVisitorsCount,
        weekVisitors: weekVisitorsCount
      }
    });

  } catch (error) {
    console.error('Error fetching visitors:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
