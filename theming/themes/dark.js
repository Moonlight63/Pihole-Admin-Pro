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
  error: Pallet.red[500],
  ghost: '#ffffff00'
}

const backgroundColors = {
  main: Pallet.slate[800],
  card: Pallet.slate[900],
  menu: Pallet.slate[900],
  form: Pallet.slate[800],
  // Should the menu items just be the same as 'ghost buttons' or keep independant styles? It feels verbose.
  'menu-item': '#00000000',
  'menu-subitem': Color(baseColors.ghost).lighten(0.2).alpha(0.1).hexa(),
  'menu-item-active': baseColors.primary,
  'menu-subitem-active': baseColors.primary,
  'menu-item-hocus': Color(baseColors.ghost).lighten(0.2).alpha(0.1).hexa(),
  'menu-subitem-hocus': Color(baseColors.ghost).lighten(0.2).alpha(0.2).hexa()
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
  'on-error': Pallet.slate[100],
}

const hocusColors = {
  background: {
    'primary-hocus': Color(baseColors.primary).lighten(0.2).hex(),
    'secondary-hocus': Color(baseColors.secondary).lighten(0.2).hex(),
    'accent-hocus': Color(baseColors.accent).lighten(0.2).hex(),
    'info-hocus': Color(baseColors.info).lighten(0.2).hex(),
    'success-hocus': Color(baseColors.success).lighten(0.2).hex(),
    'warning-hocus': Color(baseColors.warning).lighten(0.2).hex(),
    'error-hocus': Color(baseColors.error).lighten(0.2).hex(),
    'ghost-hocus': Color(baseColors.ghost).lighten(0.2).alpha(0.25).hexa(),
  },
  text: {
    'on-primary-hocus': Pallet.slate[100],
    'on-secondary-hocus': Pallet.slate[100],
    'on-accent-hocus': Pallet.slate[100],
    'on-info-hocus': Pallet.slate[100],
    'on-success-hocus': Pallet.slate[100],
    'on-warning-hocus': Pallet.slate[100],
    'on-error-hocus': Pallet.slate[100]
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
    borderColor: {
      card: backgroundColors.card,
      menu: Pallet.slate[800],
      divider: Pallet.slate[800],
      'menu-divider': Pallet.slate[800],
      form: textColors['on-main-muted']
    }
  }
})

module.exports = theme