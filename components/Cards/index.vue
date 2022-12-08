<script setup>
const props = defineProps({
  group: String,
});

const data = await useFetch("/api/findStandings", {
  method: "POST",
  body: {
    group: props.group,
  },
});

const standings = data.data.value[0].teams;
</script>
<template>
  <div
    v-for="e in standings"
    :key="e.name_pl"
    class="
      w-full
      h-20
      mt-2
      py-2
      px-4
      border border-darky-white
      dark:border-indigo-800
      rounded-lg
      flex flex-col
    "
  >
    <div class="w-full h-1/2 flex justify-between items-center">
      {{ e.name_pl }} <NuxtImg class="w-10 h-fit" :src="e.flag" preset="flag" />
    </div>
    <div class="w-full h-1/2">
      <div></div>
    </div>
  </div>
</template>