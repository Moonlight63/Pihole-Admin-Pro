const Theme = require('../Theme')

const palette = {
  transparent: 'transparent',
  current: 'currentColor',

  black: '#000',
  white: '#fff',

  gray: {
    100: '#f7fafc',
    200: '#edf2f7',
    300: '#e2e8f0',
    400: '#cbd5e0',
    500: '#a0aec0',
    600: '#718096',
    700: '#4a5568',
    800: '#2d3748',
    900: '#1a202c',
  },
  red: {
    100: '#fff5f5',
    200: '#fed7d7',
    300: '#feb2b2',
    400: '#fc8181',
    500: '#f56565',
    600: '#e53e3e',
    700: '#c53030',
    800: '#9b2c2c',
    900: '#742a2a',
  },
  orange: {
    100: '#fffaf0',
    200: '#feebc8',
    300: '#fbd38d',
    400: '#f6ad55',
    500: '#ed8936',
    600: '#dd6b20',
    700: '#c05621',
    800: '#9c4221',
    900: '#7b341e',
  },
  yellow: {
    100: '#fffff0',
    200: '#fefcbf',
    300: '#faf089',
    400: '#f6e05e',
    500: '#ecc94b',
    600: '#d69e2e',
    700: '#b7791f',
    800: '#975a16',
    900: '#744210',
  },
  green: {
    100: '#f0fff4',
    200: '#c6f6d5',
    300: '#9ae6b4',
    400: '#68d391',
    500: '#48bb78',
    600: '#38a169',
    700: '#2f855a',
    800: '#276749',
    900: '#22543d',
  },
  teal: {
    100: '#e6fffa',
    200: '#b2f5ea',
    300: '#81e6d9',
    400: '#4fd1c5',
    500: '#38b2ac',
    600: '#319795',
    700: '#2c7a7b',
    800: '#285e61',
    900: '#234e52',
  },
  blue: {
    100: '#ebf8ff',
    200: '#bee3f8',
    300: '#90cdf4',
    400: '#63b3ed',
    500: '#4299e1',
    600: '#3182ce',
    700: '#2b6cb0',
    800: '#2c5282',
    900: '#2a4365',
  },
  indigo: {
    100: '#ebf4ff',
    200: '#c3dafe',
    300: '#a3bffa',
    400: '#7f9cf5',
    500: '#667eea',
    600: '#5a67d8',
    700: '#4c51bf',
    800: '#434190',
    900: '#3c366b',
  },
  purple: {
    100: '#faf5ff',
    200: '#e9d8fd',
    300: '#d6bcfa',
    400: '#b794f4',
    500: '#9f7aea',
    600: '#805ad5',
    700: '#6b46c1',
    800: '#553c9a',
    900: '#44337a',
  },
  pink: {
    100: '#fff5f7',
    200: '#fed7e2',
    300: '#fbb6ce',
    400: '#f687b3',
    500: '#ed64a6',
    600: '#d53f8c',
    700: '#b83280',
    800: '#97266d',
    900: '#702459',
  },
}

const theme = new Theme({
  name: 'light',
  // selectors: ['html'],
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
    borderColor: {
      card: '#f0f000',
      menu: '#ff00ff',
      divider: '#00ffff',
      form: '#ff0000'
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
    }
  }
})

module.exports = theme