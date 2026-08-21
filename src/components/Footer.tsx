import Image from "next/image";
import { site, telLink } from "@/lib/site";
import { InstagramIcon, FacebookIcon } from "./icons";

export function Footer() {
  return (
    // Brun-noir chaud : il pose la page sans entrer en concurrence avec les
    // coloris des sacs, contrairement à un aplat orange.
    <footer className="mt-auto bg-ink text-white">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-white/70">
        {/* Version blanche du logo : le fond est sombre. */}
        <Image
          src="/logo-tropics-blanc.png"
          alt={site.name}
          width={706}
          height={220}
          className="h-10 w-auto"
        />
        <p className="mt-4 text-white/90">{site.tagline}</p>
        <p className="mt-4">
          Boutique : {site.store.name} — {site.store.address},{" "}
          {site.store.city}
        </p>
        <p className="mt-1">
          Tél. :{" "}
          {site.store.phones.map((phone, i) => (
            <span key={phone} className="whitespace-nowrap">
              {i > 0 && <span className="text-white/30"> / </span>}
              <a href={telLink(phone)} className="hover:text-white">
                {phone}
              </a>
            </span>
          ))}
        </p>
        {site.store.hours && <p className="mt-1">Horaires : {site.store.hours}</p>}
        <p className="mt-1">
          Livraison : {site.city} · Paiement à la livraison accepté
        </p>

        {/* Réseaux : au Cameroun, un compte actif rassure autant que le prix. */}
        <div className="mt-6 flex items-center gap-3">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/20 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={`${site.name} sur Instagram`}
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/20 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={`${site.name} sur Facebook`}
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <span className="text-white/60">{site.social.handle}</span>
        </div>

        <p className="mt-6 text-xs text-white/40">
          © {site.name} — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
