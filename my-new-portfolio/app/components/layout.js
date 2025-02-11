"use client";

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="flex justify-between p-6 bg-gray-900 text-white">
        <h1 className="text-xl font-bold">Leon Changara</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      {children}
    </div>
  );
}