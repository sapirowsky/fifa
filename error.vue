<template>
  <main
    class="
      h-screen
      w-full
      flex flex-col
      justify-center
      items-center
      bg-darky-white
      dark:bg-lighty-black
    "
  >
    <h1
      class="text-9xl font-extrabold text-black dark:text-white tracking-widest"
    >
      {{ error.statusCode }}
    </h1>
    <div
      class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute"
      v-if="error.statusCode == 404"
    >
      Strona nie znaleziona
    </div>
    <div
      class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute"
      v-if="error.statusCode == 500"
    >
      Wewnętrzny błąd serwera
    </div>
    <button class="mt-5">
      <a
        class="
          relative
          inline-block
          text-sm
          font-medium
          text-[#FF6A3D]
          group
          active:text-orange-500
          focus:outline-none focus:ring
        "
      >
        <span
          class="
            absolute
            inset-0
            transition-transform
            translate-x-0.5 translate-y-0.5
            bg-[#FF6A3D]
            group-hover:translate-y-0 group-hover:translate-x-0
          "
        ></span>

        <NuxtLink
          class="relative block px-8 py-3 bg-black border border-current"
          to="/"
        >
          Strona Główna
        </NuxtLink>
      </a>
    </button>
  </main>
</template>
  
  <script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>