import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { headers } from "next/headers";
import { site, socialPreviewImage } from "@/config/site";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000").split(",")[0].trim();
  const protocol = (requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https")).split(",")[0].trim();

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: `${site.name} | Catálogo editorial`,
    description: site.description,
    openGraph: {
      title: `${site.name} | Catálogo editorial`,
      description: site.description,
      type: "website",
      locale: "es_AR",
      images: [socialPreviewImage],
    },
    twitter: { card: "summary_large_image", images: [socialPreviewImage] },
    robots: { index: false, follow: false },
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="es-AR" data-scroll-behavior="smooth"><body className={`${cormorant.variable} ${inter.variable}`}>{children}<FloatingWhatsApp /></body></html>;
}
