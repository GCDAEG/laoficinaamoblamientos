import { CTA } from "@/components/ui/CTA";

export function Hero() {
  return (
    <section id="inicio" className="hero section-space" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Demo institucional · Contenido ilustrativo</p>
          <h1 id="hero-title">Un espacio para una nueva historia.</h1>
          <p className="hero-description">Una muestra de cómo presentar una organización con un mensaje claro, una lectura simple y espacio para lo esencial.</p>
          <CTA href="#presentacion">Explorar el ejemplo</CTA>
        </div>
        <div className="sample-art" aria-hidden="true">
          <span className="art-circle" />
          <span className="art-block" />
        </div>
      </div>
    </section>
  );
}
