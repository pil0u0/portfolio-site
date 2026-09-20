import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaSteam } from "react-icons/fa";

const primaryItems = [
  { label: "CV", href: "/cv", external: false, icon: DocumentIcon, index: "01" },
  { label: "Projets", href: "/projets", external: false, icon: FolderIcon, index: "02" },
];

const secondaryItems = [
  { label: "LinkedIn", href: "https://linkedin.com/in/augustin-wathelet", external: true, icon: FaLinkedin, index: "03" },
  { label: "GitHub", href: "https://github.com/pil0u0", external: true, icon: FaGithub, index: "04" },
  { label: "Syskat", href: "https://syskat.vercel.app/", external: true, logo: "/syskat_logo.png", index: "05" },
  { label: "Steam", href: "https://steamcommunity.com/id/PiI0u/", external: true, icon: FaSteam, index: "06" },
];

function DocumentIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M6 2h9l5 5v15H6z" />
      <path d="M15 2v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
      <path d="M9 9h3" />
    </svg>
  );
}

function FolderIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 5h6l2 3h10v11H3z" />
    </svg>
  );
}

function NavTile({
  label,
  href,
  external,
  icon: Icon,
  logo,
  index,
  className = "",
  iconProps = {},
}: {
  label: string;
  href: string;
  external: boolean;
  icon?: React.ComponentType<Record<string, unknown>>;
  logo?: string;
  index: string;
  className?: string;
  iconProps?: Record<string, unknown>;
}) {
  const inner = (
    <>
      <span className="index">{index}</span>
      <span className="relative z-10 flex flex-row items-center justify-center gap-3 text-xl">
        {logo ? (
          <Image src={logo} alt={`Logo ${label}`} width={32} height={32} className="w-8 h-8 shrink-0 object-contain" />
        ) : Icon ? (
          <Icon className="w-8 h-8 shrink-0" {...iconProps} />
        ) : null}
        {label}
      </span>
      <span className="dots" />
    </>
  );

const classes = `folder-tile scanline-overlay flex flex-col items-center justify-center gap-2 py-10 px-6 ${className}`;

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 gap-10">
      <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left max-w-2xl">
        <div className="w-32 h-32 overflow-hidden border-2 border-panel-border shrink-0">
          <Link
            href="/secret"
            className="block w-32 h-32 overflow-hidden border-2 border-panel-border shrink-0 hover:border-accent transition-colors cursor-pointer"
          >
            <Image
              src="/photo_main.jpeg"
              alt="Augustin Wathelet"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-foreground tracking-wide">AUGUSTIN WATHELET</h1>
          <p className="text-xl text-accent-secondary">Étudiant en Développement d&apos;Applications</p>
          <p className="text-lg text-foreground/70">
            En recherche de stage. Passionné par l&apos;écosystème .NET, et le développement backend.
          </p>
        </div>
      </div>

      <div className="w-full max-w-2xl flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          {primaryItems.map((item) => (
            <NavTile
              key={item.label}
              {...item}
              iconProps={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {secondaryItems.map((item) => (
            <NavTile key={item.label} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}