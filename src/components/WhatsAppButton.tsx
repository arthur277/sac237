import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  href: string;
  children: React.ReactNode;
  /**
   * `solid` : vert WhatsApp, réservé aux vrais boutons de commande — c'est ce
   * vert qui rassure au moment de commander, il perd sa force s'il est partout.
   * `neutral` : bouton bordé discret (header), pour ne pas ajouter une
   * troisième couleur en concurrence avec l'orange de la marque.
   */
  variant?: "solid" | "outline" | "neutral";
  className?: string;
};

// Bouton "Commander sur WhatsApp" — ouvre WhatsApp dans un nouvel onglet.
export function WhatsAppButton({
  href,
  children,
  variant = "solid",
  className = "",
}: Props) {
  // `shrink-0` + `whitespace-nowrap` : sur écran étroit le bouton garde sa
  // forme au lieu de se casser sur deux lignes.
  const base =
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 font-semibold transition-colors";
  const variants = {
    solid: "bg-[#25D366] text-white hover:bg-[#1eb85a]",
    outline: "border-2 border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10",
    neutral:
      "border border-neutral-300 text-neutral-900 hover:border-neutral-400 hover:bg-neutral-100",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {children}
    </a>
  );
}
