"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGate({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const user = localStorage.getItem("user");
    // If there's no user and we're not already on /login, redirect
    if (!user && pathname !== "/login") {
      router.push("/login");
    }
  }, [pathname, router]);

  return children;
}
