<script setup>
const getData = async () => {
  const data = await useFetch("/api/findStandings", {
    method: "GET",
  });
  return data.data.value;
};
const standings = await getData();
standings.forEach((e) => {
  if (
    e.teams.filter((e) => {
      if (e.name_pl !== "Urugwaj") {
        return e;
      }
    }).length === e.teams.length
  ) {
    e.teams.sort((a, b) => {
      const n = b.pts - a.pts;
      if (n !== 0) {
        return n;
      }
      return b.gd - a.gd;
    });
  } else {
    e.teams.sort((a, b) => {
      const n = b.pts - a.pts;
      if (n !== 0) {
        return n;
      }
      return b.ga - a.ga;
    });
  }
});

const router = useRouter();
const moveTo = (path) => {
  router.push({ path });
};
</script>
<template>
  <div class="container space-y-4 mb-8">
    <div v-for="item in standings" :key="item.id" class="overflow-auto">
      <h1 class="text-xl">Grupa {{ item.group }}</h1>
      <table class="w-full">
        <tbody>
          <tr class="">
            <td>Drużyna</td>
            <td>
              <div class="group flex relative justify-center">
                <span class="sr-only">Rozegrane Mecze</span>
                <span>RM</span>
                <span
                  class="
                    group-hover:opacity-100
                    transition-opacity
                    bg-gray-800
                    text-gray-100
                    px-1
                    text-sm
                    rounded
                    absolute
                    left-1/2
                    -translate-x-1/2
                    translate-y-2
                    opacity-0
                    m-4
                    mx-auto
                  "
                >
                  Rozegrane Mecze
                </span>
              </div>
            </td>
            <td>
              <div class="group flex relative justify-center">
                <span class="sr-only">Wygrane Mecze</span>
                <span>W</span>
                <span
                  class="
                    group-hover:opacity-100
                    transition-opacity
                    bg-gray-800
                    text-gray-100
                    px-1
                    text-sm
                    rounded
                    absolute
                    left-1/2
                    -translate-x-1/2
                    translate-y-2
                    opacity-0
                    m-4
                    mx-auto
                  "
                >
                  Wygrane Mecze
                </span>
              </div>
            </td>
            <td>
              <div class="group flex relative justify-center">
                <span class="sr-only">Remisy</span>
                <span>R</span>
                <span
                  class="
                    group-hover:opacity-100
                    transition-opacity
                    bg-gray-800
                    text-gray-100
                    px-1
                    text-sm
                    rounded
                    absolute
                    left-1/2
                    -translate-x-1/2
                    translate-y-2
                    opacity-0
                    m-4
                    mx-auto
                  "
                >
                  Remisy
                </span>
              </div>
            </td>
            <td>
              <div class="group flex relative justify-center">
                <span class="sr-only">Przegrane</span>
                <span>P</span>
                <span
                  class="
                    group-hover:opacity-100
                    transition-opacity
                    bg-gray-800
                    text-gray-100
                    px-1
                    text-sm
                    rounded
                    absolute
                    left-1/2
                    -translate-x-1/2
                    translate-y-2
                    opacity-0
                    m-4
                    mx-auto
                  "
                >
                  Przegrane
                </span>
              </div>
            </td>
            <td>
              <div class="group flex relative justify-center">
                <span class="sr-only">Zdobyte Bramki</span>
                <span>ZB</span>
                <span
                  class="
                    group-hover:opacity-100
                    transition-opacity
                    bg-gray-800
                    text-gray-100
                    px-1
                    text-sm
                    rounded
                    absolute
                    left-1/2
                    -translate-x-1/2
                    translate-y-2
                    opacity-0
                    m-4
                    mx-auto
                  "
                >
                  Zdobyte Bramki
                </span>
              </div>
            </td>
            <td>
              <div class="group flex relative justify-center">
                <span class="sr-only">Stracone Bramki</span>
                <span>SB</span>
                <span
                  class="
                    group-hover:opacity-100
                    transition-opacity
                    bg-gray-800
                    text-gray-100
                    px-1
                    text-sm
                    rounded
                    absolute
                    left-1/2
                    -translate-x-1/2
                    translate-y-2
                    opacity-0
                    m-4
                    mx-auto
                  "
                >
                  Stracone Bramki
                </span>
              </div>
            </td>
            <td>
              <div class="group flex relative justify-center">
                <span class="sr-only">Różnica Bramek</span>
                <span>RB</span>
                <span
                  class="
                    group-hover:opacity-100
                    transition-opacity
                    bg-gray-800
                    text-gray-100
                    px-1
                    text-sm
                    rounded
                    absolute
                    left-1/2
                    -translate-x-1/2
                    translate-y-2
                    opacity-0
                    m-4
                    mx-auto
                  "
                >
                  Różnica Bramek
                </span>
              </div>
            </td>
            <td>
              <div class="group flex relative justify-center">
                <span class="sr-only">Punkty</span>
                <span>Pkt</span>
                <span
                  class="
                    group-hover:opacity-100
                    transition-opacity
                    bg-gray-800
                    text-gray-100
                    px-1
                    text-sm
                    rounded
                    absolute
                    left-1/2
                    -translate-x-1/2
                    translate-y-2
                    opacity-0
                    m-4
                    mx-auto
                  "
                >
                  Punkty
                </span>
              </div>
            </td>
          </tr>
          <tr
            v-for="(team, i) in item.teams"
            :key="team.team_id"
            class="hover:bg-white dark:hover:bg-black cursor-pointer"
            @click="moveTo('/kraje/' + team.name_pl)"
          >
            <td>
              <div class="flex space-x-1 w-48">
                <span
                  v-if="i < 2"
                  class="absolute border-l border-indigo-500 h-6"
                ></span>
                <span>{{ i + 1 }}</span>
                <NuxtImg :src="team.flag" class="w-6 h-6" preset="flag" />
                <h2>{{ team.name_pl }}</h2>
              </div>
            </td>
            <td>{{ team.mp }}</td>
            <td>{{ team.w }}</td>
            <td>{{ team.d }}</td>
            <td>{{ team.l }}</td>
            <td>{{ team.gf }}</td>
            <td>{{ team.ga }}</td>
            <td>{{ team.gd }}</td>
            <td>{{ team.pts }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
td:not(:first-child) {
  @apply text-center p-2;
}
td:not(:nth-child(-n + 2)) {
  @apply border-l border-indigo-500;
}
</style>

