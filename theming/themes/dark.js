const Theme = require('../Theme')
const Pallet = require('./pallets/tailwind')
const Color = require('color')

const baseColors = {
  primary: Pallet.blue[500],
  secondary: Pallet.teal[500],
  accent: Pallet.violet[500],
  info: Pallet.cyan[500],
  success: Pallet.emerald[500],
  warning: Pallet.amber[400],
  danger: Pallet.red[500],
  ghost: '#ffffff00',
  neutral: Pallet.slate[900],
}

const backgroundColors = {
  main: Pallet.slate[800],
  card: Pallet.slate[900],
  menu: Pallet.slate[900],
  form: Pallet.slate[800],
  // Should the menu items just be the same as 'ghost buttons' or keep independant styles? It feels verbose.
  'menu-item': '#00000000',
  'menu-subitem': Color(baseColors.ghost).darken(0.2).alpha(0.1).hexa(),
  'menu-item-active': baseColors.primary,
  'menu-subitem-active': baseColors.primary,
  'menu-item-hocus': Color(baseColors.ghost).darken(0.2).alpha(0.1).hexa(),
  'menu-subitem-hocus': Color(baseColors.ghost).darken(0.2).alpha(0.2).hexa()
}

const textColors = {
  'on-main': Pallet.slate[200],
  'on-main-muted': Pallet.slate[400],
  'on-menu': Pallet.slate[300],
  'on-menu-active': Pallet.slate[100],
  'on-menu-muted': Pallet.slate[400],

  'on-primary': Pallet.slate[100],
  'on-secondary': Pallet.slate[100],
  'on-accent': Pallet.slate[100],
  'on-info': Pallet.slate[100],
  'on-success': Pallet.slate[100],
  'on-warning': Pallet.slate[100],
  'on-danger': Pallet.slate[100],
  'on-neutral': Pallet.slate[300],
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
    'neutral-hocus': Color(Pallet.slate[300]).hexa()
  },
  text: {
    'on-primary-hocus': Pallet.slate[100],
    'on-secondary-hocus': Pallet.slate[100],
    'on-accent-hocus': Pallet.slate[100],
    'on-info-hocus': Pallet.slate[100],
    'on-success-hocus': Pallet.slate[100],
    'on-warning-hocus': Pallet.slate[100],
    'on-danger-hocus': Pallet.slate[100],
    'on-neutral-hocus': Pallet.slate[900]
  }
}

const theme = new Theme({
  name: 'dark',
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
      'button-width-neutral': '2px',
      'button-color-neutral': Color(Pallet.slate[300]).hexa(),
      'button-color-neutral-hocus': 'var(--background-color-neutral-hocus)',
    },
    borderColor: {
      card: backgroundColors.card,
      menu: Pallet.slate[800],
      divider: Pallet.slate[800],
      'menu-divider': Pallet.slate[800],
      form: textColors['on-main-muted'],
      ...hocusColors.background
    },
    borderWidth: {
      'button': '2px'
    },
    pageBackgrounds: {
      login: 'bg-gradient-to-tr from-purple-900 via-pink-900 to-red-900',
      error: 'bg-gradient-to-tr from-pink-900 via-red-900 to-yellow-900'
    }
  }
})

module.exports = theme