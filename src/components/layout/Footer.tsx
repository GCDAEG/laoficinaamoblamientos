import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { SocialButtons } from "@/components/ui/SocialButtons";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><Link className="footer-brand" href="/#inicio" aria-label={`${site.name}, volver al inicio`}><Image src="/images/la-oficina-demo/logo-la-oficina.png" alt="" width={1190} height={997} /></Link><p>Demo conceptual no oficial desarrollada por TUWEBHOY.</p><SocialButtons className="footer-social" /><a href="#contenido" className="back-top">Volver arriba ↑</a></div><div className="container footer-bottom"><span>{site.location} · datos de contacto pendientes de confirmación</span><span>{site.name}</span></div></footer>;
}
