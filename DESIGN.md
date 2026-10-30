# DESIGN.md — La Oficina Amoblamientos

**Estado:** dirección de arte V2 para rediseño de demo conceptual no oficial de TUWEBHOY.  
**Concepto:** **showroom digital + catálogo curado**.  
**Objetivo del rediseño:** abandonar la landing editorial previsible y construir una experiencia de mobiliario guiada por imágenes y composición modular.  
**Jerarquía documental:** `BRIEF.md` define negocio, alcance, contenido y funcionamiento; este archivo define **cómo se presenta visualmente**. `AGENTS.md` conserva reglas técnicas generales. No ampliar el alcance del brief.

## 1. Diagnóstico del diseño V1: qué no repetir

La primera implementación resultó coherente pero genérica. Evitar repetir literalmente:

- Hero en dos columnas iguales o 40/60, con H1 serif gigante a la izquierda y fotografía rectangular a la derecha.
- Secuencia predecible «hero → lista de categorías → seis tarjetas → bloque negro de historia → formulario» sin ritmo propio.
- Titulares siempre quebrados en 3–5 líneas, empleados como sustituto de dirección de arte.
- Secciones identificadas sistemáticamente por `01 / 02 / 03 / 04` y microetiquetas decorativas.
- Mucho espacio en blanco sin contenido ni función visual.
- Grilla uniforme de tarjetas idénticas, con la misma proporción y CTA debajo.
- Sección negra de «50 años» como bloque ornamental sobredimensionado.
- «Consultar» tan pequeño que se confunde con metadatos.
- Botón rectangular + texto + flecha como respuesta por defecto a cualquier interacción.

**No alcanza con invertir columnas, cambiar tipografía o modificar el padding de la V1: hay que recomponer visualmente el sitio.** Conservar solamente los datos, estados, formularios, enlaces y lógica que funcionen.

## 2. Referencias visuales suministradas por el usuario

### Referencia principal — Casa Carigar / concepto editorial de mobiliario

**Archivo de referencia:** `e896f6c57fa05ead7ed935e21b41c173.webp` (adjunto del usuario; copiar al repositorio de referencia visual si Codex no puede acceder a él).

La captura muestra un sitio conceptual de muebles con una portada fotográfica atmosférica, colecciones seleccionadas, franjas con piezas, collage/mosaico de imágenes, producto contextualizado y contenido editorial. Es la referencia rectora de **composición y ritmo**.

**Tomar:**
- Portada fotográfica con texto breve integrado, similar a una cubierta de catálogo.
- Tramos de catálogo curado con fotografías de tamaños y roles distintos.
- Cambio de densidad entre bloque visual dominante, tira de colecciones y módulos de productos.
- Mosaicos, recortes y espacios bien aprovechados; alternancia de fondos claros sin convertir todo en tarjetas.
- Presentación de categorías y productos como piezas de exposición, no como componentes SaaS.

**No copiar:** paleta cálida beige/marrón, marca, textos, productos específicos, precios, carruseles sin necesidad, iconografía decorativa o interacciones de tienda real.

### Referencia secundaria — Styleco / catálogo con navegación clara

**Archivo:** `original-037e921de3cc68fa51a1d9c29a13e9b3.webp`.

La captura muestra un catálogo de prendas con barra de navegación, panel lateral de categorías/filtros y grilla de productos. Es una referencia **funcional**, no una estética a copiar.

**Tomar:** claridad de agrupación, nombres de producto reconocibles, categorías fáciles de recorrer, importancia de la foto y acciones fáciles de localizar.

**No copiar:** carrito, favoritos, filtros de precio o color, badges, fotos de producto idénticas, tarjetas con fondos grises redondeados, look de ecommerce masivo.

**Principio de síntesis:** **80 % primera referencia (dirección de arte), 20 % segunda (claridad comercial)**. No es una proporción de píxeles, sino una prioridad de diseño.

## 3. Identidad existente de La Oficina

- Nombre: **La Oficina Amoblamientos**.
- Logotipo aportado: monograma **LO** negro sobre transparencia, con tipografía serif y palabra «AMOBLAMIENTOS». Se usa el archivo original con márgenes transparentes recortados en la cabecera y el pie; en el pie se invierte a blanco para conservar el contraste.
- Lenguaje de comunicación observado: blanco, negro, gris, serif; contenido de sillas ergonómicas, comedor, sofás, decoración y amoblamientos.
- Productos visibles en material aportado: **LINK NEGRA** y **LINK BLANCA**, de la línea Workingmesh. No inventar características no documentadas.
- La marca comunica **50 años de trayectoria**: puede aparecer como dato editorial breve, con verificación previa a publicación; no inventar su historia.
- La identidad de TUWEBHOY debe permanecer relegada a la aclaración de demo.

