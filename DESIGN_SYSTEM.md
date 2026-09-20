# HanndcyPets — Sistema visual v1

Sistema base para el landing de atención preventiva a domicilio para perros y gatos.

## Dirección creativa

HanndcyPets debe sentirse cálido, joven, confiable y editorial: una marca que lleva cuidado preventivo a casa, no una clínica fría ni un catálogo de servicios. La composición respira, usa fotografías de mascotas y personas reales, recortes sin fondo y bloques pastel que cambian de personalidad por sección.

La referencia inspira el ritmo y la calidad visual, pero HanndcyPets se diferencia en tres puntos: atiende perros y gatos, trabaja a domicilio y convierte principalmente mediante WhatsApp + solicitud de disponibilidad.

## Paleta

| Token | Hex | Uso |
| --- | --- | --- |
| `ink` | `#28221F` | Títulos, navegación y footer; no usar negro puro |
| `ink-soft` | `#665D58` | Párrafos, metadatos y textos secundarios |
| `cream` | `#FFF8E8` | Hero, bloques editoriales y fondos cálidos |
| `cream-soft` | `#FFFDF5` | Fondo general |
| `coral` | `#F2A8C2` | CTA principal, badges y acentos de vacunación |
| `coral-soft` | `#FCEAF2` | CTA intermedio y fondos de transición |
| `sage` | `#BFE4D4` | Servicios de bienestar y cuidado rutinario |
| `sage-dark` | `#5D887C` | Texto/CTA sobre fondos verdes |
| `brown` | `#5A4651` | Contraste oscuro y cierre de secciones |
| `mist` | `#F3F7F5` | Fondos neutros y transiciones |
| `white` | `#FFFFFF` | Tarjetas, navegación y contraste |

Regla: la identidad se apoya en tres colores visibles: crema como base, coral como acento de marca y menta como acento de bienestar. `mist` funciona como neutro suave; `brown` queda reservado para contraste, footer y algunos elementos oscuros. Una sección usa como máximo un color de acento dominante.

## Tipografía

- Display/editorial: `Fraunces`, fallback `Georgia, serif`. Pesos 600–700. Títulos grandes, números y frases de impacto.
- Interface/body: `DM Sans`, fallback `Arial, sans-serif`. Pesos 400–700. Navegación, párrafos, botones, listas y formularios.
- Texto de acción: DM Sans 700, tamaño pequeño, tracking de `0.04em`; usar mayúsculas con moderación.

Escala inicial responsive:

| Uso | Desktop | Mobile |
| --- | ---: | ---: |
| Hero title | `clamp(3.8rem, 7vw, 7.2rem)` | `3.25rem` |
| Section title | `clamp(2.8rem, 5vw, 5rem)` | `2.6rem` |
| Card title | `2.5rem` | `2rem` |
| Body large | `1.15rem` | `1.05rem` |
| Body | `1rem` | `0.98rem` |
| Label | `0.72rem` | `0.7rem` |

## Layout y espaciado

- Contenedor máximo: `1240px`.
- Padding lateral: `clamp(1.25rem, 5vw, 5rem)`.
- Secciones: `clamp(5rem, 10vw, 9rem)` arriba y abajo.
- Hero: mínimo `calc(100svh - 88px)` en desktop; una columna en mobile.
- Grid principal: 12 columnas en desktop, 1 columna en mobile.
- Separación entre bloques: múltiplos de 8px; preferir 24, 32, 48, 64 y 96px.
- Evitar líneas horizontales decorativas innecesarias; usar espacio, color y composición para separar.

## Formas y componentes

- Radios: `18px` para tarjetas, `28px` para banners, `999px` para pills.
- Bordes: `1px solid rgba(40, 34, 31, 0.12)`; nunca bordes negros pesados.
- Sombras: muy suaves, `0 16px 50px rgba(40,34,31,.08)` solo cuando ayuden a separar una tarjeta.
- Pills: etiqueta pequeña con icono lineal, fondo transparente o pastel y borde del color de sección.
- CTA principal: coral sólido, texto blanco, icono WhatsApp lineal; hover oscurece a `#D87582` y eleva 2px.
- CTA secundario: texto `ink` + flecha; sin caja salvo que el contraste lo requiera.
- CTA verde: `sage-dark` como fondo para garantizar contraste, con `sage` como acento visual.
- Botón flotante: círculo coral o verde oscuro de 60px desktop / 54px mobile, fijo abajo a la derecha, con halo sutil.

