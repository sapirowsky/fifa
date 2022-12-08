<script setup>
import { useSidebarStore } from "~/stores/sidebar";
const { currentSidebarTab } = toRefs(useSidebarStore());

const props = defineProps({
  group: String,
  name: String,
});
</script>
<template>
  <div v-if="currentSidebarTab == name" class="px-4 py-6">
    <h2 class="text-xl">Grupa {{ group }}</h2>
  </div>
</template>