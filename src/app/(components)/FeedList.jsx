import PostCard from "./PostCard";

export default function FeedList({ posts }) {
  return (
    <div className="p-4 space-y-4">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
