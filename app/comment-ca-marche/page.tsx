import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment ça marche — Doggy Walky",
  description:
    "Découvrez comment utiliser Doggy Walky : créer un profil, organiser une balade, rejoindre un événement.",
};

export default function CommentCaMarche() {
  return (
    <>
      {/* Header */}
      <section className="waves-bg pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Guide d&apos;utilisation
          </p>
          <h1 className="font-heading text-5xl md:text-6xl text-text mb-6 leading-tight">
            Comment ça marche
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tout ce qu&apos;il faut savoir pour rejoindre la communauté Doggy
            Walky et profiter pleinement de l&apos;application.
          </p>
        </div>
      </section>

      {/* Étapes détaillées */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-20">
          <DetailedStep
            number="1"
            title="Créez votre profil"
            description="Inscrivez-vous gratuitement en quelques secondes. Choisissez un pseudo unique, ajoutez votre ville et votre photo de profil."
            details={[
              "Inscription en moins d'une minute",
              "Définissez un périmètre de recherche autour de chez vous (5 à 100 km)",
              "Choisissez vos préférences de confidentialité",
            ]}
          />

          <DetailedStep
            number="2"
            title="Ajoutez vos chiens"
            description="Présentez vos compagnons à quatre pattes : nom, race, date de naissance et photo. Vous pouvez ajouter plusieurs chiens."
            details={[
              "Photos de profil pour chaque chien",
              "Calcul automatique de l'âge",
              "Système de compatibilité avec les autres chiens",
            ]}
            reverse
          />

          <DetailedStep
            number="3"
            title="Trouvez ou créez une balade"
            description="Parcourez les événements planifiés près de chez vous, ou démarrez votre propre balade en quelques tapes."
            details={[
              "Filtrez par ville et par distance",
              "Visualisez le point de rendez-vous sur la carte",
              "Consultez le profil des participants et de leurs chiens",
            ]}
          />

          <DetailedStep
            number="4"
            title="Rejoignez et discutez"
            description="Inscrivez-vous à une balade en un clic. Discutez avec les autres participants dans le chat de groupe pour vous coordonner."
            details={[
              "Chat de groupe pour chaque balade",
              "Notifications push en temps réel",
              "Mentions @pseudo pour interpeler quelqu'un",
            ]}
            reverse
          />

          <DetailedStep
            number="5"
            title="Gagnez des badges"
            description="Plus vous participez, plus vous progressez dans les défis et débloquez des badges à afficher fièrement sur votre profil."
            details={[
              "Défis variés : nombre de balades, villes visitées, etc.",
              "Badges de différentes raretés (commun à légendaire)",
              "Mettez vos badges préférés en avant sur votre profil",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
            Prêt à essayer Doggy Walky ?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Téléchargez l&apos;application et rejoignez les premières balades de
            votre quartier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#download"
              className="px-7 py-4 rounded-full bg-primary text-on-primary font-semibold shadow-lg shadow-primary/20 hover:bg-primary-container transition-colors"
            >
              Télécharger l&apos;application
            </Link>
            <Link
              href="/balades"
              className="px-7 py-4 rounded-full bg-surface-container-lowest border border-outline-variant text-text font-semibold hover:bg-surface-container transition-colors"
            >
              Voir les balades
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailedStep({
  number,
  title,
  description,
  details,
  reverse,
}: {
  number: string;
  title: string;
  description: string;
  details: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:[direction:rtl]" : ""}`}
    >
      <div className="md:[direction:ltr]">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-on-primary font-heading font-extrabold text-2xl mb-5">
          {number}
        </div>
        <h2 className="font-heading text-3xl md:text-4xl text-text mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-text-secondary text-lg mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {details.map((detail, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-3 h-3 text-secondary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-text-secondary">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:[direction:ltr] relative">
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-surface-container to-surface-container-high border border-outline-variant/40 flex items-center justify-center p-12">
          <div className="font-heading font-extrabold text-9xl text-primary/20 select-none">
            {number}
          </div>
        </div>
      </div>
    </div>
  );
}
