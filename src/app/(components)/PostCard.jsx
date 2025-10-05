import { getTodayEvent } from "@/data/dailyEvent.seed";
import CultureChip from "./CultureChip";

export default function PostCard({ post }) {
  const { title } = getTodayEvent();

  const handleError = (e) => {
    e.currentTarget.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
           <rect width='100%' height='100%' fill='#e5e7eb'/>
           <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                 fill='#6b7280' font-size='20' font-family='Arial'>
             image unavailable
           </text>
         </svg>`
      );
  };

  return (
    <article className="rounded-2xl overflow-hidden shadow-sm border bg-white">
      <div className="w-full bg-gray-100 overflow-hidden" style={{ height: 256 }}>
        <img
          src={post.imageUrl}
          alt={`${post.culture}: ${post.caption}`}
          className="w-full h-full object-cover block"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={handleError}   // ← comment removed; prop kept
        />
      </div>

      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{post.userName}</p>
          <span className="text-xs text-gray-500">{post.country}</span>
        </div>
        <p className="text-sm">{post.caption}</p>
        <div className="flex gap-2 flex-wrap">
          <CultureChip name={post.culture} />
          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            {title}
          </span>
        </div>
      </div>
    </article>
  );
}
