<script setup>
import { watch, ref, reactive } from "vue";

const num = ref(0);
const num2 = ref(1);

const data = reactive({
    number: 1
})

const addNumber = () => {
    num.value++;
    num2.value++;
}

const addNumberInObject = () => {
    data.number++;
}
// basic
watch(num, (newVal, oldVal) => {
    console.log(`basic watch ${num.value}`);
    console.log(`newVal ${newVal}`);
    console.log(`oldVal ${oldVal}`);
})

// array
watch([num, num2], (newVal, oldVal) => {
    console.log(`array watch ${[num.value, num2.value]}`);
    console.log(`newVal ${newVal}`);
    console.log(`oldVal ${oldVal}`);
})

// object
watch(() => data.number, (before, after) => {
    console.log(`object watch ${data.number}`);
    console.log(`before in object ${before}`);
    console.log(`after in object ${after}`);
});

</script>

<template>
    <div>
        {{ `count ${num}` }}
        <br>
        {{ `count ${num2}` }}
        <br>
        {{ `count object ${data.number}` }}
        <br>
        <button type="button" @click="addNumber">add</button> <br>

        <button type="button" @click="addNumberInObject">addObject</button>
    </div>
</template>

<style></style>