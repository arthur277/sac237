# Où déposer les photos des sacs

Un dossier par produit, nommé **exactement** comme le `slug` du produit dans
[`src/lib/products.ts`](../../src/lib/products.ts).

```
public/photos/
  sac-a-main-elegance/
    1.jpg   ← photo principale (celle de la grille d'accueil)
    2.jpg   ← vue de dos
    3.jpg   ← détail / intérieur
  sac-a-dos-city/
    1.jpg
```

Le site lit ce dossier au moment du build : **aucun code à modifier**. Un produit
sans dossier affiche le visuel dégradé de secours, donc rien ne casse si les
photos arrivent au fur et à mesure.

## Règles pratiques

- **Formats** : `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`.
- **Ordre** : tri numérique, donc `1.jpg`, `2.jpg`… `10.jpg` s'enchaînent bien.
- **Cadrage carré** conseillé : la grille et la photo principale sont en carré,
  et un format différent sera rogné au centre.
- **Poids** : viser moins de 500 Ko par fichier avant l'envoi sur GitHub.
  Next.js génère ensuite automatiquement les versions WebP optimisées.
- **Pas de vidéos ici** : les `.mp4` seraient poussés tels quels dans le dépôt
  Git et alourdiraient chaque déploiement. Extraire une image de la vidéo.

## Dossier de travail

Les photos brutes (non recadrées, sorties du téléphone) vont dans
`photos-brutes/` à la racine du projet, qui est **ignoré par Git** : elles
restent sur le PC et ne partent pas sur Vercel.
