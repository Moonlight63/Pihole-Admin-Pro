const plugin = require('tailwindcss/plugin')
const Theme = require('./theme-default')

function buildObj (names) {
  const newObj = {}

  for (const className in names) {
    const levels = className.split('-')

    const recurse = (target, idx) => {
      if (idx === levels.length - 1) {
        target[levels[idx]] = `var(--${className})`
      } else {
        target[levels[idx]] = recurse(Object.assign({}, target[levels[idx]]), idx + 1)
      }
      return target
    }
    recurse(newObj, 0)
  }

  return newObj
}

function makeKeyRoot (theme, key, parent) {
  const ordered = {}
  for (const child in theme) {
    const obj = theme[child]

    if (child === key) {
      ordered[parent] = obj
    } else {
      if (Object.keys(obj).length !== 0 && Object.getPrototypeOf(obj) === Object.prototype) {
        const children = makeKeyRoot(obj, key, child)
        if (Object.keys(children).length !== 0 && Object.getPrototypeOf(children) === Object.prototype) {
          ordered[parent] = { ...ordered[parent], ...makeKeyRoot(obj, key, child) }
        }
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

    if (child === 'light') {
      if (parent === 'hover') {
        classes['.' + root.slice(0, -6) + ':hover'] = obj
      } else if (parent === 'focus') {
        classes['.' + root.slice(0, -6) + ':focus'] = obj
      } else {
        classes['.' + root] = obj
      }
    } else if (child === 'dark') {
      if (parent === 'hover') {
        classes['.dark .' + root.slice(0, -6) + ':hover'] = obj
      } else if (parent === 'focus') {
        classes['.dark .' + root.slice(0, -6) + ':focus'] = obj
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

module.exports = plugin(function ({ addUtilities, addComponents, e, prefix, config, theme }) {
  // Add your custom styles here

  const classes = buildObj(Theme(theme('colors')))

  const newObj = {
    ...makeKeyRoot(classes, 'text', 'text'),
    ...makeKeyRoot(classes, 'background', 'bg')
  }

  const newStuff = createClasses(newObj)
  addUtilities(newStuff)
})
