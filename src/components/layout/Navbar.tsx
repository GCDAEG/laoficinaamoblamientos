"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site, navigation } from "@/config/site";
import { SocialButtons } from "@/components/ui/SocialButtons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return <header className="site-header" ref={headerRef}>
    <div className="container header-inner">
      <Link className="brand-link" href="/#inicio" aria-label={`${site.name}, ir al inicio`} onClick={() => setIsOpen(false)}>
        <Image src="/images/la-oficina-demo/logo-la-oficina.png" alt="" width={1190} height={997} priority />
      </Link>

      <button
        ref={toggleRef}
        className="mobile-nav-toggle"
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>Menú</span>
        <span className={`menu-icon${isOpen ? " menu-icon--open" : ""}`} aria-hidden="true"><span /><span /></span>
      </button>

      <nav id="primary-navigation" className={`main-nav${isOpen ? " is-open" : ""}`} aria-label="Navegación principal">
        <div className="nav-links-wrapper">
          {navigation.map((item) => <Link href={item.href} key={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link>)}
        </div>
        <div className="mobile-only-content">
          <Link className="header-cta-mobile" href="/#contacto" onClick={() => setIsOpen(false)}>Hacer una consulta</Link>
          <SocialButtons className="header-social-mobile" />
        </div>
      </nav>

      <div className="header-actions-desktop">
        <SocialButtons className="header-social" />
        <Link className="header-cta" href="/#contacto">Hacer una consulta</Link>
      </div>
    </div>
  </header>;
}
