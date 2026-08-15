import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, formatPrice, products } from "@/lib/products";
import { getProductPhotos } from "@/lib/photos";
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

  const [cover, ...autresPhotos] = getProductPhotos(product.slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/"
        className="text-sm text-amber-700 hover:underline"
      >
        ← Retour à la collection
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <ProductThumb
              product={product}
              src={cover}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="h-full w-full"
            />
          </div>

          {/* Vues supplémentaires, affichées seulement si elles existent. */}
          {autresPhotos.length > 0 && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {autresPhotos.map((photo) => (
                <div
                  key={photo}
                  className="relative aspect-square overflow-hidden rounded-xl"
                >
                  <ProductThumb
                    product={product}
                    src={photo}
                    sizes="(max-width: 768px) 25vw, 12vw"
                    className="h-full w-full"
                  />
                </div>
              ))}
            </div>
          )}
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

          {product.colors.length > 0 && (
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-neutral-900">
                Coloris disponibles
                <span className="ml-2 font-normal text-neutral-500">
                  ({product.colors.length})
                </span>
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <li
                    key={color}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-700"
                  >
                    {color}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-neutral-500">
                Précisez votre coloris dans le message WhatsApp.
              </p>
            </div>
          )}

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
