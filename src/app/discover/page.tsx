
import type { Metadata } from "next";
import Link from "next/link";
import EditorialCard from '@/src/ui/EditorialCard';

export const metadata: Metadata = {
  title: "Discover Goth Culture",
  description:
    "Explore Goth culture through its history, music, fashion, literature and creative communities.",
};

const topics = [
  {
    number: "01",
    category: "Origins & History",
    title: "Understand the Culture",
    description:
      "Explore how Goth developed from music scenes into a wider cultural movement.",
    href: "/discover/history",
    image: "/images/culture/gothic-architecture.jpg",
    imageAlt: "Atmospheric Gothic architecture",
  },
  {
    number: "02",
    category: "Sound & Artists",
    title: "Discover the Music",
    description:
      "Begin exploring Gothic rock, post-punk, influential artists and essential listening.",
    href: "/music",
    image: "/images/music/gothic-music.jpg",
    imageAlt: "Dark atmospheric music scene",
  },
  {
    number: "03",
    category: "Clothing & Expression",
    title: "Explore the Style",
    description:
      "Learn about dark fashion, historical influences and personal expression.",
    href: "/style",
    image: "/images/style/gothic-style.jpg",
    imageAlt: "Goth-inspired fashion and accessories",
  },
];

export default function DiscoverPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-[radial-gradient(ellipse_at_80%_20%,rgba(83,30,50,.38),transparent_50%)]">
        <div className="page-container py-20 sm:py-28">
          <p className="eyebrow">The House of Goth guide</p>

          <h1 className="font-editorial mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">
            Enter a world
            <br />
            <span className="text-[var(--color-antique)]">
              beyond the ordinary.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
            Goth is more than a look. It is a music-rooted subculture
            with its own histories, sounds, creative traditions and
            communities. Start exploring at your own pace.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/discover/history"
              className="bg-[var(--color-burgundy)] px-6 py-3.5 text-xs tracking-widest hover:bg-[#512536]"
            >
              START WITH THE HISTORY ↗
            </Link>

            <Link
              href="/journal"
              className="border border-[var(--color-antique)]/50 px-6 py-3.5 text-xs tracking-widest hover:bg-white/5"
            >
              READ THE JOURNAL
            </Link>
          </div>
        </div>
      </section>

      <section className="page-container py-16 sm:py-20">
        <p className="eyebrow">Explore your interests</p>

        <h2 className="font-editorial mt-3 text-4xl sm:text-5xl">
          Find your way in.
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
          Whether you&#39;re new to Goth or already know the music,
          choose a subject and follow your curiosity.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {topics.map((topic) => (
            <EditorialCard key={topic.number} {...topic} />
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[#151218]">
        <div className="page-container grid gap-8 py-16 md:grid-cols-[1fr_.8fr] md:items-center sm:py-20">
          <div>
            <p className="eyebrow">A culture, not a costume</p>

            <h2 className="font-editorial mt-3 text-4xl leading-tight sm:text-5xl">
              Look beyond the surface.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              Black clothing and dramatic imagery may be familiar
              parts of Goth style, but the subcultures history is
              closely connected to music. Its expression has evolved
              across generations and communities.
            </p>

            <Link
              href="/discover/history"
              className="mt-6 inline-block text-xs tracking-widest text-[var(--color-antique)] hover:underline"
            >
              EXPLORE THE HISTORY ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
