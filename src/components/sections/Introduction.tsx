import { CTA } from "@/components/ui/CTA";

export function Introduction() {
  return (
    <section id="presentacion" className="introduction section-space" aria-labelledby="intro-title" tabIndex={-1}>
      <div className="container introduction-grid">
        <p className="eyebrow">01 / Presentación de ejemplo</p>
        <div>
          <h2 id="intro-title">Lo esencial, en pocas palabras.</h2>
          <p>Una presentación institucional acerca una organización a las personas. Cuenta qué hace, a quién se dirige y qué propone, con información concreta y fácil de encontrar.</p>
          <p>Esta página contiene únicamente textos ilustrativos. No representa a una empresa ni ofrece productos o servicios.</p>
          <CTA href="#inicio" variant="secondary">Volver al inicio</CTA>
        </div>
      </div>
    </section>
  );
}
