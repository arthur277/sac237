import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { contactLink } from "@/lib/whatsapp";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 text-white">
        {/* Motifs décoratifs */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-black/20 blur-2xl" />

        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:py-24">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium ring-1 ring-white/20">
            🇨🇲 Fait pour le 237
          </span>
          <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            {site.tagline}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-amber-50/90">
            {site.description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#catalogue"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-amber-900 shadow-lg transition-transform hover:scale-105"
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
          <h2 className="text-3xl font-bold">Notre collection</h2>
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
    </>
  );
}
