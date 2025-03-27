// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "nuxt-primevue"],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ['Button','Breadcrumb','ImageCompare','Paginator','ProgressBar','InputText','Card','Toast','Textarea','InputGroup','Dropdown '],
    },
  },
  css: [
    "~/assets/style.scss",
    "~/assets/main.scss",
    "primevue/resources/themes/lara-light-blue/theme.css",
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
