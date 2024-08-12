<script setup>
// Mengimpor `ref` dari Vue. `ref` digunakan untuk membuat reactive data yang dapat dipantau perubahan nilainya.
// ref digunakan untuk mendeklarasikan nilai primitif (seperti string, number, boolean) atau objek sederhana yang perlu menjadi reaktif.
// ref adalah pilihan yang baik ketika Anda hanya memiliki satu nilai yang ingin dijadikan reaktif atau saat Anda bekerja dengan data primitif.
import { ref } from "vue";

// Membuat reactive variable `message` dengan nilai awal "velue awal".
const message = ref("velue awal");

// Membuat reactive variable `megic` dengan nilai awal "perhatikan".
const megic = ref("perhatikan");

// Menggunakan `setTimeout` untuk mengubah nilai `megic` setelah 2 detik.
// Setelah 2 detik, nilai `megic` akan berubah menjadi "berganti".
setTimeout(() => {
  megic.value = "berganti";
}, 2000);

</script>

<template>
  <!-- Input field yang terhubung dengan `message` melalui `v-model`. -->
  <!-- Ketika pengguna mengetik di input, nilai `message` akan diperbarui secara otomatis. -->
  <div>
    <input type="text" name="" id="" v-model="message" />

    <!-- Menampilkan nilai `message` yang saat ini. -->
    <br />
    {{ message }}

    <!-- Menampilkan nilai `megic` yang akan berubah setelah 2 detik. -->
    <br />
    {{ megic }}
  </div>
</template>
