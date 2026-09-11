import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "NEXIS GROUPE — Un groupe, plusieurs expertises",
    template: "%s | NEXIS GROUPE",
  },
  description:
    "NEXIS GROUPE réunit 14 pôles d'expertise : immobilier, BTP, automobile, import-export, électronique, agro-business, technologie, logistique, énergie et services.",
  metadataBase: new URL("https://nexisgroupe.com"),
  openGraph: {
    title: "NEXIS GROUPE",
    description: "Construire. Connecter. Transformer.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var saved = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {}
            })();
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
