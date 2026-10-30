"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { CategoryRail } from "@/components/catalogue/CategoryRail";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/config/site";
import { featuredProducts, products } from "@/data/products";

const subscribeToLocation = (callback: () => void) => {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
};

const getRequestedProduct = () => new URLSearchParams(window.location.search).get("producto");

export default function Home() {
  const requestedProduct = useSyncExternalStore(subscribeToLocation, getRequestedProduct, () => null);
  const [productOverride, setProductOverride] = useState<string | null>(null);
  const selectedProduct = productOverride ?? products.find((product) => product.id === requestedProduct)?.id ?? "general";
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function chooseProduct(id: string) {
    setProductOverride(id);
    setError("");
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => formRef.current?.querySelector<HTMLInputElement>("input[name='nombre']")?.focus({ preventScroll: true }), 450);
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("nombre") ?? "").trim();
    const locality = String(form.get("localidad") ?? "").trim();
    if (!name || !locality || !selectedProduct) {
      setError("Completá tu nombre, localidad y el tipo de consulta para continuar.");
      return;
    }
    if (!site.whatsappNumber) {
      setError("El número oficial de WhatsApp está pendiente de confirmación. No se preparó ni envió ningún mensaje.");
      return;
    }
    const product = products.find((item) => item.id === selectedProduct)?.name ?? "Consulta general / proyecto";
    const comments = String(form.get("comentarios") ?? "").trim();
    const message = [`Hola, quisiera hacer una consulta a La Oficina Amoblamientos.`, `Interés: ${product}`, `Nombre: ${name}`, `Localidad: ${locality}`, comments ? `Mensaje: ${comments}` : ""].filter(Boolean).join("\n");
    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <Navbar />
    <main id="contenido" tabIndex={-1}>
      <section id="inicio" className="showroom" aria-labelledby="hero-title">
        <div className="showroom-image">
          <Image unoptimized quality={100} src="/images/la-oficina-demo/hero-showroom-illustrative.jpg" alt="Ambiente de oficina con mesa de reunión y sillas ergonómicas; imagen generada e ilustrativa" fill priority sizes="100vw" />
          <span className="photo-credit">Imagen ilustrativa</span>
        </div>
        <div className="showroom-copy">
          <h1 id="hero-title">Muebles para vivir y trabajar.</h1>
          <p className="showroom-description">Mobiliario para oficinas y hogares.</p>
          <a className="hero-action" href="#productos">Explorar colección</a>
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
        <p className="catalog-note">Las imágenes y denominaciones provienen del catálogo compartido. Precios y disponibilidad pendientes de confirmación.</p>
        <div className="catalog-mosaic">
          {featuredProducts.map((product) => <ProductCard product={product} headingLevel={3} onConsult={() => chooseProduct(product.id)} key={product.id} />)}
          <aside id="nosotros" className="trajectory-tile" aria-labelledby="story-title">
            <p className="eyebrow">La Oficina Amoblamientos</p><h2 id="story-title">50 años de trayectoria.</h2><p>Una mirada sobre el mobiliario para oficinas, hogares y proyectos.</p><small>Dato comunicado, pendiente de verificación pública.</small><a href="#contacto">Consultar por un proyecto <span aria-hidden="true">↗</span></a>
          </aside>
        </div>
        <div className="catalog-more"><Link href="/catalogo">Ver catálogo completo <span>{products.length} referencias</span></Link></div>
      </section>

      <section id="contacto" className="inquiry section-space" aria-labelledby="inquiry-title">
        <div className="container inquiry-layout">
          <div className="inquiry-copy"><p className="eyebrow">Contacto</p><h2 id="inquiry-title">¿Lo pensamos juntos?</h2><p>Contanos qué espacio querés equipar. La consulta se prepara para que puedas revisarla antes de enviarla.</p><div className="contact-caption"><span className="caption-rule" /><span>La consulta no se guarda en este sitio.</span></div></div>
          <form className="inquiry-form" ref={formRef} onSubmit={submitInquiry} noValidate>
            <div className="selected-status" aria-live="polite"><span className="status-dot" /><span>{selectedProduct === "general" ? "Consulta abierta o por proyecto" : `Interés seleccionado: ${products.find((item) => item.id === selectedProduct)?.name}`}</span></div>
            <div className="form-row"><label>Nombre<input name="nombre" autoComplete="name" placeholder="Tu nombre" required /></label><label>Localidad<input name="localidad" autoComplete="address-level2" placeholder="Tu localidad" required /></label></div>
            <label>Producto o tipo de proyecto<select value={selectedProduct} onChange={(event) => { setProductOverride(event.target.value); setError(""); }} required><option value="general">Consulta general / proyecto</option>{products.map((product) => <option value={product.id} key={product.id}>{product.name}</option>)}</select></label>
            <label>Mensaje adicional <span className="optional">Opcional</span><textarea name="comentarios" rows={3} placeholder="¿Qué te gustaría contarnos?" /></label>
            <button className="button--form" type="submit" disabled={!site.whatsappNumber}>Continuar por WhatsApp <span aria-hidden="true">↗</span></button>
            <p className="form-privacy">El mensaje se abrirá en WhatsApp para que puedas revisarlo y enviarlo.</p>
            {!site.whatsappNumber && <p className="contact-pending">WhatsApp oficial pendiente de confirmación. Esta acción se habilitará al verificar el número de contacto.</p>}
            {error && <p className="form-error" role="alert">{error}</p>}
          </form>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
