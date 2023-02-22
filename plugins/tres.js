import Tres from "@tresjs/core";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Tres);
    // nuxtApp.provide('injected', () => 'my injected function')
    // return { provide: { injected: () => 'my injected function' } }
})