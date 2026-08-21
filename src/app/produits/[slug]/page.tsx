import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, formatPrice, products } from "@/lib/products";
import { getProductPhotos } from "@/lib/photos";
import { swatch } from "@/lib/colors";
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
    <div className="mx-auto max-w-5xl px-4 pt-10 pb-28 sm:pb-10">
      <Link
        href="/"
        className="text-sm text-brand-600 hover:underline"
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
              preload
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
          <span className="text-sm font-medium uppercase tracking-wide text-brand-600">
            {product.category}
          </span>
          <h1 className="mt-1 text-3xl font-semibold text-neutral-900">
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
                    className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white py-1 pl-1.5 pr-3 text-sm text-neutral-700"
                  >
                    {/* Pastille de la teinte : on lit la couleur d'un coup
                        d'œil, le nom reste affiché pour la commande. */}
                    <span
                      className="h-5 w-5 shrink-0 rounded-full ring-1 ring-black/10 ring-inset"
                      style={{ backgroundColor: swatch(color) }}
                      aria-hidden="true"
                    />
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

      {/* Barre de commande collante sur mobile : le prix et le bouton restent
          visibles pendant qu'on fait défiler les photos. Masquée dès sm, où le
          bouton de la colonne de droite est déjà à l'écran. */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-black/10 bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-xs text-neutral-500">{product.name}</p>
            <p className="text-lg font-bold text-neutral-900">
              {formatPrice(product.price)}
            </p>
          </div>
          <WhatsAppButton href={orderLink(product)} className="px-5 py-2.5">
            Commander
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
