
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Brief History of Goth",
  description:
    "Discover the musical roots, early scenes and continuing evolution of Goth culture.",
};

const milestones = [
  {
    period: "Late 1970s",
    title: "The post-punk foundations",
    text: "After punk, musicians began exploring darker atmospheres, unconventional arrangements and introspective themes. Several artists and groups associated with post-punk helped shape the sound that Goth would grow around.",
  },
  {
    period: "Early 1980s",
    title: "A recognisable scene emerges",
    text: "Gothic rock and a distinct social scene developed around bands, clubs, audiences and shared creative interests. Venues and music journalism helped different parts of the scene recognise one another.",
  },
  {
    period: "1980s and 1990s",
    title: "Scenes diversify",
    text: "Goth spread through music, club culture, independent publications and fashion. Local scenes developed their own styles, while related dark alternative movements followed different musical paths.",
  },
  {
    period: "The internet era",
    title: "New connections across borders",
    text: "Online communities made it easier to discover older artists, exchange recommendations, share creative work and connect with people outside one's local scene.",
  },
  {
    period: "Today",
    title: "A culture still evolving",
    text: "Goth continues to be interpreted by different generations and communities. Its musical heritage remains an important point of reference alongside fashion, art and individual expression.",
  },
];

export default function GothHistoryPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-[radial-gradient(ellipse_at_80%_20%,rgba(83,30,50,.4),transparent_50%)]">
        <div className="page-container py-16 sm:py-24">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-[var(--color-muted)]"
          >
            <Link href="/discover" className="hover:text-[var(--color-antique)]">
              Discover
            </Link>
            <span className="mx-2">/</span>
            <span aria-current="page">History</span>
          </nav>

          <p className="eyebrow mt-8">Culture / History</p>

          <h1 className="font-editorial mt-4 max-w-4xl text-5xl leading-tight sm:text-7xl">
            A brief history of
            <span className="block text-[var(--color-antique)]">
              Goth culture.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
            From the musical experiments of post-punk to a global
            subculture, Goth has developed through sound, style,
            creative exchange and community.
          </p>

          <p className="mt-5 text-xs tracking-wide text-[var(--color-muted)]">
            BEGINNER&#39;S GUIDE · APPROX. 5 MIN READ
          </p>
        </div>
      </section>

      <article className="page-container grid gap-12 py-14 lg:grid-cols-[minmax(0,760px)_240px] lg:gap-20 lg:py-20">
        <div className="min-w-0">
          <p className="text-lg leading-8 text-[var(--color-ivory)]">
            Goth is commonly understood as a music-based subculture
            that grew out of British post-punk in the late 1970s
            and early 1980s. Music helped bring people together,
            while clothing, literature, visual art and nightlife
            contributed to the culture's evolving identity.
          </p>

          <p className="mt-6 text-sm leading-8 text-[var(--color-muted)]">
            There is no single look, personality or life story that
            defines every Goth. Understanding the music and its
            history offers a more useful starting point than treating
            the subculture as a fashion checklist.
          </p>

          <h2 className="font-editorial mt-14 text-4xl sm:text-5xl">
            The timeline
          </h2>

          <div className="mt-8 space-y-10">
            {milestones.map((item, index) => (
              <section
                key={item.period}
                className="relative border-l border-[var(--color-border)] pl-6 sm:pl-8"
              >
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--color-antique)]" />

                <p className="eyebrow">{item.period}</p>

                <h3 className="font-editorial mt-2 text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-8 text-[var(--color-muted)]">
                  {item.text}
                </p>
              </section>
            ))}
          </div>

          <section className="mt-14 border-t border-[var(--color-border)] pt-8">
            <h2 className="font-editorial text-4xl">
              Where should you explore next?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              History is only one part of the picture. Explore the
              music, discover artists, and learn how fashion and
              creative expression have changed over time.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/music"
                className="border border-[var(--color-antique)]/50 px-5 py-3 text-xs tracking-widest hover:bg-white/5"
              >
                EXPLORE MUSIC ↗
              </Link>

              <Link
                href="/style"
                className="border border-[var(--color-antique)]/50 px-5 py-3 text-xs tracking-widest hover:bg-white/5"
              >
                EXPLORE STYLE ↗
              </Link>

              <Link
                href="/discover"
                className="px-5 py-3 text-xs tracking-widest text-[var(--color-antique)] hover:underline"
              >
                BACK TO DISCOVER
              </Link>
            </div>
          </section>

          <section className="mt-14 border-t border-[var(--color-border)] pt-6">
            <h2 className="font-editorial text-2xl">Further reading</h2>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
              <li>
                <a
                  href="https://apnews.com/article/37451452c321455ea0c3c166a525d071"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-[var(--color-antique)]/50 underline-offset-4 hover:text-[var(--color-ivory)]"
                >
                  AP News — Goth: A History and the roots of the subculture
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Goth_subculture"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-[var(--color-antique)]/50 underline-offset-4 hover:text-[var(--color-ivory)]"
                >
                  Goth subculture — overview and historical references
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Gothic_rock"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-[var(--color-antique)]/50 underline-offset-4 hover:text-[var(--color-ivory)]"
                >
                  Gothic rock — musical background and development
                </a>
              </li>
            </ul>

            <p className="mt-5 text-xs leading-6 text-[var(--color-muted)]">
              Editorial note: this is an introductory overview.
              Before treating it as a final publication, expand
              the research, verify specific dates and claims, and
              add appropriate attribution to historical sources.
            </p>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-8 border border-[var(--color-border)] p-5">
            <p className="eyebrow">In this guide</p>

            <ul className="mt-5 space-y-4 text-sm text-[var(--color-muted)]">
              <li>Origins and musical roots</li>
              <li>Early scenes</li>
              <li>Global development</li>
              <li>Goth today</li>
            </ul>

            <div className="mt-6 border-t border-[var(--color-border)] pt-5">
              <Link
                href="/discover"
                className="text-xs tracking-widest text-[var(--color-antique)] hover:underline"
              >
                ALL DISCOVER GUIDES ↗
              </Link>
            </div>
          </div>
        </aside>
      </article>
    </>
  );
}
