
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/house-of-goth-logo.svg";

type BrandLogoProps = {
  variant?: "horizontal" | "crest";
  className?: string;
};

export default function BrandLogo({
  variant = "horizontal",
  className = "",
}: BrandLogoProps) {
  if (variant === "crest") {
    return (
      <Image
        src={logo}
        alt="House of Goth raven crest"
        width={180}
        height={220}
        priority
        className={className}
      />
    );
  }

  return (
    <Link
      href="/"
      aria-label="House of Goth home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src={logo}
        alt=""
        aria-hidden="true"
        width={54}
        height={66}
        priority
        className="shrink-0"
      />

      <span className="min-w-0">
        <span className="font-editorial block whitespace-nowrap text-xl tracking-[0.04em] sm:text-2xl">
          HOUSE <span className="text-[var(--color-antique)]">OF</span> GOTH
        </span>
        <span className="mt-1 block text-[9px] tracking-[0.12em] text-[var(--color-muted)]">
          A GLOBAL HOME FOR GOTH CULTURE
        </span>
      </span>
    </Link>
  );
}
