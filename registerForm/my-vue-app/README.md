# Formulario de Registro con Vue.js

Este proyecto es una aplicación simple creada con Vue.js que presenta un formulario de registro de usuario.

## Objetivo

Crear un formulario de registro simple que permita al usuario ingresar la siguiente información:
- Nombre
- Correo electrónico
- Edad

Una vez ingresados los datos, se mostrará un resumen en pantalla con la información ingresada, utilizando binding de datos y controlando cuándo se muestra ese resumen.

## Requerimientos

- El proyecto debe estar construido utilizando VueJS.
- Usa Bootstrap para dar estilo al formulario y al resumen.
- Usa `v-model` para enlazar los campos del formulario con las propiedades en `data`.
- Muestra el resumen de datos solo cuando el usuario haya completado todos los campos (usa `v-if` o `v-show`).
- Agrega un botón que permita "limpiar el formulario" y volver al estado inicial.

## Uso

1.  Clona el repositorio.
2.  Instala las dependencias con `npm install`.
3.  Ejecuta el servidor de desarrollo con `npm run dev`.