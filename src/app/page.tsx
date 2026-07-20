import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { contactLink } from "@/lib/whatsapp";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-700 to-amber-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-20">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium">
            🇨🇲 Fait pour le 237
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-amber-50/90">
            {site.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#catalogue"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-amber-900 transition-colors hover:bg-amber-50"
            >
              Voir les sacs
            </a>
            <WhatsAppButton href={contactLink()}>
              Commander sur WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section id="catalogue" className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-bold">Notre collection</h2>
        <p className="mt-1 text-neutral-600">
          Cliquez sur un sac pour le commander sur WhatsApp.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
