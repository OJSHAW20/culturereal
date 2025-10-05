"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getTodayEvent } from "@/data/dailyEvent.seed";
import { useMemo } from "react";
import { Clock } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/"; // only show event block on home

  const { title, description } = getTodayEvent();

  // Countdown until 00:00 UTC
  const countdown = useMemo(() => {
    const now = new Date();
    const next = new Date();
    next.setUTCHours(24, 0, 0, 0);
    const diff = next.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  }, []);

  // First sentence preview from description
  const preview = useMemo(() => {
    if (!description) return "";
    const match = description.match(/.*?[.!?](\s|$)/);
    return (match ? match[0] : description).trim();
  }, [description]);

  return (
    <header className="mb-6">
      {/* Top bar: brand + countdown */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight">
          BeT<span role="img" aria-label="globe">🌍</span>gether
        </h1>

        {isHome && (
          <div className="flex items-center gap-1 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800 shadow-sm">
          <Clock size={14} className="inline-block mr-1 text-indigo-800" />
          {countdown} <span className="ml-1 text-indigo-400">to 00:00 UTC</span>
         </div>
        
        )}
      </div>

      {/* Centered event block */}
      {isHome && (
        <div className="mt-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Event of the Day
          </p>
          <h2 className="mt-1 text-xl font-bold text-gray-900">{title}</h2>
          {preview && (
            <p className="mt-1 text-sm text-gray-600">{preview}</p>
          )}
          <Link
            href="/info"
            className="mt-2 inline-block text-xs text-indigo-400 hover:text-indigo-600 underline underline-offset-4"
          >
            More about today’s event
          </Link>
        </div>
      )}

      <div className="mt-4 border-t border-gray-200" />
    </header>
  );
}
