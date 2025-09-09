# Proyecto de Formulario con Vue.js

Este proyecto es una aplicación de práctica desarrollada con Vue.js para demostrar el manejo de controles de formulario, específicamente `radio buttons` y elementos `select`.

## Descripción de la Actividad

El objetivo de esta aplicación es aprender a administrar y vincular datos del modelo de Vue.js con diferentes tipos de inputs en un formulario.

### 1. Controles Radio

Se implementa un conjunto de controles `radio` para permitir al usuario seleccionar su nivel de estudios. La aplicación muestra en tiempo real la opción que ha sido seleccionada.

Para lograr esto, se utiliza una única propiedad en el modelo de datos de Vue para almacenar el valor del `radio button` seleccionado. Es importante destacar que el valor inicial se establece en el modelo de datos y no directamente en el atributo `checked` del HTML.

**Ejemplo del modelo:**

```javascript
const nivel = ref('Universitario'); // Opción inicial
```

### 2. Control Select

Se incluye un control `select` que muestra los días de la semana. La primera opción del `select` está deshabilitada por defecto para guiar al usuario a realizar una selección activa. Cuando el operador selecciona un día, la aplicación muestra cuál ha sido seleccionado.

### 3. Validación de Formulario

El formulario incluye una lógica de validación que no permite el envío de datos hasta que el usuario haya seleccionado una opción en cada uno de los campos (nivel de estudios y día de la semana). Si se intenta enviar el formulario sin completar, se muestra un mensaje de error.

## Requerimientos Cumplidos

- **Controles Radio:** Se han creado cuatro controles de tipo `radio` para seleccionar el tipo de estudios.
- **Visualización de Selección (Radio):** Se muestra en la parte inferior del componente la opción actualmente seleccionada, reflejando el estado del modelo de datos.
- **Control Select:** Se ha implementado un `select` para elegir un día de la semana de una lista, con la primera opción deshabilitada como guía.
- **Visualización de Selección (Select):** Al seleccionar un día, se muestra el valor elegido por el usuario.
- **Validación de Formulario:** El botón de "Enviar" permanece deshabilitado hasta que se seleccione una opción para cada campo. Si se intenta enviar el formulario vacío, se muestra un mensaje de error.

## Cómo Ejecutar el Proyecto

1.  **Clonar el repositorio (si aplica) o descargar los archivos.**
2.  **Instalar las dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

4.  Abrir el navegador en la dirección indicada por la consola (generalmente `http://localhost:5173`).
