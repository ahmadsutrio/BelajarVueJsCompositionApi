<script setup>
import { version } from "vite";
import { computed, ref,reactive } from "vue";
const number = ref(0);
const addNum = () => number.value++;
console.log(addNum);
const showNum = computed(() => `number: ${number.value} computed ${number.value+1}`);

// setter dan getter
const data = reactive({
  number:1
})

const add = () => {
  result.value = 5;
  data.number++;
}
const angka = ref(2)

const result = computed({
  get: () => angka.value + data.number,
  set: (val) => angka.value = val
})


</script>

<template>
  <div>
    <h3>Computed Basic</h3>
    {{ showNum }}
    
    <button @click="addNum">add</button>
    
  </div>
  <div>
    <h3>Computed Basic</h3>
    {{`count ${data.number}`}} <br>
    {{`result: ${result}` }} <br>
    <button @click="add">add</button>
  </div>
</template>

<style></style>
