import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        property: { id: 'VCDFN5KZX5' }
    })
})