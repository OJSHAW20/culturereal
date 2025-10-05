"use client";

import { useMemo, useState } from "react";
import { useFeedStore } from "@/store/useFeedStore";
import ThemeFilter from "./ThemeFilter";
import PostCard from "./PostCard";

export default function FeedList() {
  const posts = useFeedStore((s) => s.posts);

  // Local theme state (no dependency on store setters)
  const [selectedTheme, setSelectedTheme] = useState("All");

  // Build available themes from posts so dropdown stays in sync
  const themes = useMemo(() => {
    const set = new Set();
    posts.forEach((p) => p.theme && set.add(p.theme));
    return ["All", "Random", ...Array.from(set)];
  }, [posts]);

  // Sorting:
  // - Random: shuffle
  // - Specific theme: bring matches to top, keep others after (stable-ish)
  // - All: original order
  const displayPosts = useMemo(() => {
    let arr = posts;

    if (selectedTheme === "Random") {
      return [...arr].sort(() => Math.random() - 0.5);
    }

    if (selectedTheme !== "All") {
      const matches = [];
      const others = [];
      for (const p of arr) {
        if ((p.theme || "") === selectedTheme) matches.push(p);
        else others.push(p);
      }
      return [...matches, ...others];
    }

    return arr;
  }, [posts, selectedTheme]);

  return (
    <>
      <ThemeFilter
        value={selectedTheme}
        onChange={setSelectedTheme}
        themes={themes}
      />

      <div className="p-4 space-y-4">
        {displayPosts.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No posts yet.
          </div>
        ) : (
          displayPosts.map((p, i) => (
            <PostCard
              key={p.id || `${p.userName || "user"}-${i}-${p.createdAt || ""}`}
              post={p}
            />
          ))
        )}
      </div>
    </>
  );
}
