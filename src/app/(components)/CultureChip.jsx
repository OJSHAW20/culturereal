import Link from "next/link";
export default function CultureChip({ name }) {
  return (
    <Link
      href={`/info?culture=${encodeURIComponent(name)}`}
      className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
    >
      {name}
    </Link>
  );
}
