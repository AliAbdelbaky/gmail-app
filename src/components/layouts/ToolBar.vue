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
  </v-app-bar>
</template>
