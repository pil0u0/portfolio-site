# Portfolio : Augustin Wathelet

Site portfolio personnel, développé pour centraliser mon CV, mes projets et mes liens (GitHub, LinkedIn, Steam) en un seul endroit facile d'accès.

🔗 [Voir le site en ligne](https://syskat.vercel.app)

## Aperçu

- **Accueil** : page centrale avec liens vers CV, projets, GitHub, LinkedIn, Steam et [Syskat](https://syskat.vercel.app/)
- **CV** : présentation détaillée (profil, compétences, projets, expériences, formation, langues, soft skills, hobbies), avec téléchargement en PDF
- **Projets** : liste enrichie de tous mes projets, avec contexte, difficultés rencontrées, ce que j'en retiens, et captures d'écran

## Stack technique

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Police [VT323](https://fonts.google.com/specimen/VT323) (Google Fonts)
- Aucune base de données (contenu entièrement statique, géré dans `src/data/cv.ts`)
- Déployé sur [Vercel](https://vercel.com/)

## Structure du projet

```
src/
├── app/
│ ├── page.tsx # Page d'accueil
│ ├── cv/page.tsx # Page CV
│ ├── projets/page.tsx # Page Projets
│ ├── layout.tsx # Layout global (police, métadonnées)
│ └── globals.css # Styles globaux et thème rétro
├── components/
│ └── ScreenshotGallery.tsx # Galerie d'images avec navigation
└── data/
└── cv.ts # Toutes les données du site (compétences, projets, formation...)

public/
├── projects/ # Captures d'écran des projets
└── photo_augustin.jpg # Photo de profil
```

## Contact

- **Email** : watheletaugustin@proton.me
- **LinkedIn** : [linkedin.com/in/augustin-wathelet](https://linkedin.com/in/augustin-wathelet)
- **GitHub** : [github.com/pil0u0](https://github.com/pil0u0)
