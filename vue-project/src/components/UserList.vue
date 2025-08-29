<script setup>
const users = [
  { name: "Ana", lastName: "Pérez", birthDate: "1999-03-15", age: 25 },
  { name: "Luis", lastName: "García", birthDate: "1992-07-22", age: 32 },
  { name: "María", lastName: "Rodríguez", birthDate: "1996-11-08", age: 28 },
  { name: "Carlos", lastName: "Fernández", birthDate: "1983-05-12", age: 41 },
  { name: "Valentina", lastName: "Morales", birthDate: "2002-01-27", age: 22 },
  { name: "Diego", lastName: "López", birthDate: "1988-09-03", age: 36 },
  { name: "Sofía", lastName: "Castro", birthDate: "1995-06-19", age: 29 },
  { name: "Javier", lastName: "Torres", birthDate: "1991-04-25", age: 33 },
  { name: "Camila", lastName: "Vargas", birthDate: "1997-12-30", age: 27 },
  { name: "Felipe", lastName: "Navarro", birthDate: "1986-10-10", age: 38 },
];
</script>

<template>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Cumpleaños</th>
        <th>Edad</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="user in users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.birthDate }}</td>
        <td>{{ user.age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
