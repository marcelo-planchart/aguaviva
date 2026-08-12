# site-assets — Artes del sitio Aguaviva

Carpeta para **organizar todas las artes (imágenes y videos)** que van en el
sitio, por case study y a nivel general. Tú sueltas los archivos aquí; yo los
subo a Framer (a los campos del CMS de cada proyecto) y publico.

> ⚠️ Esta carpeta vive en el repo de git. El contenedor es efímero, así que
> **todo lo que se pone aquí se guarda solo cuando se hace commit + push.**

## Estructura

```
site-assets/
  _general/        → logo, favicon, hero, imagen social (OG), fondos — todo lo del sitio en general
  _inbox/          → zona de descarga: suelta aquí si no sabes a qué proyecto va, y me dices
  news/            → imágenes de las notas / blog
  zapatero/        → images/  videos/
  catori/          → images/  videos/
  veloce/          → images/  videos/
  wake/            → images/  videos/
  zapatero-tv/     → images/  videos/
  velocepr/        → images/  videos/
```

Cada proyecto tiene `images/` y `videos/`. Cualquier formato sirve
(`.jpg .png .webp` para imagen; `.mp4 .mov .webm` para video).

## Convención de nombres (importante para el orden de la galería)

Cada case study tiene **4 espacios de galería** que aceptan **imagen O video**.
Nombra los archivos con el número de espacio al inicio:

```
01-lo-que-sea.jpg      → espacio 1 (imagen)
02-lo-que-sea.mp4      → espacio 2 (video, se reproduce solo, sin sonido, en loop)
03-....jpg
04-....mp4
main-reel.mp4          → el video principal grande del proyecto (sección "Show Video")
cover.jpg              → portada / thumbnail
```

Si un espacio tiene imagen **y** video con el mismo número, **gana el video**
(la imagen queda de respaldo/poster).

## Flujo de trabajo

1. Sueltas los archivos en la carpeta del proyecto (o en `_inbox/`).
2. Me dices "sube lo de veloce" (o el proyecto que sea).
3. Yo los subo a Framer, los conecto a los espacios correctos y publico.

## Pendiente en `_inbox/`

- `scene-crop-video_1.mp4` — video que subiste. Dime **a qué case study y qué
  espacio** va (ej. "veloce, espacio 2") y lo coloco.
