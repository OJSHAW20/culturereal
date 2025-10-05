"use client";
import { useMemo } from "react";
import { useFeedStore } from "@/store/useFeedStore";
import ThemeFilter from "./ThemeFilter";
import PostCard from "./PostCard";

export default function FeedList() {
  const posts = useFeedStore((s) => s.posts);
  const selectedTheme = useFeedStore((s) => s.selectedTheme);

  const displayPosts = useMemo(() => {
    let arr = posts;

    // Filter by theme (skip for All/Random)
    if (selectedTheme && selectedTheme !== "All" && selectedTheme !== "Random") {
      arr = posts.filter((p) => p.theme === selectedTheme);
    }

    // Shuffle for Random
    if (selectedTheme === "Random") {
      arr = [...arr].sort(() => Math.random() - 0.5);
    }

    return arr;
  }, [posts, selectedTheme]);

  return (
    <>
      <ThemeFilter />
      <div className="p-4 space-y-4">
        {displayPosts.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No posts match this theme yet.
          </div>
        ) : (
            displayPosts.map((p, i) => (
                <PostCard
                  key={`${i}-${p.userName ?? "user"}`}
                  post={p}
                />
              ))
        )}
      </div>
    </>
  );
}
