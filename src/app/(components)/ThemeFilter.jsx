"use client";
import { useFeedStore } from "@/store/useFeedStore";

const THEMES = [
  "Random",        // special
  "All",           // special
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
    <div className="px-4 pt-3">
      <label className="block text-xs text-gray-600 mb-1">Explore by theme</label>
      <select
        value={selectedTheme}
        onChange={(e) => setSelectedTheme(e.target.value)}
        className="w-full rounded-lg border px-3 py-2 text-sm bg-white"
      >
        {THEMES.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
    </div>
  );
}
