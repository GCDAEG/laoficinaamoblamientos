import Image from "next/image";
import Link from "next/link";
import { CategoryRail } from "@/components/catalogue/CategoryRail";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { ProjectInquiryForm } from "@/components/contact/ProjectInquiryForm";
import { AboutSection } from "@/components/home/AboutSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { featuredProducts, products } from "@/data/products";
import { hasWhatsAppContact } from "@/lib/whatsapp";

export default function Home() {
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <Navbar />
    <main id="contenido" tabIndex={-1}>
      <section id="inicio" className="showroom" aria-labelledby="hero-title">
        <div className="showroom-image">
          <Image src="/images/la-oficina-demo/hero-showroom-illustrative.jpg" alt="Ambiente de oficina con mesa de reunión y sillas ergonómicas; imagen generada e ilustrativa" fill priority sizes="100vw" />
          <span className="photo-credit">Imagen ilustrativa</span>
        </div>
        <div className="showroom-copy">
          <h1 id="hero-title">Muebles para vivir y trabajar.</h1>
          <p className="showroom-description">Mobiliario para oficinas y hogares.</p>
          <Link className="hero-action" href="/catalogo">Ver catálogo</Link>
        </div>
      </section>

      <section id="coleccion" className="collection-strip" aria-labelledby="category-title">
        <div className="collection-label"><p className="eyebrow">Colecciones</p><h2 id="category-title">Por dónde empezar</h2></div>
        <CategoryRail />
      </section>

      <section id="productos" className="catalog-showroom" aria-labelledby="products-title">
        <div className="catalog-heading">
          <div><p className="eyebrow">Una selección</p><h2 id="products-title">Piezas y líneas</h2></div>
          <p>Un primer recorrido por el mobiliario del catálogo.</p>
        </div>
        <p className="catalog-note"><strong>Precios ilustrativos para esta demostración. No representan valores oficiales de La Oficina Amoblamientos.</strong> Las imágenes y denominaciones provienen del catálogo compartido. Consultá por disponibilidad.{!hasWhatsAppContact() && " Las consultas por producto se habilitarán al confirmar el WhatsApp oficial."}</p>
        <div className="catalog-mosaic">
          {featuredProducts.map((product) => <ProductCard product={product} headingLevel={3} key={product.id} />)}
        </div>
        <div className="catalog-more"><Link href="/catalogo">Ver catálogo completo <span>{products.length} referencias</span></Link></div>
      </section>

      <AboutSection />

      <section id="contacto" className="inquiry section-space" aria-labelledby="inquiry-title">
        <div className="container inquiry-layout">
          <div className="inquiry-copy"><p className="eyebrow">Proyectos y consultas generales</p><h2 id="inquiry-title">¿Lo pensamos juntos?</h2><p>Contanos qué espacio querés equipar o qué mueble necesitás hacer a medida.</p><div className="contact-caption"><span className="caption-rule" /><span>La consulta no se guarda en este sitio.</span></div></div>
          <ProjectInquiryForm />
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
