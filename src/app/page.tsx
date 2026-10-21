
import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/src/ui/BrandLogo";
import EditorialCard from "@/src/ui/EditorialCard";

const discoveries = [
  {
    number: "01",
    category: "History & Identity",
    title: "The Culture",
    description:
      "Explore the roots, ideas, art and history behind the Goth subculture.",
    href: "/discover/history",
    image: "/images/culture/gothic-architecture.jpg",
    imageAlt: "Gothic architectural details",
  },
  {
    number: "02",
    category: "Music & Artists",
    title: "The Sound",
    description:
      "Discover Gothic rock, post-punk, essential albums and new artists.",
    href: "/music",
    image: "/images/music/gothic-music.jpg",
    imageAlt: "Atmospheric music editorial",
  },
  {
    number: "03",
    category: "Fashion & Expression",
    title: "The Style",
    description:
      "Explore dark fashion, personal expression and alternative design.",
    href: "/style",
    image: "/images/style/gothic-style.jpg",
    imageAlt: "Dark fashion and accessories",
  },
];

const stories = [
  {
    category: "Culture / Guide",
    title: "Understanding Goth Beyond the Aesthetic",
    description:
      "An introduction to the music, history and ideas behind the culture.",
    href: "/journal/goth-beyond-the-aesthetic",
    image: "/images/journal/goth-history.jpg",
    imageAlt: "Gothic architecture for a culture feature",
  },
  {
    category: "Music / History",
    title: "From Post-Punk to Gothic Rock",
    description:
      "Explore the musical foundations that helped shape the Goth scene.",
    href: "/journal/post-punk-and-gothic-rock",
    image: "/images/journal/post-punk.jpg",
    imageAlt: "Dark music editorial photography",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[var(--color-border)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_35%,rgba(83,30,50,.65),transparent_45%),linear-gradient(120deg,#100e13_35%,#24121d)]"
        />

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero/gothic-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#100e13] via-[#100e13]/85 to-[#100e13]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100e13] via-transparent to-[#100e13]/20" />
        </div>

        <div className="page-container grid min-h-[590px] items-center py-20 lg:min-h-[660px] lg:grid-cols-[1.1fr_.9fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">
              Culture · Music · Style · Community
            </p>

            <h1 className="font-editorial mt-7 text-6xl leading-[0.93] font-normal sm:text-7xl lg:text-8xl">
              A world
              <br />
              beyond the
              <br />
              <span className="text-[var(--color-antique)]">
                ordinary.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--color-ivory)]/80 sm:text-base sm:leading-8">
              Discover Goth history, find new music, explore dark
              fashion, and connect with a culture shaped by
              individuality and creative expression.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/discover/history"
                className="bg-[var(--color-burgundy)] px-6 py-3.5 text-xs tracking-widest transition-colors hover:bg-[#512536]"
              >
                EXPLORE THE CULTURE ↗
              </Link>

              <Link
                href="/community"
                className="border border-[var(--color-antique)]/60 bg-black/20 px-6 py-3.5 text-xs tracking-widest transition-colors hover:bg-white/5"
              >
                FIND YOUR COMMUNITY
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-12 bg-[var(--color-antique)]/60" />
              <p className="text-[10px] tracking-[0.2em] text-[var(--color-muted)]">
                A GLOBAL HOME FOR GOTH CULTURE
              </p>
            </div>
          </div>

          <div className="hidden justify-center lg:flex">
            <BrandLogo
              variant="crest"
              className="h-auto w-full max-w-[300px] drop-shadow-[0_0_35px_rgba(232,215,183,.12)]"
            />
          </div>
        </div>
      </section>

      {/* Discovery */}
      <section className="page-container py-20 sm:py-24">
        <div className="grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end">
          <div>
            <p className="eyebrow">Begin your discovery</p>
            <h2 className="font-editorial mt-3 text-4xl leading-tight sm:text-5xl">
              More than an aesthetic.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[var(--color-muted)] md:justify-self-end">
            A living culture of music, art, literature, fashion
            and independent expression. Start with the subjects
            that speak to you.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {discoveries.map((item) => (
            <EditorialCard key={item.number} {...item} />
          ))}
        </div>
      </section>

      {/* Journal */}
      <section className="border-y border-[var(--color-border)] bg-[#151218]">
        <div className="page-container py-20 sm:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">The journal</p>
              <h2 className="font-editorial mt-3 text-4xl sm:text-5xl">
                Stories worth discovering.
              </h2>
            </div>

            <Link
              href="/journal"
              className="text-xs tracking-widest text-[var(--color-antique)] hover:underline"
            >
              EXPLORE ALL STORIES ↗
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {stories.map((story) => (
              <EditorialCard
                key={story.href}
                number=""
                {...story}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="page-container py-20 sm:py-24">
        <div className="relative isolate overflow-hidden border border-[var(--color-border)] bg-[linear-gradient(120deg,#351622,#17121a_75%)] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at center, #70465D, transparent 65%)",
            }}
          />

          <p className="eyebrow">A place to belong</p>

          <h2 className="font-editorial mt-4 text-4xl sm:text-6xl">
            Your world. Your identity.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--color-ivory)]/75">
            Whether you have lived this culture for years or are
            just beginning to discover it, there is more to explore.
          </p>

          <Link
            href="/community"
            className="mt-8 inline-block border border-[var(--color-antique)] px-6 py-3.5 text-xs tracking-widest transition-colors hover:bg-black/20"
          >
            JOIN THE COMMUNITY ↗
          </Link>
        </div>
      </section>
    </>
  );
}
