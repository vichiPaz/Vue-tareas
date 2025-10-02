# Mi Tienda - Frontend de E-commerce con Vue.js

Este proyecto es un frontend simple para un e-commerce, construido con Vue 3 y Vite. Demuestra el uso de la Composition API de Vue, una arquitectura basada en componentes, props, eventos y enrutamiento para crear una experiencia de usuario interactiva para explorar productos y gestionar un carrito de compras.

## Características

- **Catálogo de Productos**: Explora una cuadrícula de los productos disponibles.
- **Detalles del Producto**: Haz clic en un producto para ver más información en una ventana modal.
- **Carrito de Compras**: Añade productos a un carrito de compras y visualiza su contenido en una página dedicada.
- **Enrutamiento**: Utiliza Vue Router para navegar entre el catálogo principal y la vista del carrito.
- **Diseño Adaptable**: Diseñado con Bootstrap 5 para una interfaz limpia y adaptable a distintos tamaños de pantalla.

## Tecnologías Utilizadas

- **Vue 3**: Utiliza la Composition API con la sintaxis `<script setup>`.
- **Vite**: Para una experiencia de desarrollo rápida y moderna.
- **Vue Router**: Para el enrutamiento del lado del cliente.
- **Bootstrap 5**: Para los estilos y componentes de la interfaz de usuario.
- **Bootstrap Icons**: Para los íconos utilizados en la interfaz.

## Estructura del Proyecto

Los componentes principales de la aplicación se organizan de la siguiente manera:

- `App.vue`: El componente raíz que gestiona el estado global, incluyendo los datos del carrito de compras y la visibilidad del modal de detalle del producto. También renderiza el `Navbar` y el `RouterView`.
- `router/index.js`: Define las rutas de la aplicación:
  - `/`: La página principal del catálogo de productos (`ProductCatalog.vue`).
  - `/cart`: La página del carrito de compras (`CartView.vue`).
- `components/`:
  - `Navbar.vue`: La barra de navegación superior que muestra los enlaces de navegación y el número actual de artículos en el carrito.
  - `ProductCatalog.vue`: Obtiene y muestra la lista de todos los productos. Emite eventos hacia `App.vue` cuando un usuario quiere ver los detalles de un producto o añadir un artículo al carrito.
  - `ProductCard.vue`: Un componente de tarjeta reutilizable que muestra la información de un solo producto y emite eventos para las acciones del usuario.
  - `ProductDetail.vue`: El componente modal que muestra información detallada sobre un producto seleccionado.
  - `CartView.vue`: El componente que muestra todos los artículos que se encuentran actualmente en el carrito de compras.

## Instalación y Puesta en Marcha

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión especificada en `package.json`)
- [npm](https://www.npmjs.com/)

### Instalación

1.  Clona el repositorio en tu máquina local.
2.  Navega al directorio del proyecto:
    ```sh
    cd hooks
    ```
3.  Instala las dependencias:
    ```sh
    npm install
    ```

### Ejecutar el Servidor de Desarrollo

Para ejecutar la aplicación en modo de desarrollo con recarga en caliente (hot-reloading):

```sh
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el siguiente puerto disponible).

### Compilar para Producción

Para compilar y minificar la aplicación para producción:

```sh
npm run build
```

Esto creará un directorio `dist` con los archivos listos para producción.