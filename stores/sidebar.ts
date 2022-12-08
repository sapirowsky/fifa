import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        isSidebarOpen: false,
        currentSidebarTab: '',
        isSubHeaderOpen: false
    })
})