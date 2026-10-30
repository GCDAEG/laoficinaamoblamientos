import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogueExplorer } from "@/components/catalogue/CatalogueExplorer";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site, socialPreviewImage } from "@/config/site";
import { productCategories, products } from "@/data/products";

export const metadata: Metadata = {
  title: `Catálogo | ${site.name}`,
  description: `Explorá ${products.length} referencias de mobiliario incluidas en el catálogo de ${site.name}.`,
  openGraph: {
    title: `Catálogo | ${site.name}`,
    description: `Explorá ${products.length} referencias de mobiliario incluidas en el catálogo de ${site.name}.`,
    type: "website",
    locale: "es_AR",
    images: [socialPreviewImage],
  },
};

export default async function CataloguePage({ searchParams }: { searchParams: Promise<{ categoria?: string | string[] }> }) {
  const requestedCategory = (await searchParams).categoria;
  const fallbackTitle = productCategories.find((category) => category.id === requestedCategory)?.label ?? "Todas las piezas";

  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <Navbar />
    <main id="contenido" className="catalogue-page" tabIndex={-1}>
      <section className="catalogue-page-intro container" aria-labelledby="catalogue-title">
        <p className="eyebrow">La Oficina Amoblamientos</p>
        <h1 id="catalogue-title">Catálogo</h1>
        <p>Explorá el mobiliario por categoría y encontrá la pieza para tu espacio.</p>
      </section>
      <Suspense fallback={<div className="catalogue-loading" role="status">Cargando {fallbackTitle.toLowerCase()}…</div>}>
        <CatalogueExplorer />
      </Suspense>
    </main>
    <Footer />
  </>;
}