## 4. Paleta y tipografía

### Paleta

| Rol | Valor propuesto | Uso |
|---|---|---|
| Blanco | `#FFFFFF` | Base y zonas de catálogo |
| Papel casi blanco | `#F6F5F2` | Alternancia mínima entre módulos, solo si mejora ritmo |
| Negro tinta | `#101010` | Marca, títulos, acciones principales |
| Gris suave | `#EAE9E6` | Reglas, separaciones y fondos discretos |
| Gris texto | `#555555` | Texto secundario accesible |

Paleta monocromática **de interfaz**. El color surge principalmente de la fotografía (madera, tapizados, ambientes). No introducir un color acento artificial. Estos códigos son propuestas, no especificaciones oficiales.

### Tipografía

- Mantener **una serif con parentesco visual al logo** para titulares puntuales; `Cormorant Garamond` puede utilizarse si funciona en el contexto, pero **no debe dominar cada sección ni depender de tamaño desmesurado**.
- Sans: `Inter` para navegación, atributos, botones, categorías y formularios.
- Alternar títulos serif editoriales con rótulos sans más contenidos; mostrar producto y fotografía como protagonistas.
- Evitar cursivas decorativas insistentes, palabras en itálica arbitrarias y H2 de cinco renglones.
- Lectura cómoda: no recurrir a textos de 10–11 px en móvil; controles y enlaces legibles.

## 5. Composición global: cambio estructural real

La demo utiliza **dos rutas**: la portada `/` con una selección breve y `/catalogo` con todas las fichas identificadas. La consulta rápida por producto prepara un mensaje de WhatsApp; el formulario de la portada atiende proyectos y consultas generales.

**Recorrido recomendado:**

1. **Portada fotográfica / showroom** — primera pantalla visual y comercial.
2. **Colecciones / categorías** — franja o mosaico de 3–5 familias sin depender de tarjetas iguales.
3. **Selección de mobiliario** — catálogo curado modular con piezas destacadas y secundarias; acciones de consulta visibles.
4. **La Oficina / trayectoria y proyectos** — sección editorial propia, con fotografía y tipografía de marca, entre la selección de productos y el contacto.
5. **Consulta** — cierre claro y funcional, con formulario mantenido de V1.

Se pueden combinar colecciones y selección si crea una mejor experiencia. Evitar cinco bloques autónomos idénticos separados por espacio vacío. No utilizar numeración de sección como estilo por defecto.

### 5.1 Portada (hero)

**Dirección prioritaria:** un **hero fotográfico de ancho dominante**, cercano a una tapa de catálogo de mobiliario.

- Fotografía de mobiliario / ambiente como imagen principal; si se usa una imagen temporal, rotular claramente «Imagen ilustrativa» en la demo.
- Texto breve superpuesto **solo donde exista contraste real**, o en una franja adyacente *no equivalente al layout 50/50 anterior*. Puede ser bloque inferior o pequeño panel integrado al encuadre.
- Marca reconocible y navegación compacta.
- Título de extensión limitada, para evitar ocupar media pantalla. El H1 anterior «Espacios que hablan de vos» se puede conservar o reemplazar por otro texto propuesto si la composición lo necesita.
- Primer viewport con fotografía protagonista y CTA claro, sin enormes márgenes ni exceso de texto explicativo.
- La imagen elegida debe relacionarse con el mobiliario que La Oficina ofrece; evitar que parezca exclusivamente un estudio de arquitectura o una tienda de decoración de lujo.
- No colocar cinco controles flotantes, números grandes decorativos, ni iconos arbitrarios.

**Alternativa válida:** portada de producto emblemático (p. ej. silla ergonómica real) con composición de exposición, siempre que haya buena foto original y una proporción cuidadosamente diseñada. **No generar muebles falsos**.

### 5.2 Colecciones / familias

- La franja de navegación presenta las agrupaciones propuestas del export: **Líneas**, **Escritorios**, **Sillas**, **Mesas** y **Guardado**.
- Cada enlace de la portada abre `/catalogo?categoria={id}` con la categoría filtrada; el recuento de fichas se mantiene en la etiqueta accesible del enlace.
- En la portada, cada acceso retoma el patrón de historias destacadas: círculo negro con doble anillo gris oscuro, icono blanco de `react-icons` centrado y nombre negro debajo del círculo. En pantallas angostas, el carril se desplaza horizontalmente con gesto táctil y controles visibles.
- En `/catalogo`, los cinco accesos forman una grilla compacta sin espacios, con fotos del catálogo aportado, una capa oscura y el nombre superpuesto. Funcionan como filtros y señalan la selección activa. En móvil se organizan en dos columnas y la última pieza ocupa el ancho completo.

