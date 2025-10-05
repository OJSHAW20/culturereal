"use client";
import { useState } from "react";
import { getTodayEvent } from "@/data/dailyEvent.seed";
import useUtcCountdown from "./useUtcCountdown"; // ← add this

export default function Header() {
  const { title, description } = getTodayEvent();
  const [open, setOpen] = useState(false);
  const remaining = useUtcCountdown();           // ← add this

  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur">
      <div className="px-4 pt-3">
        <h1 className="text-xl font-semibold">culturereal</h1>
        <p className="text-sm text-gray-700 mt-1">
          <span className="font-medium">Event of the day:</span> {title}
        </p>

        {/* NEW: UTC countdown */}
        <p className="text-xs text-gray-500 mt-1">
          Next event starts in {remaining} (00:00 UTC)
        </p>

        {/* existing dropdown */}
        <div className="mt-2">
          <button
            onClick={() => setOpen(!open)}
            className="text-xs text-gray-600 underline underline-offset-4 hover:text-gray-800"
            aria-expanded={open}
            aria-controls="event-desc"
          >
            {open ? "Hide info" : "More about today’s event"}
          </button>
          <div
            id="event-desc"
            className={`transition-all overflow-hidden ${open ? "max-h-40" : "max-h-0"}`}
          >
            <p className="text-sm text-gray-600 mt-2 pr-1">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-3 border-t" />
    </header>
  );
}
