<script setup>
import menu from '@/menu.js'

import { useGlobal } from '@/stores/global'
import { useServer } from '@/stores/server';
import { useSession } from '@/stores/session';
import { useRouter } from 'vue-router';

const store = useGlobal()

const makeMenu = computed(() => {
  return [
    'General',
    [
      {
        to: '/',
        icon: 'mdi:desktop-mac',
        label: 'Dashboard'
      }
    ],
    'Examples',
    [
      {
        to: '/tables',
        label: 'Tables',
        icon: 'mdi:table',
        updateMark: true
      },
      {
        to: '/forms',
        label: 'Forms',
        icon: 'mdi:square-edit-outline'
      },
      {
        to: '/ui',
        label: 'UI',
        icon: 'mdi:television-guide'
      },
      {
        to: '/responsive',
        label: 'Responsive',
        icon: 'mdi:responsive'
      },
      {
        to: '/profile',
        label: 'Profile',
        icon: 'mdi:account-circle'
      },
      ...((!useSession().valid && useServer().connected) ? [{
        to: '/login',
        label: 'Login',
        icon: 'mdi:lock'
      }] : []),
      {
        to: '/error',
        label: 'Error',
        icon: 'mdi:alert-circle'
      },
      {
        label: 'Submenus',
        subLabel: 'Submenus Example',
        icon: 'mdi:view-list',
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
        icon: 'mdi:monitor-shimmer',
        target: '_blank'
      },
      {
        href: 'https://github.com/justboil/admin-one-vue-tailwind',
        label: 'GitHub',
        icon: 'mdi:github',
        target: '_blank'
      }
    ]
  ]
})
</script>

<template>
  <div class="flex justify-center bg-main">
    <div
      class="relative w-full h-screen overflow-hidden shadow-xl shadow-black pt-14 xl:pl-60"
      :class="{ 'max-w-screen-2xl': store.lockWidth }"
    >
      <AsideMenu :menu="makeMenu" :menuNew="makeMenu" />
      <div
        class="absolute top-0 left-0 w-full h-full pt-14 xl:pl-60 transition-position"
        :class="{ 'ml-60 lg:ml-0': store.menuActive }"
      >
        <NavBar />
        <div
          class="relative flex flex-col w-full h-full min-h-full overflow-hidden overflow-y-auto"
        >
          <div class="relative flex flex-row flex-grow flex-nowrap">
            <RouterView v-slot="{ Component, route }">
              <Transition :name="route.meta.transition || 'slide-up'">
                <div :key="route.path" class="w-full">
                  <Component :is="Component" :key="route.path" />
                </div>
              </Transition>
            </RouterView>
          </div>
          <FooterBar />
        </div>

        <Transition
          enterActiveClass="transition duration-150 ease-in"
          enterFromClass="opacity-0"
          enterToClass="opacity-100"
          leaveActiveClass="transition duration-150 ease-in"
          leaveFromClass="opacity-100"
          leaveToClass="opacity-0"
        >
          <Overlay
            v-show="store.menuActive"
            class="hidden lg:block xl:hidden"
            zIndex="z-30"
            @overlayClick="store.toggleMenu(false)"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.25s ease-out;
  flex: none;
}

.slide-up-enter-active {
  margin-left: -100%;
}

.slide-up-enter-from {
  transform: translateY(100%);
}
.slide-up-leave-to {
  transform: translateY(-100%);
}
</style>
