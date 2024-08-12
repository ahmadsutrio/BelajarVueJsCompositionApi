<script setup>
  // Mendefinisikan variabel `message` dengan nilai "hello world".
  // Dalam <script setup>, variabel ini bersifat reactive secara otomatis.
  const message = "hello world";
</script>

<template>
  <!-- Menampilkan nilai variabel `message` di dalam elemen <div>. -->
  <!-- Variabel `message` yang didefinisikan di dalam <script setup> akan muncul di sini. -->
  <div>
    {{ message }}
  </div>
</template>
