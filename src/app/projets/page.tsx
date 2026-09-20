import Link from "next/link";
import { projects } from "@/data/cv";
import ScreenshotGallery from "@/components/ScreenshotGallery";

function TreeList({ items }: { items: string[] }) {
  return (
    <ul className="tree-list mt-2 text-sm text-foreground/80">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={item}>
            <span className="branch">{isLast ? "└─" : "├─"}</span>
            <span className="leaf">{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default function ProjetsPage() {
  return (
    <main className="flex-1 flex flex-col items-center px-6 py-8 gap-4">
      <div className="w-full max-w-3xl">
        <Link
          href="/"
          className="folder-tile scanline-overlay px-3 py-1.5 text-base hover:border-accent transition-colors inline-block"
        >
          <span className="relative z-10">← Retour</span>
        </Link>
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-5">
        {projects.map((p) => (
          <div key={p.title} className="terminal-box">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-accent-secondary text-sm">{p.year}</span>
              <h2 className="text-xl">{p.title}</h2>
              <span className="text-xs text-foreground/50 italic">{p.stack}</span>
              {p.link && (
                
                <a href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-secondary hover:text-accent underline transition-colors"
                >
                  Voir le site ↗
                </a>
              )}
            </div>

            {p.context && (
              <p className="text-xs text-foreground/50 italic mt-1">{p.context}</p>
            )}

            <p className="text-sm text-foreground/80 mt-2">{p.description}</p>

            <TreeList items={p.highlights} />

            {p.challenges && p.challenges.length > 0 && (
              <div className="mt-3">
                <h3 className="text-sm text-accent-secondary mb-1">{"// Difficultés rencontrées"}</h3>
                <TreeList items={p.challenges} />
              </div>
            )}

            {p.learnings && (
              <div className="mt-3">
                <h3 className="text-sm text-accent-secondary mb-1">{"// Ce que j'en retiens"}</h3>
                <p className="text-sm text-foreground/80">{p.learnings}</p>
              </div>
            )}

            {p.screenshots && p.screenshots.length > 0 && (
              <ScreenshotGallery images={p.screenshots} title={p.title} />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}