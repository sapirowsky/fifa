<script setup>
const props = defineProps({
  group: String,
});
</script>
<template>
  <h2 class="text-xl">Grupa {{ group }}</h2>
  <div class="h-full w-full">
    <Suspense>
      <Cards :group="group" />
      <template #fallback> Loading.. </template>
    </Suspense>
  </div>
</template>