### 5.3 Selección curada / catálogo

- Mostrar una selección de 7 entradas en la portada con un enlace editorial «Ver catálogo completo». La ruta `/catalogo` presenta inicialmente las 41 entradas con nombre del export de WhatsApp y filtra por categoría mediante una barra compacta sticky, sincronizada con la URL. La primera entrada es la marca y las 49 imágenes sin nombre no se convierten en fichas.
- Las miniaturas fuente llegan hasta 240 px; usar una grilla contenida y mostrar el producto entero con `object-fit: contain`.
- Cada ficha presenta el nombre del archivo y una acción **«Consultar»** claramente visible. La acción abre WhatsApp con el nombre correcto y el número de contacto aportado por el usuario.
- La trayectoria se presenta después de la selección de la portada, en una sección independiente; la página completa se centra en las fichas y sus categorías.
- No inferir precios, especificaciones o disponibilidad. Evitar carrito, favoritos y filtros complejos.

### 5.4 Trayectoria e identidad

- Los «50 años» son el centro del titular «50 años pensando espacios.», en una sección de fondo grafito con fotografía de mobiliario, texto breve y un único enlace a contacto.
- La composición combina imagen amplia y contenido tipográfico sobre grafito. En móvil, el orden es titular, imagen, texto y CTA. La fotografía generada se señala como ilustrativa y queda preparada para reemplazo.
- No inventar testimonios, clientela, fechas exactas ni estadísticas.

### 5.5 Consulta

- Mantener formulario sencillo de `BRIEF.md`: nombre, localidad, tipo de proyecto y comentario opcional. El formulario funciona independientemente de las consultas por producto.
- Si el número oficial sigue pendiente, permitir preparar un borrador claro sin indicar que se envió.
- Visualmente debe sentirse parte del showroom: buena jerarquía, separación y legibilidad; no panel gris genérico con decenas de bordes.
- CTA final puede ser sólido y claro; es la acción de conversión. Nunca simular envío ni WhatsApp activo si no está configurado.

## 6. Sistema de enlaces, botones y controles

- En esta demo, el header y el footer incorporan iconos monocromáticos: Instagram enlaza al perfil aportado por el usuario y Facebook permanece deshabilitado hasta confirmar su destino. El botón flotante de WhatsApp conserva su panel de borrador como interacción independiente de las consultas por producto.

**No diseñar una biblioteca de «botones modernos» genéricos.** La interacción nace del contenido.

- **Navegación:** enlaces tipográficos claros, sin iconos repetitivos.
- En móvil y tablet, usar un desplegable blanco bajo el header, con enlaces serif amplios, gesto de apertura claro y movimiento discreto.
- **Hero:** CTA integrado editorialmente al bloque visual; puede utilizar subrayado, una franja o indicador distintivo. Debe leerse como acción incluso en móvil, sin hover.
- **Productos:** acción «Consultar» al mismo nivel visual que el nombre, con tamaño legible y área de toque generosa. No esconder en overlays de hover.
- **Formulario:** un botón sólido solo donde aporta claridad y jerarquía de conversión.
- Evitar todo el sitio hecho de `ArrowUpRight`/`ArrowRight`, botones pill, bordes brillantes, sombras y animaciones sin función.
- Estados `:hover`, `:focus-visible`, activación táctil y enlaces semánticos obligatorios.

## 7. Fotografía y recursos temporales

- Prioridad: imágenes reales suministradas por La Oficina, conservadas sin alterar producto ni marca.
- Hasta completar las fotos, ejemplos de muebles / ambientes **claramente etiquetados como ilustrativos**. No presentarlos como productos confirmados ni atribuirles características concretas.
- Centralizar metadatos de recursos y productos; cambios de fotografías sin remaquetación manual.
- Crear dirección fotográfica consistente: recortes deliberados, distintos tamaños pero alineación cuidada, puntos focales revisados en móvil.
- No usar overlays fuertes para «hacer elegante» una foto. No diseñar una web llena de fotos irrelevantes como dormitorios si el foco comercial es mobiliario de oficina y hogar.

## 8. Movimiento

- Movimiento discreto, priorizar CSS: revelados breves, transiciones de enlace, zoom imperceptible de imagen cuando tiene sentido.
- Nada de scroll-jacking, parallax agresivo, cursores custom, GSAP por defecto ni efectos cinematográficos que ralentizan la demo.
- Todo legible sin animación y compatible con `prefers-reduced-motion`.

