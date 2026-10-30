"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, navigation } from "@/config/site";
import { SocialButtons } from "@/components/ui/SocialButtons";
import { CiBurger } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Previene el scroll de la página de fondo cuando el menú móvil está activo
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link 
          className="brand-link" 
          href="/#inicio" 
          aria-label={`${site.name}, ir al inicio`}
          onClick={() => setIsOpen(false)}
        >
          <Image src="/images/la-oficina-demo/logo-la-oficina.png" alt="" width={1190} height={997} priority />
        </Link>
        
        {/* Botón Hamburguesa Moderno */}
        <button 
          type="button" 
          className={`mobile-nav-toggle ${isOpen ? "is-active" : ""}`}
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner">{isOpen ? <CgClose className="size-5" /> : <FaBars className="size-5" />}</span>
          </span>
        </button>

        {/* Sistema Unificado de Navegación */}
        <nav 
          id="primary-navigation"
          aria-label="Navegación principal" 
          className={`main-nav ${isOpen ? "is-open" : ""}`}
        >
          <div className="nav-links-wrapper">
            {navigation.map((item) => (
              <Link 
                href={item.href} 
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Contenido exclusivo para Mobile dentro del Drawer */}
          <div className="mobile-only-content">
            <Link 
              className="header-cta-mobile" 
              href="/#contacto"
              onClick={() => setIsOpen(false)}
            >
              Hacer una consulta
            </Link>
            <SocialButtons className="header-social-mobile" />
          </div>
        </nav>

        {/* Acciones fijas en Escritorio (Se ocultan en móviles mediante CSS) */}
        <div className="header-actions-desktop">
          <SocialButtons className="header-social" />
          <Link className="header-cta" href="/#contacto">Hacer una consulta</Link>
        </div>
      </div>
    </header>
  );
}
