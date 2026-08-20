import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import { getCoverPhoto } from "@/lib/photos";
import { ProductThumb } from "./ProductThumb";

// Carte produit affichée dans la grille de la page d'accueil.
export function ProductCard({ product }: { product: Product }) {
  const cover = getCoverPhoto(product.slug);

  return (
    <Link
      href={`/produits/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden">
        <ProductThumb
          product={product}
          src={cover}
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-brand-600">
          {product.category}
        </span>
        <h3 className="mt-1 font-semibold text-neutral-900">{product.name}</h3>
        <p className="mt-2 text-lg font-bold text-neutral-900">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
