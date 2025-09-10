# Búsqueda de Pokémon

Esta es una aplicación de Pokédex construida con Vue.js. Te permite buscar un Pokémon y ver sus detalles de una manera interactiva.

## Características

- **Búsqueda por nombre:** Busca un Pokémon por su nombre.
- **Tarjetas interactivas:** Haz clic en la tarjeta de un Pokémon para voltearla y ver detalles como:
    - Estadísticas de combate (ataque, defensa, etc.).
    - Habilidades.
    - Altura y peso.
- **Prefetch de datos:** Para una experiencia más fluida, los datos de los Pokémon se precargan cuando pasas el ratón sobre sus tarjetas.
- **Diseño atractivo:** La interfaz está diseñada para ser intuitiva y visualmente agradable, con insignias de colores según el tipo de Pokémon.
- **Datos de la PokéAPI:** Toda la información se obtiene de la [PokéAPI](https://pokeapi.co/).

## Instalación

1. Clona el repositorio.
2. Navega al directorio `pokemonSearch`.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Tecnologías

- **Vue.js:** Un framework progresivo de JavaScript para construir interfaces de usuario.
- **Vite:** Una herramienta de frontend moderna que proporciona un entorno de desarrollo rápido.
- **Bootstrap:** Un framework de CSS para un diseño responsivo y mobile-first.