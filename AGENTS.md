AGENTS.md — Base web TUWEBHOY

Propósito

Este repositorio es una base reutilizable para sitios de clientes de TUWEBHOY.
Reutilizá la infraestructura y las buenas prácticas, manteniendo libertad para
adaptar la composición, la identidad y las funcionalidades a cada encargo.
La marca TUWEBHOY no debe aparecer en el sitio del cliente salvo indicación expresa.

Contexto del proyecto

Antes de trabajar, leé BRIEF.md y DESIGN.md y revisá el código relacionado
con la tarea, package.json y las instrucciones locales aplicables.

BRIEF.md define negocio, contenido, alcance y comportamiento.

DESIGN.md define dirección visual y recursos.

AGENTS.md define la forma de trabajar.

Las instrucciones explícitas del usuario prevalecen sobre estos archivos.

Los campos [COMPLETAR] son pendientes, no contenido para publicar.
Si el usuario aporta un nuevo encargo, actualizá los documentos afectados con
sus decisiones. No conviertas una propuesta propia en una decisión confirmada.
No heredes datos, identidad ni restricciones comerciales de Gervasoni u otro cliente.

Autonomía y alcance

Implementá la tarea solicitada hasta dejarla revisable. No te detengas en un plan.
Resolvé con criterio las decisiones menores y reversibles.
Agrupá las preguntas únicamente cuando falte información que cambie de forma
material el resultado; avanzá con las partes que no dependan de esa respuesta.
Distinguí datos confirmados, propuestas y pendientes.

No agregues secciones, integraciones ni funcionalidades ajenas al alcance.
Podés cambiar componentes, estilos y estructura cuando la tarea lo requiera.
Preservá los cambios del usuario y evitá refactorizaciones no relacionadas.
No despliegues, publiques ni envíes comunicaciones externas salvo solicitud.

Stack y arquitectura

Usá Next.js, React, TypeScript y Tailwind CSS según las versiones instaladas.
Respetá el gestor de paquetes y el lockfile existentes.
No actualices dependencias ni cambies configuración sin una necesidad concreta.
Preferí CSS, Tailwind y APIs nativas; agregá librerías solo con un beneficio claro.

Preferí Server Components; usá Client Components para interactividad real.

Separá datos comerciales de presentación cuando facilite su edición.

Centralizá datos repetidos, como contacto, redes y nombre del negocio.

Extraé componentes para reutilización real o claridad, sin crear un framework propio.

Centralizá colores, tipografías y espaciados recurrentes en tokens adecuados al proyecto.

No construyas un generador de sitios, editor visual o sistema de temas universal.

No incorpores CMS, bases de datos, autenticación, API, pagos ni paneles salvo
que BRIEF.md o la tarea los requieran. Si se necesitan, implementalos de verdad;
no simules envíos ni confirmaciones de éxito.

Diseño y contenido

Aplicá DESIGN.md. Adaptá la jerarquía y composición al negocio y su objetivo.
Los componentes existentes pueden cambiar de diseño; no son una maqueta obligatoria.
No impongas colores, fuentes, secciones ni estilos de clientes anteriores.
No copies un sitio de referencia: interpretá los aspectos señalados en DESIGN.md.

Escribí en el idioma y tono del brief; por defecto, español argentino claro.
No inventes testimonios, clientes, estadísticas, premios, certificaciones,
precios, historia, ubicación ni afirmaciones comerciales no confirmadas.
En demos, identificá los ejemplos como ilustrativos. En entregas finales,
omití o señalá como pendiente lo que no pueda confirmarse.
No muestres notas técnicas ni instrucciones internas a los visitantes.

Imágenes y recursos

Usá primero los recursos suministrados y conservá sus proporciones.
No deformes logos, envases ni productos. Elegí el recorte según cada dispositivo.
No presentes imágenes generadas o de stock como fotos reales del negocio.
Documentá procedencia y licencia cuando se conozcan; no supongas derechos de uso.
Optimizá dimensiones y peso. Reservá espacio para evitar saltos de contenido.
No borres recursos sin comprobar sus referencias y su relación con la tarea.

Accesibilidad y responsive

Usá HTML semántico, encabezados coherentes y enlaces/botones según su función.

Permití navegar con teclado y mantené el foco visible.

Etiquetá controles y formularios; explicá errores de forma comprensible.

Usá texto alternativo útil; las imágenes decorativas llevan alt vacío.

Mantené contraste legible y no dependas solo del color para transmitir información.

Verificá menú móvil, textos largos, áreas táctiles y ausencia de desbordamientos.

Respetá prefers-reduced-motion y evitá scroll-jacking.

Las animaciones deben ayudar a la experiencia sin bloquear lectura ni interacción.
No ocultes permanentemente contenido si falla una animación.

SEO, contactos y configuración

Ajustá títulos, descripción, idioma, favicon y datos sociales al cliente.
Configurá canonical, sitemap y datos estructurados solo con información válida.
No conserves dominios, teléfonos, analytics ni metadatos del proyecto original.
No actives seguimiento salvo que esté solicitado y configurado.
No incluyas credenciales en el código ni expongas secretos al cliente.
Si hacen falta variables de entorno, documentá sus nombres sin valores privados.
Un contacto pendiente no debe convertirse en un enlace a un número inventado.
Respetá el destino de despliegue definido antes de elegir funciones de servidor.

Verificación proporcional

Revisá los scripts disponibles y ejecutá las comprobaciones pertinentes al cambio:
tipos, lint y build cuando correspondan. No inventes comandos que no existen.
Si hay navegador disponible, comprobá visualmente escritorio y móvil y probá
las interacciones afectadas. Un build correcto no demuestra calidad visual.
Agregá pruebas cuando protejan lógica relevante; no para cada cambio de texto o estilo.
No repitas auditorías completas ni verificaciones sin un riesgo concreto pendiente.

Comprobá enlaces, rutas, recursos, contactos y ausencia de datos del cliente anterior
cuando adaptes la base para un nuevo negocio.
Si una limitación impide verificar algo, indicá exactamente qué quedó pendiente.
No afirmes que una prueba pasó si no se ejecutó.

Entrega

Al terminar, resumí brevemente:

Qué cambió y para qué.

Qué se verificó y su resultado.

Qué datos o comprobaciones siguen pendientes, si existen.

Mantené las instrucciones de ejecución actualizadas cuando cambien.
Elegí la implementación más simple que cumpla el objetivo y sea mantenible.
