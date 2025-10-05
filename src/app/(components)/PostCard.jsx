// PostCard.jsx (final, reliable)
import CultureChip from "./CultureChip";

export default function PostCard({ post }) {
  return (
    <article className="rounded-2xl overflow-hidden shadow-sm border bg-white">
      <div className="w-full bg-gray-100 overflow-hidden" style={{ height: 256 }}>
        <img
          src={post.imageUrl}
          alt={`${post.culture}: ${post.caption}`}
          className="w-full h-full object-cover block"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{post.userName}</p>
          <span className="text-xs text-gray-500">{post.country}</span>
        </div>
        <p className="text-sm">{post.caption}</p>
        <CultureChip name={post.culture} />
      </div>
    </article>
  );
}
