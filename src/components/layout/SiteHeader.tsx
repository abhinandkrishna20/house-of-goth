
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
    <header className="border-b border-[var(--color-border)]">
      <div className="page-container flex min-h-20 items-center justify-between gap-6">
        {/* <Link
          href="/"
          aria-label="House of Goth home"
          className="shrink-0"
        >
          <span className="font-editorial text-2xl tracking-[0.08em] sm:text-3xl">
            HOUSE <span className="text-[var(--color-antique)]">OF</span> GOTH
          </span>
          <span className="mt-1 block text-[9px] tracking-[0.2em] text-[var(--color-muted)]">
            A GLOBAL HOME FOR GOTH CULTURE
          </span>
        </Link> */}
        <BrandLogo />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
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

        <Link
          href="/community"
          className="shrink-0 border border-[var(--color-antique)]/50 px-3 py-2 text-xs tracking-wide transition-colors hover:bg-[var(--color-burgundy)] sm:px-4"
        >
          Join Us
        </Link>
         <MobileNav />
      </div>
    </header>
  );
}
