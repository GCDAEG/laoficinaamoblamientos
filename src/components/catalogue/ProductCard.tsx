import Image from "next/image";
import type { Product } from "@/data/products";
import { productInquiryMessage, whatsappHref } from "@/lib/whatsapp";

type ProductCardProps = {
  product: Product;
  headingLevel: 3 | 4;
};

const priceFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export function ProductCard({ product, headingLevel }: ProductCardProps) {
  const Heading = headingLevel === 3 ? "h3" : "h4";
  const href = whatsappHref(productInquiryMessage(product));

  return <article className="product-card" id={product.id}>
    <div className="product-image"><Image unoptimized src={product.image} alt={product.alt} fill sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 25vw" /></div>
    <div className="product-info">
      <div className="product-heading">
        <p className="product-category">{product.category}</p>
        <Heading>{product.name}</Heading>
      </div>
      <div className="product-price">
        <span>Precio ilustrativo</span>
        <data value={product.price}>{priceFormatter.format(product.price)}</data>
      </div>
      <div className="product-action">
        {href
          ? <a className="consult-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Consultar por ${product.name} en WhatsApp`}>Consultar</a>
          : <button className="consult-link" type="button" disabled title="WhatsApp oficial pendiente de confirmación" aria-label={`Consultar por ${product.name}: WhatsApp pendiente de confirmación`}>Consultar</button>}
      </div>
    </div>
  </article>;
}
