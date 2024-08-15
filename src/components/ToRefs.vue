<script setup>
// `toRefs` digunakan untuk mendeklarasikan objek reaktif dalam Vue.js yang memerlukan destrukturisasi sambil mempertahankan reaktivitas. 
// Ini memungkinkan Anda untuk mengakses properti objek reaktif secara individual tanpa kehilangan reaktivitas pada properti tersebut.
// `toRefs` cocok digunakan saat Anda ingin mendestrukturisasi objek reaktif dan menggunakannya secara terpisah di template atau di bagian lain dari komponen Vue.
// jika data anda array dan didalamnya ada objek maka jangan menggunakan torefs



import { reactive,toRefs } from "vue";

const User = reactive(
 {
    name:"john",
    age:20
 }
);

const { name, age } = toRefs(User);
console.log(name);
</script>

<template>
   <br>
   {{ name }} 
   <br>
   {{ age }}
</template>