## Iconografía

Usar iconos lineales de 1.8px, redondeados y consistentes: WhatsApp, calendario, ubicación, escudo, corazón, jeringa, gota, oído y tijera. No mezclar emojis con iconos de interfaz. Los iconos de beneficios viven en círculos de 40–48px con fondo coral, sage o brown según la sección.

## Fotografía e ilustración

- Preferir fotos reales de perros y gatos en casa, manos cuidadosas y momentos de calma.
- Luz natural, tonos cálidos, fondos domésticos ordenados; evitar imágenes clínicas genéricas o mascotas excesivamente posadas.
- Tratamiento: bordes recortados, máscaras orgánicas y objetos que sobresalen de banners; nunca poner todas las fotos dentro de tarjetas iguales.
- Cuando no existan fotos reales, usar composiciones ilustradas temporales claramente reemplazables; no presentar imágenes generadas como si fueran el equipo real.
- Fondos fotográficos de textura: desaturación alta + velo crema/blanco; deben sentirse como atmósfera, no como contenido principal.
- Patrón de fondo: huellas, corazones, siluetas de orejas y pequeños juguetes en `ink` con 4–7% de opacidad.

## Estructura propuesta

1. Header sticky: logo, `Servicios`, `Cómo funciona`, `Preguntas`, CTA `Reservar`.
2. Hero: “Cuidado que llega a casa” + “para perros y gatos” resaltado, foto cálida de ambas especies y beneficios rápidos.
3. Franja de confianza: atención a domicilio, zonas de cobertura, trato personalizado y confirmación por WhatsApp.
4. Introducción de servicios con patrón veterinario sutil.
5. Bloque coral: prevención y vacunación.
6. Bloque sage: higiene y bienestar.
7. Bloque brown: protección antiparasitaria.
8. Paquetes “precios desde”, sujetos a peso, producto y evaluación.
9. Cómo funciona en 3 pasos.
10. CTA intermedio de solicitud de cita.
11. Reserva: selector de servicio, distrito, fecha y horario preferido; disponibilidad real mediante Google Calendar o confirmación por WhatsApp.
12. FAQ accordion con varios ítems abiertos simultáneamente.
13. Footer oscuro con cobertura, WhatsApp y redes cuando existan.

## Reserva y conversión

La web no debe prometer una cita confirmada solo por enviar un formulario. El flujo inicial será:

1. La persona elige servicio, distrito, fecha y rango horario.
2. El sitio genera un mensaje contextual para WhatsApp.
3. HanndcyPets confirma manualmente disponibilidad, profesional asignada, precio final y condiciones.

Mensaje de ejemplo:

> Hola, quisiera solicitar una cita a domicilio para mi mascota. Servicio: [servicio]. Distrito: [distrito]. Fecha preferida: [fecha]. Horario preferido: [horario].

El número de prueba será `+51 923 726 273`; debe quedar como configuración reemplazable antes de publicar.

## Copy y confianza

Mientras el equipo siga estudiando, evitar “médicas veterinarias colegiadas”, “consultorio”, “clínica”, “laboratorio”, “hospitalización” o afirmaciones de diagnóstico profesional si no corresponden. Usar lenguaje provisional honesto, por ejemplo: “Equipo de estudiantes de Medicina Veterinaria con experiencia práctica”. La publicación de vacunación y procedimientos debe validarse con la universidad y un médico veterinario colegiado responsable.

## Movimiento

- Entrada de secciones: `opacity 0 → 1` + `translateY(16px)`, 500ms, easing suave.
- Hover de botones: 180ms, elevación máxima de 2px.
- Acordeones: transición de altura/opacidad 260ms; varios pueden permanecer abiertos.
- Nada de parallax intenso, rebotes o zooms constantes.
- Respetar `prefers-reduced-motion` y eliminar entradas animadas cuando esté activo.
