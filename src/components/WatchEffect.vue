<script setup>
import { reactive, watchEffect } from "vue";
const count = reactive({
    count: 0
})

const addCount = () => count.count++
watchEffect(() => {
    // basic
    console.log(`basic watchEffect ${count.count}`);
},
// options
    {
        onTrigger(e) {
            console.log(`hasil trigger `);
            console.log(e);

        },
        onTrack(e) {
            console.log(`hasil track`);
            console.log(e);

        }
    }
)
</script>

<template>
    <div>
        {{ `count ${count.count}` }}

        <button type="button" @click="addCount">add count</button>
    </div>
</template>

<style></style>