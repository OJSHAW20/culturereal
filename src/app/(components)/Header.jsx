"use client";
import { useState } from "react";
import { getTodayEvent } from "@/data/dailyEvent.seed";
import useUtcCountdown from "./useUtcCountdown";

export default function Header() {
  const { title, description } = getTodayEvent();
  const [open, setOpen] = useState(false);
  const remaining = useUtcCountdown();

  // add this small helper inside the component (above return)
  const preview = (() => {
    // two-sentence preview
    const parts = (description || "").split(/(?<=[.!?])\s+/).slice(0, 2).join(" ");
    return parts || description;
  })();

  return (
    <header className="sticky top-0 z-10 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="pt-4">
        {/* brand + countdown */}
        <div className="flex items-center justify-between">
          {/* BeTogether with globe as the 'o' */}
          <h1 className="text-3xl font-extrabold tracking-tight">
            BeT<span role="img" aria-label="globe" className="inline-block align-[-1px]">🌍</span>gether
          </h1>

          <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-800 shadow-sm">
            ⏱️ {remaining}
            <span className="ml-0.5 text-[10px] text-indigo-600">to 00:00 UTC</span>
          </span>
        </div>

        {/* event line */}
        <p className="mt-2 text-[16px] text-gray-900">
          <span className="mr-1 inline-block h-2 w-2 translate-y-[-1px] rounded-full bg-indigo-500" />
          <span className="font-semibold">Event of the day:</span>{" "}
          <span className="font-medium">{title}</span>
        </p>

        {/* toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="group mt-2 inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
          aria-expanded={open}
          aria-controls="event-desc"
        >
          <svg
            className={`h-5 w-5 text-gray-500 transition-transform group-hover:text-gray-700 ${open ? "rotate-180" : ""}`}
            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
          >
            <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z"/>
          </svg>
          <span className="underline underline-offset-4 decoration-gray-400">
            {open ? "Hide info" : "More about today’s event"}
          </span>
        </button>

        {/* accordion */}
        <div
          id="event-desc"
          className={`transition-all overflow-hidden ${open ? "max-h-40" : "max-h-0"}`}
        >
          <p className="mt-2 text-sm text-gray-700 pr-1">
            {preview}{" "}
            <a
              href="/info"
              className="inline text-indigo-700 hover:text-indigo-900 underline underline-offset-4 ml-1"
            >
              See more on Info →
            </a>
          </p>
        </div>
      </div>

      <div className="mt-3 border-t border-gray-200" />
    </header>
  );
}
