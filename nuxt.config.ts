// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@nuxt/image-edge'
    ],
    tailwindcss: {
        exposeConfig: true,
    },
    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
        storageKey: 'theme'
    },
    image: {
        presets: {
            flag: {
                modifiers: {
                    format: 'webp',
                    quality: '60'
                }
            }
        }
    }
})
