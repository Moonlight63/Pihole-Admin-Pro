<template>
  <CardComponent
    class="w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12"
    rounded="rounded-lg"
  >
    <div class="space-y-3">
      <h1 class="text-2xl">Unhandled exception</h1>

      <p>An Error Occurred</p>
    </div>

    <Divider />

    <JbButtons>
      <JbButton label="Done" to="/" color="danger" />
    </JbButtons>
  </CardComponent>
</template>

<route lang="yaml">
meta:
  layout: 'fullscreen'
  title: 'Error'
  icon: 'mdi:desktop-mac'
  bg: 'error'
  transition: 'bounce'
</route>
