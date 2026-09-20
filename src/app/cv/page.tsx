import Link from "next/link";
import { skills, projects, education, languages, softSkills, experience, hobbies } from "@/data/cv";

function SkillBar({ level }: { level: number }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-fill" style={{ width: `${level}%` }} />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl mb-3 flex items-center gap-2">
      <span className="terminal-prompt">&gt;</span>
      {children}
    </h2>
  );
}

export default function CvPage() {
  return (
    <main className="flex-1 flex flex-col items-center px-6 py-8 gap-4">
      <div className="w-full max-w-3xl flex items-center justify-between gap-4 flex-wrap">
        <Link
          href="/"
          className="folder-tile scanline-overlay px-3 py-1.5 text-base hover:border-accent transition-colors inline-block"
        >
          <span className="relative z-10">← Retour</span>
        </Link>

        
        <a href="/cv-augustin-wathelet.pdf"
          download
          className="folder-tile scanline-overlay px-3 py-1.5 text-base hover:border-accent transition-colors inline-block"
        >
          <span className="relative z-10">Télécharger en PDF ↓</span>
        </a>
      </div>

      <div className="terminal-window scanline-overlay w-full max-w-3xl">
        <div className="terminal-titlebar">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="label text-sm">augustin_wathelet.cv</span>
        </div>

        {/* Contact */}
        <div className="terminal-section p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
          <span>
            <span className="text-accent-secondary">$</span> contact --info
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-foreground/80">
            <a href="mailto:watheletaugustin@proton.me" className="hover:text-accent transition-colors">
              watheletaugustin@proton.me
            </a>
            <span>+32 478 35 23 99</span>
            <span>4000 Liège, Belgique</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col">
          {/* Profil */}
          <section className="terminal-section p-4 sm:p-5">
            <SectionTitle>profil</SectionTitle>
            <p className="text-base leading-relaxed text-foreground/90">
              Étudiant en Bachelier Informatique, je me spécialise dans l&apos;écosystème .NET pour
              concevoir des solutions backend. Fort de plusieurs projets
              complets en C#, je recherche un stage pour mettre mon autonomie et ma polyvalence au
              service d&apos;une équipe technique.
            </p>
          </section>

          {/* Compétences techniques */}
          <section className="terminal-section p-4 sm:p-5">
            <SectionTitle>competences --techniques</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((cat) => (
                <div key={cat.category}>
                  <h3 className="text-lg text-foreground/80 mb-1.5">{`// ${cat.category}`}</h3>
                  <div className="flex flex-col gap-1.5">
                    {cat.items.map((item) => (
                      <div key={item.name} className="flex items-center justify-between gap-3">
                        <span className="text-sm">{item.name}</span>
                        <SkillBar level={item.level} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projets */}
          <section className="terminal-section p-4 sm:p-5">
            <SectionTitle>ls ./projets</SectionTitle>
            <div className="flex flex-col gap-4">
              {projects.map((p) => (
                <div key={p.title} className="border-l-2 border-panel-border pl-3">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-accent-secondary text-sm">{p.year}</span>
                    <h3 className="text-lg">{p.title}</h3>
                    <span className="text-xs text-foreground/50 italic">{p.stack}</span>
                  </div>
                  <p className="text-sm text-foreground/80 mt-1">{p.description}</p>
                  <ul className="mt-1.5 flex flex-col gap-0.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="text-xs text-foreground/70 flex gap-2">
                        <span className="text-accent-secondary">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href="/projets"
              className="inline-block mt-4 text-sm font-bold text-accent hover:underline transition-colors"
            >
              → Voir tous les détails des projets
            </Link>
          </section>

          {/* Expérience professionnelle */}
          <section className="terminal-section p-4 sm:p-5">
            <SectionTitle>experience</SectionTitle>
              <div className="flex flex-col gap-4">
                {experience.map((exp) => (
                  <div key={exp.title} className="border-l-2 border-panel-border pl-3">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-accent-secondary text-sm">{exp.year}</span>
                      <h3 className="text-lg">{exp.title}</h3>
                      <span className="text-xs text-foreground/50 italic">{exp.company}</span>
                    </div>
                    <ul className="mt-1.5 flex flex-col gap-0.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="text-xs text-foreground/70 flex gap-2">
                          <span className="text-accent-secondary">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
          </section>

          {/* Formation */}
          <section className="terminal-section p-4 sm:p-5">
            <SectionTitle>cat formation.log</SectionTitle>
            <div className="flex flex-col gap-3">
              {education.map((e) => (
                <div key={e.title}>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-accent-secondary text-sm">{e.year}</span>
                    <h3 className="text-lg">{e.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/80">
                    {e.school}, {e.location}
                  </p>
                  <p className="text-xs text-foreground/60">{e.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Langues & Soft Skills */}
          <section className="terminal-section p-4 sm:p-5">
            <SectionTitle>langues && softskills</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg text-foreground/80 mb-1.5">{"// Langues"}</h3>
                <ul className="flex flex-col gap-1">
                  {languages.map((l) => (
                    <li key={l.name} className="flex justify-between text-sm">
                      <span>{l.name}</span>
                      <span className="text-foreground/60">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg text-foreground/80 mb-1.5">{"// Soft Skills"}</h3>
                <ul className="flex flex-col gap-1">
                  {softSkills.map((s) => (
                    <li key={s} className="text-sm flex gap-2">
                      <span className="text-accent-secondary">▸</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Hobbies */}
          <section className="terminal-section p-4 sm:p-5">
            <SectionTitle>cat hobbies.txt</SectionTitle>
            <ul className="flex flex-col gap-1">
              {hobbies.map((h) => (
                <li key={h.text} className="text-sm flex gap-2">
                  <span className="text-accent-secondary">▸</span>
                  <span>
                    {h.text}
                    {h.link && (
                      <>
                        {" — "}
                        
                        <a href={h.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline transition-colors"
                        >
                          Voir ↗
                        </a>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}