import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  headingLevel: 3 | 4;
} & (
  | { onConsult: () => void; consultHref?: never }
  | { consultHref: string; onConsult?: never }
);

export function ProductCard({ product, headingLevel, onConsult, consultHref }: ProductCardProps) {
  const Heading = headingLevel === 3 ? "h3" : "h4";

  return <article className="product-card" id={product.id}>
    <div className="product-image"><Image quality={100} unoptimized src={product.image} alt={product.alt} fill sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 25vw" /></div>
    <div className="product-info"><Heading>{product.name}</Heading>
      {onConsult
        ? <button className="consult-link" type="button" onClick={onConsult}>Consultar</button>
        : <Link className="consult-link" href={consultHref}>Consultar</Link>}
    </div>
  </article>;
}
