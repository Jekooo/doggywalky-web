import Link from "next/link";
import type { Metadata } from "next";
import { supabase, type PublicEvent } from "@/lib/supabase";
import { EventCard } from "@/components/EventCard";

export const metadata: Metadata = {
  title: "Balades à venir — Doggy Walky",
  description:
    "Découvrez les prochaines balades organisées près de chez vous par la communauté Doggy Walky.",
};

// Force dynamic so we get fresh data
export const revalidate = 60; // ISR : revalidate every 60s

async function getEvents(): Promise<PublicEvent[]> {
  const { data, error } = await supabase
    .from("public_events")
    .select("*")
    .order("scheduled_at", { ascending: true })
    .limit(50);

  if (error) {
    console.error("Failed to fetch events:", error);
    return [];
  }

  return (data as PublicEvent[]) || [];
}

export default async function BaladesPage() {
  const events = await getEvents();

  // Group by city for filtering
  const cities = Array.from(new Set(events.map((e) => e.city))).sort();

  return (
    <>
      {/* Header */}
      <section className="waves-bg pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Communauté
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-text mb-4 leading-tight">
            Prochaines balades
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Découvrez les événements organisés par la communauté Doggy Walky.
            Téléchargez l&apos;application pour rejoindre une balade ou en
            organiser une.
          </p>

          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-sm text-text-secondary">
                {events.length} balade{events.length > 1 ? "s" : ""} à venir
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-sm text-text-secondary">
                {cities.length} ville{cities.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Events list */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {events.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
            Vous voulez rejoindre une balade ?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Téléchargez l&apos;application Doggy Walky pour participer aux
            événements et rencontrer d&apos;autres maîtres.
          </p>
          <Link
            href="/#download"
            className="inline-block px-8 py-4 rounded-full bg-primary text-on-primary font-semibold shadow-lg shadow-primary/20 hover:bg-primary-container transition-colors"
          >
            Télécharger l&apos;application
          </Link>
        </div>
      </section>
    </>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-20">
      <div className="w-20 h-20 mx-auto rounded-full bg-surface-container-high flex items-center justify-center mb-6">
        <span className="text-4xl">🐾</span>
      </div>
      <h3 className="font-heading text-2xl text-text mb-3">
        Aucune balade pour le moment
      </h3>
      <p className="text-text-secondary mb-8 max-w-md mx-auto">
        Soyez le premier à organiser une balade dans votre quartier ! Téléchargez
        l&apos;application pour démarrer.
      </p>
      <Link
        href="/#download"
        className="inline-block px-7 py-3.5 rounded-full bg-primary text-on-primary font-semibold hover:bg-primary-container transition-colors"
      >
        Télécharger l&apos;app
      </Link>
    </div>
  );
}
