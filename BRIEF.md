# BRIEF.md — La Oficina Amoblamientos

**Estado:** brief de implementación de demo comercial.  
**Tipo:** propuesta conceptual **no oficial** desarrollada por TUWEBHOY, sujeta a revisión; no es un sitio encargado ni aprobado por el negocio.  
**Referencia principal:** `DESIGN.md` para decisiones visuales. `AGENTS.md` conserva las reglas generales del proyecto.

## 1. Negocio y público

- **Nombre comercial:** La Oficina Amoblamientos.
- **Ubicación indicada:** Santa Fe, Argentina. No publicar dirección exacta ni zona de cobertura sin confirmación.
- **Oferta según contexto proporcionado:** equipamiento de oficinas, mobiliario estándar y a medida, muebles para el hogar, decoración y asesoramiento en interiorismo.
- **Trayectoria comunicada:** la marca destaca **50 años**. Usar la cifra únicamente en el sentido comunicado; antes de publicar para el público, verificar su formulación exacta y respaldo en canales propios.
- **Material observado:** logo blanco sobre negro con monograma «LO» y «AMOBLAMIENTOS»; historias destacadas con sillas ergonómicas, decoración, comedor, sofás, amoblamiento y clientes; piezas visuales de las sillas **LINK NEGRA** y **LINK BLANCA**, con mención «WORKINGMESH» y características visibles en las gráficas.
- **Público propuesto:** empresas, profesionales, espacios de trabajo y personas que buscan muebles para el hogar o proyectos de amoblamiento.
- **Idioma:** español argentino, natural y profesional.
- **Tono:** sobrio, confiable, cercano y orientado al diseño; sin tecnicismos vacíos ni promesas no verificadas.

## 2. Objetivo

Demostrar cómo La Oficina podría transformar su presencia digital en un **catálogo editorial contemporáneo**, conservar su identidad y facilitar la exploración de categorías, productos y consultas.

- **Objetivo principal:** que el visitante reconozca la marca, descubra la oferta y pueda consultar por un producto o proyecto.
- **CTA principal del hero:** «Ver catálogo» → `/catalogo`.
- **CTA por producto:** «Consultar» → WhatsApp con el nombre real de la pieza y el número publicado en el Instagram oficial, aportado por el usuario.
- **CTA para proyectos:** «Consultar por un proyecto» → `#contacto`, dejando la consulta abierta y editable.
- **CTA final:** «Continuar por WhatsApp» con el número de contacto aportado por el usuario; el visitante revisa el mensaje antes de enviarlo.
- **Criterio de éxito:** primera impresión de calidad, navegación clara, identidad reconocible y flujo de consulta comprensible en escritorio y móvil.

## 3. Tipo y alcance

- **Tipo:** portada institucional (`/`) y catálogo completo (`/catalogo`).
- **Etapa:** demo de prospección, no sitio comercial definitivo.
- **Stack preferido:** Next.js, React, TypeScript, Tailwind CSS; respetar el stack y convenciones del repositorio.
- **Secciones principales:** hero, exploración por categorías, selección de productos, trayectoria/servicios y contacto; header y footer.
- **Datos de productos:** archivo local tipado, fácilmente reemplazable.
- **Interacción principal:** consulta directa por producto mediante un mensaje de WhatsApp construido desde la ficha, sin pasar por el formulario. El formulario queda reservado para proyectos y consultas generales.
- **Imágenes:** se permiten fotografías ilustrativas temporales de muebles, **rotuladas como tales**. Las piezas originales del negocio tienen prioridad cuando estén disponibles localmente y resulten adecuadas.
- **Complejidad:** construir la menor solución que permita evaluar una web visualmente terminada. Nada de desarrollar sistemas antes de validación comercial.

**Fuera de alcance:** ecommerce, precios, carrito, checkout, pagos, stock, filtros complejos, fichas individuales, CMS, panel, autenticación, base de datos, backend, carga de archivos, cotizador avanzado, analítica y automatizaciones no solicitadas.

## 4. Estructura y contenido

### Header
- Usar logo original cuando esté incorporado al repositorio; no redibujarlo.
- Navegación compacta: «Inicio» → `/#inicio`, «Catálogo» → `/catalogo`, «Nosotros» → `/#nosotros` y «Contacto» → `/#contacto`.
- En móvil y tablet, los enlaces se muestran en un menú desplegable bajo la cabecera, accesible por botón y teclado.
- Al avanzar en la página, aparece un acceso flotante discreto para volver arriba, ubicado sobre el botón de WhatsApp. Se oculta mientras la vista previa del chat está abierta.
- Un CTA de contacto opcional, sin competir con el hero.

