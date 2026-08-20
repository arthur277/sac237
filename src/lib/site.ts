// Configuration globale de la boutique.
// `name` est repris partout : header, footer, titre de la page et messages
// WhatsApp pré-remplis. Il correspond à la marque des étiquettes produit.
export const site = {
  name: "TROPICS",
  tagline: "La maroquinerie du 237, livrée chez toi",
  description:
    "Sacs à main, sacs à dos et pochettes de qualité au Cameroun. Commandez en 1 clic sur WhatsApp, payez à la livraison.",
  // Numéro de commande, au format international sans le + ni espaces
  // (+237 698 33 03 21). C'est ce format qu'attend le lien wa.me.
  whatsappNumber: "237698330321",
  city: "Douala & Yaoundé",
  currency: "FCFA",
  // Domaine de production, utilisé pour les URL absolues de l'aperçu de
  // partage (WhatsApp, Facebook). NEXT_PUBLIC_SITE_URL permet de basculer
  // sur un nom de domaine propre sans toucher au code.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sac237.vercel.app",
};
