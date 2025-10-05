"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../(components)/Header";
import FooterNav from "../(components)/FooterNav";
import { useFeedStore } from "@/store/useFeedStore";

export default function PostPage() {
  const router = useRouter();
  const addPost = useFeedStore((s) => s.addPost);

  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [culture, setCulture] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const THEMES = [
    "Sharing a meal",
    "Being with family",
    "Partying",
    "Celebration",
    "Tradition",
  ];

  const [theme, setTheme] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    // minimal validation
    if (!imageUrl.trim() || !caption.trim() || !culture.trim() || !country.trim()) {
      setError("Please fill all fields.");
      return;
    }

    const post = {
      id: String(Date.now()),
      userName: localStorage.getItem("user") || "Guest",
      culture,
      country,
      imageUrl,
      caption,
      theme, 
      createdAt: new Date().toISOString(),
      reactions: 0, // baseline for future
    };

    addPost(post);
    router.push("/"); // go back to feed
  };

  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        <h2 className="text-lg font-semibold">Create a post</h2>
        <p className="text-sm text-gray-600">
          Share an <span className="font-medium">image URL</span>, a short caption, your culture, and country.
        </p>

        <form onSubmit={onSubmit} className="rounded-xl border bg-white p-4 space-y-3">
          <div>
            <label className="block text-sm font-medium">Image URL</label>
            <input
              type="url"
              placeholder="https://images.unsplash.com/..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              required
            />
            {/* live preview (optional) */}
            {imageUrl ? (
              <div className="mt-3 w-full overflow-hidden rounded-lg bg-gray-100" style={{ height: 180 }}>
                <img
                  src={imageUrl}
                  alt="preview"
                  className="w-full h-full object-cover block"
                />
              </div>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium">Caption</label>
            <input
              type="text"
              placeholder="What’s the story here?"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
              maxLength={120}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Theme</label>
            <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                required
            >
                <option value="">Select a theme</option>
                {THEMES.map((t) => (
                <option key={t} value={t}>{t}</option>
                ))}
            </select>
            </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Culture</label>
              <input
                type="text"
                placeholder="e.g. Yoruba"
                value={culture}
                onChange={(e) => setCulture(e.target.value)}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                placeholder="e.g. Nigeria"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm"
                required
              />
            </div>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="pt-2 flex gap-2">
            <button
              type="submit"
              className="rounded-lg bg-black text-white px-4 py-2 text-sm"
            >
              Post
            </button>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="rounded-lg border px-4 py-2 text-sm"
            >
              Cancel
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500">
          Tip: Use a reliable URL (Unsplash, Pexels, Wikimedia) for best results.
        </p>
      </main>
      <FooterNav />
    </>
  );
}
