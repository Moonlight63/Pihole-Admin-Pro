const Theme = require('../Theme')
const Pallet = require('./pallets/nord')
const Color = require('color')

const baseColors = {
  primary: Pallet.frost[3],
  secondary: Pallet.frost[0],
  accent: Pallet.aurora.purple,
  info: Pallet.frost[1],
  success: Pallet.aurora.green,
  warning: Pallet.aurora.yellow,
  danger: Pallet.aurora.red,
  ghost: '#ffffff00',
  neutral: Pallet.snow[2],
}

const backgroundColors = {
  main: Pallet.polar[1],
  card: Pallet.polar[0],
  menu: Pallet.polar[0],
  form: Pallet.polar[1],
  // Should the menu items just be the same as 'ghost buttons' or keep independant styles? It feels verbose.
  'menu-item': '#00000000',
  'menu-subitem': Color(baseColors.ghost).darken(0.2).alpha(0.1).hexa(),
  'menu-item-active': baseColors.primary,
  'menu-subitem-active': baseColors.primary,
  'menu-item-hocus': Color(baseColors.ghost).darken(0.2).alpha(0.1).hexa(),
  'menu-subitem-hocus': Color(baseColors.ghost).darken(0.2).alpha(0.2).hexa()
}

const textColors = {
  'on-main': Pallet.snow[2],
  'on-main-muted': Color(Pallet.polar[3]).lighten(0.5).hexa(),
  'on-menu': Pallet.snow[0],
  'on-menu-active': Pallet.snow[2],
  'on-menu-muted': Color(Pallet.polar[3]).lighten(0.5).hexa(),

  'on-primary': Pallet.polar[0],
  'on-secondary': Pallet.polar[0],
  'on-accent': Pallet.polar[0],
  'on-info': Pallet.polar[0],
  'on-success': Pallet.polar[0],
  'on-warning': Pallet.polar[0],
  'on-danger': Pallet.polar[0],
  'on-neutral': Pallet.polar[3],
}

const hocusColors = {
  background: {
    'primary-hocus': Color(baseColors.primary).darken(0.2).hex(),
    'secondary-hocus': Color(baseColors.secondary).darken(0.2).hex(),
    'accent-hocus': Color(baseColors.accent).darken(0.2).hex(),
    'info-hocus': Color(baseColors.info).darken(0.2).hex(),
    'success-hocus': Color(baseColors.success).darken(0.2).hex(),
    'warning-hocus': Color(baseColors.warning).darken(0.2).hex(),
    'danger-hocus': Color(baseColors.danger).darken(0.2).hex(),
    'ghost-hocus': Color(baseColors.ghost).darken(0.2).alpha(0.25).hexa(),
    'neutral-hocus': Pallet.snow[0],
  },
  text: {
    'on-primary-hocus': Pallet.snow[0],
    'on-secondary-hocus': Pallet.snow[0],
    'on-accent-hocus': Pallet.snow[0],
    'on-info-hocus': Pallet.snow[0],
    'on-success-hocus': Pallet.snow[0],
    'on-warning-hocus': Pallet.snow[0],
    'on-danger-hocus': Pallet.snow[0],
    'on-neutral-hocus': Pallet.polar[0],
  }
}

const theme = new Theme({
  name: 'nordark',
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
      menu: Pallet.polar[2],
      divider: Pallet.polar[2],
      'menu-divider': Pallet.polar[2],
      form: textColors['on-main-muted']
    },
    pageBackgrounds: {
      login: 'bg-gradient-to-tr via-[#b48ead] from-[#d08770] to-[#ebcb8b]',
      error: 'bg-gradient-to-tr via-[#d08770] from-[#bf616a] to-[#ebcb8b]'
    }
  }
})

module.exports = theme