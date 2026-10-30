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
- **CTA principal del hero:** «Explorar colección» → `#productos` (ancla funcional de la demo).
- **CTA por producto:** «Consultar» → seleccionar producto y llevar al formulario `#contacto`.
- **CTA para proyectos:** «Consultar por un proyecto» → `#contacto`, dejando la consulta abierta y editable.
- **CTA final:** «Continuar por WhatsApp», solo cuando se confirme el número de destino; si no, interfaz de demo señalizada como pendiente, sin fingir envíos.
- **Criterio de éxito:** primera impresión de calidad, navegación clara, identidad reconocible y flujo de consulta comprensible en escritorio y móvil.

## 3. Tipo y alcance

- **Tipo:** portada institucional (`/`) y catálogo completo (`/catalogo`).
- **Etapa:** demo de prospección, no sitio comercial definitivo.
- **Stack preferido:** Next.js, React, TypeScript, Tailwind CSS; respetar el stack y convenciones del repositorio.
- **Secciones principales:** hero, exploración por categorías, selección de productos, trayectoria/servicios y contacto; header y footer.
- **Datos de productos:** archivo local tipado, fácilmente reemplazable.
- **Interacción principal:** selección de producto en la portada por estado React; desde `/catalogo`, el enlace «Consultar» vuelve al formulario con el identificador de producto en la URL para precargar la selección.
- **Imágenes:** se permiten fotografías ilustrativas temporales de muebles, **rotuladas como tales**. Las piezas originales del negocio tienen prioridad cuando estén disponibles localmente y resulten adecuadas.
- **Complejidad:** construir la menor solución que permita evaluar una web visualmente terminada. Nada de desarrollar sistemas antes de validación comercial.

**Fuera de alcance:** ecommerce, precios, carrito, checkout, pagos, stock, filtros complejos, fichas individuales, CMS, panel, autenticación, base de datos, backend, carga de archivos, cotizador avanzado, analítica y automatizaciones no solicitadas.

## 4. Estructura y contenido

### Header
- Usar logo original cuando esté incorporado al repositorio; no redibujarlo.
- Navegación compacta: «Colección», «Nosotros», «Contacto» (solo si cada ancla existe).
- Un CTA de contacto opcional, sin competir con el hero.

### 01 — Hero editorial
- Imagen amplia de mobiliario en un ambiente de calidad; preferir fotografía real del negocio cuando esté disponible.
- Si se usa material temporal, aclarar su carácter ilustrativo mediante una nota visible, sin adjudicar el ambiente a La Oficina.
- Mostrar el logo/identidad de forma reconocible.
- **Titular solicitado para esta iteración:** «Muebles para vivir y trabajar.» Es texto de la demo, pendiente de aprobación comercial.
- **Texto de apoyo sugerido:** «Mobiliario para oficinas y hogares. Explorá nuestra colección y encontrá inspiración para tu próximo espacio.»
- CTA del hero: «Explorar colección» → `#productos` (ancla funcional existente).
- Mención de **50 años de trayectoria** de forma contenida y solo conforme a lo comunicado, sin añadir fechas, premios ni historia inventada.

### 02 — Colección por categorías (`#coleccion`)
- Para esta demo, agrupar las entradas con nombre del archivo `whatsapp-catalogue-2026-10-29.json` en **Líneas**, **Escritorios**, **Sillas**, **Mesas** y **Guardado**. Esta agrupación es una propuesta de navegación, no una taxonomía confirmada por el negocio.
- Cada acceso lleva a la sección correspondiente de `/catalogo`; evitar destinos vacíos.
- Mostrar una miniatura representativa extraída de las fichas de cada grupo, sin atribuirla a toda la categoría como producto único.

### 03 — Selección en portada (`#productos`) y catálogo completo (`/catalogo`)
- El archivo provisto contiene 91 imágenes, de las cuales 41 corresponden a entradas con nombre de producto o línea. La primera entrada identifica la marca y 49 imágenes carecen de nombre; esas 50 entradas no se publican como fichas independientes.
- La portada muestra 7 entradas representativas y un enlace «Ver catálogo completo». La ruta `/catalogo` muestra las 41 entradas con nombre, conserva sus denominaciones y fotos, y ofrece «Consultar» para volver al formulario con la pieza seleccionada.
- Las imágenes incrustadas son miniaturas de hasta 240 px. Evitar tarjetas de imagen muy grandes o recortes que oculten productos.
- El archivo no informa precio, descripción, disponibilidad ni enlaces de producto. No completar esos campos por inferencia.

### 04 — Trayectoria y asesoramiento (`#nosotros`)
- Bloque editorial breve para comunicar trayectoria y capacidad de atender espacios de oficina/hogar.
- Texto propuesto: «Una mirada sobre el mobiliario que acompaña cada espacio.»
- Se puede señalar «50 años de trayectoria» como afirmación aportada por el usuario, pendiente de verificación pública.
- Evitar frases no sustentadas como «fabricación propia», «líderes», «envíos a todo el país» o «diseños exclusivos».

### 05 — Contacto (`#contacto`)
- Encabezado propuesto: «Conversemos sobre tu próximo espacio.»
- Formulario sin backend con **nombre**, **producto o tipo de proyecto**, **localidad** y **mensaje opcional**.
- Si se llega desde «Consultar», precargar el producto correcto. El campo debe seguir siendo editable y ofrecer la opción «Consulta general / proyecto».
- Validar lo obligatorio y generar un mensaje comprensible, con caracteres codificados para WhatsApp.
- **No activar `wa.me` hasta verificar el número oficial.** Mientras esté pendiente, deshabilitar esa acción con explicación visible o ofrecer vista previa/copia del texto, claramente identificada como demo. Nunca simular éxito de envío.

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

- **WhatsApp oficial:** pendiente de confirmar; **no reutilizar** números de otros negocios o demos.
- **Instagram:** pendiente de proporcionar/verificar URL exacta.
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
4. «Consultar» precarga exactamente el producto; el estado se conserva al editar y navegar por anclas.
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
| WhatsApp, Instagram y dirección oficial | Pendiente | Verificar antes de enlazar |
| Despliegue | No autorizado | Esperar revisión y orden expresa |

## 10. Estado de implementación

- La portada conserva el banner fotográfico ilustrativo, presenta 7 fichas y mantiene la tarjeta de trayectoria. La ruta `/catalogo` reúne las 41 entradas con nombre del export de WhatsApp en cinco grupos.
- Las fotografías de producto proceden del archivo aportado y ya no se rotulan como imágenes ilustrativas. Las 49 imágenes sin nombre no se muestran como fichas.
- La selección de producto, el formulario, la validación, el desplazamiento a contacto y el armado de WhatsApp se preservaron. El número oficial sigue pendiente, por lo que la acción no se activa.
- El header y el footer muestran iconos deshabilitados de Instagram y Facebook. El botón flotante de WhatsApp abre una vista previa de chat con borrador local; no envía mensajes mientras falte el número oficial.
- Los archivos de referencia solicitados no estaban presentes en el workspace; la comparación visual directa queda pendiente. Se siguió la dirección escrita en `DESIGN.md`.
