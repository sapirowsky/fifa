<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid/index";

import { useSidebarStore } from "~/stores/sidebar";

const { isSidebarOpen, currentSidebarTab } = toRefs(useSidebarStore());

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
</script>
<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="
          inline-flex
          w-full
          justify-center
          rounded-md
          border border-indigo-100
          dark:border-indigo-800
          bg-white
          dark:bg-black
          px-4
          py-2
          text-sm
          font-medium
          shadow-sm
          hover:bg-gray-50
          dark:hover:bg-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          focus:ring-offset-2
          focus:ring-offset-gray-100
          dark:focus:ring-offset-indigo-800
        "
      >
        Grupy
        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="
          absolute
          right-0
          z-10
          mt-2
          origin-top-right
          divide-y divide-gray-100
          dark:divide-gray-800
          rounded-md
          bg-white
          dark:bg-black
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
      >
        <div class="py-1" v-for="item in groups" :key="item.name">
          <MenuItem v-slot="{ active }">
            <button
              @click="
                isSidebarOpen && currentSidebarTab == item.name
                  ? (isSidebarOpen = false)
                  : (isSidebarOpen = true);
                currentSidebarTab = item.name;
              "
              :class="[
                active
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white'
                  : 'text-gray-700 dark:text-gray-300',
                'block px-4 py-2 text-sm',
              ]"
            >
              Grupa {{ item.group }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>