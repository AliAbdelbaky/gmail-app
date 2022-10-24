const { defineConfig } = require("@vue/cli-service");
import vuetifyOptions from './vuetify.options'
module.exports = defineConfig({
  pluginOptions: {
    vuetify: {
      ...vuetifyOptions
    }
  },
});
