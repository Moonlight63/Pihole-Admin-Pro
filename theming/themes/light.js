const Theme = require('../Theme')
const Pallet = require('./pallets/tailwind')
const Color = require('color')
const Base = require('./base')

const backgroundColors = {
  menu: Pallet.slate[200],
  // Should the menu items just be the same as 'ghost buttons' or keep independant styles? It feels verbose.
  // 'menu-item': '#00000000',
  // 'menu-subitem': Color(Base.baseColors.ghost).lighten(0.2).alpha(0.1).hexa(),
  // 'menu-item-active': Base.baseColors.primary,
  // 'menu-subitem-active': Base.baseColors.primary,
  // 'menu-item-hocus': Color(Base.baseColors.ghost).lighten(0.2).alpha(0.1).hexa(),
  // 'menu-subitem-hocus': Color(Base.baseColors.ghost).lighten(0.2).alpha(0.2).hexa()
}

const textColors = {
  'on-menu': Pallet.slate[800],
  'on-menu-active': Pallet.slate[900],
  'on-menu-muted': Pallet.slate[500],
}

const theme = new Theme({
  name: 'light',
  theme: {
    backgroundColor: {
      ...backgroundColors
    },
    textColor: {
      ...textColors,
    },
    borderColor: {
      menu: backgroundColors.menu,
      'menu-divider': textColors['on-menu-muted'],
    }
  }
})

module.exports = theme