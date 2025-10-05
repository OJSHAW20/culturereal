"use client";

import { useEffect } from "react";
import { useFeedStore } from "@/store/useFeedStore";

export default function MidnightRollover() {
  const init = useFeedStore((s) => s.init);

  useEffect(() => {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setDate(now.getDate() + 1);
    nextMidnight.setHours(0, 0, 0, 0);

    const msUntilMidnight = nextMidnight.getTime() - now.getTime();

    const timer = setTimeout(() => {
      init();              // reseed for new day
      location.reload();   // refresh UI to show new event/feed
    }, msUntilMidnight);

    return () => clearTimeout(timer);
  }, [init]);

  return null;
}
