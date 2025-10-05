"use client";

import Header from "../(components)/Header";
import FooterNav from "../(components)/FooterNav";
import { useFeedStore } from "@/store/useFeedStore";

export default function ProfilePage() {
  const posts = useFeedStore((s) => s.posts);
  const userName = typeof window !== "undefined" ? localStorage.getItem("user") || "Guest" : "Guest";

  // Get all posts by this user
  const userPosts = posts.filter((p) => p.userName === userName);

  // Count unique cultures they've posted about
  const cultures = new Set(userPosts.map((p) => p.culture)).size;

  // Simple streak logic (per day keys stored)
  let streak = 0;
  try {
    const keys = Object.keys(localStorage)
      .filter((k) => k.startsWith("posts:"))
      .sort();
    for (let i = keys.length - 1; i >= 0; i--) {
      const dayPosts = JSON.parse(localStorage.getItem(keys[i]));
      if (dayPosts.some((p) => p.userName === userName)) {
        streak++;
      } else {
        break;
      }
    }
  } catch {}

  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        <section className="rounded-xl border p-4 bg-white">
          <h2 className="text-lg font-semibold">{userName}'s Profile</h2>
          <p className="text-sm text-gray-600 mt-1">Track your contributions.</p>

          <div className="mt-3 grid grid-cols-2 gap-3 text-center">
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="text-lg font-semibold">{cultures}</div>
              <div className="text-xs text-gray-600">cultures shared</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="text-lg font-semibold">{streak}</div>
              <div className="text-xs text-gray-600">day streak</div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-base font-semibold mb-2">Your posts</h3>
          <div className="space-y-3">
            {userPosts.length === 0 && (
              <p className="text-sm text-gray-500">You haven’t posted yet.</p>
            )}
            {userPosts.map((p) => (
              <div key={p.id} className="border rounded-lg overflow-hidden bg-white">
                <img src={p.imageUrl} alt={p.caption} className="w-full h-40 object-cover" />
                <div className="p-2">
                  <p className="text-sm font-medium">{p.culture} — {p.country}</p>
                  <p className="text-xs text-gray-600">{p.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <FooterNav />
    </>
  );
}
