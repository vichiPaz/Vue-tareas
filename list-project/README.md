# List Project

Este proyecto es una aplicación simple de Vue.js que muestra una lista de personajes ficticios.

## Descripción

La aplicación muestra una lista de personajes, cada uno con un nombre y una descripción. Los datos de los personajes están definidos en un objeto dentro de un componente de Vue, cumpliendo con los requerimientos de la tarea.

## Requerimientos

- Node.js (versión ^20.19.0 || >=22.12.0)
- npm

## Instalación

1.  Clona el repositorio o descarga los archivos del proyecto.
2.  Navega al directorio del proyecto:
    ```sh
    cd list-project
    ```
3.  Instala las dependencias del proyecto:
    ```sh
    npm install
    ```

## Uso

Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:

```sh
npm run dev
```

Esto iniciará un servidor de desarrollo. Abre tu navegador y ve a la dirección que se indica en la terminal (generalmente `http://localhost:5173`).

## Estructura del Proyecto

-   `src/components/DataList.vue`: Componente que contiene la lista de personajes y la lógica para mostrarla.
-   `src/App.vue`: Componente principal que renderiza `DataList.vue`.