import Image from "next/image";
import Link from "next/link";
import { site, navigation } from "@/config/site";
import { SocialButtons } from "@/components/ui/SocialButtons";

export function Navbar() {
  return <header className="site-header"><div className="container header-inner">
    <Link className="brand-link" href="/#inicio" aria-label={`${site.name}, ir al inicio`}><Image src="/images/la-oficina-demo/logo-la-oficina.png" alt="" width={1190} height={997} priority /></Link>
    <nav aria-label="Navegación principal" className="desktop-nav">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
    <SocialButtons className="header-social" />
    <Link className="header-cta" href="/#contacto">Hacer una consulta</Link>
  </div></header>;
}
