"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="flex justify-between border p-8">
        <Link className="font-bold" href="/">
          Logo
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {!isOpen ? (
          <Menu
            onClick={() => setIsOpen(true)}
            className="md:hidden"
            size="24"
          />
        ) : (
          <X onClick={() => setIsOpen(false)} className="md:hidden" size="24" />
        )}
      </div>
      {isOpen && (
        <div className="py-8 border-b">
          <ul className="flex flex-col items-center gap-8">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
