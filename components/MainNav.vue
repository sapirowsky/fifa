<script setup>
import { useSidebarStore } from "~~/stores/sidebar";
const { isSidebarOpen } = toRefs(useSidebarStore());
</script>
<template>
  <nav class="flex flex-col h-full">
    <div class="flex items-center justify-center flex-shrink-0 py-10 max-h-36">
      <NuxtLink to="/">
        <NuxtImg
          :src="
            $colorMode.preference === 'dark'
              ? 'fball-logo-dark.png'
              : 'fball-logo-light.png'
          "
          alt="logo"
          class="w-full h-full rounded object-cover"
          preset="logo"
        />
      </NuxtLink>
    </div>
    <div class="flex-1 px-4 space-y-2 overflow-hidden hover:overflow-auto">
      <NuxtLink
        to="/"
        class="
          flex
          items-center
          space-x-2
          transition-colors
          rounded-lg
          group
          hover:bg-indigo-600 hover:text-white
        "
        :class="
          $route.path == '/' ? 'bg-indigo-600 text-white' : 'text-indigo-600'
        "
        @click="isSidebarOpen = false"
      >
        <span
          class="
            p-2
            transition-colors
            rounded-lg
            hover:bg-indigo-700 hover:text-white
          "
          :class="$route.path == '/' ? 'bg-indigo-700 text-white' : ''"
        >
          <UiHome />
        </span>
        <span>Home</span>
      </NuxtLink>
      <NuxtLink
        to="/kraje"
        class="
          flex
          items-center
          space-x-2
          transition-colors
          rounded-lg
          group
          hover:bg-indigo-600 hover:text-white
        "
        :class="
          $route.path == '/kraje'
            ? 'bg-indigo-600 text-white'
            : 'text-indigo-600'
        "
        @click="isSidebarOpen = false"
      >
        <span
          class="
            p-2
            transition-colors
            rounded-lg
            hover:bg-indigo-700 hover:text-white
          "
          :class="$route.path == '/kraje' ? 'bg-indigo-700 text-white' : ''"
        >
          <UiEarth />
        </span>
        <span>Kraje</span>
      </NuxtLink>
    </div>
  </nav>
</template>