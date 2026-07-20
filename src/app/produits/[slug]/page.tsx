import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, formatPrice, products } from "@/lib/products";
import { orderLink } from "@/lib/whatsapp";
import { ProductThumb } from "@/components/ProductThumb";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Génère les pages statiquement pour chaque produit.
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage(props: PageProps<"/produits/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/"
        className="text-sm text-amber-700 hover:underline"
      >
        ← Retour à la collection
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <ProductThumb product={product} className="h-full w-full" />
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-medium uppercase tracking-wide text-amber-700">
            {product.category}
          </span>
          <h1 className="mt-1 text-3xl font-extrabold text-neutral-900">
            {product.name}
          </h1>
          <p className="mt-3 text-2xl font-bold text-neutral-900">
            {formatPrice(product.price)}
          </p>
          <p className="mt-4 leading-relaxed text-neutral-600">
            {product.description}
          </p>

          <div className="mt-8">
            <WhatsAppButton href={orderLink(product)} className="w-full sm:w-auto">
              Commander ce sac sur WhatsApp
            </WhatsAppButton>
            <p className="mt-3 text-sm text-neutral-500">
              Paiement à la livraison disponible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
