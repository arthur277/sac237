// Catalogue produits. Données d'exemple — remplacez par vos vrais sacs, prix et photos.
export type Product = {
  slug: string;
  name: string;
  price: number; // en FCFA
  category: string;
  description: string;
  // Dégradé du visuel placeholder (en attendant vos vraies photos).
  from: string;
  to: string;
};

export const products: Product[] = [
  {
    slug: "sac-a-main-elegance",
    name: "Sac à main Élégance",
    price: 25000,
    category: "Sac à main",
    description:
      "Un sac à main en simili-cuir doux, parfait pour le bureau comme pour les sorties. Fermeture éclair, doublure intérieure et bandoulière réglable.",
    from: "#b45309",
    to: "#78350f",
  },
  {
    slug: "sac-a-dos-city",
    name: "Sac à dos City",
    price: 18000,
    category: "Sac à dos",
    description:
      "Sac à dos urbain avec compartiment ordinateur portable et poches sécurisées. Idéal pour les étudiants et les déplacements en ville.",
    from: "#065f46",
    to: "#064e3b",
  },
  {
    slug: "pochette-soiree",
    name: "Pochette Soirée",
    price: 12000,
    category: "Pochette",
    description:
      "Petite pochette chic avec chaînette dorée, parfaite pour les mariages et les soirées. Assez grande pour le téléphone et l'essentiel.",
    from: "#9d174d",
    to: "#500724",
  },
  {
    slug: "cabas-marche",
    name: "Cabas Marché",
    price: 15000,
    category: "Cabas",
    description:
      "Grand cabas résistant pour les courses et le marché. Anses renforcées et grande contenance. Facile à nettoyer.",
    from: "#1d4ed8",
    to: "#1e3a8a",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value) + " FCFA";
}
