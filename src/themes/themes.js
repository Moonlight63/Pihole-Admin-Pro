const plugin = require('tailwindcss/plugin')
const Theme = require('./theme-default')

function buildObj (names) {
  const newObj = {}

  for (const className in names) {
    const levels = className.split('-')

    const recurse = (target, idx) => {
      if (idx === levels.length - 1) {
        target[levels[idx]] = `var(--${className.replace(':', '-')})`
      } else {
        target[levels[idx]] = recurse(Object.assign({}, target[levels[idx]]), idx + 1)
      }
      return target
    }
    recurse(newObj, 0)
  }
  return newObj
}

function buildThemeVars (names, themeName) {
  const newObj = { }

  for (const className in names) {
    newObj[`--${className.replace(':', '-')}`] = names[className]
  }
  return { [`.${themeName}`]: newObj }
}

function makeKeyRoot (theme, key, parent) {
  const ordered = {}
  for (const child in theme) {
    const obj = theme[child]
    if (child === key) {
      ordered[parent] = { ...ordered[parent], ...obj }
    } else {
      if (Object.keys(obj).length !== 0 && Object.getPrototypeOf(obj) === Object.prototype) {
        ordered[parent] = { ...ordered[parent], ...makeKeyRoot(obj, key, child) }
      }
    }
  }
  return ordered
}

function createClasses (theme, root, parent, property) {
  let classes = {}

  for (const child in theme) {
    if (root === undefined) {
      switch (child) {
        case 'bg':
          property = 'background-color'
          break
        case 'text':
          property = 'color'
          break
        default:
          property = null
          break
      }
    }

    const obj = {}

    obj[property] = theme[child]

    if (child.includes('light')) {
      if (child.includes('hover')) {
        classes['.' + root + ':hover'] = obj
      } else if (child.includes('focus')) {
        classes['.' + root + ':focus'] = obj
      } else {
        classes['.' + root] = obj
      }
    } else if (child.includes('dark')) {
      if (child.includes('hover')) {
        classes['.dark .' + root + ':hover'] = obj
      } else if (child.includes('focus')) {
        classes['.dark .' + root + ':focus'] = obj
      } else {
        classes['.dark .' + root] = obj
      }
    } else {
      if (Object.keys(theme[child]).length !== 0 && Object.getPrototypeOf(theme[child]) === Object.prototype) {
        const children = createClasses(theme[child], (root ? root + '-' + child : child), child, property)
        if (Object.keys(children).length !== 0 && Object.getPrototypeOf(children) === Object.prototype) {
          classes = { ...classes, ...children }
        }
      }
    }
  }
  return classes
}

module.exports = plugin(function ({ addUtilities, theme }) {
  // Add your custom styles here

  const classes = buildObj(Theme(theme('colors')))
  const themeVars = buildThemeVars(Theme(theme('colors')), 'theme-default')

  const newObj = {
    ...makeKeyRoot(classes, 'text', 'text'),
    ...makeKeyRoot(classes, 'background', 'bg')
  }

  const newStuff = createClasses(newObj)
  addUtilities({ ...newStuff, ...themeVars })
})
