
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
  return {
    'main-background-light': colors.blue[500],
    'main-background-dark': colors.blue[500],
    'main-text-light': colors.blue[500],
    'main-text-dark': colors.blue[500],
    'panel-background-light': colors.blue[500],
    'panel-background-dark': colors.blue[500],
    'menu-background-light': colors.blue[500],
    'menu-background-dark': colors.blue[500],
    'menu-text-light': colors.blue[500],
    'menu-text-dark': colors.blue[500],
    'menu-items-background-light': colors.blue[500],
    'menu-items-background-dark': colors.blue[500],
    'menu-items-background-light-hover': colors.blue[500],
    'menu-items-background-dark-hover': colors.blue[500],
    'menu-items-background-light-focus': colors.blue[500],
    'menu-items-background-dark-focus': colors.blue[500],
    'menu-items-subitems-background-light': colors.blue[500],
    'menu-items-subitems-background-dark': colors.blue[500],
    'menu-items-subitems-background-light-hover': colors.blue[500],
    'menu-items-subitems-background-dark-hover': colors.blue[500],
    'menu-items-subitems-background-light-focus': colors.blue[500],
    'menu-items-subitems-background-dark-focus': colors.blue[500]
  }
}
