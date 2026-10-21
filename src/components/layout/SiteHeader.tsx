
import BrandLogo from "@/src/ui/BrandLogo";
import Link from "next/link";
import MobileNav from "./MobileNav";

const navigation = [
  { label: "Discover", href: "/discover/history" },
  { label: "Music", href: "/music" },
  { label: "Style", href: "/style" },
  { label: "Journal", href: "/journal" },
  { label: "Events", href: "/events" },
  { label: "Shop", href: "/shop" },
];

export default function SiteHeader() {
  return (
    <header className="relative z-30 border-b border-[var(--color-border)] bg-[var(--color-midnight)]">
      <div className="page-container flex min-h-20 items-center justify-between gap-4 py-3">
        <BrandLogo />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-antique)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/community"
            className="hidden border border-[var(--color-antique)]/50 px-4 py-2 text-xs tracking-wide transition-colors hover:bg-[var(--color-burgundy)] sm:inline-flex"
          >
            Join Us
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}