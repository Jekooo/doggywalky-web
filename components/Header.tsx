import Link from "next/link";
import { PawIcon } from "./icons/PawIcon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-outline-variant/40">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <PawIcon className="w-5 h-5 text-on-primary" />
          </div>
          <span className="font-heading font-extrabold text-xl text-text">
            Doggy Walky
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/comment-ca-marche"
            className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
          >
            Comment ça marche
          </Link>
          <Link
            href="/balades"
            className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
          >
            Balades
          </Link>
          <Link
            href="#download"
            className="px-5 py-2.5 rounded-full bg-primary text-on-primary text-sm font-semibold hover:bg-primary-container transition-colors shadow-sm"
          >
            Télécharger
          </Link>
        </div>

        {/* Mobile menu - simplifié */}
        <Link
          href="#download"
          className="md:hidden px-4 py-2 rounded-full bg-primary text-on-primary text-sm font-semibold"
        >
          Télécharger
        </Link>
      </nav>
    </header>
  );
}
