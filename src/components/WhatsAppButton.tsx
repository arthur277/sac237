import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

// Bouton "Commander sur WhatsApp" — ouvre WhatsApp dans un nouvel onglet.
export function WhatsAppButton({
  href,
  children,
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-[#25D366] text-white hover:bg-[#1eb85a]"
      : "border-2 border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}
