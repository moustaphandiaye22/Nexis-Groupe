import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`logo-capsule ${light ? "logo-capsule--light" : "logo-capsule--dark"}`}
      aria-label="NEXIS GROUPE - Accueil"
    >
      <span className="logo-img-wrapper">
        <Image
          src="/nexis%20logo.jpeg"
          alt="NEXIS Groupe logo"
          width={180}
          height={60}
          priority
          className="logo-image"
        />
      </span>

      <div className="logo-brand-text">
        <span className="logo-brand-name">NEXIS</span>
        <span className="logo-brand-tag">GROUPE</span>
      </div>
    </Link>
  );
}
