<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isSubmenuList: Boolean
})

const emit = defineEmits(['menu-click'])

const isDropdownActive = ref(false)

const componentIs = computed(() => (props.item.to ? 'router-link' : 'a'))

const hasDropdown = computed(() => !!props.item.menu)

const dropdownIcon = computed(() =>
  isDropdownActive.value ? 'mdi:minus' : 'mdi:plus'
)

const itemTo = computed(() => props.item.to || null)

const itemHref = computed(() => props.item.href || null)

const itemTarget = computed(() =>
  componentIs.value === 'a' && props.item.target ? props.item.target : null
)

const menuClick = (event) => {
  emit('menu-click', event, props.item)

  if (hasDropdown.value) {
    isDropdownActive.value = !isDropdownActive.value
  }
}

const styleActive = 'font-bold text-on-menu-active'

const styleInactive = 'text-on-menu'

const enter = (el) => {
  el.style.height = 'auto'
  const height = getComputedStyle(el).height
  el.style.height = 0
  getComputedStyle(el)
  setTimeout(() => {
    el.style.height = height
  })
}

const afterEnter = (el) => {
  el.style.height = 'auto'
}

const leave = (el) => {
  el.style.height = getComputedStyle(el).height
  getComputedStyle(el)
  setTimeout(() => {
    el.style.height = 0
  })
}
</script>

<template>
  <li>
    <Component
      :is="componentIs"
      v-slot="vSlot"
      :to="itemTo"
      :href="itemHref"
      :target="itemTarget"
      class=""
      @click="menuClick"
    >
      <div
        class="flex cursor-pointer mx-menu-items rounded-button hover:bg-ghost-hocus"
        :class="[
          isSubmenuList
            ? 'p-3 text-sm my-1.5 hover:bg-menu-subitem-hocus'
            : 'py-2 hover:bg-menu-item-hocus',
          vSlot && vSlot.isExactActive
            ? isSubmenuList
              ? 'bg-menu-subitem-active'
              : 'bg-menu-item-active'
            : isSubmenuList
            ? 'bg-menu-subitem'
            : 'bg-menu-item'
        ]"
      >
        <UiIconify
          v-if="item.icon"
          :icon="item.icon"
          class="flex-none w-12"
          :class="[vSlot && vSlot.isExactActive ? styleActive : styleInactive]"
        />
        <span
          class="grow"
          :class="[vSlot && vSlot.isExactActive ? styleActive : styleInactive]"
          >{{ item.label }}</span
        >
        <UiIconify
          v-if="hasDropdown"
          :icon="dropdownIcon"
          class="flex-none w-12"
          :class="[vSlot && vSlot.isExactActive ? styleActive : styleInactive]"
        />
      </div>
    </Component>
    <Transition
      enterActiveClass="transition-height duration-250 ease-in overflow-hidden"
      leaveActiveClass="transition-height duration-250 ease-in overflow-hidden"
      @enter="enter"
      @afterEnter="afterEnter"
      @leave="leave"
    >
      <AsideMenuList
        v-if="hasDropdown && isDropdownActive"
        :menu="item.menu"
        :class="{ hidden: !isDropdownActive, block: isDropdownActive }"
        isSubmenuList
      />
    </Transition>
  </li>
</template>
<!-- <style>
.aside-menu-item {
  @apply flex mx-4 cursor-pointer rounded-button hover:bg-ghost-hocus;
  margin-left: var(--spacing-menu-items-margin);
  margin-right: var(--spacing-menu-items-margin);
}
</style> -->