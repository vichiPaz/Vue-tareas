# Galería de Personajes de Game of Thrones

Este proyecto es una aplicación web interactiva desarrollada con Vue.js que muestra una galería de personajes de la popular serie "Game of Thrones". La aplicación permite a los usuarios explorar información detallada sobre cada personaje, incluyendo su nombre, descripción, ocupación, familia, reino y una imagen representativa.

## Características

- **Galería de Personajes:** Muestra una lista de personajes en un diseño de cuadrícula receptivo.
- **Tarjetas de Personaje Interactivas:** Cada personaje se presenta en una tarjeta con un efecto de `hover`.
- **Componentes Modulares:** La aplicación está construida con componentes de Vue.js reutilizables para una mejor organización y mantenibilidad del código.
- **Comunicación con Props:** Los datos de los personajes se pasan desde el componente principal a los componentes secundarios utilizando `props`.
- **Contador de Personajes:** Muestra el número total de personajes en la galería.

## Componentes

La aplicación está dividida en los siguientes componentes:

- **`App.vue`:** El componente raíz que organiza la estructura general de la aplicación.
- **`CharacterHeader.vue`:** Muestra el encabezado de la página, incluyendo el título y el contador de personajes.
- **`CharacterList.vue`:** Renderiza la lista de personajes, iterando sobre los datos y mostrando un componente `CharacterItem` para cada uno.
- **`CharacterItem.vue`:** Muestra la información detallada de un personaje individual en una tarjeta.
- **`CharacterCounter.vue`:** Un componente simple que muestra el número total de personajes.

## Cómo Ejecutar el Proyecto

Sigue estos pasos para ejecutar el proyecto en tu entorno de desarrollo local:

1.  **Clona el repositorio (si aplica) o descarga los archivos del proyecto.**
2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

4.  Abre tu navegador y visita la dirección `http://localhost:5173` (o la que se indique en la consola).

## Tecnologías Utilizadas

- **Vue.js 3:** El framework progresivo de JavaScript para construir interfaces de usuario.
- **Vite:** Una herramienta de compilación rápida para el desarrollo web moderno.
- **`<script setup>`:** La sintaxis de la API de Composición de Vue 3 para escribir componentes más concisos y legibles.
- **Props:** Para pasar datos de componentes padres a hijos.
- **CSS moderno:** Variables CSS, Flexbox y Grid para un diseño receptivo y personalizable.