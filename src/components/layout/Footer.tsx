import { Brand } from "@/components/ui/Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand-link" href="#inicio"><Brand /></a>
        <p>Contenido ilustrativo · Sin oferta comercial</p>
      </div>
    </footer>
  );
}
