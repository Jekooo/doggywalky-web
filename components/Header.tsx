"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PawIcon } from "./icons/PawIcon";

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative text-sm font-medium transition-colors pb-1 ${
        active
          ? "text-primary font-bold"
          : "text-text-secondary hover:text-primary"
      }`}
    >
      {children}
      {active && (
        <span className="absolute -bottom-0.5 left-0 right-0 h-[3px] rounded-full bg-primary" />
      )}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-outline-variant/40">
      <nav className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-[1fr_auto_1fr] items-center">
        <Link href="/" className="flex items-center gap-2.5 group justify-self-start">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <PawIcon className="w-5 h-5 text-on-primary" />
          </div>
          <span className="font-heading font-extrabold text-xl text-text">
            Doggy Walky
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 justify-self-center">
          <NavLink href="/" active={pathname === "/"}>
            Accueil
          </NavLink>
          <NavLink
            href="/comment-ca-marche"
            active={pathname === "/comment-ca-marche"}
          >
            Comment ça marche
          </NavLink>
        </div>

        <Link
          href="/#download"
          className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-primary text-on-primary text-sm font-semibold hover:bg-primary-container transition-colors shadow-sm justify-self-end"
        >
          Télécharger
        </Link>

        {/* Mobile menu - simplifié */}
        <Link
          href="/#download"
          className="md:hidden px-4 py-2 rounded-full bg-primary text-on-primary text-sm font-semibold justify-self-end col-start-3"
        >
          Télécharger
        </Link>
      </nav>
    </header>
  );
}
