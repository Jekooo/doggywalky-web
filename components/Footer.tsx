import Link from "next/link";
import { PawIcon } from "./icons/PawIcon";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/40 bg-surface-container-low mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                <PawIcon className="w-5 h-5 text-on-primary" />
              </div>
              <span className="font-heading font-extrabold text-xl text-text">
                Doggy Walky
              </span>
            </Link>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              La communauté des maîtres et de leurs chiens. Organisez, rejoignez
              et partagez des balades près de chez vous.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm text-text mb-4 uppercase tracking-wide">
              Application
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/comment-ca-marche"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link
                  href="/balades"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Voir les balades
                </Link>
              </li>
              <li>
                <Link
                  href="#download"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Télécharger
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm text-text mb-4 uppercase tracking-wide">
              Légal
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/cgu"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  CGU
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Doggy Walky — Tous droits réservés
          </p>
          <p className="text-xs text-text-secondary">
            Fait avec ❤️ pour les chiens et leurs maîtres
          </p>
        </div>
      </div>
    </footer>
  );
}
