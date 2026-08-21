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

---

# Comment prendre les photos

Un téléphone suffit. Ce qui compte, c'est la lumière et le fond — pas le
matériel. Compter environ 10 minutes par sac.

## Les 4 règles qui font tout

1. **Près d'une fenêtre, en journée.** Le sac face à la fenêtre, toi entre les
   deux, dos à la lumière. Pas de soleil direct dessus (ça brûle le cuir et
   crée des ombres dures) : une journée nuageuse est idéale.
2. **Jamais de flash, et éteindre l'ampoule du plafond.** Le flash aplatit le
   cuir et jaunit les couleurs. La lumière du plafond crée une ombre sous le
   sac. La fenêtre seule suffit.
3. **Un fond uni.** Un mur blanc ou beige, ou un drap crème tendu. Rien qui
   traîne derrière : pas de meuble, pas de prise électrique, pas de carrelage.
4. **Un seul sac par photo.** C'est la différence principale avec les photos
   actuelles. Les photos de groupe restent utiles pour montrer les coloris,
   mais elles ne peuvent pas servir de photo principale.

## Comment poser le sac

- **Debout, pas à plat.** Le sac posé sur sa base, anse relevée. S'il ne tient
  pas droit, le bourrer de papier journal ou d'un tissu pour qu'il garde sa
  forme — c'est ce que font tous les vendeurs.
- **De trois quarts**, pas de face : tourner le sac de 30° environ, on voit le
  devant et le côté en même temps, ça donne du volume.
- **Ranger l'étiquette** derrière le sac ou dans la poignée. Elle pend devant
  sur presque toutes les photos actuelles et attire l'œil au mauvais endroit.
- **Téléphone à la hauteur du sac**, à un mètre environ. Ne pas photographier
  de haut (ça écrase le sac) et ne pas utiliser le zoom (ça abîme la netteté) :
  s'approcher physiquement.
- **Cadrage** : le sac remplit environ les trois quarts de l'image, avec un peu
  de vide autour. Format carré si ton téléphone le propose, sinon vertical.

## Les 5 photos à faire par modèle

| # | Photo | Pourquoi |
|---|-------|----------|
| 1 | Trois quarts, sac entier | C'est la photo principale, celle de la page d'accueil |
| 2 | De côté (profil) | Montre l'épaisseur, rassure sur la contenance |
| 3 | Détail du fermoir ou de la boucle | Prouve la finition, c'est ce qui justifie le prix |
| 4 | Intérieur, sac ouvert | Question n°1 des clientes : « ça contient quoi ? » |
| 5 | **Sac porté** par quelqu'un | La photo qui change tout : donne l'échelle et fait rêver |

La photo n°5 est la plus importante et la plus souvent oubliée. Quelqu'un qui
porte le sac à l'épaule ou à la main, en pied ou cadré à mi-corps, dehors ou
devant un mur uni. Le visage n'a pas besoin d'être visible.

## Pour les coloris

Le cartable existe en 11 coloris. Pas besoin des 5 photos pour chacun : **une
seule photo de trois quarts par coloris**, même cadrage et même lumière pour
toutes (ne pas bouger entre deux prises). On pourra alors afficher une pastille
par couleur et changer la photo au clic.

## Ce qu'il ne faut PAS faire

- Pas de filtre, pas de retouche, pas de recadrage : envoyer les photos telles
  que sorties du téléphone, le recadrage se fait ici.
- Pas de capture d'écran de vidéo : c'est flou et compressé. Photographier.
- Ne pas envoyer par WhatsApp si possible : WhatsApp écrase la qualité.
  Préférer un partage de fichiers, un mail, ou une clé USB.
