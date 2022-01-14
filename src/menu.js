import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive
} from '@mdi/js'

export default [
  'General',
  [
    {
      to: '/',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    }
  ],
  'Examples',
  [
    {
      to: '/tables',
      label: 'Tables',
      icon: mdiTable,
      updateMark: true
    },
    {
      to: '/forms',
      label: 'Forms',
      icon: mdiSquareEditOutline
    },
    {
      to: '/ui',
      label: 'UI',
      icon: mdiTelevisionGuide
    },
    {
      to: '/responsive',
      label: 'Responsive',
      icon: mdiResponsive
    },
    {
      to: '/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    },
    {
      to: '/login',
      label: 'Login',
      icon: mdiLock
    },
    {
      to: '/error',
      label: 'Error',
      icon: mdiAlertCircle
    },
    {
      label: 'Submenus',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Sub-item One'
        },
        {
          label: 'Sub-item Two'
        }
      ]
    }
  ],
  'About',
  [
    {
      href: 'https://justboil.me/tailwind-admin-templates/vue-dashboard/',
      label: 'Premium version',
      icon: mdiMonitorShimmer,
      target: '_blank'
    },
    {
      href: 'https://github.com/justboil/admin-one-vue-tailwind',
      label: 'GitHub',
      icon: mdiGithub,
      target: '_blank'
    }
  ]
]

// export default [
//   'General',
//   [
//     {
//       to: '/',
//       icon: mdiDesktopMac,
//       label: 'Dashboard'
//     },
//     {
//       to: '/somepage',
//       icon: mdiDesktopMac,
//       label: 'Queries'
//     },
//     {
//       to: '/somepage',
//       icon: mdiDesktopMac,
//       label: 'Whitelist'
//     },
//     {
//       to: '/somepage',
//       icon: mdiDesktopMac,
//       label: 'Blacklist'
//     }
//   ],
//   'Data',
//   [
//     {
//       to: '/tables',
//       label: 'Graphics',
//       icon: mdiTable,
//       updateMark: true
//     },
//     {
//       to: '/forms',
//       label: 'Queries',
//       icon: mdiSquareEditOutline
//     }
//   ],
//   'Management',
//   [
//     {
//       label: 'Groups',
//       subLabel: 'Submenus Example',
//       icon: mdiViewList,
//       menu: [
//         {
//           label: 'Sub-item One'
//         },
//         {
//           label: 'Sub-item Two'
//         }
//       ]
//     },
//     {
//       label: 'Disable',
//       subLabel: 'Submenus Example',
//       icon: mdiViewList,
//       menu: [
//         {
//           label: 'Sub-item One'
//         },
//         {
//           label: 'Sub-item Two'
//         }
//       ]
//     },
//     {
//       label: 'Tools',
//       subLabel: 'Submenus Example',
//       icon: mdiViewList,
//       menu: [
//         {
//           label: 'Sub-item One'
//         },
//         {
//           label: 'Sub-item Two'
//         }
//       ]
//     },
//     {
//       label: 'DNS',
//       subLabel: 'Submenus Example',
//       icon: mdiViewList,
//       menu: [
//         {
//           label: 'Sub-item One'
//         },
//         {
//           label: 'Sub-item Two'
//         }
//       ]
//     },
//     {
//       href: 'https://justboil.me/tailwind-admin-templates/vue-dashboard/',
//       label: 'Settings',
//       icon: mdiMonitorShimmer,
//       target: '_blank'
//     },
//     {
//       href: 'https://github.com/justboil/admin-one-vue-tailwind',
//       label: 'Logout',
//       icon: mdiGithub,
//       target: '_blank'
//     }
//   ],
//   'About',
//   [
//     {
//       href: 'https://justboil.me/tailwind-admin-templates/vue-dashboard/',
//       label: 'Documentation',
//       icon: mdiMonitorShimmer,
//       target: '_blank'
//     },
//     {
//       href: 'https://github.com/justboil/admin-one-vue-tailwind',
//       label: 'GitHub',
//       icon: mdiGithub,
//       target: '_blank'
//     },
//     {
//       href: 'https://github.com/justboil/admin-one-vue-tailwind',
//       label: 'Donate',
//       icon: mdiGithub,
//       target: '_blank'
//     }
//   ]
// ]
