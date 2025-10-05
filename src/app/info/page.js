"use client";

import { useSearchParams } from "next/navigation";
import Header from "../(components)/Header";
import FooterNav from "../(components)/FooterNav";
import { CULTURES } from "@/data/cultures.seed";
import { getTodayEvent } from "@/data/dailyEvent.seed";

export default function InfoPage() {
  const params = useSearchParams();
  const culture = params.get("culture");
  const { title, description } = getTodayEvent();
  const blurb = culture && CULTURES[culture];

  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        {/* Today's event */}
        <section className="rounded-xl border p-4 bg-white">
          <h2 className="text-base font-semibold">About today’s event</h2>
          <p className="text-sm mt-2">
            <span className="font-medium">{title}</span>
          </p>
          <p className="text-sm text-gray-700 mt-1">{description}</p>
        </section>

        {/* Optional culture spotlight */}
        {culture && (
          <section className="rounded-xl border p-4 bg-white">
            <h3 className="text-base font-semibold">{culture}</h3>
            <p className="text-sm text-gray-700 mt-2">
              {blurb || "No details yet — check back soon."}
            </p>
          </section>
        )}

        {!culture && (
          <p className="text-xs text-gray-500">
            Tip: tap a culture chip on a post to learn more about it here.
          </p>
        )}
      </main>
      <FooterNav />
    </>
  );
}
