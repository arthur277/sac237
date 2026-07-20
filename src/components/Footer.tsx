import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-600">
        <p className="font-semibold text-neutral-900">{site.name}</p>
        <p className="mt-1">{site.tagline}</p>
        <p className="mt-3">
          Livraison : {site.city} · Paiement à la livraison accepté
        </p>
        <p className="mt-4 text-xs text-neutral-400">
          © {site.name} — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
