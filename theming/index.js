const plugin = require('tailwindcss/plugin')
// const themeSwapper = require('tailwindcss-theme-swapper')
    // , glob = require('glob')
    // , path = require('path')

// Object.defineProperty(exports, "__esModule", { value: true })
// exports.Theme = void 0
// class Theme {
//     constructor(options) {
//         this.theme = options
//     }
//     get() {
//         return this.theme
//     }
// }
// exports.Theme = Theme


function kebabCase (string) {
  return string
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/\s+/g, '-')
  .toLowerCase()
}

function flatten (
  obj,
  transformKeyCallback = key => key.join('.'),
  previousKeys = [],
  flattened = {}
) {
  return Object
    .entries(obj)
    .reduce((acc, [key, value]) => {
      const keyPath = [...previousKeys, key]

      if (typeof value === 'object') {
        flatten(value, transformKeyCallback, keyPath, acc)
      } else {
        flattened[transformKeyCallback(keyPath)] = value
      }
      return acc
    }, flattened)
}

const getTailwindKeyName = keys =>
  keys.filter(key => key.toLowerCase() !== 'default').map(kebabCase).join('-')


function getThemeAsCustomProps (
  tokenValues
) {
  return flatten(
    tokenValues,
    keys => `--${getTailwindKeyName(keys)}`
  )
}

function resolveThemeConfig (
  tokenValue,
  previousKeys = []
) {
  return Object
    .entries(tokenValue)
    .reduce((acc, [key, value]) => {
      const keyPath = [ ...previousKeys, key ]
      return {
        ...acc,
        [key]: typeof value === "object"
          ? resolveThemeConfig(value, keyPath)
          : `var(--${getTailwindKeyName(keyPath)}, ${value})`
      }
    }, {})
}

const themeSwap = (options = defaultOptions) => ({ addBase }) => {
  const { themes } = options

  themes.forEach(themeConfig => {
    const { theme, mediaQuery, selectors = [] } = themeConfig

    if (selectors.length > 0) {
      addBase({
        [selectors.join(', ')]: getThemeAsCustomProps(theme)
      })
    }
  })
}

const swapper = plugin.withOptions(
  themeSwap,
  (options = defaultOptions) => {
    const baseTheme = options
      .themes
      .find(theme => theme.name === 'base')

    return {
      theme: {
        extend: baseTheme && baseTheme.theme
          ? resolveThemeConfig(baseTheme.theme)
          : {}
      }
    }
  }
)

const getPlugin = () => {

    const themes = []

    // glob.sync('./theming/themes/*.js').forEach((file) => {
    //     console.log(path.resolve(file))
    //     themes.push(require(path.resolve(file)).theme)
    // });

    
    const names = ['button*']
    require('./themes/index').forEach(file => {
        // console.log(file);
        themes.push(file.theme)
        names.push(file.theme.name)
    })
    // console.log(JSON.stringify(themes, null, 2));

    const thing = swapper({
        themes: themes
    })
    // console.log(
    //     '🚀 ~ file: theme.config.js ~ line 54 ~ swapt ~ thing',
    //     JSON.stringify(thing, null, 2)
    // )
    thing.config.safelist = names
    return thing
}

module.exports = getPlugin()