### 01 — Hero editorial
- Imagen amplia de mobiliario en un ambiente de calidad; preferir fotografía real del negocio cuando esté disponible.
- Si se usa material temporal, aclarar su carácter ilustrativo mediante una nota visible, sin adjudicar el ambiente a La Oficina.
- Mostrar el logo/identidad de forma reconocible.
- **Titular solicitado para esta iteración:** «Muebles para vivir y trabajar.» Es texto de la demo, pendiente de aprobación comercial.
- **Texto de apoyo sugerido:** «Mobiliario para oficinas y hogares. Explorá nuestra colección y encontrá inspiración para tu próximo espacio.»
- CTA del hero: «Ver catálogo» → `/catalogo`.
- Mención de **50 años de trayectoria** de forma contenida y solo conforme a lo comunicado, sin añadir fechas, premios ni historia inventada.

### 02 — Colección por categorías (`#coleccion`)
- Para esta demo, agrupar las entradas con nombre del archivo `whatsapp-catalogue-2026-10-29.json` en **Líneas**, **Escritorios**, **Sillas**, **Mesas** y **Guardado**. Esta agrupación es una propuesta de navegación, no una taxonomía confirmada por el negocio.
- Cada acceso abre `/catalogo?categoria={id}` con la categoría correspondiente filtrada; evitar destinos vacíos.
- En la portada, cada categoría se presenta como un círculo negro de doble anillo gris oscuro con un icono blanco centrado; el nombre aparece debajo del círculo.
- En `/catalogo`, las categorías forman una grilla fotográfica compacta sin separaciones, con el nombre superpuesto sobre una capa oscura. Sus imágenes activan un filtro compartido con una barra compacta sticky. Las fotos proceden de fichas del catálogo aportado y representan una pieza de cada grupo, no la categoría completa.
- El recuento de referencias queda disponible en el nombre accesible de cada control.

### 03 — Selección en portada (`#productos`) y catálogo completo (`/catalogo`)
- El archivo provisto contiene 91 imágenes, de las cuales 41 corresponden a entradas con nombre de producto o línea. La primera entrada identifica la marca y 49 imágenes carecen de nombre; esas 50 entradas no se publican como fichas independientes.
- La portada muestra 7 entradas representativas y un enlace «Ver catálogo completo». La ruta `/catalogo` muestra inicialmente las 41 entradas con nombre, permite filtrarlas por categoría con una URL compartible y conserva sus denominaciones y fotos. «Consultar» abre WhatsApp con el nombre de la pieza.
- Las imágenes incrustadas son miniaturas de hasta 240 px. Evitar tarjetas de imagen muy grandes o recortes que oculten productos.
- El archivo no informa precio, descripción, disponibilidad ni enlaces de producto. No completar esos campos por inferencia.

### 04 — Trayectoria y asesoramiento (`#nosotros`)
- Sección editorial independiente entre la selección de productos y el formulario, con fotografía de ambiente ilustrativa y CTA «Hablemos de tu proyecto» → `#contacto`.
- Título solicitado: «50 años pensando espacios.» Texto de apoyo propuesto: «Una trayectoria dedicada al mobiliario para oficinas y hogares, con soluciones para distintos espacios y necesidades.»
- La cifra de 50 años fue comunicada por la marca según el contexto aportado; confirmar su redacción pública antes de publicar el sitio definitivo.
- Evitar frases no sustentadas como «fabricación propia», «líderes», «envíos a todo el país» o «diseños exclusivos».

### 05 — Contacto (`#contacto`)
- Encabezado propuesto: «Conversemos sobre tu próximo espacio.»
- Formulario sin backend con **nombre**, **localidad**, **tipo de consulta o proyecto** y **mensaje opcional**. Se orienta a amoblamiento a medida, oficinas, interiorismo y consultas generales.
- La consulta por producto no utiliza este formulario ni parámetros `?producto=`.
- Validar lo obligatorio y generar un mensaje comprensible, con caracteres codificados para WhatsApp.
- El número de contacto para `wa.me` se tomó del enlace oficial aportado por el usuario. Nunca simular éxito de envío.

### Footer
- Datos públicos solo cuando estén verificados.
- Crédito visible y sobrio: **«Demo conceptual no oficial desarrollada por TUWEBHOY.»**
- No insinuar contratación, colaboración ni aprobación de La Oficina.

## 5. Productos y datos

| Elemento | Estado | Tratamiento |
|---|---|---|
| 41 entradas con nombre del export de WhatsApp | Archivo aportado | Mostrar nombre e imagen incrustada, agrupados por tipo de mobiliario |
| 49 imágenes sin nombre | Archivo aportado | No convertir en fichas ni asignarles un nombre supuesto |
| Precio, descripción y disponibilidad | No informados en el export | Mantener pendientes; no inventar |

Las imágenes se extraen de `image_data` a `public/images/la-oficina-catalogue/`. Los metadatos derivados se guardan en `src/data/catalogue-products.json` y se exponen desde `src/data/products.ts`; `sourceIndex` permite rastrear cada ficha hasta el export. Centralizar los datos de marca/contacto en un único archivo de configuración.

## 6. Contacto y enlaces

