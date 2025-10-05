"use client";

import Header from "./(components)/Header";
import FooterNav from "./(components)/FooterNav";
import FeedList from "./(components)/FeedList";
import { POSTS } from "@/data/posts.seed";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <FeedList posts={POSTS} />
      </main>
      <FooterNav />
    </>
  );
}
