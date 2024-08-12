<script setup>
// reactive digunakan untuk mendeklarasikan objek atau array yang kompleks yang perlu menjadi reaktif. Ini memberikan kemampuan untuk membuat seluruh objek reaktif sehingga setiap perubahan pada properti objek akan dipantau oleh Vue.
// reactive cocok untuk objek atau array yang memiliki beberapa properti atau elemen yang perlu dimonitor secara reaktif.

import { reactive } from "vue";

const User = reactive(
 [
     {
    name: "john",
    age: 20,
  },
  {
    name: "jane",
    age: 21,
  }
 ]
);

setTimeout(() => {
  User[0].name = "jack";
}, 3000);
</script>

<template>
  <div v-for="(user, index) in User" :key="index">
    {{ `Name: ${user.name}` }}<br>
    {{ `Age: ${user.age}`  }}
    </div>
</template>
