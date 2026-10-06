# HDev Portfolio

Sitio principal de la marca profesional **HDEV**, de Héctor Hugo Hernández, Software Developer. Presenta su perfil, experiencia técnica y proyectos para oportunidades laborales y colaboraciones freelance. **HDev AI es uno de los proyectos del portfolio**, no la identidad del sitio.

HTML5, CSS3 y JavaScript vanilla. Completamente estático, sin frameworks, backend, bases de datos, instalaciones ni dependencias externas. Compatible con Cloudflare Pages.

## Estructura

```text
HDev_Portfolio/
├── index.html
├── projects.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   └── .gitkeep
│   └── icons/
│       └── favicon.svg
└── README.md
```

`index.html`: navegación, hero, diagrama técnico, métricas, cuatro proyectos destacados, stack por especialidad, presentación profesional, contacto y footer.

`projects.html`: catálogo de los cuatro proyectos y espacio preparado para futuros case studies. Las cards son HTML estático para conservar contenido y navegación sin JavaScript; al editar proyectos, actualizar ambas páginas.

`css/styles.css`: bases, navegación, hero, proyectos, stack, contacto, responsive y preferencias de movimiento. Tipografía del sistema; sin fuentes remotas. Visuales conceptuales hechos con CSS y texto, sin fotografías personales.

`js/main.js`: menú móvil, cierre con Escape y al navegar, sincronización al cambiar el ancho, año dinámico y aparición progresiva opcional. El desplazamiento suave usa CSS y anclas nativas.

## Ejecución local

Abrir `index.html` directamente en el navegador. No requiere compilación.

Opcionalmente, con Python instalado, ejecutar desde PowerShell:

```powershell
Set-Location D:\HDev_Portfolio
python -m http.server 8000 --bind 127.0.0.1
```

Visitar `http://localhost:8000`. Detener el servidor con `Ctrl+C`. Python solo sirve los archivos para revisarlos localmente; no es parte de la aplicación ni del despliegue.

## Diseño y accesibilidad

Identidad HDEV con azul profundo y azul de marca, superficies blancas y grises, secciones oscuras y tipografía limpia. Layout de dos columnas en desktop; hero y contacto pasan a una columna en tablet, proyectos a una columna en móvil. Stack de cinco, tres o dos columnas según el espacio. Breakpoints: 1050, 800 y 560 px.

HTML semántico, un h1 por página, navegación con nombre accesible, enlace para saltar al contenido, foco visible, botones nativos deshabilitados y menú con `aria-expanded` y `aria-controls`. Escape devuelve el foco al botón del menú. Sin JavaScript, la navegación y el contenido permanecen visibles. `prefers-reduced-motion` desactiva movimiento y desplazamiento suave. El diagrama tiene una descripción accesible; visuales decorativos de proyectos están ocultos a lectores de pantalla. Las futuras imágenes informativas deben incluir texto alternativo, dimensiones explícitas y, fuera del primer viewport, `loading="lazy"`.

## Enlaces pendientes y case studies

No se proporcionaron URLs de GitHub, LinkedIn, proyectos, repositorios ni correo electrónico. Sus CTA son botones `disabled`, identificados con `data-link`. No usan URLs inventadas ni enlaces vacíos.

Para habilitar un CTA, reemplazar el botón por un enlace real conservando su clase; quitar `disabled`, añadir `href` con la URL confirmada y actualizar la nota de disponibilidad correspondiente. Para contacto, usar `mailto:` solo después de confirmar el correo. Si se abre un enlace en otra pestaña, añadir `rel="noopener noreferrer"`.

Cada proyecto tiene el atributo `data-case-study` con su futura ruta:

| Proyecto | Ruta futura |
| --- | --- |
| HDev AI | `projects/hdev-ai.html` |
| HDev Store | `projects/hdev-store.html` |
| Hound Express | `projects/hound-express.html` |
| Automation Lab | `projects/automation-lab.html` |

Estas rutas son metadatos de preparación, no enlaces activos. No se han creado case studies. Crear la página antes de activar su enlace; en páginas dentro de `projects/`, referenciar assets con `../css/`, `../js/` y `../assets/`.

Las descripciones de Store, Hound Express y Automation Lab se limitan al tipo de proyecto y las tecnologías proporcionadas. No se inventaron resultados, clientes, cifras o funciones detalladas.

## SEO y performance

Títulos y descripciones únicos, canonical y Open Graph básicos preparados para el dominio futuro **https://hdevai.com**. Revisar el origen y las rutas al publicar, especialmente si se eligen URLs sin `.html`. No se añadió `og:image` porque no hay una imagen social proporcionada. Favicon local SVG. JavaScript con `defer`, sin librerías ni peticiones externas.

Cuando se agreguen imágenes, usar WebP/AVIF o SVG apropiado, optimizar tamaño y declarar ancho y alto para evitar saltos de layout. No incluir fotografías personales hasta que se decida hacerlo.

## Despliegue futuro en Cloudflare Pages

**No se configuró Cloudflare ni se publicó el sitio.** No se inicializó Git, ni se hicieron commits o push.

Cuando se autorice la publicación:

1. Confirmar contenido, URLs, correo, canonical y dominio.
2. Elegir carga directa de assets o integración con un repositorio autorizado.
3. Usar el modo de sitio estático, sin framework ni comando de compilación. Publicar la carpeta que contiene `index.html`, `projects.html`, `css`, `js` y `assets`. En integración con Git, usar la raíz como directorio de salida si corresponde.
4. Comprobar ambas páginas, assets, HTTPS y navegación.
5. Asociar el dominio futuro `hdevai.com` y verificar DNS según las indicaciones vigentes de Cloudflare.

Los pasos son una guía futura; las opciones exactas de Cloudflare deben verificarse al realizar el despliegue.

## Pendientes

- Proporcionar URLs de GitHub, LinkedIn, proyectos y repositorios, y correo de contacto.
- Confirmar el contenido detallado de cada proyecto y redactar case studies con evidencia.
- Agregar capturas optimizadas e imagen social si se desean.
- Revisar visualmente en navegadores y dispositivos reales, con teclado y lector de pantalla.
- Autorizar por separado Git y publicación; confirmar dominio antes del despliegue.
