import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Doggy Walky",
};

export default function Confidentialite() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-heading text-4xl md:text-5xl text-text mb-4">
        Politique de confidentialité
      </h1>
      <p className="text-text-secondary mb-12">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>

      <div className="space-y-10 text-text-secondary leading-relaxed">
        <Section title="1. Données collectées">
          <p>
            Lorsque vous utilisez Doggy Walky, nous collectons les données
            suivantes :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong className="text-text">Compte :</strong> email, pseudo,
              prénom, ville, photo de profil
            </li>
            <li>
              <strong className="text-text">Chiens :</strong> nom, race, date de
              naissance, photo
            </li>
            <li>
              <strong className="text-text">Localisation :</strong> ville et,
              pour les balades spontanées, position GPS approximative (avec
              votre consentement)
            </li>
            <li>
              <strong className="text-text">Activité :</strong> balades créées,
              participations, messages dans les chats
            </li>
            <li>
              <strong className="text-text">Technique :</strong> token
              notification push, version OS, adresse IP
            </li>
          </ul>
        </Section>

        <Section title="2. Finalités">
          <p>Vos données sont utilisées pour :</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Fournir et améliorer les fonctionnalités de l&apos;application</li>
            <li>Vous mettre en relation avec d&apos;autres utilisateurs proches</li>
            <li>Vous envoyer des notifications liées à vos balades</li>
            <li>Garantir la sécurité du service</li>
          </ul>
        </Section>

        <Section title="3. Base légale">
          <p>
            Le traitement de vos données repose sur votre consentement (article
            6.1.a du RGPD) et sur l&apos;exécution du contrat de service que vous
            acceptez en créant un compte (article 6.1.b du RGPD).
          </p>
        </Section>

        <Section title="4. Hébergement et transferts">
          <p>
            Vos données sont hébergées par <strong className="text-text">Supabase</strong>{" "}
            (Singapour) et <strong className="text-text">Vercel</strong>{" "}
            (États-Unis), tous deux conformes aux exigences européennes en
            matière de protection des données (Standard Contractual Clauses).
          </p>
        </Section>

        <Section title="5. Durée de conservation">
          <p>
            Vos données sont conservées tant que votre compte est actif. À la
            suppression de votre compte, l&apos;ensemble de vos données
            personnelles est supprimé sous 30 jours.
          </p>
        </Section>

        <Section title="6. Vos droits">
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
            <li>Droit à la portabilité</li>
            <li>Droit d&apos;opposition au traitement</li>
            <li>Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p className="mt-4">
            Pour exercer ces droits, contactez-nous à{" "}
            <a
              href="mailto:privacy@doggywalky.dog"
              className="text-primary font-semibold hover:underline"
            >
              privacy@doggywalky.dog
            </a>
            .
          </p>
        </Section>

        <Section title="7. Cookies">
          <p>
            Le site web utilise uniquement des cookies techniques nécessaires à
            son fonctionnement. Aucun cookie publicitaire ou de tracking
            tiers n&apos;est utilisé.
          </p>
        </Section>

        <Section title="8. Mineurs">
          <p>
            Doggy Walky n&apos;est pas destiné aux mineurs de moins de 15 ans.
            Si vous êtes un parent et constatez que votre enfant nous a fourni
            des données personnelles, contactez-nous immédiatement.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            Pour toute question concernant cette politique :{" "}
            <a
              href="mailto:privacy@doggywalky.dog"
              className="text-primary font-semibold hover:underline"
            >
              privacy@doggywalky.dog
            </a>
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
