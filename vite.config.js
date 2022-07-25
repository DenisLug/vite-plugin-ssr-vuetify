import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import vuetify from 'vite-plugin-vuetify'

export default {
  plugins: [
    vue(),
    ssr(),
    vuetify({
      styles: 'expose',
      autoImport: true
    })
  ]
}
