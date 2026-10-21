
import Link from "next/link";

type EditorialCardProps = {
  number: string;
  category: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

export default function EditorialCard({
  number,
  category,
  title,
  description,
  href,
  image,
  imageAlt,
}: EditorialCardProps) {
  return (
    <article className="group min-w-0">
      <Link href={href} className="block">
        <div
          role="img"
          aria-label={imageAlt}
          className="relative aspect-[4/3] overflow-hidden border border-[var(--color-border)] bg-[linear-gradient(145deg,#351622,#100e13_70%)]"
          style={{
            backgroundImage: `linear-gradient(180deg,transparent 45%,rgba(16,14,19,.75)),url("${image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="absolute left-4 top-4 text-xs tracking-widest text-[#E8D7B7]">
            {number}
          </span>
          <span className="absolute bottom-4 right-4 text-xl text-[#E8D7B7] transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </div>

        <p className="eyebrow mt-5">{category}</p>

        <h3 className="font-editorial mt-2 text-2xl leading-tight sm:text-3xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
          {description}
        </p>
      </Link>
    </article>
  );
}
