import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { contactLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/5 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        {/* `min-w-0` laisse le logo se réduire plutôt que pousser le bouton
            hors de l'écran sur les petits mobiles. */}
        <Link href="/" className="min-w-0" aria-label={`${site.name} — accueil`}>
          <Image
            src="/logo-tropics.png"
            alt={site.name}
            width={706}
            height={220}
            // Logo au-dessus de la ligne de flottaison, mais ce n'est pas le
            // LCP : on le charge tout de suite sans le précharger.
            loading="eager"
            fetchPriority="high"
            className="h-10 w-auto sm:h-14"
          />
        </Link>
        {/* Bouton neutre : le vert WhatsApp est gardé pour les commandes. */}
        <WhatsAppButton
          href={contactLink()}
          variant="neutral"
          className="px-4 py-2 text-sm"
        >
          Nous contacter
        </WhatsAppButton>
      </div>
    </header>
  );
}
