<template>
  <MainWrapper />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainWrapper from './components/MainWrapper.vue'
export default defineComponent({
  name: "App",
  components: {
    MainWrapper
  },
});
</script>
