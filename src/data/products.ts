import catalogueProducts from "./catalogue-products.json";

export type Product = {
  id: string;
  sourceIndex: number;
  name: string;
  category: string;
  image: string;
  alt: string;
};

export const productCategories = [
  { id: "lineas", label: "Líneas", image: "/images/la-oficina-catalogue/051.jpg" },
  { id: "escritorios", label: "Escritorios", image: "/images/la-oficina-catalogue/005.jpg" },
  { id: "sillas", label: "Sillas", image: "/images/la-oficina-catalogue/028.jpg" },
  { id: "mesas", label: "Mesas", image: "/images/la-oficina-catalogue/009.jpg" },
  { id: "guardado", label: "Guardado", image: "/images/la-oficina-catalogue/079.jpg" },
] as const;

// Datos derivados de whatsapp-catalogue-2026-10-29.json; las imágenes sin nombre no se publican como fichas.
export const products: Product[] = catalogueProducts;

const featuredIndexes = [51, 52, 57, 5, 28, 39, 79];
export const featuredProducts = featuredIndexes
  .map((index) => products.find((product) => product.sourceIndex === index))
  .filter((product): product is Product => product !== undefined);
