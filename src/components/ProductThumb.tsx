import type { Product } from "@/lib/products";

// Visuel placeholder soigné (dégradé + halo + glyphe sac).
// 👉 Remplacez par <Image src="/photos/..." /> quand vous aurez les vraies photos.
export function ProductThumb({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
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