- **WhatsApp de contacto:** `https://wa.me/5493425460071`, enlace publicado en el Instagram oficial según lo aportado por el usuario. No reutilizar números de otros negocios o demos.
- **Instagram:** `https://www.instagram.com/laoficinaamoblamientossc/`, perfil aportado por el usuario; enlazar los iconos del header y footer.
- **Facebook:** se muestra un icono de ejemplo en la demo; la URL oficial está pendiente de proporcionar/verificar.
- **Dirección, teléfono, correo, horarios, cobertura de envíos y pagos:** pendientes; no completarlos por inferencia.
- **Nombre Martín:** aparece en el contexto del encargo como interlocutor; no mostrarlo como titular/representante público sin confirmación.

## 7. Recursos y publicación

- **Logo:** imagen compartida en conversación (monograma LO blanco sobre fondo negro); copiar al repositorio antes de referenciarla. No inventar archivo o ruta.
- **Fotos originales:** piezas de Link Negra y Link Blanca compartidas en conversación; comprobar existencia local antes de usarlas.
- **Historias destacadas:** referencia de categorías e identidad, no necesariamente imágenes para mostrar en el sitio.
- **Fotos de ejemplo:** permitidas temporalmente, con origen/licencia verificados y rótulo visible. Priorizar recursos de uso autorizado o placeholders fotográficos locales reales; evitar links rotos e imágenes con marca de agua.
- **Destino posible:** Vercel, solamente con autorización expresa.
- **Indexación demo:** `noindex, nofollow`.
- **Actualización:** archivo de datos local; sin autogestión.
- **Privacidad:** no almacenar ni transmitir datos del formulario a servidores propios; WhatsApp requiere acción consciente del visitante.

## 8. Criterios de aceptación

1. La identidad de La Oficina se reconoce inmediatamente; ningún rastro de Fagnani ni de otras demos.
2. Hero fuerte y legible, especialmente en 1366×768 y 390×844.
3. Categorías y productos visualmente coherentes; distinguir material real de ilustraciones temporales.
4. «Consultar» construye el mensaje con el producto exacto y no desplaza al formulario.
5. Flujo compatible con mouse, touch y teclado, sin `CustomEvent`/`sessionStorage` como puente entre componentes.
6. WhatsApp solo se habilita con número oficial verificado; sin mensajes de envío ficticios.
7. Sin precios, stock, materiales o condiciones comerciales inventados.
8. Responsive revisado en 390×844, 768×1024, 1366×768 y 1440×900, sin overflow horizontal.
9. Accesibilidad: `alt`, etiquetas, foco, contraste, estados, movimiento reducido.
10. Ejecutar los scripts existentes de lint, tipos y build e informar resultados reales.
11. No publicar ni desplegar sin autorización expresa.

## 9. Pendientes

| Tema | Estado | Acción |
|---|---|---|
| Identidad monocromática, monograma y serif | Observado | Preservar al diseñar |
| 50 años de trayectoria | Aportado en contexto | Confirmar redacción pública antes de publicar |
| Textos de hero y sección institucional | Propuestos | Ajustar tras revisión visual |
| Imágenes del catálogo de WhatsApp | Aportadas en JSON | Usar las 41 entradas con nombre; conservar referencia al índice de origen |
| Fotografías temporales | Autorizadas para la demo | Rotular y reemplazar después |
| Precio, descripción y disponibilidad de las fichas | Pendiente | Confirmar antes de publicar datos comerciales |
| WhatsApp | Enlace aportado por el usuario | Usar `https://wa.me/5493425460071` para consultas |
| Instagram | Perfil aportado por el usuario | Enlazar `https://www.instagram.com/laoficinaamoblamientossc/` |
| Dirección oficial | Pendiente | Verificar antes de publicar |
| Despliegue | No autorizado | Esperar revisión y orden expresa |

## 10. Estado de implementación

- La portada conserva el banner fotográfico ilustrativo, presenta 7 fichas y ubica «Nosotros» en una sección editorial independiente. La ruta `/catalogo` reúne las 41 entradas con nombre del export de WhatsApp y permite filtrarlas en cinco categorías.
- La imagen de `public/images/la-oficina-demo/about-illustrative.webp` fue generada para esta demo y se rotula como ilustrativa. Es temporal y debe reemplazarse por una fotografía autorizada del negocio cuando esté disponible.
- Las fotografías de producto proceden del archivo aportado y ya no se rotulan como imágenes ilustrativas. Las 49 imágenes sin nombre no se muestran como fichas.
- Las consultas por producto y por proyecto tienen recorridos separados. Los botones de producto abren WhatsApp con un mensaje personalizado y el número aportado por el usuario.
- El header y el footer enlazan Instagram al perfil aportado por el usuario; Facebook continúa sin destino confirmado. El botón flotante de WhatsApp mantiene una vista previa de chat con borrador local y un control de envío explícitamente desactivado, independiente de las consultas por producto.
- Los archivos de referencia solicitados no estaban presentes en el workspace; la comparación visual directa queda pendiente. Se siguió la dirección escrita en `DESIGN.md`.
