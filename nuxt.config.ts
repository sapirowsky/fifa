// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@nuxt/image-edge'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
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
