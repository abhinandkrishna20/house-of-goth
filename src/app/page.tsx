
"use client";
import Link from "next/link";
import BrandLogo from "../ui/BrandLogo";

const features = [
  {
    number: "01",
    title: "The Culture",
    description:
      "Discover the history, ideas and creative movements behind Goth.",
    href: "/discover/history",
  },
  {
    number: "02",
    title: "The Sound",
    description:
      "Explore Gothic rock, post-punk, artists and essential albums.",
    href: "/music",
  },
  {
    number: "03",
    title: "The Style",
    description:
      "Discover dark fashion, personal expression and alternative design.",
    href: "/style",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-[var(--color-border)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(83,30,50,0.65),transparent_45%),linear-gradient(120deg,#100e13_35%,#24121d_100%)]"
        />

        <div className="page-container grid min-h-[580px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <p className="eyebrow">Culture · Music · Style · Community</p>

            <h1 className="font-editorial mt-7 max-w-3xl text-6xl leading-[0.95] font-normal sm:text-7xl lg:text-8xl">
              A world
              <br />
              beyond the
              <br />
              <span className="text-[var(--color-antique)]">
                ordinary.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Discover Goth history, find new music, explore dark fashion,
              and connect with a culture shaped by individuality and
              creative expression.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/discover/history"
                className="bg-[var(--color-burgundy)] px-6 py-3 text-xs tracking-widest transition-colors hover:bg-[#512536]"
              >
                EXPLORE THE CULTURE
              </Link>

              <Link
                href="/community"
                className="border border-[var(--color-antique)]/50 px-6 py-3 text-xs tracking-widest transition-colors hover:bg-white/5"
              >
                FIND YOUR COMMUNITY
              </Link>
            </div>
          </div>

          <div
            aria-label="Decorative raven crest placeholder"
            className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center overflow-hidden border border-[var(--color-antique)]/25 bg-[radial-gradient(ellipse_at_50%_38%,rgba(112,70,93,0.45),transparent_55%),linear-gradient(160deg,#20151f,#100e13_65%)]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-5 border border-[var(--color-antique)]/25"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-12 top-12 bottom-12 rounded-t-full border border-[var(--color-antique)]/40"
            />

            {/* <div className="relative px-6 text-center">
              <span className="font-editorial text-8xl text-[var(--color-antique)]">
                ♜
              </span>
              <p className="font-editorial mt-4 text-3xl tracking-[0.16em]">
                HOUSE OF GOTH
              </p>
              <p className="eyebrow mt-3">
                The Raven Crest
              </p>
              <p className="mt-5 text-xs text-[var(--color-muted)]">
                Official emblem in development
              </p>
            </div> */}

            
<div className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center overflow-hidden border border-[var(--color-antique)]/25 bg-[radial-gradient(ellipse_at_50%_38%,rgba(83,30,50,0.45),transparent_55%),linear-gradient(160deg,#20151f,#100e13_65%)]">
  <div
    aria-hidden="true"
    className="absolute inset-5 border border-[var(--color-antique)]/20"
  />

  <BrandLogo
    variant="crest"
    className="relative z-10 h-auto w-[75%] drop-shadow-[0_0_24px_rgba(232,215,183,0.08)]"
  />
</div>

          </div>
        </div>
      </section>

      <section className="page-container py-20 sm:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Begin your discovery</p>
            <h2 className="font-editorial mt-3 text-4xl sm:text-5xl">
              More than an aesthetic.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[var(--color-muted)]">
            A living culture of music, art, literature, fashion and
            independent expression.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.number}
              href={feature.href}
              className="group border border-[var(--color-border)] bg-[var(--color-charcoal)]/40 p-7 transition-colors hover:border-[var(--color-antique)]/50"
            >
              <span className="text-xs tracking-widest text-[var(--color-antique)]">
                {feature.number}
              </span>

              <h3 className="font-editorial mt-10 text-3xl">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {feature.description}
              </p>

              <span className="mt-7 inline-block text-xs tracking-widest text-[var(--color-antique)]">
                DISCOVER MORE ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-container pb-20">
        <div className="border border-[var(--color-border)] bg-[linear-gradient(120deg,#351622,#17121a_70%)] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="eyebrow">A place to belong</p>

          <h2 className="font-editorial mt-4 text-4xl sm:text-5xl">
            Your world. Your identity.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
            Whether you have lived this culture for years or are just
            beginning to discover it, there is more to explore.
          </p>

          <Link
            href="/community"
            className="mt-7 inline-block border border-[var(--color-antique)] px-6 py-3 text-xs tracking-widest hover:bg-white/5"
          >
            JOIN THE COMMUNITY
          </Link>
        </div>
      </section>
    </>
  );
}
