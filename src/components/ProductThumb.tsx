import Image from "next/image";
import type { Product } from "@/lib/products";
import { site } from "@/lib/site";

// Visuel d'un produit.
// Affiche la photo si le produit en a une (`src`), sinon un dégradé de secours
// pour que le site reste présentable tant que les photos ne sont pas déposées.
export function ProductThumb({
  product,
  src,
  sizes,
  priority = false,
  className = "",
}: {
  product: Product;
  /** URL de la photo, ex. `/photos/mon-sac/1.jpg`. Voir `lib/photos.ts`. */
  src?: string;
  /** Largeur d'affichage prévue, pour que le navigateur choisisse la bonne taille. */
  sizes?: string;
  /** À activer pour l'image principale visible d'emblée (améliore le LCP). */
  priority?: boolean;
  className?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-neutral-100 ${className}`}>
        <Image
          src={src}
          alt={`${product.name} — ${product.category} ${site.name}`}
          fill
          sizes={sizes ?? "(max-width: 640px) 50vw, 25vw"}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${product.from}, ${product.to})`,
      }}
    >
      {/* Halo lumineux */}
      <div
        className="absolute -top-1/4 left-1/2 h-3/4 w-3/4 -translate-x-1/2 rounded-full opacity-30 blur-2xl"
        style={{ background: "radial-gradient(circle, #ffffff, transparent 70%)" }}
      />
      {/* Glyphe sac */}
      <span className="relative text-6xl drop-shadow-lg select-none sm:text-7xl">
        👜
      </span>
      {/* Filigrane initiale */}
      <span className="pointer-events-none absolute bottom-2 left-3 text-xs font-bold uppercase tracking-widest text-white/40 select-none">
        {product.category}
      </span>
    </div>
  );
}
