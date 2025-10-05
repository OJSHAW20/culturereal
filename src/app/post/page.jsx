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
  const [origin, setOrigin] = useState(""); 
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
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      userName,
      origin,
      culture: origin,
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
          Share an <span className="font-medium">image</span>, a short caption, a theme, and your culture & country.
        </p>

        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-4 space-y-4">
          {/* IMAGE SECTION */}
          <div>
            <label className="block text-sm font-medium">Image</label>
            <input
              type="url"
              placeholder="https://images.unsplash.com/..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="mt-1 w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* 📎 Custom upload button */}
            <div className="mt-2">
              <label
                htmlFor="file-upload"
                className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                📎 Upload an image
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      setImageUrl(event.target.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>

            {imageUrl ? (
              <div className="mt-3 w-full overflow-hidden rounded-xl bg-gray-100 ring-1 ring-black/5" style={{ height: 180 }}>
                <img src={imageUrl} alt="preview" className="w-full h-full object-cover block" />
              </div>
            ) : null}
          </div>

          {/* CAPTION */}
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

          {/* THEME + ORIGIN */}
          <div className="grid grid-cols-2 gap-3">
            <div>
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

            <div>
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

          {/* ERROR */}
          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          {/* BUTTONS */}
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
      </main>
      <FooterNav />
    </>
  );
}
