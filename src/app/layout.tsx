import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.augustinwathelet.online"),
  title: {
    default: "Augustin Wathelet : Portfolio",
    template: "%s | Augustin Wathelet",
  },
  description:
    "Portfolio d'Augustin Wathelet, étudiant en développement d'applications à HELMo (Liège), en recherche de stage de février à mi-mai 2027.",
  openGraph: {
    title: "Augustin Wathelet : Portfolio",
    description:
      "Étudiant en développement d'applications à HELMo, en recherche de stage. CV et projets en ligne.",
    url: "/",
    siteName: "Augustin Wathelet",
    locale: "fr_BE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${vt323.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}