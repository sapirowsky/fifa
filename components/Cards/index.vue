<script setup>
import { useSidebarStore } from "~~/stores/sidebar";
const { isSidebarOpen, isSubHeaderOpen } = toRefs(useSidebarStore());

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
if (
  standings.filter((e) => {
    if (e.name_pl !== "Urugwaj") {
      return e;
    }
  }).length === standings.length
) {
  standings.sort((a, b) => {
    const n = b.pts - a.pts;
    if (n !== 0) {
      return n;
    }
    return b.gd - a.gd;
  });
} else {
  standings.sort((a, b) => {
    const n = b.pts - a.pts;
    if (n !== 0) {
      return n;
    }
    return b.ga - a.ga;
  });
}
const router = useRouter();
const moveTo = (path) => {
  router.push({ path });
};
</script>
<template>
  <div
    v-for="(e, i) in standings"
    :key="e.name_pl"
    class="
      w-full
      h-28
      mt-2
      py-2
      px-4
      border border-darky-white
      dark:border-indigo-800
      rounded-lg
      flex flex-col
      cursor-pointer
    "
    :class="
      i < 2
        ? 'bg-green-400 bg-opacity-60 hover:bg-opacity-80'
        : 'bg-red-500 bg-opacity-60 hover:bg-opacity-80'
    "
    @click="
      isSidebarOpen = false;
      isSubHeaderOpen = false;
      moveTo('/kraje/' + e.name_pl);
    "
  >
    <div
      class="
        w-full
        h-2/5
        flex
        justify-between
        items-center
        border-b border-black
        dark:border-white
      "
    >
      <p>{{ e.name_pl }}</p>
      <NuxtImg
        class="
          w-9
          h-4/5
          object-cover
          border border-indigo-100
          dark:border-indigo-800
          rounded
        "
        :src="e.flag"
        preset="flag"
      />
    </div>
    <div
      class="
        w-full
        h-3/5
        flex
        justify-between
        divide-x-2 divide-black
        dark:divide-white
      "
    >
      <div class="h-full w-full flex flex-col justify-center items-center p-1">
        <div class="group flex relative">
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
            >Rozegrane Mecze</span
          >
        </div>
        <span>{{ e.mp }}</span>
      </div>
      <div class="h-full w-full flex flex-col justify-center items-center p-1">
        <div class="group flex relative">
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
            >Wygrane Mecze</span
          >
        </div>
        <span>{{ e.w }}</span>
      </div>
      <div class="h-full w-full flex flex-col justify-center items-center p-1">
        <div class="group flex relative">
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
            >Remisy</span
          >
        </div>
        <span>{{ e.d }}</span>
      </div>
      <div class="h-full w-full flex flex-col justify-center items-center p-1">
        <div class="group flex relative">
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
            >Przegrane</span
          >
        </div>
        <span>{{ e.l }}</span>
      </div>
      <div class="h-full w-full flex flex-col justify-center items-center p-1">
        <div class="group flex relative">
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
            >Zdobyte Bramki</span
          >
        </div>
        <span>{{ e.gf }}</span>
      </div>
      <div class="h-full w-full flex flex-col justify-center items-center p-1">
        <div class="group flex relative">
          <span class="sr-only">Punkty</span>
          <span>PKT</span>
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
            >Punkty</span
          >
        </div>
        <span>{{ e.pts }}</span>
      </div>
    </div>
  </div>
</template>