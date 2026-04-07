-- ============================================
-- VUE PUBLIQUE DES ÉVÉNEMENTS POUR LE SITE WEB
-- ============================================
-- Cette vue expose les événements planifiés futurs au public (anon role)
-- en filtrant les colonnes sensibles (pas de coordonnées GPS précises,
-- pas de pseudos exposés sans agrégation, pas de balades spontanées).

-- 1. Créer la vue
CREATE OR REPLACE VIEW public_events AS
SELECT
  e.id,
  e.title,
  e.description,
  e.city,
  e.scheduled_at,
  e.max_participants,
  e.status,
  -- On expose seulement la ville (pas de coordonnées précises)
  -- Coordonnées arrondies pour l'affichage carte ville (pas de tracking)
  ROUND(e.city_lat::numeric, 2)::float8 AS city_lat_approx,
  ROUND(e.city_lon::numeric, 2)::float8 AS city_lon_approx,
  -- Compteur de participants (sans exposer les identités)
  (
    SELECT COUNT(DISTINCT ep.user_id)
    FROM event_participants ep
    WHERE ep.event_id = e.id
  ) AS participants_count,
  e.created_at
FROM events e
WHERE
  e.status = 'upcoming'
  AND e.scheduled_at > NOW()
  AND e.scheduled_at < NOW() + INTERVAL '90 days';

-- 2. Donner l'accès à la vue au rôle anon
GRANT SELECT ON public_events TO anon;
GRANT SELECT ON public_events TO authenticated;

-- 3. Note importante :
-- Les vues PostgreSQL ne supportent pas RLS directement, mais cette vue
-- ne SELECT que les données déjà filtrées (futures, non-annulées, non-spontanées).
-- Aucune donnée sensible n'est exposée :
--   - pas de creator_id
--   - pas de meeting_point_lat/lon (point de RDV précis caché)
--   - pas de pseudos individuels
--   - coordonnées ville arrondies à 2 décimales (~1km de précision)

-- 4. Index pour performance
CREATE INDEX IF NOT EXISTS idx_events_status_scheduled_future
  ON events(status, scheduled_at)
  WHERE status = 'upcoming';
