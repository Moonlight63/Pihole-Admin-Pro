<script setup>
const titleStack = ref(['Admin', 'Responsive layout'])
</script>

<template>
  <TitleBar :titleStack="titleStack" />

  <HeroBar>Responsive layout</HeroBar>

  <TitledSection first> Mobile & Tablet </TitledSection>

  <MainSection>
    <div
      class="overflow-hidden border-8 border-white shadow-2xl md:w-10/12 md:mx-auto rounded-3xl"
    >
      <img
        src="https://static.justboil.me/templates/one/one-tailwind-vue-mobile.png"
        class="block"
      />
    </div>
  </MainSection>

  <TitledSection> Small laptop 1024px </TitledSection>

  <MainSection>
    <div
      class="overflow-hidden border-8 border-white shadow-2xl md:w-10/12 md:mx-auto rounded-3xl"
    >
      <img
        src="https://static.justboil.me/templates/one/one-tailwind-vue-1024.png"
        class="block"
      />
    </div>
  </MainSection>

  <MainSection>
    <div
      class="overflow-hidden border-8 border-white shadow-2xl md:w-10/12 md:mx-auto rounded-3xl"
    >
      <img
        src="https://static.justboil.me/templates/one/one-tailwind-vue-1024-menu-open.png"
        class="block"
      />
    </div>
  </MainSection>

  <TitledSection> Laptop & desktop </TitledSection>

  <MainSection>
    <div
      class="overflow-hidden border-8 border-white shadow-2xl md:w-10/12 md:mx-auto rounded-3xl"
    >
      <img
        src="https://static.justboil.me/templates/one/one-tailwind-vue-widescreen.png"
        class="block"
      />
    </div>
  </MainSection>

  <BottomOtherPagesSection />
</template>

<route lang="yaml">
meta:
  layout: 'default'
  title: 'Responsive'
  icon: 'mdi:desktop-mac'
</route>
