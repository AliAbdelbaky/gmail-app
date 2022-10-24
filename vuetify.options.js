import ar from 'vuetify/lib/locale/ar'
import en from 'vuetify/lib/locale/en'

import ar from 'vuetify/lib/locale/ar'
import en from 'vuetify/lib/locale/en'

const vuetifyOptions = {
  treeShake: true,
  scrollBarWidth: 16,

  theme: {
    dark: true,
    themes: {
      options: {
        customProperties: true,
      },
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
  rtl: true,
  lang: {
    locales: { ar, en }
  }
}

export default vuetifyOptions;
