<script setup>
import { useSidebarStore } from "~/stores/sidebar";

const { isSidebarOpen, currentSidebarTab, isSubHeaderOpen } = toRefs(
  useSidebarStore()
);

const groups = [
  { group: "A", name: "groupA" },
  { group: "B", name: "groupB" },
  { group: "C", name: "groupC" },
  { group: "D", name: "groupD" },
  { group: "E", name: "groupE" },
  { group: "F", name: "groupF" },
  { group: "G", name: "groupG" },
  { group: "H", name: "groupH" },
];
const data = [
  {
    group: "A",
    countries: [],
  },
];
</script>
<template>
  <div class="flex min-h-screen antialiased">
    <!-- sidebars -->
    <div class="flex flex-shrink-0 transition-all">
      <div
        v-if="isSidebarOpen"
        @click="isSidebarOpen = false"
        class="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
      ></div>
      <div
        v-if="isSidebarOpen"
        class="fixed inset-y-0 z-10 w-16 bg-white dark:bg-black"
      ></div>

      <!-- Mobile Bottom bar -->
      <nav
        class="
          fixed
          inset-x-0
          bottom-0
          flex flex-row-reverse
          items-center
          justify-between
          px-4
          py-2
          bg-white
          dark:bg-black
          border-t border-indigo-100
          dark:border-indigo-900
          sm:hidden
          shadow
          rounded-t-3xl
        "
      >
        <button
          @click="
            isSidebarOpen && currentSidebarTab == 'linksTab'
              ? (isSidebarOpen = false)
              : (isSidebarOpen = true);
            currentSidebarTab = 'linksTab';
          "
          class="
            p-2
            transition-colors
            rounded-lg
            shadow-md
            dark:shadow-indigo-900
            hover:bg-indigo-800
            dark:hover:bg-indigo-500
            hover:text-darky-white
            dark:hover:text-lighty-black
            focus:outline-none
            focus:ring
            focus:ring-indigo-500
            focus:ring-offset-white
            dark:focus:ring-offset-black
            focus:ring-offset-2
            text-gray-500
            bg-white
            dark:bg-black
          "
        >
          <span class="sr-only">Włącz Pasek boczny</span>
          <UiMenu />
        </button>
        <NuxtLink to="/"> @ </NuxtLink>
      </nav>

      <!-- Left Mini Bar -->
      <nav
        class="
          z-20
          flex-col
          items-center
          flex-shrink-0
          hidden
          w-16
          py-4
          bg-white
          dark:bg-black
          border-r-2 border-indigo-100
          dark:border-indigo-900
          shadow-md
          sm:flex
          rounded-r-3xl
        "
      >
        <!-- logo -->
        <NuxtLink to="/" class="flex-shrink-0 py-4 w-10"> @ </NuxtLink>
        <!-- items -->
        <div class="flex flex-col items-center flex-1 p-2 space-y-4">
          <button
            @click="
              isSidebarOpen && currentSidebarTab == 'linksTab'
                ? (isSidebarOpen = false)
                : (isSidebarOpen = true);
              currentSidebarTab = 'linksTab';
            "
            class="
              p-2
              transition-colors
              rounded-lg
              shadow-md
              dark:shadow-indigo-900
              hover:bg-indigo-800
              dark:hover:bg-indigo-500
              hover:text-darky-white
              dark:hover:text-lighty-black
              focus:outline-none
              focus:ring
              focus:ring-indigo-500
              focus:ring-offset-white
              dark:focus:ring-offset-black
              focus:ring-offset-2
              text-gray-500
              bg-white
              dark:bg-black
            "
            :class="
              isSidebarOpen && currentSidebarTab == 'linksTab'
                ? 'text-white bg-indigo-600'
                : 'text-gray-500 bg-white'
            "
          >
            <span class="sr-only">Włącz/wyłącz pasek boczny</span>
            <UiMenu />
          </button>

          <BarItem
            v-for="item in groups"
            :group="item.group"
            :name="item.name"
            :key="item.name"
          />
        </div>
      </nav>
      <transition name="sidebar">
        <div
          v-if="isSidebarOpen"
          class="
            fixed
            inset-y-0
            left-0
            z-10
            flex-shrink-0
            w-64
            bg-white
            dark:bg-black
            border-r-2 border-indigo-100
            dark:border-indigo-900
            shadow-lg
            sm:left-16
            rounded-r-3xl
            sm:w-72
            lg:static lg:w-64
          "
        >
          <nav
            v-if="currentSidebarTab == 'linksTab'"
            class="flex flex-col h-full"
          >
            <div class="flex items-center justify-center flex-shrink-0 py-10">
              <NuxtLink to="/">@</NuxtLink>
            </div>
            <div
              class="flex-1 px-4 space-y-2 overflow-hidden hover:overflow-auto"
            >
              <NuxtLink
                to="/"
                class="
                  flex
                  items-center
                  w-full
                  space-x-2
                  text-indigo-800
                  rounded-lg
                "
              >
                <span class="bg-indigo-700 text-white rounded-lg">
                  <UiHome />
                </span>
                <span>Home</span>
              </NuxtLink>
              <NuxtLink
                to="/"
                class="
                  flex
                  items-center
                  space-x-2
                  text-indigo-600
                  transition-colors
                  rounded-lg
                  group
                  hover:bg-indigo-600 hover:text-white
                "
              >
                <span
                  class="
                    p-2
                    transition-colors
                    rounded-lg
                    hover:bg-indigo-700 hover:text-white
                  "
                >
                  <UiPage />
                </span>
                <span>Strona</span>
              </NuxtLink>
            </div>
          </nav>
          <div v-for="item in groups" :key="item.group">
            <div
              v-if="currentSidebarTab == item.name"
              class="px-4 py-6 h-[calc(100vh-1rem)]"
            >
              <BarItemExt :group="item.group" />
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- content -->
    <div class="flex flex-col flex-1">
      <header class="relative flex items-center justify-end flex-shrink-0 p-4">
        <div class="items-center hidden ml-4 sm:flex">
          <ChangeTheme />
        </div>
        <!-- Mobile sub header button -->
        <button
          @click="isSubHeaderOpen = !isSubHeaderOpen"
          class="
            p-2
            mr-4
            sm:hidden
            text-gray-500
            bg-white
            dark:bg-black
            rounded-lg
            shadow-md
            hover:text-gray-600
            focus:outline-none focus:ring focus:ring-white
            dark:focus:ring-black
            focus:ring-offset-gray-100
            dark:focus:ring-offset-lighty-black
            focus:ring-offset-4
          "
        >
          <span class="sr-only">Więcej</span>
          <UiMore />
        </button>
        <!-- Mobile sub header -->
        <transition name="subHeader">
          <div
            class="
              absolute
              flex
              items-center
              justify-between
              p-2
              bg-white
              dark:bg-black
              rounded-md
              shadow-lg
              sm:hidden
              top-16
              left-5
              right-5
            "
            v-if="isSubHeaderOpen"
          >
            <ChangeTheme />
            <select>
              <option value=""></option>
            </select>
          </div>
        </transition>
      </header>
      <div class="flex flex-1">
        <!-- main -->
        <main class="flex-1 px-4 py-8">
          <slot />
        </main>
      </div>
    </div>
  </div>

  <!-- Panels -->
</template>

<style scoped>
.subHeader-enter-active,
.subHeader-leave-active {
  @apply transform transition-transform;
}
.subHeader-enter-from {
  @apply translate-y-full opacity-0;
}
.subHeader-enter-to {
  @apply translate-y-0 opacity-100;
}
.subHeader-leave-from {
  @apply translate-y-0 opacity-100;
}
.subHeader-leave-to {
  @apply translate-y-full opacity-0;
}

.sidebar-enter-active,
.sidebar-leave-active {
  @apply transform transition-transform duration-300;
}
.sidebar-enter-from {
  @apply -translate-x-full;
}
.sidebar-enter-to {
  @apply translate-x-0;
}
.sidebar-leave-from {
  @apply translate-x-0;
}
.sidebar-leave-to {
  @apply -translate-x-full;
}
</style>