const Theme = require('../Theme')
const Pallet = require('./pallets/tailwind')
const Color = require('color')

const baseColors = {
  primary: '#0050EF',
  secondary: Pallet.teal[500],
  accent: Pallet.violet[500],
  info: '#1BA1E2',
  success: '#008A00',
  warning: '#F0A30A',
  danger: '#E51400',
  ghost: '#ffffff00',
  neutral: '#00000000',
}

const backgroundColors = {
  main: '#131418',
  card: '#000000',
  menu: '#000000',
  form: '#000000',
  // Should the menu items just be the same as 'ghost buttons' or keep independant styles? It feels verbose.
  'menu-item': '#00000000',
  'menu-subitem': Color(baseColors.ghost).darken(0.2).alpha(0.1).hexa(),
  'menu-item-active': baseColors.primary,
  'menu-subitem-active': baseColors.primary,
  'menu-item-hocus': Color(baseColors.ghost).darken(0.2).alpha(0.1).hexa(),
  'menu-subitem-hocus': Color(baseColors.ghost).darken(0.2).alpha(0.2).hexa()
}

const textColors = {
  'on-main': '#ffffff',
  'on-main-muted': '#ffffff77',
  'on-menu': '#ffffff',
  'on-menu-active': '#ffffff',
  'on-menu-muted': '#ffffff77',

  'on-primary': '#ffffff',
  'on-secondary': '#ffffff',
  'on-accent': '#ffffff',
  'on-info': '#ffffff',
  'on-success': '#ffffff',
  'on-warning': '#ffffff',
  'on-danger': '#ffffff',
  'on-neutral': '#ffffff',
}

const hocusColors = {
  background: {
    'primary-hocus': Color(baseColors.primary).darken(0.2).hexa(),
    'secondary-hocus': Color(baseColors.secondary).darken(0.2).hexa(),
    'accent-hocus': Color(baseColors.accent).darken(0.2).hexa(),
    'info-hocus': Color(baseColors.info).darken(0.2).hexa(),
    'success-hocus': Color(baseColors.success).darken(0.2).hexa(),
    'warning-hocus': Color(baseColors.warning).darken(0.2).hexa(),
    'danger-hocus': Color(baseColors.danger).darken(0.2).hexa(),
    'ghost-hocus': Color(baseColors.ghost).darken(0.2).alpha(0.25).hexa(),
    'neutral-hocus': Color(baseColors.primary).darken(0.2).hexa(),
  },
  text: {
    'on-primary-hocus': '#ffffff',
    'on-secondary-hocus': '#ffffff',
    'on-accent-hocus': '#ffffff',
    'on-info-hocus': '#ffffff',
    'on-success-hocus': '#ffffff',
    'on-warning-hocus': '#ffffff',
    'on-danger-hocus': '#ffffff',
    'on-neutral-hocus': '#ffffff',
  }
}

const theme = new Theme({
  name: 'metrodark',
  theme: {
    colors: baseColors,
    backgroundColor: {
      ...hocusColors.background,
      ...backgroundColors
    },
    textColor: {
      ...textColors,
      ...hocusColors.text
    },
    placeholderColor: {
      form: textColors['on-main-muted']
    },
    outline: {
      'button-width': '2px',

      'button-color-primary': '#ffffff',
      'button-color-secondary': '#ffffff',
      'button-color-accent': '#ffffff',
      'button-color-info': '#ffffff',
      'button-color-success': '#ffffff',
      'button-color-warning': '#ffffff',
      'button-color-danger': '#ffffff',
      'button-color-ghost': '#ffffff',
      'button-color-neutral': '#ffffff',

      'button-color-primary-hocus': '#ffffff',
      'button-color-secondary-hocus': '#ffffff',
      'button-color-accent-hocus': '#ffffff',
      'button-color-info-hocus': '#ffffff',
      'button-color-success-hocus': '#ffffff',
      'button-color-warning-hocus': '#ffffff',
      'button-color-danger-hocus': '#ffffff',
      'button-color-ghost-hocus': '#ffffff',
      'button-color-neutral-hocus': '#ffffff',
    },
    borderRadius: {
      card: '0px',
      button: '0px',
      form: '0px'
    },
    borderColor: {
      card: backgroundColors.card,
      menu: '#131418',
      divider: '#131418',
      'menu-divider': '#131418',
      form: textColors['on-main-muted'],
      ...hocusColors.background
    },
    borderWidth: {
      'button': '1px'
    },
    spacing: {
      'menu-items': '0px'
    },
    pageBackgrounds: {
      login: 'bg-gradient-to-tr from-purple-900 via-pink-900 to-red-900',
      error: 'bg-gradient-to-tr from-pink-900 via-red-900 to-yellow-900'
    }
  }
})

module.exports = theme