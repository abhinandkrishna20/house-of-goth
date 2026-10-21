
"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "Discover", href: "/discover/history" },
  { label: "Music", href: "/music" },
  { label: "Style", href: "/style" },
  { label: "Journal", href: "/journal" },
  { label: "Events", href: "/events" },
  { label: "Shop", href: "/shop" },
  { label: "Community", href: "/community" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-ivory)]"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-[var(--color-border)] bg-[var(--color-midnight)] px-5 py-4 shadow-xl"
        >
          <div className="page-container flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--color-border)] py-4 text-sm text-[var(--color-ivory)] hover:text-[var(--color-antique)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
