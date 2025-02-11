"use client"; // ✅ Ensures it runs on the client side

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Welcome</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link> {/* ✅ Added About Page */}
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
