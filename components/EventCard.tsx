import Link from "next/link";
import type { PublicEvent } from "@/lib/supabase";

const MONTHS_FR = [
  "janv.",
  "févr.",
  "mars",
  "avril",
  "mai",
  "juin",
  "juil.",
  "août",
  "sept.",
  "oct.",
  "nov.",
  "déc.",
];

function formatDate(iso: string) {
  const d = new Date(iso);
  const day = d.getDate();
  const month = MONTHS_FR[d.getMonth()];
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  return { date: `${day} ${month}`, time: `${hours}h${minutes}` };
}

function relativeTime(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diff = d.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return "Aujourd'hui";
  if (days === 1) return "Demain";
  if (days < 7) return `Dans ${days} jours`;
  if (days < 14) return "La semaine prochaine";
  return `Dans ${Math.floor(days / 7)} semaines`;
}

export function EventCard({ event }: { event: PublicEvent }) {
  const { date, time } = formatDate(event.scheduled_at);
  const relative = relativeTime(event.scheduled_at);

  return (
    <Link
      href={`/balades/${event.id}`}
      className="group block bg-surface-container-lowest rounded-3xl border border-outline-variant/40 border-l-4 border-l-secondary p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-semibold text-secondary uppercase tracking-wide bg-secondary/10 px-3 py-1 rounded-full">
          {relative}
        </span>
        <span className="text-xs text-text-secondary">
          {event.participants_count} 🐾
        </span>
      </div>

      <h3 className="font-heading font-extrabold text-xl text-text mb-3 line-clamp-2 group-hover:text-primary transition-colors">
        {event.title}
      </h3>

      {event.description && (
        <p className="text-sm text-text-secondary line-clamp-2 mb-5 leading-relaxed">
          {event.description}
        </p>
      )}

      <div className="space-y-2 pt-4 border-t border-outline-variant/30">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <CalendarIcon />
          <span>
            {date} à {time}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <PinIcon />
          <span>{event.city}</span>
        </div>
      </div>
    </Link>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="w-4 h-4 text-secondary flex-shrink-0"
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
      className="w-4 h-4 text-secondary flex-shrink-0"
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
