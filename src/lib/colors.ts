// Coloris → couleur d'affichage de la pastille.
//
// Les noms viennent de `products.ts` ; ce sont des teintes de cuir, pas des
// couleurs web (un « camel » n'est pas un orange saturé). Un coloris absent
// de cette table tombe sur un gris neutre plutôt que de casser l'affichage.
const SWATCHES: Record<string, string> = {
  Beige: "#d9c7a7",
  "Bleu ciel": "#7fa8cc",
  "Bleu gris": "#6b7f95",
  Camel: "#b5773a",
  Chocolat: "#4a2c1d",
  Cognac: "#8f4a1e",
  Fuchsia: "#cf2d7a",
  Gris: "#8a8a8a",
  Ivoire: "#f2e8d5",
  "Jaune pâle": "#e8d98a",
  Marine: "#1f2a44",
  Marron: "#5c3a21",
  Noir: "#1c1917",
  Olive: "#5f6b3a",
  Pistache: "#b5cc8e",
  "Rose poudré": "#e3b7b7",
  Rouge: "#b81f24",
  Taupe: "#8a7b6d",
  Vert: "#2f7d46",
  "Vert anis": "#9fbf3b",
};

export function swatch(color: string): string {
  return SWATCHES[color] ?? "#a3a3a3";
}
