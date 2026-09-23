# Base institucional

Base reutilizable de TUWEBHOY con Next.js App Router, React, TypeScript y
Tailwind CSS. Incluye una demo ilustrativa, sin empresa, productos ni contactos
reales. Su estética es reemplazable: no constituye una dirección visual obligatoria.

## Instalar y ejecutar

Usá Node.js 20.9 o superior y npm con el `package-lock.json` existente.

```sh
npm ci
npm run dev
```

Abrí http://localhost:3000. Para ejecutar la compilación de producción local:

```sh
npm run build
npm start
```

La demo no requiere variables de entorno ni servicios externos.
Si PowerShell bloquea `npm.ps1`, usá `npm.cmd` y `npx.cmd` en los comandos.

## Iniciar un nuevo sitio

1. Copiá la base a una carpeta del cliente, sin `node_modules`, `.next` ni
   `tsconfig.tsbuildinfo`. Inicializá su propio repositorio si corresponde.
2. Leé `AGENTS.md`. Completá `BRIEF.md` con negocio, alcance, contenido confirmado,
   contactos, dominio y destino de publicación. Los pendientes no son contenido.
3. Completá `DESIGN.md` con identidad, referencias, recursos y decisiones visuales.
   Diferenciá propuestas de decisiones confirmadas; adaptá o reemplazá esta demo.
4. Editá contenido, navegación, componentes y estilos según el encargo. Incorporá
   únicamente contactos reales y recursos autorizados. No agregues la marca
   TUWEBHOY al sitio del cliente salvo indicación expresa.
5. Ajustá metadata y favicon. La base usa `noindex, nofollow`: cambiá esa política
   solo si corresponde a la etapa. Configurá canonical, sitemap, datos sociales y
   datos estructurados únicamente con dominio y datos válidos. No hay analytics.
6. Verificá antes de publicar. La preparación de la base no autoriza despliegues.

## Dónde editar

- `src/config/site.ts`: nombre y descripción compartidos, navegación. Centralizá
  aquí los datos comerciales repetidos cuando estén confirmados; no hay contactos
  de ejemplo ni enlaces externos activos.
- `src/app/page.tsx`: composición explícita de la página.
- `src/components/sections/`: textos y presentación de las secciones de muestra.
- `src/components/layout/`: encabezado, menú móvil y pie.
- `src/components/ui/`: nombre compartido y enlaces con apariencia de botón.
- `src/app/globals.css`: tokens de color, tipografía, ancho, espaciado y controles;
  estilos responsive y estados de foco. Usa fuentes del sistema, sin descargas.
- `src/app/layout.tsx`: idioma y metadata. `src/app/icon.svg`: favicon genérico;
  sus colores SVG se actualizan por separado si cambia la identidad.
- `public/`: recursos del cliente y notas de procedencia en `public/README.md`.

El scroll es nativo y respeta movimiento reducido. El menú usa `details` para
funcionar también sin JavaScript; Escape y selección de enlaces lo cierran con JS.
Solo el encabezado necesita un Client Component para esas interacciones.

## Comprobaciones

```sh
npm run lint
npx tsc --noEmit
npm run build
```

TypeScript está instalado localmente; no hay un script `test` ni una suite de
pruebas configurada. Revisá además en navegador escritorio y móvil: menú,
teclado, foco, anclas, contraste, textos largos y ausencia de desbordamientos.
Comprobá que contenido, enlaces, recursos y metadata correspondan al cliente
actual. Un build correcto no sustituye la revisión visual.
# BASE-INST
