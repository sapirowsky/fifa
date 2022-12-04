<script setup>
const setColorMode = (newTheme) => (useColorMode().preference = newTheme);
</script>

<template>
  <button
    aria-label="Zmień motyw"
    class="
      p-2
      mr-4
      text-gray-500
      bg-white
      dark:bg-black
      rounded-lg
      shadow-md
      dark:shadow-indigo-900
      hover:text-gray-600
      focus:outline-none focus:ring focus:ring-white
      dark:focus:ring-black
      focus:ring-offset-gray-100
      dark:focus:ring-offset-lighty-black
      focus:ring-offset-4
    "
    @click="setColorMode($colorMode.preference !== 'dark' ? 'dark' : 'light')"
  >
    <span class="sr-only">Zmiana motywu</span>
    <UiLight v-if="$colorMode.preference === 'dark'" />
    <UiDark v-else />
  </button>
</template>