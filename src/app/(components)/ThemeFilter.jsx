"use client";

export default function ThemeFilter({ value, onChange, themes = [] }) {
  return (
    <div className="flex justify-end px-4 pt-2">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-44 rounded-full border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm hover:border-gray-400"
      >
        {themes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}
