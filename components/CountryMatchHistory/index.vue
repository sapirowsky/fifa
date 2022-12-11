<script setup>
const props = defineProps({
  name: String,
});

const { data: matches } = await useFetch("/api/findMatches", {
  method: "POST",
  body: {
    name: props.name,
  },
});
</script>
<template>
  <div v-for="match in matches" :key="match.id">
    {{ match.away_team_name }}
  </div>
</template>