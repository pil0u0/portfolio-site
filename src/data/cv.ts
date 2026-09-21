export type SkillCategory = {
  category: string;
  items: { name: string; level: number }[]; // level de 0 à 100
};

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      { name: "C# / .NET", level: 70 },
      { name: "Java", level: 60 },
      { name: "SQL (MySQL)", level: 60 },
      { name: "C", level: 30 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Next", level: 50 },
      { name: "TypeScript", level: 70 },
      { name: "HTML5 / CSS3", level: 80 },
      { name: "Tailwind", level: 60 },
    ],
  },
  {
    category: "Outils",
    items: [
      { name: "Git / GitHub", level: 70 },
      { name: "LaTeX", level: 70 },
      { name: "Méthodes Agiles (Scrum)", level: 65 },
      { name: "Vercel", level: 15 },
    ],
  },
];

export const projects: {
  year: string;
  title: string;
  stack: string;
  description: string;
  highlights: string[];
  screenshots?: string[];
  context?: string;
  challenges?: string[];
  learnings?: string;
  link?: string;
}[] = [
  {
    year: "2026 - Now",
    title: "Syskat (projet perso)",
    stack: "Next.js, TypeScript, Supabase, Tailwind CSS",
    description: "Annuaire/Wiki pour des marques de vêtements indépendantes",
    highlights: [
      "Authentification admin via Supabase Auth et upload d'images via Supabase Storage.",
      "Schéma de base de données relationnel avec tables many-to-many.",
    ],
    screenshots: [
      "/projects/syskat_main_compressed.png",
      "/projects/syskat_brand_compressed.png",
      "/projects/syskat_create_compressed.png",
    ],
    context: "Projet personnel, né du constat qu'aucun site ne répertoriait les marques de vêtements indépendantes, et que les marques que je connaissais étaient mal triées/organisées.",
    challenges: [
      "Gérer des relations many-to-many propres entre marques et tags sans complexifier les requêtes.",
      "Gérer un projet solo de bout en bout, sans supervision : planification, choix techniques et motivation sur la durée.",
      "Progresser en design frontend, un axe sur lequel je me sentais moins à l'aise, en travaillant particulièrement l'identité visuelle du site.",
    ],
    learnings: "Une première vraie expérience de bout en bout avec Supabase (auth + storage + base de données relationnelle), et un travail plus poussé sur l'identité visuelle d'un projet perso.",
    link: "https://syskat.vercel.app/",
  },
  {
    year: "2026",
    title: "Messagerie sécurisée",
    stack: "C#",
    description: "Application desktop de messagerie (Client/Serveur) sécurisée.",
    highlights: [
      "Architecture réseau basée sur les Sockets TCP et sécurisation des flux via TLS 1.3.",
      "Implémentation d'une couche de sécurité : chiffrement symétrique (AES) et intégrité des données (SHA).",
    ],
    screenshots: [
      "/projects/speaker_run_compressed.png",
      "/projects/node_run_compressed.png",
      "/projects/node_code_compressed.png",
    ],
    context: "Projet scolaire, axé sur la sécurité des communications réseau.",
    challenges: [
      "Gérer la concurrence et le multi-threading pour supporter plusieurs clients connectés simultanément sans blocage.",
      "Comprendre en profondeur le fonctionnement de TLS pour l'implémenter correctement, plutôt que d'utiliser une solution toute faite.",
    ],
    learnings: "Une meilleure compréhension des mécanismes bas niveau de sécurité réseau (chiffrement, intégrité des données, gestion de sessions), au-delà de la simple utilisation de librairies prêtes à l'emploi.",
  },
  {
    year: "2025",
    title: "Gestionnaire de documents",
    stack: "C#",
    description: "Application desktop de gestion et de chiffrement de documents sensibles.",
    highlights: [
      "Implémentation d'algorithmes de cryptographie (AES) en C#.",
      "Gestion des permissions utilisateurs et sauvegarde locale sécurisée.",
    ],
    screenshots: ["/projects/dispatcher_run_compressed.png"],
    context: "Projet scolaire : une application client-serveur permettant d'enregistrer des fichiers sur un serveur distant, avec une base de données d'utilisateurs pour gérer les accès.",
    challenges: [
      "Sécuriser le transfert et le stockage des fichiers : chaque fichier est haché pour garantir son intégrité avant d'être enregistré côté serveur.",
      "Concevoir une base de données d'utilisateurs cohérente pour gérer les permissions d'accès aux documents.",
    ],
    learnings: "Une meilleure compréhension du fonctionnement client-serveur en C#, ainsi que des mécanismes de hachage et de chiffrement pour garantir la sécurité et l'intégrité des données stockées.",
  },
  {
    year: "2023",
    title: "Treasure Quest",
    stack: "Java, Swing, JUnit5",
    description: "Jeu de recherche de trésors avec une architecture Superviseur/Vue.",
    highlights: [
      "Architecture en triplets Superviseur/Interface de vue/Implémentation Swing, avec séparation stricte entre logique métier et affichage.",
    ],
    screenshots: ["/projects/treasure_quest_1.png", "/projects/treasure_quest_2.png"],
    context: "Projet scolaire.",
    challenges: [
      "Choisir une collection adaptée pour représenter une carte non rectangulaire, en justifiant le choix par une analyse de complexité (CTT).",
      "Synchroniser plusieurs superviseurs entre eux (menu, partie en cours) sans créer de dépendances mutuelles, via une fabrique de jeu partagée.",
    ],
    learnings: "Une meilleure compréhension des architectures qui séparent vue et logique métier (proche du pattern MVP), ainsi qu'une première vraie pratique de l'analyse de complexité algorithmique et de la couverture de tests.",
  },
  {
    year: "2023",
    title: "Gestionnaire de tournois",
    stack: "PHP, SQL, MVC",
    description: "Plateforme de gestion de compétitions E-sport et sportives.",
    highlights: ["Conception d'une base de données relationnelle complexe."],
    screenshots: [
      "/projects/tournois_index_compressed.png",
      "/projects/tournois_profil_compressed.png",
      "/projects/tournois_recherche_compressed.png",
    ],
    context: "Projet scolaire : un site où les utilisateurs créent un compte, rejoignent des tournois, et suivent les affrontements sous forme d'arbre pour voir qui avance et qui gagne. Les tournois eux-mêmes se déroulaient dans la vraie vie — le site ne servait qu'à l'organisation et au suivi.",
    challenges: [
      "Concevoir une base de données relationnelle capable de gérer utilisateurs, tournois, participations et matchs de façon cohérente.",
      "Structurer la logique d'un arbre de tournoi (qui affronte qui, qui avance au tour suivant) de manière dynamique en fonction des résultats saisis.",
    ],
    learnings: "Une bonne mise en pratique du pattern MVC pour structurer un site avec plusieurs entités liées entre elles, ainsi qu'une première approche de la modélisation de données relationnelles un peu complexes.",
  },
];

