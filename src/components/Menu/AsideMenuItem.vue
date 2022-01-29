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

const styleActive = 'font-bold text-menu-items-active'

const styleInactive = 'text-menu-items'
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
        class="flex mx-4 rounded-lg cursor-pointer hover:bg-opacity-50 dark:hover:bg-opacity-50"
        :class="[
          isSubmenuList ? 'p-3 text-sm my-1.5' : 'py-2',
          vSlot && vSlot.isExactActive
            ? isSubmenuList
              ? 'bg-menu-items-subitems-active'
              : 'bg-menu-items-active'
            : isSubmenuList
            ? 'bg-menu-items-subitems'
            : 'bg-menu-items'
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
    <AsideMenuList
      v-if="hasDropdown"
      :menu="item.menu"
      :class="{ hidden: !isDropdownActive, block: isDropdownActive }"
      isSubmenuList
    />
  </li>
</template>
