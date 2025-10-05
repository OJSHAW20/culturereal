"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tab = ({ href, label }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`flex-1 text-center py-2 text-sm ${active ? "font-semibold" : "text-gray-600"}`}
    >
      {label}
    </Link>
  );
};

export default function FooterNav() {
  return (
    <nav className="sticky bottom-0 border-t bg-white">
      <div className="flex px-2">
        <Tab href="/" label="Feed" />
        <Tab href="/info" label="Info" />
      </div>
    </nav>
  );
}
