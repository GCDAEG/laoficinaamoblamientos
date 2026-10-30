import { site } from "@/config/site";
import type { Product } from "@/data/products";

function configuredNumber() {
  const number = site.whatsappNumber.replace(/[+\s()-]/g, "");
  return /^[1-9]\d{7,14}$/.test(number) ? number : null;
}

export function hasWhatsAppContact() {
  return configuredNumber() !== null;
}

export function whatsappHref(message: string) {
  const number = configuredNumber();
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : null;
}

export function productInquiryMessage(product: Pick<Product, "name">) {
  return `Hola, vi «${product.name}» en el catálogo de ${site.name} y quisiera consultar por precio y disponibilidad.`;
}

export function projectInquiryMessage({ name, locality, projectType, comments }: {
  name: string;
  locality: string;
  projectType: string;
  comments: string;
}) {
  return [
    `Hola, quisiera hacer una consulta a ${site.name}.`,
    `Tipo de consulta: ${projectType}`,
    `Nombre: ${name}`,
    `Localidad: ${locality}`,
    comments ? `Mensaje: ${comments}` : "",
  ].filter(Boolean).join("\n");
}
