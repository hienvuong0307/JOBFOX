// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/content", 
    "nuxt-primevue", 
    "@nuxtjs/tailwindcss"
  ],
  primevue: {
    options: {
      ripple: true,
      inputStyle: "filled"
    },
    components: {
      prefix: 'Prime',
      include: [
        'Dropdown',
        'InputText',
        'Textarea',
        'Button',
        'InputGroup',
        'InputGroupAddon',
        'Toast',
        'Card',
        'Breadcrumb',
        'Image',
        'Paginator',
        'ProgressBar',
        'IconField',
        'InputIcon',
        'Menu',
        'Listbox',
        'DataView',
        'Checkbox',
        'Carousel',
        'Tag',
        'Tabs',
        'TabList',
        'Tab',
        'TabPanels',
        'TabPanel'
      ]
    },
  },
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primeicons/primeicons.css',
    '~/assets/style.scss',
    '~/assets/main.scss'
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
