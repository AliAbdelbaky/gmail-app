<script setup lang="ts">
import { ref } from 'vue';

let count = ref(1)
</script>

<template>
  <main>
    <h1>
      Hello from Homepage
    </h1>
  </main>
</template>
<style>
@media (min-width: 1024px) {
  main {
    min-height: 100vh;
    display: flex;
    place-items: center;
  }
}
</style>
