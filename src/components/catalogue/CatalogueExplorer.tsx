"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { CategoryGrid, type CategoryId } from "@/components/catalogue/CategoryGrid";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { productCategories, products } from "@/data/products";
import { hasWhatsAppContact } from "@/lib/whatsapp";

const categoryProducts = Object.fromEntries(productCategories.map((category) => [
  category.id,
  products.filter((product) => product.category === category.label),
])) as Record<CategoryId, typeof products>;

const counts = Object.fromEntries(productCategories.map((category) => [
  category.id,
  categoryProducts[category.id].length,
])) as Record<CategoryId, number>;

export function CatalogueExplorer() {
  const searchParams = useSearchParams();
  const resultsRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const activeCategory = productCategories.find((category) => category.id === searchParams.get("categoria")) ?? null;
  const visibleProducts = activeCategory ? categoryProducts[activeCategory.id] : products;

  useEffect(() => {
    const filters = filtersRef.current;
    const activeButton = filters?.querySelector<HTMLButtonElement>('button[aria-pressed="true"]');
    if (!filters || !activeButton || filters.scrollWidth <= filters.clientWidth) return;

    const filtersBounds = filters.getBoundingClientRect();
    const buttonBounds = activeButton.getBoundingClientRect();
    filters.scrollTo({
      left: filters.scrollLeft + buttonBounds.left - filtersBounds.left - (filters.clientWidth - buttonBounds.width) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }, [activeCategory?.id]);

  function selectCategory(id: CategoryId | null, fromGrid = false) {
    if (id === activeCategory?.id) return;

    const params = new URLSearchParams(searchParams.toString());
    if (id) params.set("categoria", id);
    else params.delete("categoria");
    const query = params.toString();
    window.history.pushState(null, "", query ? `/catalogo?${query}` : "/catalogo");

    if (fromGrid && resultsRef.current && headingRef.current) {
      const headingTop = headingRef.current.getBoundingClientRect().top;
      if (headingTop > window.innerHeight - 120) {
        resultsRef.current.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
          block: "start",
        });
      }
    }
  }

  return <>
    <div className="catalogue-page-categories">
      <CategoryGrid activeCategory={activeCategory?.id ?? null} onSelect={(id) => selectCategory(id, true)} counts={counts} />
    </div>
    <section ref={resultsRef} id="productos" className="catalog-showroom catalogue-showroom--full" aria-labelledby="products-title">
      <div className="catalogue-filters">
        <div ref={filtersRef} className="catalogue-filter-list" role="group" aria-label="Filtrar productos por categoría">
          <button type="button" aria-pressed={!activeCategory} onClick={() => selectCategory(null)}>Todos</button>
          {productCategories.map((category) => <button
            type="button"
            aria-pressed={activeCategory?.id === category.id}
            aria-label={`${category.label}, ${counts[category.id]} referencias`}
            onClick={() => selectCategory(category.id)}
            key={category.id}
          >{category.label}</button>)}
        </div>
      </div>
      <div className="catalogue-results">
        <div ref={headingRef} className="catalog-heading">
          <div><p className="eyebrow">Selección de mobiliario</p><h2 id="products-title">{activeCategory?.label ?? "Todas las piezas"}</h2></div>
          <p role="status" aria-live="polite">{visibleProducts.length} {visibleProducts.length === 1 ? "referencia" : "referencias"}</p>
        </div>
        <p className="catalog-note">Imágenes y denominaciones del catálogo compartido. Precios y disponibilidad pendientes de confirmación.{!hasWhatsAppContact() && " Las consultas por producto se habilitarán al confirmar el WhatsApp oficial."}</p>
        <div className="catalog-mosaic">
          {visibleProducts.map((product) => <ProductCard product={product} headingLevel={3} key={product.id} />)}
        </div>
      </div>
    </section>
  </>;
}
