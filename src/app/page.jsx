"use client";

import { useEffect } from "react";
import Header from "./(components)/Header";
import FooterNav from "./(components)/FooterNav";
import FeedList from "./(components)/FeedList";
import { useFeedStore } from "@/store/useFeedStore";
import MidnightRollover from "./(components)/MidnightRollover";

export default function Page() {
  const init = useFeedStore((s) => s.init);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <Header />
      <MidnightRollover />
      <main className="flex-1">
        <FeedList />
      </main>
      <FooterNav />
    </>
  );
}
