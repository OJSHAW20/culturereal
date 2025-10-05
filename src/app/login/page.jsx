"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userName = name.trim() || "Guest";
    localStorage.setItem("user", userName);
    router.push("/");
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="max-w-sm w-full space-y-4">
        <h1 className="text-2xl font-bold text-center">culturereal</h1>
        <p className="text-sm text-gray-600 text-center">
          Enter a name to get started.
        </p>
        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password (any)"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            required
        />
          <button
            type="submit"
            className="w-full rounded-lg bg-black text-white py-2 text-sm font-medium"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
