"use client";
import { useFeedStore } from "@/store/useFeedStore";

const THEMES = [
  "Random",
  "All",
  "Sharing a meal",
  "Being with family",
  "Partying",
  "Celebration",
  "Tradition",
];

export default function ThemeFilter() {
  const selectedTheme = useFeedStore((s) => s.selectedTheme);
  const setSelectedTheme = useFeedStore((s) => s.setSelectedTheme);

  return (
    <div className="mt-3 mb-1">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[15px] font-semibold text-gray-800">
          Explore by theme
        </h2>
        <select
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
          className="w-44 rounded-full border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:border-gray-400 focus:outline-none"
        >
          {THEMES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
