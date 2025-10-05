"use client";

import Header from "../(components)/Header";
import FooterNav from "../(components)/FooterNav";
import { getTodayEvent } from "@/data/dailyEvent.seed";
import { useFeedStore } from "@/store/useFeedStore";
import { useSearchParams } from "next/navigation";

export default function InfoPage() {
  const { title, description } = getTodayEvent();
  const posts = useFeedStore((s) => s.posts) || [];
  const params = useSearchParams();
  const cultureParam = params.get("culture");

  // stats (today)
  const totalPosts = posts.length;
  const uniqueCultures = new Set(posts.map((p) => p.culture)).size;

  const cultureBlurb = cultureParam
    ? `You're exploring ${cultureParam}. Tap culture chips in the feed to learn more about how people share this from different places.`
    : null;

  return (
    <>
      <Header />
      <main className="p-4 space-y-5">
        {/* Event explainer (full) */}
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="p-4 md:p-5">
            <h2 className="text-lg font-semibold">About today’s event</h2>
            <p className="mt-1 text-sm text-gray-900 font-medium">{title}</p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              {description}
            </p>

            {/* quick stats (posts + cultures) */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-gray-50 p-3 border border-gray-100">
                <div className="text-xl font-semibold">{totalPosts}</div>
                <div className="text-xs text-gray-600">posts today</div>
              </div>
              <div className="rounded-xl bg-gray-50 p-3 border border-gray-100">
                <div className="text-xl font-semibold">{uniqueCultures}</div>
                <div className="text-xs text-gray-600">cultures today</div>
              </div>
            </div>

            {/* optional culture spotlight */}
            {cultureBlurb && (
              <div className="mt-4 rounded-xl bg-indigo-50/80 border border-indigo-100 p-3 text-indigo-900 text-sm">
                {cultureBlurb}
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterNav />
    </>
  );
}
