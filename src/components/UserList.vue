<script setup>
const props = defineProps({
  name: { type: String, default: "" },
  age: { type: Number, default: "" },
  email: { type: String, default: "" },
});
</script>

<template>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr>
        <td>{{ props.name }}</td>
        <td>{{ props.age }}</td>
        <td>{{ props.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
