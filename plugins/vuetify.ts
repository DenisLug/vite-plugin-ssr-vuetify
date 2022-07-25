import '../styles/main.scss'
import { createVuetify } from 'vuetify'
// @ts-ignore
import * as components from 'vuetify/lib/components/index.mjs'
// @ts-ignore
import * as directives from 'vuetify/lib/directives/index.mjs'
// @ts-ignore
import colors from 'vuetify/lib/util/colors.mjs'

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          footerColor: '#C0A468',
          background: colors.grey.lighten5
        },
        dark: false,
        variables: {}
      }
    }
  }
})
