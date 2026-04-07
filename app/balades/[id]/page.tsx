import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { supabase, type PublicEvent } from "@/lib/supabase";

export const revalidate = 60;

async function getEvent(id: string): Promise<PublicEvent | null> {
  const { data, error } = await supabase
    .from("public_events")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data as PublicEvent;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const event = await getEvent(id);

  if (!event) {
    return { title: "Balade introuvable — Doggy Walky" };
  }

  return {
    title: `${event.title} — Doggy Walky`,
    description:
      event.description ||
      `Balade à ${event.city} organisée par la communauté Doggy Walky`,
  };
}

const MONTHS_FR = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

const DAYS_FR = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

function formatFullDate(iso: string) {
  const d = new Date(iso);
  const dayName = DAYS_FR[d.getDay()];
  const day = d.getDate();
  const month = MONTHS_FR[d.getMonth()];
  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  return `${dayName} ${day} ${month} ${year} à ${hours}h${minutes}`;
}

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = await getEvent(id);

  if (!event) notFound();

  return (
    <>
      {/* Hero */}
      <section className="waves-bg pt-12 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/balades"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors mb-8"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Toutes les balades
          </Link>

          <span className="inline-block text-xs font-semibold text-secondary uppercase tracking-wide bg-secondary/10 px-3 py-1.5 rounded-full mb-4">
            Balade planifiée
          </span>

          <h1 className="font-heading text-4xl md:text-5xl text-text mb-6 leading-tight">
            {event.title}
          </h1>

          {event.description && (
            <p className="text-lg text-text-secondary leading-relaxed">
              {event.description}
            </p>
          )}
        </div>
      </section>

      {/* Details */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <DetailCard
              icon={<CalendarIcon />}
              label="Date et heure"
              value={formatFullDate(event.scheduled_at)}
            />
            <DetailCard
              icon={<PinIcon />}
              label="Lieu"
              value={event.city}
            />
            <DetailCard
              icon={<UsersIcon />}
              label="Participants"
              value={`${event.participants_count} ${event.participants_count > 1 ? "inscrits" : "inscrit"}${event.max_participants ? ` / ${event.max_participants} max` : ""}`}
            />
            <DetailCard
              icon={<ClockIcon />}
              label="Durée estimée"
              value="≈ 1-2 heures"
            />
          </div>

          {/* Privacy notice */}
          <div className="bg-surface-container-low border border-outline-variant/40 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-text mb-1">
                  Vie privée respectée
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Le point de rendez-vous précis et les profils des participants
                  ne sont visibles que dans l&apos;application, pour leur
                  sécurité.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-10 text-center text-on-primary">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Envie de participer ?
            </h2>
            <p className="text-on-primary/90 mb-8 max-w-md mx-auto">
              Téléchargez l&apos;application Doggy Walky pour rejoindre cette
              balade et discuter avec les autres participants.
            </p>
            <Link
              href="/#download"
              className="inline-block px-8 py-4 rounded-full bg-on-primary text-primary font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Télécharger l&apos;application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-5">
      <div className="flex items-center gap-2 text-text-secondary text-xs font-semibold uppercase tracking-wide mb-2">
        {icon}
        {label}
      </div>
      <p className="text-text font-medium">{value}</p>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="w-4 h-4 text-secondary"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      className="w-4 h-4 text-secondary"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      className="w-4 h-4 text-secondary"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-4 h-4 text-secondary"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
