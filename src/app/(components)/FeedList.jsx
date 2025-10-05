"use client";
import { useFeedStore } from "@/store/useFeedStore";
import PostCard from "./PostCard";

export default function FeedList() {
  const posts = useFeedStore((s) => s.posts);

  if (!posts?.length) {
    return (
      <div className="p-6 text-center text-gray-500">
        No posts yet. Check back later!
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
