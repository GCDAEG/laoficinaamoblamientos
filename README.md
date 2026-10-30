# Demo conceptual de La Oficina Amoblamientos

Demo de dos páginas para revisión local. Propuesta visual no oficial, sin aprobación ni encargo confirmado. Usa Next.js App Router, React, TypeScript y Tailwind CSS.

## Instalar y ejecutar

Requiere Node.js 20.9 o superior y npm. Instalá con `npm ci` y ejecutá `npm run dev`; abrí http://localhost:3000. Para revisar el build local usá `npm run build` y `npm start`.

## Contenido y pendientes

- `/` presenta el banner ilustrativo, categorías y una selección de 7 productos. «Ver catálogo completo» lleva a `/catalogo`.
- `/catalogo` muestra las 41 entradas con nombre del archivo `whatsapp-catalogue-2026-10-29.json`, agrupadas en cinco categorías. Las 49 imágenes sin nombre no se convierten en fichas.
- Los datos derivados están en `src/data/catalogue-products.json`; `src/data/products.ts` define categorías y selección de portada. Las imágenes se encuentran en `public/images/la-oficina-catalogue/` y su procedencia está documentada en `public/README.md`.
- «Consultar» desde `/catalogo` vuelve al formulario de la portada con el producto seleccionado.
- La foto del banner es ilustrativa. Las imágenes de producto provienen del export aportado; precios, descripciones y disponibilidad no están informados.
- El número oficial de WhatsApp está vacío en `src/config/site.ts`; la acción permanece deshabilitada hasta confirmarlo.
- Los iconos de Instagram y Facebook del header y footer permanecen deshabilitados hasta confirmar las URL oficiales. El botón flotante de WhatsApp abre una vista previa de chat para escribir un borrador local; no envía mensajes hasta confirmar el número oficial.
- El logo incorporado fue aportado por el usuario; los derechos de uso no están documentados.
- La cifra de 50 años y los textos propuestos requieren revisión antes de publicar. La metadata mantiene `noindex, nofollow`.

No requiere variables de entorno ni backend. No se desplegó.
# laoficinaamoblamientos
