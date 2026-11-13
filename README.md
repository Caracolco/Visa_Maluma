# PRISA Memory Challenge · DEMO

Juego de memoria publicitaria para móvil (estudio PRISA Media Colombia · campaña Maluma World Tour 2027).
HTML + CSS + JavaScript puro. Sin dependencias, sin backend, sin almacenamiento de datos.

**VERSIÓN DEMO - SIN PREMIOS REALES · RANKING SIMULADO**

## Abrir
- Local: abrir `index.html` en el navegador (o `python3 -m http.server` y visitar `localhost:8000`).
- GitHub Pages: Settings → Pages → Deploy from branch → carpeta raíz.

## Imagen original obligatoria
Copiar el afiche ORIGINAL de Maluma + Visa, sin modificar, en:

```
assets/maluma-visa.jpg
```

Si falta, se muestra un respaldo CSS marcado como tal. Si el afiche incluye patrocinadores, agréguelos en
`marcasSecundarias` del anuncio `id:1` en `app.js` y verifique que las preguntas de ese anuncio coincidan con lo visible.

## Dinámica
1. Registro (alias, correo de prueba, ciudad) solo en memoria de sesión.
2. 5 anuncios × 8 s: Maluma siempre presente en posición aleatoria + 4 al azar de 14 simulaciones.
3. Memoria espontánea: marcas recordadas (25 s, 100 c/u, máx. 300) y presentador del concierto (20 s, 300).
4. Memoria de precisión: 6 preguntas de los anuncios mostrados (1 fácil, 2 medias, 2 difíciles, 1 experta; 10 s).
5. Resultados, ranking simulado y botón “VER DATOS DE RECORDACIÓN”.

Total: 8 retos. Máximo: 300 + 300 + 1.600 = **2.200 puntos**.

## Ampliar
El banco `ADS` en `app.js` contiene cada anuncio (`id, nombre, marcas, marcasSecundarias, tipo, colores,
detallesVisibles, preguntas`). Cada anuncio necesita al menos una pregunta por dificultad (`E, M, H, X`).
Los anuncios 2–15 son simulaciones creadas con HTML/CSS y no representan campañas ni alianzas reales.
