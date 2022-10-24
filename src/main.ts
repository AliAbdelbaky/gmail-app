import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//-- vuetify
import vuetifyApp from "./plugins/vuetify";
// import { loadFonts } from "./plugins/webfontloader";
//-- /vuetify
import i18n from "./plugins/i18n";

createApp(App).use(router).use(i18n).use(vuetifyApp).mount("#app");
