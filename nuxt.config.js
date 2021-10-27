export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'universal',
  devtools: true,
  loading: '~/components/UI/Loader.vue',
  head: {
    title: 'Shopper',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#000000' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: "/assets/style.css"},
      {rel: 'stylesheet', href: "/assets/easy-responsive-tabs.css"},
      {rel: 'stylesheet', href: "/assets/css/material-dashboard.css"}
    ],
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  // theme: {
  //   options: { variations: false },
  // },
  // vuetify:
  // {theme: {
  //   disable: true,
  // }},

  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  vendor: [
    'firebase'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   '~/plugins/vue-slick-carousel.js',
   {src: '~/plugins/firebase.js', ssr: false},
   '~/plugins/vue-spinners.js',
   '~/plugins/server.js',
   '~/plugins/icons.js',
   '~/plugins/filter.js',
   { src: '~/plugins/vuelidate.js', ssr: true },
   { src: '~/plugins/tinymce.js', ssr: false },
  //  { src: '~/plugins/persistedState.client.js' },
   {
    src: '~plugins/vue-slider-component.js',
    ssr: false
  }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAoNYrTio0PFuV1N_Q9A2NoIJRIk57wQB8",
          authDomain: "shopper-4eb43.firebaseapp.com",
          databaseURL: "https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "shopper-4eb43",
          storageBucket: "shopper-4eb43.appspot.com",
          messagingSenderId: "1004928916174",
          appId: "1:1004928916174:web:2b6c9e3ec41d73e08b4e9f"
        },
        services: {
          auth: true,
          database: true,
          storage: true // Just as example. Can be any other service.
        }
      }
    ],
    // https://go.nuxtjs.dev/bootstrap
    ['bootstrap-vue/nuxt'],
    // ['nuxt-vuex-localstorage', {
    //  mode: 'debug', 
    //  localStorage: ['cart'] //  If not entered, “localStorage” is the default value
    // }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    '@nuxt/http',

    ['nuxt-i18n', {
      detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          // alwaysRedirect: false,
          // fallbackLocale: 'ru'
        },
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'EN',
          file: 'en.js',
        },
        {
          code: 'ru',
          iso: 'ru-RU',
          name: 'RU',
          file: 'ru.js',
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'ru',
      detectBrowserLanguage: {
        alwaysRedirect: true,
        fallbackLocale: 'ru',
        onlyOnRoot: true,
      },
    }],

    [
      '@nuxtjs/toast',
    {
      toast: {
      position: 'top-center',
      register: [ // Register custom toasts
        {
          name: 'error',
          message: 'Что-то пошло не так',
          options: {
            type: 'error'
          }
        }
      ]
  }
}
]
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxyHeaders: false

  },

  http: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extractCSS: true,
    // transpile: ['vue-agile']
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
