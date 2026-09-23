"use client";

import { Brand } from "@/components/ui/Brand";
import { navigation, site } from "@/config/site";

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand-link" href="#inicio" aria-label={`${site.name}, ir al inicio`}><Brand /></a>
        <nav aria-label="Navegación principal" className="desktop-nav">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <details className="mobile-menu" onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.currentTarget.removeAttribute("open");
            event.currentTarget.querySelector("summary")?.focus();
          }
        }}>
          <summary>Menú <span aria-hidden="true">＋</span></summary>
          <nav aria-label="Navegación móvil" onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) {
              const menu = event.currentTarget.closest("details");
              menu?.removeAttribute("open");
              menu?.querySelector("summary")?.focus();
            }
          }}>
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
