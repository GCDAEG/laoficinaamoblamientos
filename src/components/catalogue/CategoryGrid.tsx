import Image from "next/image";
import { productCategories } from "@/data/products";

export type CategoryId = (typeof productCategories)[number]["id"];

type CategoryGridProps = {
  activeCategory: CategoryId | null;
  onSelect: (id: CategoryId) => void;
  counts: Record<CategoryId, number>;
};

export function CategoryGrid({ activeCategory, onSelect, counts }: CategoryGridProps) {
  return <div className="category-grid" role="group" aria-label="Explorar por categoría">
    {productCategories.map((category) => <button
      className={`category-grid-link category-grid-link--${category.id}`}
      type="button"
      onClick={() => onSelect(category.id)}
      aria-pressed={activeCategory === category.id}
      aria-label={`${category.label}, ${counts[category.id]} referencias`}
      key={category.id}
    >
      <Image src={category.image} alt="" fill sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 20vw" />
      <span>{category.label}</span>
    </button>)}
  </div>;
}
