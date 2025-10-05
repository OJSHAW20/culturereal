"use client";
import { useEffect, useState } from "react";

export default function useUtcCountdown() {
  const [remaining, setRemaining] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      // Next midnight in UTC
      const nextUTC = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + 1,
        0, 0, 0, 0
      ));
      const ms = nextUTC.getTime() - now.getTime();
      const h = Math.max(0, Math.floor(ms / 3600000));
      const m = Math.max(0, Math.floor((ms % 3600000) / 60000));
      setRemaining(`${h}h ${m}m`);
    };

    update(); // initial
    const id = setInterval(update, 60 * 1000); // update every minute
    return () => clearInterval(id);
  }, []);

  return remaining;
}
