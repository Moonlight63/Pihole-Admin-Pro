<script setup>
import { useStore } from 'vuex'
const store = useStore()

store.commit('user', {
  name: 'John Doe',
  email: 'john@example.com',
  avatar:
    'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93'
})
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition || 'fade'">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.fade-enter-active {
  z-index: 50;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active,
.bounce-leave-active {
  transition: opacity 400ms ease;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.bounce-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  -webkit-animation: bounce-in 750ms;
  animation: bounce-in 750ms;
  z-index: 50;
}

@-webkit-keyframes bounce-in {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  40%,
  70%,
  90%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-10%);
    transform: translateY(-10%);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: translateY(-5%);
    transform: translateY(-5%);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  95% {
    -webkit-transform: translateY(-1%);
    transform: translateY(-1%);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
@keyframes bounce-in {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  40%,
  70%,
  90%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-10%);
    transform: translateY(-10%);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: translateY(-5%);
    transform: translateY(-5%);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  95% {
    -webkit-transform: translateY(-1%);
    transform: translateY(-1%);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
</style>