## 9. Responsive

- Desktop **no** debe ser una plantilla 2 columnas repetidas; móvil **no** debe ser una versión encogida.
- En pantalla 390×844: fotografía hero bien encuadrada, título visible, CTA accesible, navegación manejable, catálogo con ritmo vertical y botones táctiles cómodos.
- En 768×1024: módulos reorganizados sin composiciones estrechas o elementos perdidos.
- En 1366×768 y 1440×900: hero completo, sin salto excesivo hasta ver productos; aprovechar la anchura con composición modular.
- Verificar también 1920×1080.
- Sin overflow horizontal, textos ilegibles ni acciones que dependan de hover.

## 10. Implementación: qué se rediseña y qué se conserva

**Rehacer visualmente:** hero, navegación visual, estructura de colecciones, disposición del catálogo, integración editorial de trayectoria y tratamiento visual de contacto/footer.

**Conservar si funciona:** rutas/anclas, datos de productos, formulario/validaciones, construcción de mensajes de WhatsApp, accesibilidad, setup Next.js y configuración existente.

No comenzar desde cero ni añadir librerías para compensar falta de dirección de arte. Se admite reorganizar componentes si simplifica el nuevo diseño. No desplegar sin autorización.

## 11. Criterios de aprobación de V2

1. Una captura del hero **no** se confunde con la V1 ni con el layout editorial predeterminado de Codex.
2. La página parece un **showroom de mobiliario**, no una landing genérica de estudio de interiorismo.
3. El primer scroll revela producto/colección real, no otro gran bloque de tipografía y aire vacío.
4. Hay variedad modular sin convertirse en collage arbitrario; todas las composiciones tienen una función.
5. «Consultar» es fácil de encontrar y accionar en desktop, touch y teclado.
6. Fotos ilustrativas identificadas, fotos reales atribuidas correctamente, sin precios ni stock ficticios.
7. Logo y monocromía preservados.
8. La consulta por producto y el formulario de proyectos funcionan como recorridos separados.
9. Pruebas visuales en móvil, tablet, 1366 y 1440; informar cuáles efectivamente se realizaron.
10. No desplegar todavía.

## 12. Decisiones

| Decisión | Estado |
|---|---|
| Nueva dirección «showroom digital + catálogo curado» | Acordada |
| Referencia visual principal: primera imagen del usuario | Acordada |
| Segunda referencia como guía de claridad de catálogo | Acordada |
| Identidad LO en blanco/negro y serif | Confirmada como criterio |
| Rediseño visual completo sin rehacer lógica funcional | Recomendado |
| Fotografías definitivas y recursos reales dentro del repo | Pendiente de selección/copia |
| Número de WhatsApp | Enlace de Instagram aportado por el usuario: `https://wa.me/5493425460071` |
| Publicación de demo | No autorizada |

## 13. Implementación y disponibilidad de referencias

- El hero conserva su fotografía ilustrativa; el catálogo presenta imágenes extraídas del export de WhatsApp aportado por el usuario.
- La portada muestra 7 fichas y la ruta `/catalogo` permite filtrar las 41 fichas con nombre por cinco categorías. Las 49 imágenes sin nombre y la entrada de marca quedan fuera de las fichas para evitar atribuciones incorrectas.
- Las imágenes de producto tienen una resolución máxima de 240 px, por lo que se usan tarjetas contenidas y encuadres sin recorte.
- El formulario de proyectos se conserva sin selección de producto. Las fichas abren consultas directas por WhatsApp con el número aportado por el usuario.
- Las capturas de referencia editorial mencionadas en versiones anteriores del brief no están disponibles localmente; la dirección visual se basa en las indicaciones escritas.

## 14. Dirección vigente del hero

- Se conserva el header y el banner hero de la iteración anterior; la actualización del catálogo se documenta en la sección 13.
- En escritorio, la fotografía forma un banner panorámico de aproximadamente 380–440 px de alto, seguido por una franja clara con título y acción. La primera pantalla deja ver el inicio de las colecciones.
- En móvil, el encuadre fotográfico tiene altura moderada y el texto permanece debajo sobre blanco; no se superpone a muebles ni plantas.
- Se conserva `hero-showroom-illustrative.jpg`, identificada como imagen ilustrativa. Su procedencia requiere confirmación antes de publicar.
- El titular «Muebles para vivir y trabajar.» responde a esta iteración. La acción «Ver catálogo» abre `/catalogo` y se presenta como enlace tipográfico sin iconos decorativos.
