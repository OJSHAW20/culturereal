"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../(components)/Header";
import FooterNav from "../(components)/FooterNav";
import { useFeedStore } from "@/store/useFeedStore";

const THEMES = [
  "Sharing a meal",
  "Being with family",
  "Partying",
  "Celebration",
  "Tradition",
];

export default function PostPage() {
  const router = useRouter();
  const addPost = useFeedStore((s) => s.addPost);

  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [theme, setTheme] = useState("");
  const [origin, setOrigin] = useState(""); // new: Culture & country
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!imageUrl.trim() || !caption.trim() || !theme.trim() || !origin.trim()) {
      setError("Please fill all fields.");
      return;
    }

    const userName = localStorage.getItem("user") || "Guest";

    const post = {
      id: String(Date.now()),
      userName,
      // store origin in both 'origin' and 'culture' for stats + chips
      origin,              // e.g. "Yoruba — Nigeria" or "Yoruba (Nigeria)"
      culture: origin,     // keep existing stats logic working
      imageUrl,
      caption,
      theme,
      createdAt: new Date().toISOString(),
    };

    addPost(post);
    router.push("/");
  };

  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Create a post</h2>
        <p className="text-sm text-gray-600">
          Share an <span className="font-medium">image URL</span>, a short caption, a theme, and your culture & country.
        </p>

        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Image URL</label>
            <input
              type="url"
              placeholder="https://images.unsplash.com/..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="mt-1 w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            {imageUrl ? (
              <div className="mt-3 w-full overflow-hidden rounded-xl bg-gray-100 ring-1 ring-black/5" style={{ height: 180 }}>
                <img src={imageUrl} alt="preview" className="w-full h-full object-cover block" />
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
              className="mt-1 w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              maxLength={120}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium">Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="mt-1 w-full rounded-xl border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select a theme</option>
                {THEMES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium">Culture & country</label>
              <input
                type="text"
                placeholder="e.g. Yoruba — Nigeria"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="mt-1 w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="pt-1 flex gap-2">
            <button
              type="submit"
              className="rounded-xl bg-black text-white px-4 py-2 text-sm shadow-sm hover:bg-gray-900"
            >
              Post
            </button>
            <button
              type="button"
              onClick={() => history.back()}
              className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
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
