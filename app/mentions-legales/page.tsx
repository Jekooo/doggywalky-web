import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Doggy Walky",
};

export default function MentionsLegales() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-heading text-4xl md:text-5xl text-text mb-8">
        Mentions légales
      </h1>

      <div className="prose prose-lg max-w-none space-y-8 text-text-secondary">
        <Section title="Éditeur du site">
          <p>
            <strong className="text-text">Doggy Walky</strong>
            <br />
            Application mobile et site web.
            <br />
            Contact : contact@doggywalky.dog
          </p>
        </Section>

        <Section title="Hébergement">
          <p>
            <strong className="text-text">Site web :</strong> Vercel Inc., 340 S
            Lemon Ave #4133, Walnut, CA 91789, USA
          </p>
          <p>
            <strong className="text-text">Base de données :</strong> Supabase,
            970 Toa Payoh North #07-04, Singapore 318992
          </p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos,
            graphismes) est la propriété exclusive de Doggy Walky ou de ses
            partenaires. Toute reproduction, même partielle, est interdite sans
            autorisation préalable.
          </p>
        </Section>

        <Section title="Données personnelles">
          <p>
            Pour en savoir plus sur la collecte et le traitement de vos données
            personnelles, consultez notre{" "}
            <a
              href="/confidentialite"
              className="text-primary font-semibold hover:underline"
            >
              politique de confidentialité
            </a>
            .
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            Le site doggywalky.dog n&apos;utilise pas de cookies de suivi
            publicitaire. Seuls des cookies techniques nécessaires au
            fonctionnement du site peuvent être utilisés.
          </p>
        </Section>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-2xl text-text mb-4">{title}</h2>
      <div className="leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
