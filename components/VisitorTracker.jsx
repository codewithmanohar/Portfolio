"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function VisitorTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const trackedPaths = useRef(new Set());

  useEffect(() => {
    // Avoid double tracking in React Strict Mode or fast navigations
    const currentUrl = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
    
    if (trackedPaths.current.has(currentUrl)) {
      return;
    }
    
    trackedPaths.current.add(currentUrl);

    const trackVisit = async () => {
      try {
        // Skip tracking if in admin routes
        if (pathname.startsWith('/admin')) {
          return;
        }

        await fetch('/api/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pathname,
            search: searchParams.toString(),
            referrer: document.referrer,
            userAgent: navigator.userAgent,
            screenWidth: window.innerWidth,
          }),
        });
      } catch (error) {
        console.error("Failed to track visit", error);
      }
    };

    trackVisit();
  }, [pathname, searchParams]);

  return null;
}
