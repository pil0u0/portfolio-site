import Link from "next/link";
import Image from "next/image";

type PodiumItem = { name: string; image: string };

const games: PodiumItem[] = [
  { name: "BIOSHOCK", image: "/media/bioshock.jpg" },
  { name: "HEAVY RAIN", image: "/media/heavy_rain.jpg" },
  { name: "Life Is Strange", image: "/media/life_is_strange.jpg" },
];

const movies: PodiumItem[] = [
  { name: "Le Seigneur des anneaux : La Communauté de l'anneau", image: "/media/seigneur_des_anneaux.jpg" },
  { name: "Spider-Man: Into the Spider-Verse", image: "/media/spider_man.jpg" },
  { name: "Le Fabuleux Destin d'Amélie Poulain", image: "/media/amelie.jpg" },
];

const shows: PodiumItem[] = [
  { name: "Breaking Bad", image: "/media/breaking_bad.jpg" },
  { name: "Better Call Saul", image: "/media/better_call_saul.jpg" },
  { name: "My Hero Academia", image: "/media/my_hero_academia.jpg" },
];

const sizes = [96, 128, 80];

function Podium({ title, items }: { title: string; items: PodiumItem[] }) {
  const ordered = [
    { item: items[1], rank: 2, size: sizes[0] },
    { item: items[0], rank: 1, size: sizes[1] },
    { item: items[2], rank: 3, size: sizes[2] },
  ];

  return (
    <div>
      <h2 className="text-xl mb-4 flex items-center gap-2">
        <span className="terminal-prompt">&gt;</span>
        {title}
      </h2>
      <div className="podium">
        {ordered.map(({ item, rank, size }) => (
          <div key={item.name} className="podium-item">
            <span className="rank">#{rank}</span>
            <Image src={item.image} alt={item.name} width={size} height={size} />
            <span className="name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SecretPage() {
  return (
    <main className="flex-1 flex flex-col items-center px-6 py-8 gap-4">
      <div className="w-full max-w-2xl">
        <Link
          href="/"
          className="folder-tile scanline-overlay px-3 py-1.5 text-base hover:border-accent transition-colors inline-block"
        >
          <span className="relative z-10">← Retour</span>
        </Link>
      </div>

      <div className="terminal-window scanline-overlay w-full max-w-2xl">
        <div className="terminal-titlebar">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="label text-sm">easter_egg.exe trouvé !</span>
        </div>

        <div className="relative z-10 flex flex-col">
          <section className="terminal-section p-4 sm:p-5">
            <p className="text-base text-foreground/80">
              Bien joué, tu as trouvé le easter egg caché du site. Voici un aperçu un peu plus personnel.
            </p>
          </section>

          <section className="terminal-section p-4 sm:p-5">
            <Podium title="top --jeux-video" items={games} />
          </section>

          <section className="terminal-section p-4 sm:p-5">
            <Podium title="top --films" items={movies} />
          </section>

          <section className="terminal-section p-4 sm:p-5">
            <Podium title="top --series" items={shows} />
          </section>
        </div>
      </div>
    </main>
  );
}