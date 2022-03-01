const Theme = require('../Theme')
const Pallet = require('./pallets/tailwind')
const Color = require('color')

const colors = {
  primary: Pallet.blue[500],
  secondary: Pallet.teal[500],
  accent: Pallet.violet[500],
  info: Pallet.cyan[500],
  success: Pallet.emerald[500],
  warning: Pallet.yellow[500],
  error: Pallet.red[500],
  ghost: '#ffffff00',

  // 'primary-hocus': '#1D4ED8',
  // 'secondary-hocus': '#7E22CE',
  // 'accent-hocus': '#0D9488',
  // 'info-hocus': '#0E7490',
  // 'success-hocus': '#15803D',
  // 'warning-hocus': '#F59E0B',
  // 'error-hocus': '#991B1B',
  // 'ghost-hocus': '#ffffff77'
}

const theme = new Theme({
  name: 'base',
  // selectors: ['html'],
  theme: {
    colors: colors,
    // Should the menu items just be the same as 'ghost buttons' or keep independant styles? It feels verbose.
    backgroundColor: {
      'primary-hocus': Color(colors.primary).lighten(0.2).hex(),
      'secondary-hocus': Color(colors.secondary).lighten(0.2).hex(),
      'accent-hocus': Color(colors.accent).lighten(0.2).hex(),
      'info-hocus': Color(colors.info).lighten(0.2).hex(),
      'success-hocus': Color(colors.success).lighten(0.2).hex(),
      'warning-hocus': Color(colors.warning).lighten(0.2).hex(),
      'error-hocus': Color(colors.error).lighten(0.2).hex(),
      'ghost-hocus': Color(colors.ghost).lighten(0.2).alpha(0.25).hexa(),

      main: '#F1F5F9',
      card: '#CBD5E1',
      menu: '#0F172A',
      form: '#ffffff',
      'menu-item': '#00000000',
      'menu-subitem': Color(colors.ghost).lighten(0.2).alpha(0.1).hexa(),
      'menu-item-active': colors.primary,
      'menu-subitem-active': colors.primary,
      'menu-item-hocus': Color(colors.ghost).lighten(0.2).alpha(0.1).hexa(),
      'menu-subitem-hocus': Color(colors.ghost).lighten(0.2).alpha(0.2).hexa()
    },
    textColor: {
      'on-main': '#ff0000',
      'on-main-muted': '#4444ff',
      'on-menu': '#E2E8F0',
      'on-menu-active': Pallet.gray[100],
      'on-menu-muted': '#94A3B8',

      'on-primary': '#FFFFFF',
      'on-secondary': '#FFFFFF',
      'on-accent': '#FFFFFF',
      'on-info': '#FFFFFF',
      'on-success': '#FFFFFF',
      'on-warning': '#FFFFFF',
      'on-error': '#FFFFFF',

      'on-primary-hocus': '#FFFFFF',
      'on-secondary-hocus': '#FFFFFF',
      'on-accent-hocus': '#FFFFFF',
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
})

module.exports = theme