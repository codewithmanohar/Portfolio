"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { LogOut, RefreshCw, Search } from "lucide-react";

export default function DashboardClient() {
  const [data, setData] = useState({ visitors: [], pagination: {}, stats: {} });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [page, setPage] = useState(1);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        page,
        limit: 20,
        search,
        dateFilter
      });
      const res = await fetch(`/api/admin/visitors?${queryParams.toString()}`);
      if (res.status === 401) {
        router.push('/admin/analytics/login');
        return;
      }
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }, [page, search, dateFilter, router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/analytics/login");
    router.refresh();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Total Page Views", value: data.stats.totalViews || 0 },
            { label: "Unique Visitors", value: data.stats.uniqueVisitors || 0 },
            { label: "Today's Visitors", value: data.stats.todayVisitors || 0 },
            { label: "Last 7 Days", value: data.stats.weekVisitors || 0 }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</h3>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSearch} className="flex w-full md:w-auto items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search IP or Path..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
              Search
            </button>
          </form>

          <div className="flex w-full md:w-auto items-center gap-4">
            <select 
              value={dateFilter}
              onChange={(e) => { setDateFilter(e.target.value); setPage(1); }}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="7days">Last 7 Days</option>
            </select>

            <button 
              onClick={() => { setPage(1); fetchData(); }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} /> 
              Refresh
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 font-medium text-sm text-gray-500 dark:text-gray-400">Date/Time</th>
                  <th className="p-4 font-medium text-sm text-gray-500 dark:text-gray-400">IP Address</th>
                  <th className="p-4 font-medium text-sm text-gray-500 dark:text-gray-400">Location</th>
                  <th className="p-4 font-medium text-sm text-gray-500 dark:text-gray-400">Page</th>
                  <th className="p-4 font-medium text-sm text-gray-500 dark:text-gray-400">Device/OS</th>
                  <th className="p-4 font-medium text-sm text-gray-500 dark:text-gray-400">Browser</th>
                  <th className="p-4 font-medium text-sm text-gray-500 dark:text-gray-400">Referrer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {loading && data.visitors.length === 0 ? (
                  <tr><td colSpan="7" className="p-8 text-center text-gray-500">Loading...</td></tr>
                ) : data.visitors.length === 0 ? (
                  <tr><td colSpan="7" className="p-8 text-center text-gray-500">No visitors found.</td></tr>
                ) : (
                  data.visitors.map((v) => (
                    <tr key={v._id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
                      <td className="p-4 text-sm whitespace-nowrap">{new Date(v.timestamp).toLocaleString()}</td>
                      <td className="p-4 text-sm font-mono">{v.ip}</td>
                      <td className="p-4 text-sm">{v.location}</td>
                      <td className="p-4 text-sm text-blue-500 truncate max-w-[150px] hover:max-w-none" title={v.path}>{v.path}</td>
                      <td className="p-4 text-sm capitalize">{v.device} / {v.os}</td>
                      <td className="p-4 text-sm">{v.browser}</td>
                      <td className="p-4 text-sm text-gray-500 truncate max-w-[150px]" title={v.referrer}>{v.referrer !== 'Direct' ? v.referrer : '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          {data.pagination?.totalPages > 1 && (
            <div className="flex justify-between items-center p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Page {data.pagination.page} of {data.pagination.totalPages}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md disabled:opacity-50"
                >
                  Previous
                </button>
                <button 
                  onClick={() => setPage(p => Math.min(data.pagination.totalPages, p + 1))}
                  disabled={page === data.pagination.totalPages}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
