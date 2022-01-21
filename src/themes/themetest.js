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
  // console.log(newObj)
  return newObj
}

function buildThemeVars (names, themeName) {
  const newObj = { }

  for (const className in names) {
    newObj[`--${className.replace(':', '-')}`] = names[className]
  }
  // console.log(newObj)
  return { [`.${themeName}`]: newObj }
}

let cycles = {}

function makeKeyRoot (theme, key, parent, cycle = 0) {
  const ordered = {}
  const intcycle = cycle
  cycles[intcycle] = theme
  for (const child in theme) {
    const obj = theme[child]
    if (child === key) {
      console.log(parent + child)
      ordered[parent] = { ...ordered[parent], ...obj }
      break
    } else {
      if (Object.keys(obj).length !== 0 && Object.getPrototypeOf(obj) === Object.prototype) {
        // const children = makeKeyRoot(obj, key, child, intcycle + 1)
        // if (Object.keys(children).length !== 0 && Object.getPrototypeOf(children) === Object.prototype) {
        //   ordered[parent] = { ...ordered[parent], ...makeKeyRoot(obj, key, child, intcycle + 1000) }
        // }
        // const children = makeKeyRoot(obj, key, child, intcycle + 1)
        // if (Object.keys(children).length !== 0 && Object.getPrototypeOf(children) === Object.prototype) {
        ordered[parent] = { ...ordered[parent], ...makeKeyRoot(obj, key, child, intcycle + 1) }
        // }
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
    // console.log(parent)

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
  // console.log(classes)
  return classes
}

const theme = () => {
  return {
    black: 'black',
    white: 'white',
    blue: {
      500: 'blue500'
    },
    gray: {
      200: 'gray200'
    },
    slate: {
      800: 'slate800',
      300: 'slate300',
      900: 'slate900'
    }
  }
}

const classes = buildObj(Theme(theme('colors')))
const themeVars = buildThemeVars(Theme(theme('colors')), 'theme-default')

const text = makeKeyRoot(classes, 'text', 'text')
cycles = {}
const bg = makeKeyRoot(classes, 'background', 'bg')

const newObj = {
  ...text,
  ...bg
}

const newStuff = createClasses(newObj)
console.log(JSON.stringify(newObj))
