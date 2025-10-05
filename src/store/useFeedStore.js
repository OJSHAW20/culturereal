import { create } from "zustand";
import { POSTS } from "@/data/posts.seed";
import { getJSON, setJSON } from "@/lib/storage";

const dayKey = () => new Date().toISOString().slice(0, 10);

export const useFeedStore = create((set, get) => ({
  todayKey: dayKey(),
  posts: [],

  init: () => {
    const key = dayKey();
    const stored = getJSON("posts:" + key, null);
    const posts = stored || POSTS;
    set({ todayKey: key, posts });
    if (!stored) {
      setJSON("posts:" + key, posts);
    }
  },

  addPost: (post) => {
    const { todayKey, posts } = get();
    const newPosts = [post, ...posts];
    set({ posts: newPosts });
    setJSON("posts:" + todayKey, newPosts);
  },
}));
