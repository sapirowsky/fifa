// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@nuxt/image-edge',
        '@averjs/nuxt-compression'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        exposeConfig: true,
    },
    colorMode: {
        preference: 'dark',
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
            },
            logo: {
                modifiers: {
                    format: 'webp',
                    quality: '100'
                }
            }
        }
    }
})
