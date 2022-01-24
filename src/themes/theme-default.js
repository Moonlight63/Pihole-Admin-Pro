// module.exports = {
//   main: {
//     background: {
//       light: 'var(--color-background-light)',
//       dark: 'var(--color-background-dark)'
//     },
//     text: {
//       light: 'var(--color-text-light)',
//       dark: 'var(--color-text-dark)'
//     }
//   },
//   panel: {
//     background: {
//       light: 'var(--color-panel-background-light)',
//       dark: 'var(--color-panel-background-dark)'
//     }
//   },
//   menu: {
//     background: {
//       light: 'var(--color-menu-background-light)',
//       dark: 'var(--color-menu-background-dark)'
//     },
//     text: {
//       light: 'var(--color-menu-text-light)',
//       dark: 'var(--color-menu-text-dark)'
//     },
//     items: {
//       background: {
//         light: 'var(--color-menu-items-background-light)',
//         dark: 'var(--color-menu-items-background-dark)',

//         hover: {
//           light: 'var(--color-menu-items-background-light-hover)',
//           dark: 'var(--color-menu-items-background-dark-hover)'
//         },
//         focus: {
//           light: 'var(--color-menu-items-background-light-focus)',
//           dark: 'var(--color-menu-items-background-dark-focus)'
//         }
//       },
//       text: {
//         light: 'var(--color-menu-items-text-light)',
//         dark: 'var(--color-menu-items-text-dark)'
//       },
//       subitems: {
//         background: {
//           light: 'var(--color-menu-subitems-background-light)',
//           dark: 'var(--color-menu-subitems-background-dark)',

//           hover: {
//             light: 'var(--color-menu-subitems-background-light-hover)',
//             dark: 'var(--color-menu-subitems-background-dark-hover)'
//           },
//           focus: {
//             light: 'var(--color-menu-subitems-background-light-focus)',
//             dark: 'var(--color-menu-subitems-background-dark-focus)'
//           }
//         }
//       }
//     }
//   }
// }

module.exports = (colors) => {
  const lightMain = colors.gray[100]
  const darkMain = colors.slate[800]
  const lightAccent = colors.white
  const darkAccent = colors.slate[900]
  const darkAccentHover = colors.slate[800]

  const lightTextMain = colors.slate[300]
  const darkTextMain = colors.slate[300]
  const lightTextAccent = colors.slate[300]
  const darkTextAccent = colors.slate[300]
  const lightTextInactive = colors.slate[300]
  const darkTextInactive = colors.slate[300]

  return {
    'main-background-light': lightMain,
    'main-background-dark': darkMain,
    'main-text-light': colors.blue[500],
    'main-text-dark': colors.blue[500],
    'panel-background-light': lightAccent,
    'panel-background-dark': darkAccent,
    'menu-background-light': lightAccent,
    'menu-background-dark': darkAccent,
    'menu-text-light': colors.blue[500],
    'menu-text-dark': colors.white,
    'menu-accent-text-light': colors.gray[600],
    'menu-accent-text-dark': colors.slate[400],
    'menu-items-text-light': colors.gray[800],
    'menu-items-text-dark': colors.slate[400],
    'menu-items-active-text-light': colors.black,
    'menu-items-active-text-dark': colors.white,
    'menu-items-background-light': 'unset',
    'menu-items-background-dark': 'unset',
    'menu-items-active-background-light': colors.blue[500],
    'menu-items-active-background-dark': colors.blue[500],
    'menu-items-background-light:hover': colors.blue[500],
    'menu-items-background-dark:hover': darkAccentHover,
    'menu-items-background-light:focus': colors.blue[500],
    'menu-items-background-dark:focus': darkAccentHover,
    'menu-items-subitems-background-light': colors.gray[100],
    'menu-items-subitems-background-dark': darkAccentHover,
    'menu-items-subitems-background-light:hover': colors.blue[500],
    'menu-items-subitems-background-dark:hover': colors.slate[700],
    'menu-items-subitems-background-light:focus': colors.blue[500],
    'menu-items-subitems-background-dark:focus': colors.slate[700]
  }
}
