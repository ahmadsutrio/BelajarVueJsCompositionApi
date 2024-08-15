<script setup>
import { RouterView,RouterLink } from "vue-router";
</script>

<template>
<RouterLink :to="{name: 'helloworld'}">Day 1</RouterLink>
<router-link :to="{name:'ref'}">Day 2</router-link>
<router-link :to="{name:'reactive'}">Day 3</router-link>
<router-link :to="{name:'torefs'}">Day 4</router-link>
<router-link :to="{name:'method'}">Day 5</router-link>
<router-link :to="{name:'computed'}">Day 6</router-link>

<RouterView/>
</template>
