"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdTableRestaurant } from "react-icons/md";
import { PiDesk, PiLockers, PiOfficeChair, PiStack } from "react-icons/pi";
import type { IconType } from "react-icons";
import { productCategories, products } from "@/data/products";

type CategoryId = (typeof productCategories)[number]["id"];

const categoryIcons: Record<CategoryId, IconType> = {
  lineas: PiStack,
  escritorios: PiDesk,
  sillas: PiOfficeChair,
  mesas: MdTableRestaurant,
  guardado: PiLockers,
};

function CategoryIcon({ id }: { id: CategoryId }) {
  const Icon = categoryIcons[id];
  return <Icon aria-hidden="true" focusable="false" />;
}

export function CategoryRail() {
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
      {productCategories.map((category) => <Link href={`/catalogo?categoria=${category.id}`} aria-label={`${category.label}, ${products.filter((product) => product.category === category.label).length} referencias`} key={category.id}>
        <span className="category-rail-orb"><CategoryIcon id={category.id} /></span>
        <span className="category-rail-name">{category.label}</span>
      </Link>)}
    </nav>
    <div className="category-rail-controls" aria-label="Desplazar categorías">
      <button type="button" onClick={() => scrollRail(-1)} aria-label="Ver categorías anteriores" disabled={!canScroll.back}>←</button>
      <button type="button" onClick={() => scrollRail(1)} aria-label="Ver más categorías" disabled={!canScroll.forward}>→</button>
    </div>
  </div>;
}
