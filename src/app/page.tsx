import Image from "next/image";
import { products } from "@/lib/products";
import { site, telLink } from "@/lib/site";
import { contactLink, whatsappLink } from "@/lib/whatsapp";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TrustBar } from "@/components/TrustBar";
import { PinIcon, PhoneIcon, ClockIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      {/* Hero photo : c'est le cuir qui doit vendre, pas un aplat de couleur.
          `isolate` garde le voile et le texte au-dessus de l'image. */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/photos/sac-cartable/1.jpg"
          alt={`Sacs à main en cuir ${site.name}, disponibles en plusieurs coloris`}
          fill
          sizes="100vw"
          // Image LCP : on la précharge (`priority` est déprécié en Next 16).
          preload
          className="object-cover object-center"
        />
        {/* Voile sombre : lisibilité du texte, et la photo gagne en profondeur. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />

        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center text-white sm:py-32">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium ring-1 ring-white/25 backdrop-blur">
            🇮🇹 100 % cuir · cuirs d&apos;Italie
          </span>
          <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {site.tagline}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            {site.description}
          </p>
          <p className="mt-4 font-semibold">{site.achat}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#catalogue"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-ink shadow-lg transition-transform hover:scale-105"
            >
              Voir les sacs
            </a>
            <WhatsAppButton href={contactLink()}>
              Commander sur WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Réassurance */}
      <TrustBar />

      {/* Catalogue */}
      <section id="catalogue" className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Notre collection</h2>
          <p className="mt-2 text-neutral-600">
            Cliquez sur un sac pour le commander sur WhatsApp.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Boutique physique */}
      <section id="boutique" className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="rounded-2xl bg-ivory p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
            <div>
              <h2 className="text-3xl font-semibold">
                Venez nous voir en boutique
              </h2>
              <p className="mt-3 flex items-start gap-2 text-neutral-600">
                <span className="mt-0.5 shrink-0 text-brand-600">
                  <PinIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="font-semibold text-neutral-900">
                    {site.store.name}
                  </span>
                  <br />
                  {site.store.address} — {site.store.city}
                </span>
              </p>
              <p className="mt-3 flex items-start gap-2 text-neutral-600">
                <span className="mt-0.5 shrink-0 text-brand-600">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {site.store.phones.map((phone, i) => (
                    <span key={phone} className="whitespace-nowrap">
                      {i > 0 && <span className="mr-2 text-neutral-300">/</span>}
                      <a
                        href={telLink(phone)}
                        className="font-medium text-neutral-900 hover:text-brand-600 hover:underline"
                      >
                        {phone}
                      </a>
                    </span>
                  ))}
                </span>
              </p>
              {/* Ligne affichée seulement quand les horaires sont renseignés. */}
              {site.store.hours && (
                <p className="mt-3 flex items-start gap-2 text-neutral-600">
                  <span className="mt-0.5 shrink-0 text-brand-600">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <span>{site.store.hours}</span>
                </p>
              )}
              <p className="mt-4 text-neutral-600">
                Essayez les sacs sur place et repartez avec, ou faites-vous
                livrer à domicile : c&apos;est vous qui choisissez.
              </p>
            </div>
            <div className="mt-6 shrink-0 sm:mt-0">
              <WhatsAppButton
                href={whatsappLink(
                  `Bonjour ${site.name} 👋, comment venir à la boutique de ${site.store.name} ?`,
                )}
              >
                Demander l&apos;itinéraire
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
