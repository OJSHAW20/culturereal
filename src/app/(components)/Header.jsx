"use client";
import { getTodayPrompt } from "@/data/dailyEvent.seed";

export default function Header() {
  const prompt = getTodayPrompt();
  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur">
  <div className="px-4 py-3">
    <h1 className="text-xl font-semibold">culturereal</h1>
    <p className="text-sm text-gray-600 mt-1">Event of the day: <span className="font-medium">{prompt}</span></p>
  </div>
  <div className="border-t" />
</header>
  );
}
