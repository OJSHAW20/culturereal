import { create } from "zustand";
import { POSTS } from "@/data/posts.seed";

const SEED_VERSION = "diwali-v1"; // bump this when you change seeds

export const useFeedStore = create((set) => ({
  posts: [],
  init: () => {
    if (typeof window === "undefined") return;

    const storedVersion = localStorage.getItem("seedVersion");
    const storedPosts = localStorage.getItem("posts:today");

    if (!storedPosts || storedVersion !== SEED_VERSION) {
      // First time or new seed version → use Diwali seed
      set({ posts: POSTS });
      localStorage.setItem("posts:today", JSON.stringify(POSTS));
      localStorage.setItem("seedVersion", SEED_VERSION);
    } else {
      // Already seeded → load from storage
      set({ posts: JSON.parse(storedPosts) });
    }
  },
  addPost: (post) => {
    set((state) => {
      const updated = [post, ...state.posts];
      localStorage.setItem("posts:today", JSON.stringify(updated));
      return { posts: updated };
    });
  },
}));
