import Link from "next/link";
import { site } from "@/lib/site";
import { contactLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 text-sm font-black text-white shadow-sm">
            237
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-neutral-900">
              {site.name}
            </span>
            <span className="hidden text-xs text-neutral-500 sm:block">
              Maroquinerie · 237
            </span>
          </span>
        </Link>
        <WhatsAppButton href={contactLink()} className="px-4 py-2 text-sm">
          Nous contacter
        </WhatsAppButton>
      </div>
    </header>
  );
}
