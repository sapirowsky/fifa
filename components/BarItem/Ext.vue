<script setup>
const props = defineProps({
  group: String,
});
</script>
<template>
  <h2 class="text-xl">Grupa {{ group }}</h2>
  <div class="h-full w-full flex flex-col space-y-5 overflow-auto">
    <Suspense>
      <Cards :group="group" />
      <template #fallback> <CardsSuspense /> </template>
    </Suspense>
  </div>
</template>