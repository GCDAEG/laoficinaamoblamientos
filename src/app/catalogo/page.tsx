import type { Metadata } from "next";
import { CategoryRail } from "@/components/catalogue/CategoryRail";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/config/site";
import { productCategories, products } from "@/data/products";

export const metadata: Metadata = {
  title: `Catálogo | ${site.name}`,
  description: `Explorá ${products.length} referencias de mobiliario incluidas en el catálogo de ${site.name}.`,
};

export default function CataloguePage() {
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <Navbar />
    <main id="contenido" className="catalogue-page" tabIndex={-1}>
      <section className="catalogue-page-intro container" aria-labelledby="catalogue-title">
        <p className="eyebrow">La Oficina Amoblamientos</p>
        <h1 id="catalogue-title">Catálogo completo</h1>
        <p>Explorá las piezas y líneas del catálogo compartido. Consultá por detalles y disponibilidad.</p>
      </section>
      <div className="catalogue-page-categories"><div className="container"><CategoryRail onCataloguePage /></div></div>
      <section id="productos" className="catalog-showroom catalogue-showroom--full" aria-labelledby="products-title">
        <div className="catalog-heading"><div><p className="eyebrow">Todas las referencias</p><h2 id="products-title">Piezas y líneas</h2></div><p>{products.length} referencias con nombre.</p></div>
        <p className="catalog-note">Las imágenes y denominaciones provienen del catálogo compartido. Precios y disponibilidad pendientes de confirmación.</p>
        {productCategories.map((category) => {
          const categoryProducts = products.filter((product) => product.category === category.label);
          return <section className="catalog-group" id={`catalogo-${category.id}`} aria-labelledby={`catalogo-${category.id}-title`} key={category.id}>
            <div className="catalog-group-heading"><h3 id={`catalogo-${category.id}-title`}>{category.label}</h3><span>{categoryProducts.length} referencias</span></div>
            <div className="catalog-mosaic">
              {categoryProducts.map((product) => <ProductCard product={product} headingLevel={4} consultHref={`/?producto=${encodeURIComponent(product.id)}#contacto`} key={product.id} />)}
            </div>
          </section>;
        })}
      </section>
    </main>
    <Footer />
  </>;
}
