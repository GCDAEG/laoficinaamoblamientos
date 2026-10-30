import Image from "next/image";

const aboutImage = "/images/la-oficina-demo/about-illustrative.webp";

export function AboutSection() {
  return <section id="nosotros" className="about-section" aria-labelledby="about-title">
    <div className="about-shell">
      <div className="about-intro">
        <p className="eyebrow">La Oficina Amoblamientos</p>
        <h2 id="about-title">50 años <span>trabajando Juntos.</span></h2>
      </div>
      <figure className="about-photo">
        <Image
          src={aboutImage}
          alt="Ambiente de reunión contemporáneo con mesa y sillones oscuros; imagen generada e ilustrativa"
          fill
          sizes="(max-width: 700px) 100vw, 58vw"
        />
        <figcaption>Imagen ilustrativa</figcaption>
      </figure>
      <div className="about-details">
        <p>Porque decorar no es llenar espacios, sino darles personalidad. Una trayectoria dedicada al mobiliario estándar y a medida para oficinas y hogares, con soluciones y asesoramiento en interiorismo para cada necesidad.</p>
        <a href="#contacto">Hablemos de tu proyecto</a>
      </div>
    </div>
  </section>;
}
