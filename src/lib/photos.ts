import fs from "node:fs";
import path from "node:path";

// Découverte automatique des photos produit.
//
// Convention : déposez les images dans `public/photos/<slug>/`.
// Le slug doit correspondre à celui du produit dans `products.ts`.
//   public/photos/sac-a-main-elegance/1.jpg  → photo principale
//   public/photos/sac-a-main-elegance/2.jpg  → photo secondaire
//   ...
// Aucun code à modifier : la liste est lue au moment du build.

const PHOTOS_ROOT = path.join(process.cwd(), "public", "photos");

const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

// Tri naturel : 2.jpg passe avant 10.jpg (contrairement au tri alphabétique).
const collator = new Intl.Collator("fr", { numeric: true, sensitivity: "base" });

// Le build appelle cette fonction plusieurs fois par produit (carte + page
// détail) : on garde le résultat en mémoire pour ne lire le disque qu'une fois.
const cache = new Map<string, string[]>();

/**
 * Retourne les URLs publiques des photos d'un produit, dans l'ordre.
 * Tableau vide si le dossier n'existe pas encore — l'appelant retombe alors
 * sur le visuel dégradé.
 */
export function getProductPhotos(slug: string): string[] {
  const cached = cache.get(slug);
  if (cached) return cached;

  const dir = path.join(PHOTOS_ROOT, slug);

  let photos: string[] = [];
  try {
    photos = fs
      .readdirSync(dir)
      .filter((file) => EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort(collator.compare)
      .map((file) => `/photos/${slug}/${file}`);
  } catch {
    // Dossier absent : produit sans photo pour le moment.
  }

  cache.set(slug, photos);
  return photos;
}

/** Photo de couverture d'un produit, ou `undefined` s'il n'y en a pas encore. */
export function getCoverPhoto(slug: string): string | undefined {
  return getProductPhotos(slug)[0];
}
