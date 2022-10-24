import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from 'node:path'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),  vueI18n({
    // compositionOnly: false,

    include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
