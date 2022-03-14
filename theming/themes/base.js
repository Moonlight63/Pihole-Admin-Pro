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
  neutral: Pallet.slate[100],
}

const backgroundColors = {
  main: Pallet.slate[100],
  card: Pallet.slate[200],
  menu: Pallet.slate[800],
  form: Pallet.slate[100],
  // Should the menu items just be the same as 'ghost buttons' or keep independant styles? It feels verbose.
  'menu-item': '#00000000',
  'menu-subitem': Color(baseColors.ghost).darken(0.25).alpha(0.1).hexa(),
  'menu-item-active': baseColors.primary,
  'menu-subitem-active': baseColors.primary,
  'menu-item-hocus': Color(baseColors.ghost).darken(0.25).alpha(0.1).hexa(),
  'menu-subitem-hocus': Color(baseColors.ghost).darken(0.25).alpha(0.5).hexa()
}

const textColors = {
  'on-main': Pallet.slate[900],
  'on-main-muted': Pallet.slate[500],
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
  'on-neutral': Pallet.slate[900]
}

const hocusColors = {
  background: {
    'primary-hocus': Color(baseColors.primary).darken(0.25).hexa(),
    'secondary-hocus': Color(baseColors.secondary).darken(0.25).hexa(),
    'accent-hocus': Color(baseColors.accent).darken(0.25).hexa(),
    'info-hocus': Color(baseColors.info).darken(0.25).hexa(),
    'success-hocus': Color(baseColors.success).darken(0.25).hexa(),
    'warning-hocus': Color(baseColors.warning).darken(0.25).hexa(),
    'danger-hocus': Color(baseColors.danger).darken(0.25).hexa(),
    'ghost-hocus': Color(baseColors.ghost).darken(0.25).alpha(0.25).hexa(),
    'neutral-hocus': Color(Pallet.slate[800]).hexa(),
  },
  text: {
    'on-primary-hocus': Pallet.slate[100],
    'on-secondary-hocus': Pallet.slate[100],
    'on-accent-hocus': Pallet.slate[100],
    'on-info-hocus': Pallet.slate[100],
    'on-success-hocus': Pallet.slate[100],
    'on-warning-hocus': Pallet.slate[100],
    'on-danger-hocus': Pallet.slate[100],
    'on-neutral-hocus': Pallet.slate[100]
  }
}

const theme = new Theme({
  name: 'base',
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
    borderRadius: {
      card: '1rem',
      button: '0.75rem',
      form: '0.75rem'
    },
    outline: {
      'button-width': '1px',
      'button-width-primary': 'var(--outline-button-width)',
      'button-width-secondary': 'var(--outline-button-width)',
      'button-width-accent': 'var(--outline-button-width)',
      'button-width-info': 'var(--outline-button-width)',
      'button-width-success': 'var(--outline-button-width)',
      'button-width-warning': 'var(--outline-button-width)',
      'button-width-danger': 'var(--outline-button-width)',
      'button-width-ghost': 'var(--outline-button-width)',
      'button-width-neutral': 'var(--outline-button-width)',

      'button-color-primary': 'var(--colors-primary)',
      'button-color-secondary': 'var(--colors-secondary)',
      'button-color-accent': 'var(--colors-accent)',
      'button-color-info': 'var(--colors-info)',
      'button-color-success': 'var(--colors-success)',
      'button-color-warning': 'var(--colors-warning)',
      'button-color-danger': 'var(--colors-danger)',
      'button-color-ghost': 'var(--colors-ghost)',
      'button-color-neutral': 'var(--colors-neutral)',

      'button-color-primary-hocus': 'var(--background-color-primary-hocus)',
      'button-color-secondary-hocus': 'var(--background-color-secondary-hocus)',
      'button-color-accent-hocus': 'var(--background-color-accent-hocus)',
      'button-color-info-hocus': 'var(--background-color-info-hocus)',
      'button-color-success-hocus': 'var(--background-color-success-hocus)',
      'button-color-warning-hocus': 'var(--background-color-warning-hocus)',
      'button-color-danger-hocus': 'var(--background-color-danger-hocus)',
      'button-color-ghost-hocus': 'var(--background-color-ghost-hocus)',
      'button-color-neutral-hocus': 'var(--background-color-neutral-hocus)',
    },
    borderWidth: {
      card: '1px',
      button: '1px',

      'button-primary': 'var(--border-width-button)',
      'button-secondary': 'var(--border-width-button)',
      'button-accent': 'var(--border-width-button)',
      'button-info': 'var(--border-width-button)',
      'button-success': 'var(--border-width-button)',
      'button-warning': 'var(--border-width-button)',
      'button-danger': 'var(--border-width-button)',
      'button-ghost': 'var(--border-width-button)',
      'button-neutral': 'var(--border-width-button)',

      menu: '1px',
      'menu-divider': '1px',
      form: '1px',
      'button-outline': '0.55rem'
    },
    borderColor: {
      card: backgroundColors.card,
      menu: Pallet.slate[700],
      divider: textColors['on-main-muted'],
      'menu-divider': Pallet.slate[700],
      form: textColors['on-main-muted'],
      ...hocusColors.background
    },
    pageBackgrounds: {
      login: 'bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500',
      error: 'bg-gradient-to-tr from-pink-400 via-red-500 to-yellow-500'
    }
  }
})

module.exports = theme