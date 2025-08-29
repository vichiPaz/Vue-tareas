<script setup>
const users = [
  { id: 1, name: "Ana", lastName: "Pérez", age: 25 },
  { id: 2, name: "Luis", lastName: "García", age: 32 },
  { id: 3, name: "María", lastName: "Rodríguez", age: 28 },
  { id: 4, name: "Carlos", lastName: "Fernández", age: 41 },
  { id: 5, name: "Valentina", lastName: "Morales", age: 22 },
  { id: 6, name: "Diego", lastName: "López", age: 36 },
  { id: 7, name: "Sofía", lastName: "Castro", age: 29 },
  { id: 8, name: "Javier", lastName: "Torres", age: 33 },
  { id: 9, name: "Camila", lastName: "Vargas", age: 27 },
  { id: 10, name: "Felipe", lastName: "Navarro", age: 38 },
];
</script>

<template>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="user in users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
