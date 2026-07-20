import type { Product } from "@/lib/products";

// Visuel placeholder d'un produit (dégradé + initiale).
// 👉 Remplacez par <Image> quand vous aurez les vraies photos.
export function ProductThumb({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        background: `linear-gradient(135deg, ${product.from}, ${product.to})`,
      }}
    >
      <span className="text-5xl font-black text-white/90 select-none">
        {product.name.charAt(0)}
      </span>
      <span className="absolute bottom-3 right-4 text-4xl opacity-30 select-none">
        👜
      </span>
    </div>
  );
}
