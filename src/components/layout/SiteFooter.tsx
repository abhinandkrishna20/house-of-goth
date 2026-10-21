
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border)]">
      <div className="page-container grid gap-8 py-10 sm:grid-cols-2 sm:items-end">
        <div>
          <Link
            href="/"
            className="font-editorial text-2xl tracking-[0.08em]"
          >
            HOUSE OF GOTH
          </Link>

          <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
            A global home for Goth culture, music, style, stories and community.
          </p>
        </div>

        <div className="sm:text-right">
          <p className="text-xs tracking-widest text-[var(--color-antique)]">
            CULTURE. IDENTITY. DISCOVERY.
          </p>
          <p className="mt-3 text-xs text-[var(--color-muted)]">
            {/* {new Date().getFullYear()}  */}
            © 2027 House of Goth. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-[var(--color-muted)]">
            Provisional brand name.
          </p>
        </div>
      </div>
    </footer>
  );
}
