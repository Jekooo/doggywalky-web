import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Doggy Walky",
};

export default function CGU() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-heading text-4xl md:text-5xl text-text mb-4">
        Conditions générales d&apos;utilisation
      </h1>
      <p className="text-text-secondary mb-12">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>

      <div className="space-y-10 text-text-secondary leading-relaxed">
        <Section title="1. Objet">
          <p>
            Doggy Walky est une application gratuite permettant aux propriétaires
            de chiens de se rencontrer, d&apos;organiser et de rejoindre des
            balades. Les présentes CGU régissent l&apos;utilisation du service.
          </p>
        </Section>

        <Section title="2. Inscription">
          <p>
            L&apos;inscription est gratuite et ouverte à toute personne majeure
            (ou mineure de plus de 15 ans avec accord parental). Vous vous
            engagez à fournir des informations exactes.
          </p>
        </Section>

        <Section title="3. Comportement des utilisateurs">
          <p>Vous vous engagez à :</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Respecter les autres utilisateurs et leurs animaux</li>
            <li>Ne pas publier de contenu offensant, illégal ou inapproprié</li>
            <li>
              Ne pas usurper l&apos;identité d&apos;une autre personne
            </li>
            <li>Maintenir vos chiens sous votre responsabilité lors des balades</li>
            <li>Respecter la législation locale (laisse, port du muselière selon les races, etc.)</li>
          </ul>
        </Section>

        <Section title="4. Responsabilité">
          <p>
            Doggy Walky est une plateforme de mise en relation. Nous ne sommes
            pas organisateurs des balades et ne pouvons être tenus responsables
            des incidents pouvant survenir lors des rencontres entre
            utilisateurs ou entre chiens.
          </p>
          <p className="mt-3">
            Chaque propriétaire reste pleinement responsable du comportement de
            son ou ses chiens.
          </p>
        </Section>

        <Section title="5. Modération">
          <p>
            Nous nous réservons le droit de supprimer tout contenu inapproprié
            et de suspendre ou supprimer tout compte ne respectant pas les
            présentes CGU, sans préavis.
          </p>
        </Section>

        <Section title="6. Modification des CGU">
          <p>
            Nous pouvons modifier les présentes CGU à tout moment. Les
            utilisateurs seront informés des changements importants.
          </p>
        </Section>

        <Section title="7. Droit applicable">
          <p>
            Les présentes CGU sont soumises au droit français. Tout litige sera
            de la compétence des tribunaux français.
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
      <h2 className="font-heading text-2xl text-text mb-3">{title}</h2>
      {children}
    </section>
  );
}
