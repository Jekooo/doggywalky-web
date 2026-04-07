import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden waves-bg">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-outline-variant/40 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                  Bêta ouverte
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-text mb-6">
                Trouvez des copains pour votre{" "}
                <span className="text-primary">chien</span>.
              </h1>

              <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-xl">
                Doggy Walky réunit les maîtres et leurs chiens pour des balades
                organisées ou spontanées près de chez vous. Socialisez,
                rencontrez, partagez.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#download"
                  className="px-7 py-4 rounded-full bg-primary text-on-primary font-semibold text-base shadow-lg shadow-primary/20 hover:bg-primary-container transition-colors text-center"
                >
                  Télécharger l&apos;application
                </Link>
                <Link
                  href="/balades"
                  className="px-7 py-4 rounded-full bg-surface-container-low border border-outline-variant text-text font-semibold text-base hover:bg-surface-container transition-colors text-center"
                >
                  Voir les balades
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span>Gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span>Sans publicité</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span>iOS &amp; Android</span>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative aspect-[9/16] max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl"></div>
                <div className="relative bg-surface-container-high rounded-[3rem] border-8 border-text/90 p-3 shadow-2xl">
                  <div className="bg-background rounded-[2.2rem] aspect-[9/19] flex flex-col items-center justify-center p-8">
                    <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center mb-4 shadow-lg">
                      <svg
                        className="w-10 h-10 text-on-primary"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <ellipse cx="6" cy="9" rx="1.8" ry="2.4" />
                        <ellipse cx="10.5" cy="6" rx="1.8" ry="2.4" />
                        <ellipse cx="13.5" cy="6" rx="1.8" ry="2.4" />
                        <ellipse cx="18" cy="9" rx="1.8" ry="2.4" />
                        <path d="M12 11.5c-2.8 0-5 2.2-5 4.5 0 1.7 1.3 3 3 3 1 0 1.5-.5 2-.5s1 .5 2 .5c1.7 0 3-1.3 3-3 0-2.3-2.2-4.5-5-4.5z" />
                      </svg>
                    </div>
                    <p className="font-heading font-extrabold text-2xl text-text">
                      Doggy Walky
                    </p>
                    <p className="text-sm text-text-secondary mt-2">
                      Aperçu de l&apos;app
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Fonctionnalités
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-text mb-4">
              Tout ce qu&apos;il faut pour des balades réussies
            </h2>
            <p className="text-lg text-text-secondary">
              Une application pensée pour les maîtres et leurs compagnons à
              quatre pattes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="🐾"
              title="Balades en cours"
              description="Voyez en temps réel les balades qui démarrent près de chez vous et rejoignez-les en un clic."
              accent="primary"
            />
            <FeatureCard
              icon="📅"
              title="Événements planifiés"
              description="Organisez ou rejoignez des rassemblements à l'avance. Sortie au parc, balade en forêt, plage…"
              accent="secondary"
            />
            <FeatureCard
              icon="💬"
              title="Chat de groupe"
              description="Discutez avec les participants avant et pendant la balade pour vous coordonner facilement."
              accent="primary"
            />
            <FeatureCard
              icon="🗺️"
              title="Carte interactive"
              description="Visualisez les points de rendez-vous et les balades autour de vous sur une carte précise."
              accent="secondary"
            />
            <FeatureCard
              icon="🏆"
              title="Badges & défis"
              description="Gagnez des badges en participant à des balades et complétez des défis avec votre chien."
              accent="primary"
            />
            <FeatureCard
              icon="👥"
              title="Communauté"
              description="Suivez d'autres maîtres, créez des amitiés et retrouvez vos compagnons de balades préférés."
              accent="secondary"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              En 3 étapes
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-text mb-4">
              Commencez en quelques minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="01"
              title="Créez votre profil"
              description="Inscrivez-vous gratuitement et ajoutez le profil de votre chien : race, âge, photo et personnalité."
            />
            <StepCard
              number="02"
              title="Trouvez une balade"
              description="Parcourez les balades planifiées ou démarrez la vôtre. Filtrez par ville et distance."
            />
            <StepCard
              number="03"
              title="Rencontrez & marchez"
              description="Rejoignez le rendez-vous, faites connaissance avec d'autres maîtres et partagez de bons moments."
            />
          </div>

          <div className="text-center mt-16">
            <Link
              href="/comment-ca-marche"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Voir le guide complet
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section
        id="download"
        className="py-24 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-8 border-white/30"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-8 border-white/30"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="font-heading text-4xl md:text-6xl text-on-primary mb-6">
            Prêts pour la balade ?
          </h2>
          <p className="text-lg md:text-xl text-on-primary/90 mb-12 max-w-2xl mx-auto">
            Rejoignez la communauté Doggy Walky et trouvez vos prochains
            partenaires de promenade dès aujourd&apos;hui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              disabled
              className="px-8 py-4 rounded-2xl bg-text/90 text-on-primary font-semibold flex items-center gap-3 justify-center cursor-not-allowed opacity-80"
            >
              <AppleIcon />
              <div className="text-left">
                <div className="text-xs opacity-70">Bientôt sur</div>
                <div className="text-base font-bold">App Store</div>
              </div>
            </button>
            <button
              disabled
              className="px-8 py-4 rounded-2xl bg-text/90 text-on-primary font-semibold flex items-center gap-3 justify-center cursor-not-allowed opacity-80"
            >
              <PlayIcon />
              <div className="text-left">
                <div className="text-xs opacity-70">Bientôt sur</div>
                <div className="text-base font-bold">Google Play</div>
              </div>
            </button>
          </div>

          <p className="text-sm text-on-primary/70 mt-8">
            🚀 L&apos;application est en bêta — sortie publique bientôt
          </p>
        </div>
      </section>
    </>
  );
}

/* ───── Sub-components ───── */

function FeatureCard({
  icon,
  title,
  description,
  accent,
}: {
  icon: string;
  title: string;
  description: string;
  accent: "primary" | "secondary";
}) {
  const accentBg = accent === "primary" ? "bg-primary/10" : "bg-secondary/10";
  const accentBorder =
    accent === "primary" ? "border-l-primary" : "border-l-secondary";

  return (
    <div
      className={`p-7 rounded-3xl bg-surface-container-lowest border border-outline-variant/40 border-l-4 ${accentBorder} hover:shadow-lg transition-shadow`}
    >
      <div
        className={`w-14 h-14 rounded-2xl ${accentBg} flex items-center justify-center text-3xl mb-5`}
      >
        {icon}
      </div>
      <h3 className="font-heading font-extrabold text-xl text-text mb-2">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-2 font-heading font-extrabold text-7xl text-primary/10 select-none">
        {number}
      </div>
      <div className="relative pt-8 pl-8">
        <h3 className="font-heading font-extrabold text-2xl text-text mb-3">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-secondary"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35l13.69 9.85-13.69 9.85c-.5-.25-.84-.76-.84-1.35z" />
    </svg>
  );
}
