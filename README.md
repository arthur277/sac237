# 👜 SAC237 — La maroquinerie du 237

Boutique en ligne de vente de sacs (sacs à main, sacs à dos, pochettes, cabas) pensée pour le marché **camerounais** 🇨🇲.

Commande simple **via WhatsApp**, **paiement à la livraison**, livraison Douala & Yaoundé.

**En ligne :** _(ajoutez ici votre URL Vercel, ex. https://sac237.vercel.app)_

---

## ✨ Fonctionnalités (Phase 1)

- **Page d'accueil** avec hero, barre de réassurance et catalogue de produits
- **Pages produit** détaillées (`/produits/[slug]`)
- **Commande en 1 clic sur WhatsApp** : chaque bouton ouvre WhatsApp avec un message pré-rempli mentionnant le sac choisi et son prix
- **Prix en FCFA**, interface 100 % en français
- **Responsive** (optimisé mobile, l'usage principal au Cameroun)
- Barre de réassurance : livraison 24-48h · paiement à la livraison · qualité garantie

---

## 🛠️ Stack technique

| Élément | Techno |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Langage | TypeScript |
| Style | Tailwind CSS v4 |
| Polices | Geist (texte) + Poppins (titres) |
| Hébergement | Vercel |

---

## 🚀 Lancer le projet en local

```bash
npm install      # première fois seulement
npm run dev      # démarre le serveur de développement
```

Puis ouvrez **http://localhost:3000** (ou un autre port avec `npm run dev -- -p 3100`).

### Autres commandes

```bash
npm run build    # build de production
npm run start    # lance le build de production
npm run lint     # vérifie le code
```

---

## ✏️ Personnaliser la boutique

Tout est centralisé dans **3 fichiers**, aucune connaissance technique poussée requise :

### 1. Infos du site — [`src/lib/site.ts`](src/lib/site.ts)

```ts
whatsappNumber: "237600000000",  // 👈 votre vrai numéro (format 237XXXXXXXXX, sans + ni espaces)
name: "SAC237",
tagline: "La maroquinerie du 237, livrée chez toi",
city: "Douala & Yaoundé",
```

### 2. Les produits — [`src/lib/products.ts`](src/lib/products.ts)

Ajoutez / modifiez vos sacs dans le tableau `products` :

```ts
{
  slug: "sac-a-main-elegance",     // identifiant unique dans l'URL
  name: "Sac à main Élégance",
  price: 25000,                    // en FCFA
  category: "Sac à main",
  description: "…",
  from: "#b45309", to: "#78350f",  // couleurs du visuel (en attendant les photos)
}
```

### 3. Ajouter de vraies photos

Actuellement les visuels sont des **placeholders colorés**. Pour mettre de vraies photos :

1. Déposez vos images dans le dossier `public/photos/` (ex. `public/photos/sac-elegance.jpg`)
2. Remplacez le composant [`ProductThumb`](src/components/ProductThumb.tsx) par le composant `<Image>` de Next.js
   pointant sur `/photos/votre-image.jpg`

> 💡 C'est l'amélioration la plus importante pour la conversion : de vraies photos transforment l'apparence du site.

---

## 🗂️ Structure du projet

```
src/
├── app/
│   ├── layout.tsx               # Layout global (header, footer, polices)
│   ├── page.tsx                 # Page d'accueil (hero + catalogue)
│   ├── globals.css              # Styles globaux
│   └── produits/[slug]/page.tsx # Page détail d'un produit
├── components/
│   ├── Header.tsx / Footer.tsx
│   ├── TrustBar.tsx             # Barre de réassurance
│   ├── ProductCard.tsx          # Carte produit (grille)
│   ├── ProductThumb.tsx         # Visuel produit (placeholder)
│   ├── WhatsAppButton.tsx       # Bouton de commande
│   └── icons.tsx                # Icônes SVG
└── lib/
    ├── site.ts                  # Config du site
    ├── products.ts              # Catalogue + helpers (prix, recherche)
    └── whatsapp.ts              # Génération des liens WhatsApp
```

---

## 🌍 Déploiement (Vercel)

Le projet est connecté à Vercel : **chaque `git push` sur `main` redéploie automatiquement** le site.

Pour déployer un nouveau projet : importez le dépôt GitHub sur [vercel.com](https://vercel.com) → *Add New… → Project*. Next.js est détecté automatiquement, aucune configuration nécessaire.

---

## 🗺️ Feuille de route

- [x] **Phase 1 — Vitrine + commande WhatsApp** _(fait)_
- [ ] **Phase 2 — Panier + formulaire de commande** (nom, téléphone, ville, quartier)
- [ ] **Phase 3 — Paiement Mobile Money** (MTN MoMo / Orange Money via Fapshi, Campay ou Notch Pay) + espace admin
- [ ] Catégories & filtres, avis clients, nom de domaine perso

---

_Projet personnel — Arthur DEUMENI._
