/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#BA4949',
          secondary: '#d9594c'
        }
      },
      dark: {
        colors: {
          primary: '#212121',
          secondary: '#FAFAFA',
          accent: '#757575'
        }
      }
    }
  }
})
