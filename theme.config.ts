/* eslint-disable @typescript-eslint/no-var-requires */
const themeSwapper = require('tailwindcss-theme-swapper')
// import themeSwapper from 'tailwindcss-theme-swapper'

const themes = [
  {
    name: 'base',
    selectors: [':root'],
    theme: {
      colors: {
        primary: '#3B82F6',
        secondary: '#A855F7',
        accent: '#14B8A6',
        neutral: '#64748B',
        info: '#06B6D4',
        success: '#22C55E',
        warning: '#FCD34D',
        error: '#DC2626',
        ghost: '#00000000',

        'primary-hocus': '#1D4ED8',
        'secondary-hocus': '#7E22CE',
        'accent-hocus': '#0D9488',
        'neutral-hocus': '#475569',
        'info-hocus': '#0E7490',
        'success-hocus': '#15803D',
        'warning-hocus': '#F59E0B',
        'error-hocus': '#991B1B',
        'ghost-hocus': '#ffffff77'
      },
      // Should the menu items just be the same as 'ghost buttons' or keep independant styles? It feels verbose.
      backgroundColor: {
        main: '#F1F5F9',
        card: '#CBD5E1',
        menu: '#CBD5E1',
        form: '#ffffff',
        'menu-item': '#00000000',
        'menu-subitem': '#eeeeee',
        'menu-item-active': '#3B82F6',
        'menu-subitem-active': '#3B82F6',
        'menu-item-hocus': '#ffffff55',
        'menu-subitem-hocus': '#ffffff55'
      },
      textColor: {
        'on-main': '#ff0000',
        'on-main-muted': '#4444ff',
        'on-menu': '#333',
        'on-menu-active': '#000000',
        'on-menu-muted': '#444444',

        'on-primary': '#FFFFFF',
        'on-secondary': '#FFFFFF',
        'on-accent': '#FFFFFF',
        'on-neutral': '#FFFFFF',
        'on-info': '#FFFFFF',
        'on-success': '#FFFFFF',
        'on-warning': '#FFFFFF',
        'on-error': '#FFFFFF',

        'on-primary-hocus': '#FFFFFF',
        'on-secondary-hocus': '#FFFFFF',
        'on-accent-hocus': '#FFFFFF',
        'on-neutral-hocus': '#FFFFFF',
        'on-info-hocus': '#FFFFFF',
        'on-success-hocus': '#FFFFFF',
        'on-warning-hocus': '#FFFFFF',
        'on-error-hocus': '#FFFFFF'
      },
      placeholderColor: {
        form: '#333333'
      },
      borderRadius: {
        card: '3rem',
        button: '0.5rem',
        form: '2rem'
      },
      borderWidth: {
        card: '1px',
        button: '1px',
        menu: '1px',
        form: '1px',
        'button-outline': '0.25rem'
      },
      borderColor: {
        card: '#f0f000',
        menu: '#ff00ff',
        divider: '#00ffff',
        form: '#ff0000'
      }
    }
  },
  {
    name: 'dark',
    selectors: ['.theme-dark'],
    theme: {
      colors: {
        primary: '#000000',
        secondary: '#A855F7',
        accent: '#14B8A6',
        neutral: '#64748B',
        info: '#06B6D4',
        success: '#22C55E',
        warning: '#FCD34D',
        error: '#DC2626'
      }
    }
  }
]

const swapt = () => {
  const thing = themeSwapper({
    themes: themes
  })
  console.log(
    '🚀 ~ file: theme.config.js ~ line 54 ~ swapt ~ thing',
    JSON.stringify(thing, null, 2)
  )

  return thing
}

// const module = {
//   plugin: swapt()
// }

// type ThemeType = {
//   name: string
//     selectors: [string]
//     theme: {
//       colors: {
//         primary: string
//         secondary: string
//         accent: string
//         neutral: string
//         info: string
//         success: string
//         warning: string
//         error: string
//         ghost: string

//         'primary-hocus': string
//         'secondary-hocus': string
//         'accent-hocus': string
//         'neutral-hocus': string
//         'info-hocus': string
//         'success-hocus': string
//         'warning-hocus': string
//         'error-hocus': string
//         'ghost-hocus': string
//       }
//       backgroundColor: {
//         main: string
//         card: string
//         menu: string
//         form: string
//         'menu-item': string
//         'menu-subitem': string
//         'menu-item-active': string
//         'menu-subitem-active': string
//         'menu-item-hocus': string
//         'menu-subitem-hocus': string
//       },
//       textColor: {
//         'on-main': string
//         'on-main-muted': string
//         'on-menu': string
//         'on-menu-active': string
//         'on-menu-muted': string

//         'on-primary': string
//         'on-secondary': string
//         'on-accent': string
//         'on-neutral': string
//         'on-info': string
//         'on-success': string
//         'on-warning': string
//         'on-error': string

//         'on-primary-hocus': string
//         'on-secondary-hocus': string
//         'on-accent-hocus': string
//         'on-neutral-hocus': string
//         'on-info-hocus': string
//         'on-success-hocus': string
//         'on-warning-hocus': string
//         'on-error-hocus': string
//       }
//       placeholderColor: {
//         form: string
//       },
//       borderRadius: {
//         card: string
//         button: string
//         form: string
//       },
//       borderWidth: {
//         card: string
//         button: string
//         menu: string
//         form: string
//         'button-outline': string
//       },
//       borderColor: {
//         card: string
//         menu: string
//         divider: string
//         form: string
//       }
//     }
// }

// class Theme {
//   theme: ThemeType
//   constructor(options: ThemeType) {
//     this.theme = options
//   }
//   get() {
//     return this.theme
//   }
// }

exports.plugin = swapt()
// exports.Theme = Theme

// export class Test {
//   constructor() {

//   }
// }


