"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { productCategories, products } from "@/data/products";

export function CategoryRail({ onCataloguePage = false }: { onCataloguePage?: boolean }) {
  const railRef = useRef<HTMLElement>(null);
  const [canScroll, setCanScroll] = useState({ back: false, forward: true });

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const update = () => setCanScroll({
      back: rail.scrollLeft > 1,
      forward: rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 1,
    });
    const frame = requestAnimationFrame(update);
    const observer = new ResizeObserver(update);
    observer.observe(rail);
    rail.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      rail.removeEventListener("scroll", update);
    };
  }, []);

  function scrollRail(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * .75, behavior: "smooth" });
  }

  return <div className="category-rail-wrapper">
    <nav ref={railRef} className="category-rail" aria-label="Explorar por categoría">
      {productCategories.map((category) => <Link href={`${onCataloguePage ? "" : "/catalogo"}#catalogo-${category.id}`} key={category.id}>
        <span className="category-photo"><Image src={category.image} alt="" fill sizes="64px" /></span>
        <span className="category-meta"><strong>{category.label}</strong><small>{products.filter((product) => product.category === category.label).length} referencias</small></span>
      </Link>)}
    </nav>
    <div className="category-rail-controls" aria-label="Desplazar categorías">
      <button type="button" onClick={() => scrollRail(-1)} aria-label="Ver categorías anteriores" disabled={!canScroll.back}>←</button>
      <button type="button" onClick={() => scrollRail(1)} aria-label="Ver más categorías" disabled={!canScroll.forward}>→</button>
    </div>
  </div>;
}
