<template>
  <div class="container space-y-4 mb-8">
    <div class="overflow-auto">
      <table class="w-full">
        <h1 class="text-xl">
          Grupa <span class="h-6 w-3 bg-gray-400 animate-pulse"></span>
        </h1>
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
          <tr class="hover:bg-white dark:hover:bg-black">
            <td>
              <div
                class="flex space-x-1 h-6 w-48 bg-gray-400 animate-pulse"
              ></div>
            </td>
            <td class="w-3 h-6 bg-gray-400 animate-pulse"></td>
            <td class="w-3 h-6 bg-gray-400 animate-pulse"></td>
            <td class="w-3 h-6 bg-gray-400 animate-pulse"></td>
            <td class="w-3 h-6 bg-gray-400 animate-pulse"></td>
            <td class="w-3 h-6 bg-gray-400 animate-pulse"></td>
            <td class="w-3 h-6 bg-gray-400 animate-pulse"></td>
            <td class="w-3 h-6 bg-gray-400 animate-pulse"></td>
            <td class="w-3 h-6 bg-gray-400 animate-pulse"></td>
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

