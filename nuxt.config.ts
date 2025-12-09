// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    // Nitro compatibility date
    compatibilityDate: '2025-11-01',

    // Global page headers: https://go.nuxtjs.dev/config-head
    app: {
        head: {
            title: 'Base Project',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    srcDir: 'app',

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/scss/style.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern',
                    additionalData: `
                        @use "sass:math";
                        @use "sass:map";
                        @use "sass:list";
                        @use "sass:meta";
                        @use "@/assets/scss/helpers/index" as *;
                        @use "@/assets/scss/base/index" as *;
                    `,
                },
            },
        },
    },

    devtools: { enabled: false },

    modules: ['@pinia/nuxt', '@nuxtjs/color-mode'],

    // Auto-imports extras
    imports: {
        dirs: ['./app/stores', './shared/utils', './shared/types'],
    },

    // Color mode configuration
    colorMode: {
        attribute: 'data-theme',
        classSuffix: '',
        preference: 'base',
        fallback: 'base',
        storageKey: 'theme',
    },

    // Pinia configuration
    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },

    // Runtime config (security for secrets)
    runtimeConfig: {
        // server-only
        dbUrl: process.env.DATABASE_URL,
        // public: available in client
        public: {
            apiBase: '/api',
        },
    },
})
