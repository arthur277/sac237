import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-600">
        <Image
          src="/logo-tropics.png"
          alt={site.name}
          width={706}
          height={220}
          className="h-10 w-auto"
        />
        <p className="mt-3">{site.tagline}</p>
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