export const education = [
  {
    year: "2022–2027",
    title: "Bachelier en DevApp",
    school: "Haute École Libre Mosane (HELMo)",
    location: "Liège",
  },
  {
    year: "2022",
    title: "CESS (Technique de Qualification)",
    school: "Institut des Arts et Métiers (Pierrard)",
    location: "Virton",
    detail: "Technique de transition informatique",
  },
];

export const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "B1 (Intermédiaire)" },
];

export const softSkills = [
  "Résolution de problèmes",
  "Travail d'équipe (Agile)",
  "Appétence pour l'apprentissage",
  "Autonomie",
];

export const experience: {
  year: string;
  title: string;
  company: string;
  highlights: string[];
}[] = [
  {
    year: "2023–Présent",
    title: "Libraire (Étudiant)",
    company: "NEWPRESS SPRL",
    highlights: ["Relation client, responsabilité de la caisse et gestion des stocks."],
  },
  {
    year: "2022 (Été)",
    title: "Agent de collecte (Étudiant)",
    company: "Secteur Public",
    highlights: ["Respect rigoureux des consignes de sécurité et des horaires."],
  },
  {
    year: "2020–2021 et 2023",
    title: "Serveur (Étudiant)",
    company: "Secteur Restauration (WACHIROCK)",
    highlights: ["Développement de l'esprit d'équipe, polyvalence et adaptabilité aux pics d'activité."],
  },
  {
    year: "2020 (Été)",
    title: "Ouvrier communal (Étudiant)",
    company: "Secteur Public",
    highlights: ["Travaux d'entretien variés"],
  },
];

export const hobbies: { text: string; link?: string }[] = [
  {
    text: "Jeux vidéo, notamment Counter-Strike 2 et les jeux narratifs.",
    link: "https://steamcommunity.com/id/PiI0u/",
  },
  {
    text: "Mode et vêtements, avec un intérêt particulier pour leur dimension écologique et les marques indépendantes/durables.",
    link: "https://syskat.vercel.app/",
  },
];