<script setup>
import { useSidebarStore } from "~/stores/sidebar";

const { isSidebarOpen, currentSidebarTab, isSubHeaderOpen } = toRefs(
  useSidebarStore()
);

const props = defineProps({
  group: String,
  name: String,
});
</script>

<template>
  <div>
    <button
      @click="
        isSidebarOpen && currentSidebarTab == name
          ? (isSidebarOpen = false)
          : (isSidebarOpen = true);
        currentSidebarTab = name;
      "
      class="
        p-2
        w-10
        transition-colors
        rounded-lg
        shadow-md
        dark:shadow-indigo-900
        hover:bg-indigo-800
        dark:hover:bg-indigo-500
        hover:text-darky-white
        dark:hover:text-lighty-black
        focus:outline-none
        focus:ring
        focus:ring-indigo-500
        focus:ring-offset-white
        dark:focus:ring-offset-black
        focus:ring-offset-2
        text-gray-500
        bg-white
        dark:bg-black
        mt-2
      "
      :class="
        isSidebarOpen && currentSidebarTab == name
          ? 'text-white bg-indigo-600'
          : 'text-gray-500 bg-white'
      "
    >
      <span class="sr-only">Grupa {{ group }}</span>
      {{ group }}
    </button>
  </div>
</template>