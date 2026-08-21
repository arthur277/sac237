// Configuration globale de la boutique.
// `name` est repris partout : header, footer, titre de la page et messages
// WhatsApp pré-remplis. Il correspond à la marque des étiquettes produit.
export const site = {
  name: "TROPICS",
  tagline: "La maroquinerie italienne, livrée chez toi",
  description:
    "Sacs à main, sacs à dos, valises et pochettes de qualité, soigneusement sélectionnés en Italie. Commandez facilement en 1 clic sur WhatsApp.",
  // Deux façons d'acheter, reprises dans le hero et la barre de réassurance.
  achat: "Achat direct en boutique ou livraison à domicile",
  // Numéro de commande, au format international sans le + ni espaces
  // (+237 698 33 03 21). C'est ce format qu'attend le lien wa.me.
  whatsappNumber: "237698330321",
  city: "Douala & Yaoundé",
  currency: "FCFA",
  // Boutique physique : affichée dans le hero, la barre de réassurance,
  // la section « Boutique » de l'accueil et le footer.
  store: {
    name: "TROPICS Torrino",
    address: "Face à l'école publique de Bonamouang",
    city: "Douala",
    // Numéros de la boutique, affichés à côté de l'adresse. Le lien tel:
    // est construit en retirant les espaces (voir `telLink`).
    phones: ["+237 698 33 03 21", "+237 678 39 53 83"],
    // Horaires d'ouverture, affichés sous l'adresse — laisser vide tant
    // qu'ils ne sont pas confirmés : la ligne disparaît alors du site.
    // Exemple : "Lun – Sam · 9h – 19h".
    hours: "",
  },
  // Comptes de la marque (repris de l'étiquette produit). Le footer y renvoie :
  // au Cameroun, un compte actif rassure autant que le prix.
  social: {
    handle: "@tropics.fashion",
    instagram: "https://www.instagram.com/tropics.fashion",
    facebook: "https://www.facebook.com/tropics.fashion",
  },
  // Domaine de production, utilisé pour les URL absolues de l'aperçu de
  // partage (WhatsApp, Facebook). NEXT_PUBLIC_SITE_URL permet de basculer
  // sur un nom de domaine propre sans toucher au code.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sac237.vercel.app",
};

// Numéro cliquable : "tel:" n'accepte pas les espaces d'affichage.
export function telLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
