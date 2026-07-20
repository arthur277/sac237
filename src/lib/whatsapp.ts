import { site } from "./site";
import { formatPrice, type Product } from "./products";

// Construit un lien wa.me avec un message pré-rempli.
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Lien de commande pour un produit précis.
export function orderLink(product: Product): string {
  const message =
    `Bonjour ${site.name} 👋\n\n` +
    `Je suis intéressé(e) par :\n` +
    `• ${product.name} — ${formatPrice(product.price)}\n\n` +
    `Est-il disponible ? Merci !`;
  return whatsappLink(message);
}

// Lien de contact général (bouton du header / footer).
export function contactLink(): string {
  return whatsappLink(`Bonjour ${site.name} 👋, j'aimerais quelques informations.`);
}
