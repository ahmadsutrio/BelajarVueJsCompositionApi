<script setup>
import { computed, reactive, ref } from "vue";

const counter = ref(0);
const todos = reactive([]);
const text = ref("");

const addCounter = () => counter.value++;
const addTodo = () => todos.push(text.value);

const showTodos = computed(() => `perubahanb data ${todos}`);
console.log(showTodos);
</script>

<template>
  <div>
    <h3 class="">{{ `counter: ${counter}` }}</h3>
    <button @click="addCounter">add</button>
  </div>

  <div class="">
    <h3>{{ `todos: ${todos}` }}</h3>
    <input type="text" name="" v-model="text" id="">
    <button @click="addTodo">addTodo</button>
    <p>{{ showTodos }}</p>
  </div>
</template>

<style>
</style>