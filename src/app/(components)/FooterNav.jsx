"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Tab({ href, label }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`flex-1 text-center py-2 text-sm ${
        active ? "font-semibold text-gray-900" : "text-gray-600"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default function FooterNav() {
    return (
      <nav className="sticky bottom-0 border-t bg-white">
        <div className="flex px-2 max-w-md mx-auto">
          <Tab href="/" label="Feed" />
          <Tab href="/info" label="Info" />
          <Tab href="/post" label="Post" />   
          <Tab href="/profile" label="Profile" />  
        </div>
      </nav>
    );
  }
