<script setup>
import { ref } from "vue";
import UserList from "./components/UserList.vue";
import UserLogin from "./components/UserLogin.vue";

const email = ref("");
const name = ref("");
const age = ref("");
const showList = ref(false);

function onSubmitted(nameVal, ageVal, emailVal) {
  if (!nameVal || !emailVal || Number(ageVal) < 1) return;
  name.value = nameVal;
  age.value = ageVal;
  email.value = emailVal;
  showList.value = true;
}

function onCleared() {
  showList.value = false;
}
</script>

<template>
  <nav>
    <h1>Hola!</h1>
  </nav>
  <UserLogin
    class="userLogin-container"
    @submitted="onSubmitted"
    @cleared="onCleared"
  />
  <UserList v-if="showList" :email="email" :name="name" :age="age" />
</template>

<style scoped>
nav {
  color: white;
  background-color: black;
  padding: 1rem;
}

.userLogin-container {
  padding: 2rem;
  border: 1px solid rgb(226, 225, 225);
}
</style>
