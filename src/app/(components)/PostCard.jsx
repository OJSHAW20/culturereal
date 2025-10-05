import { getTodayEvent } from "@/data/dailyEvent.seed";

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
    <article className="rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-white">
      {/* Image wrapper */}
      <div className="relative w-full bg-gray-100" style={{ height: 320 }}>
        <img
          src={post.imageUrl}
          alt={`${post.culture}: ${post.caption}`}
          className="w-full h-full object-cover block"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={handleError}
        />

        {/* removed top-right country pill */}

        {/* gradient fade for legibility */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* bottom overlay content */}
        <div className="absolute inset-x-0 bottom-0 p-3 text-white">
          {/* name */}
          <div className="text-sm font-medium drop-shadow-sm">{post.userName}</div>

          {/* caption */}
          <p className="text-[13px] leading-snug mt-0.5 drop-shadow-sm line-clamp-2">
            {post.caption}
          </p>

          {/* chips row (origin + event + optional theme) */}
          <div className="mt-2 flex gap-2 flex-wrap">
            {/* origin chip */}
            <span className="inline-block rounded-full bg-white/85 text-gray-800 text-[11px] px-2 py-1">
              {post.origin || post.culture}
            </span>

            {/* event chip */}
            <span className="inline-block rounded-full bg-indigo-200/90 text-indigo-900 text-[11px] px-2 py-1">
              {title}
            </span>

            {/* theme chip */}
            {post.theme && (
              <span className="inline-block rounded-full bg-emerald-200/90 text-emerald-900 text-[11px] px-2 py-1">
                {post.theme}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
