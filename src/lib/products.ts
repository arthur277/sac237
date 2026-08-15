// Catalogue produits TROPICS.
//
// Prix confirmés par Arthur le 15/08/2026, en FCFA.
//
// Les photos ne sont pas listées ici : elles sont détectées automatiquement
// depuis `public/photos/<slug>/` (voir `lib/photos.ts`).
export type Product = {
  slug: string;
  name: string;
  price: number; // en FCFA
  category: string;
  description: string;
  /** Coloris disponibles, affichés sur la fiche et repris dans le message WhatsApp. */
  colors: string[];
  // Dégradé de secours, utilisé seulement si le dossier photo est vide.
  from: string;
  to: string;
};

export const products: Product[] = [
  {
    slug: "sac-cartable",
    name: "Cartable Tropics",
    price: 71500, // prix confirmé
    category: "Sac à main",
    description:
      "Notre cartable en cuir grainé, à rabat et anse rigide. Une ligne structurée qui tient bien en main, du bureau aux sorties. Disponible en 11 coloris.",
    colors: [
      "Rouge",
      "Fuchsia",
      "Taupe",
      "Pistache",
      "Vert",
      "Olive",
      "Camel",
      "Beige",
      "Marine",
      "Bleu gris",
      "Noir",
    ],
    from: "#b45309",
    to: "#78350f",
  },
  {
    slug: "sac-demi-lune",
    name: "Demi-Lune Tropics",
    price: 73500, // prix confirmé
    category: "Sac à main",
    description:
      "Sac demi-lune en cuir lisse, boucle carrée et anse arrondie. Livré avec sa bandoulière amovible : porté à la main ou en travers, selon l'occasion.",
    colors: ["Camel", "Marine", "Ivoire", "Gris"],
    from: "#78716c",
    to: "#44403c",
  },
  {
    slug: "sac-bandouliere",
    name: "Bandoulière Mors",
    price: 65000, // prix confirmé
    category: "Bandoulière",
    description:
      "Petit sac bandoulière en cuir lisse, fermoir mors doré et bandoulière amovible. Format compact pour l'essentiel : téléphone, portefeuille, clés.",
    colors: ["Camel", "Rouge", "Bleu ciel", "Marron"],
    from: "#9d174d",
    to: "#500724",
  },
  {
    slug: "sac-structure",
    name: "Sac Structuré",
    price: 60000, // prix confirmé
    category: "Sac à main",
    description:
      "Sac à main structuré à anse courte, finitions dorées et pochette assortie. Une pièce habillée, parfaite pour les cérémonies et les grandes occasions.",
    colors: ["Jaune pâle", "Vert anis", "Rose poudré", "Cognac"],
    from: "#065f46",
    to: "#064e3b",
  },
  {
    slug: "sac-cabas",
    name: "Grand Cabas",
    price: 73500, // prix confirmé
    category: "Cabas",
    description:
      "Grand cabas souple en cuir grainé, fermoir doré et anses longues portées à l'épaule. Grande contenance pour le travail, les cours ou le voyage.",
    colors: ["Camel", "Noir", "Chocolat", "Ivoire"],
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
