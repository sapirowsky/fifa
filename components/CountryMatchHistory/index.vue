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
const target = ref(null);
const dropDownOpen = ref(false);
useClickOutside(target, () => {
  dropDownOpen.value = false;
});
</script>
<template>
  <article class="w-3/4 hidden lg:block">
    <div
      v-for="(match, i) in matches"
      :key="match.id"
      class="w-full flex justify-between p-4"
      :class="
        (i + 1) % 2
          ? $colorMode.preference == 'dark'
            ? 'bg-gray-500'
            : ''
          : $colorMode.preference == 'dark'
          ? ''
          : 'bg-gray-400'
      "
    >
      <div class="w-60 flex flex-col justify-between">
        <div class="w-9 h-6">
          <NuxtImg class="w-full h-full" :src="match.away_flag" preset="flag" />
        </div>

        <span class="w-48"> {{ match.away_team_name }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span> {{ match.away_score }} : {{ match.home_score }}</span>
        <span>Dzień turnieju: {{ match.matchday }}</span>
      </div>
      <div class="w-60 flex flex-col justify-between items-end">
        <div class="w-9 h-6">
          <NuxtImg class="w-full h-full" :src="match.home_flag" preset="flag" />
        </div>

        <span class="w-48 flex justify-end"> {{ match.home_team_name }}</span>
      </div>
    </div>
  </article>
  <article
    class="
      w-3/4
      lg:hidden
      divide-y-2 divide-lighty-black
      dark:divide-darky-white
    "
  >
    <div v-for="match in matches" :key="match.id">
      <div class="flex flex-col p-2 gap-2">
        <div class="flex justify-between">
          <div class="flex gap-2">
            <NuxtImg
              :src="match.home_flag"
              class="w-12 object-contain"
              preset="flag"
            />
            <p>{{ match.home_team_name }}</p>
          </div>
          <p>{{ match.home_score }}</p>
        </div>
        <div class="flex justify-between">
          <div class="flex gap-2">
            <NuxtImg
              :src="match.away_flag"
              class="w-12 object-contain"
              preset="flag"
            />
            <p>{{ match.away_team_name }}</p>
          </div>
          <p>{{ match.away_score }}</p>
        </div>
        <p>Dzień meczu: {{ match.matchday }}</p>
      </div>
    </div>
  </article>
  <!-- <div ref="target" class="dropdown">
    <button class="select w-full" @click="dropDownOpen = !dropDownOpen">
      <span class="name">Grupy</span>
      <div class="caret"></div>
    </button>
    <ul class="menu" :class="dropDownOpen ? 'menu-open' : ''">
      <li>Grupa A</li>
      <li>Grupa B</li>
    </ul>
  </div> -->
</template>
<style scoped>
.dropdown {
  @apply min-w-[15rem] relative m-8;
}
.dropdown * {
  @apply box-border;
}
.select {
  @apply bg-black text-darky-white flex justify-between items-center border-2 border-black border-solid rounded p-4 cursor-pointer transition-colors;
}
.menu {
  @apply list-none px-1 py-2 bg-slate-600 rounded shadow absolute top-12 left-1/2 w-full -translate-x-1/2 opacity-0 hidden transition-all z-10;
}
.menu-open {
  @apply block opacity-100;
}
</style>