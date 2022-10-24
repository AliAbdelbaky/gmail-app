<template>
  <v-app-bar
    absolute
    color="white"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn outlined filled rounded to="/">
      {{ $t("header.main") }}
    </v-btn>
    <v-btn dark outlined rounded to="/about"> {{ $t("header.about") }} </v-btn>
    <v-btn
      v-if="$i18n.locale == 'ar'"
      @click="toggleLang('en')"
      outlined
      filled
      rounded
    >
      en
    </v-btn>
    <v-btn v-else @click="toggleLang('ar')" outlined filled rounded> ar </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "toolbar",
  methods: {
    toggleLang(lang: string) {
      this.$i18n.locale = lang;
    },
  },
});
</script>
