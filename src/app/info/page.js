"use client";
import { useSearchParams } from "next/navigation";
import { CULTURES } from "@/data/cultures.seed";
import Header from "../(components)/Header";
import FooterNav from "../(components)/FooterNav";

export default function InfoPage() {
  const params = useSearchParams();
  const culture = params.get("culture");
  const blurb = culture && CULTURES[culture];

  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        <section>
          <h2 className="text-lg font-semibold">Why culturereal?</h2>
          <p className="text-sm text-gray-700 mt-2">
            Many cultures are overlooked or stereotyped. One authentic photo a day surfaces real moments and builds understanding.
          </p>
        </section>
        {culture && (
          <section className="rounded-xl border p-4 bg-white">
            <h3 className="text-base font-semibold">{culture}</h3>
            <p className="text-sm text-gray-700 mt-2">
              {blurb || "No details yet — check back soon."}
            </p>
          </section>
        )}
      </main>
      <FooterNav />
    </>
  );
}
