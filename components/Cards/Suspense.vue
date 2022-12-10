<template>
  <div
    class="
      w-full
      h-24
      mt-2
      py-2
      px-4
      border border-darky-white
      dark:border-indigo-800
      rounded-lg
      flex flex-col
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
      <p class="text-shadow w-20 h-4 animate-pulse bg-gray-500"></p>
      <div
        class="
          w-9
          h-4/5
          object-cover
          border border-indigo-100
          dark:border-indigo-800
          rounded
          bg-gray-500
          animate-pulse
        "
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
        <span class="w-2 h-6 bg-gray-500 animate-pulse"></span>
      </div>
      <div class="h-full w-full flex flex-col justify-center items-center p-1">
        <div>
          <span class="sr-only">Wygrane Mecze</span>
          <span>W</span>
        </div>
        <span class="w-2 h-6 bg-gray-500 animate-pulse"></span>
      </div>
      <div class="h-full w-full flex flex-col justify-center items-center p-1">
        <div>
          <span class="sr-only">Remisy</span>
          <span>R</span>
        </div>
        <span class="w-2 h-6 bg-gray-500 animate-pulse"></span>
      </div>
      <div class="h-full w-full flex flex-col justify-center items-center p-1">
        <div>
          <span class="sr-only">Przegrane</span>
          <span>P</span>
        </div>
        <span class="w-2 h-6 bg-gray-500 animate-pulse"></span>
      </div>
      <div class="h-full w-full flex flex-col justify-center items-center p-1">
        <div>
          <span class="sr-only">Zdobyte Bramki</span>
          <span>ZB</span>
        </div>
        <span class="w-2 h-6 bg-gray-500 animate-pulse"></span>
      </div>
      <div class="h-full w-full flex flex-col justify-center items-center p-1">
        <div>
          <span class="sr-only">Punkty</span>
          <span>PKT</span>
        </div>
        <span class="w-2 h-6 bg-gray-500 animate-pulse"></span>
      </div>
    </div>
  </div>
</template>