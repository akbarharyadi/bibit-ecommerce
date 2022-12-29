const pkg = require("./package");
const path = require('path')

module.exports = {
  target: "static",

  router: {
    base: "/"
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.description,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { "http-equiv": "x-ua-compatible", content: "ie=edge" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
      { name: "theme-color", content: "#ffffff" },

      // Facebook open graph
      // { property: "og:type", content: "website" },
      // { property: "og:url", content: "https://example.com/page.html" },
      // { property: "og:title", content: "Content Title" },
      // { property: "og:image", content: "https://example.com/image.jpg" },
      // { property: "og:description", content: "Description Here" },
      // { property: "og:site_name", content: "Site Name" },
      // { property: "og:locale", content: "en_US" },

      // Twitter card
      // { property: "twitter:card", content: "summary" },
      // { property: "twitter:site", content: "@site_account" },
      // { property: "twitter:creator", content: "@individual_account" },
      // { property: "twitter:url", content: "https://example.com/page.html" },
      // { property: "twitter:title", content: "Content Title" },
      // {
      //   property: "twitter:description",
      //   content: "Content description less than 200 characters"
      // },
      // { property: "twitter:image", content: "https://example.com/image.jpg" }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "logo.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        integrity:
          "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
        crossorigin: "anonymous",
        href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/leaflet/dist/leaflet.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/custom-plugin.js', ssr: false },
    { src: '@/plugins/axios' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/postcss8',
    'nuxt-purgecss',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    'nuxt-leaflet',
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: false,
          logout: false,
          user: { url: '/auth/user', method: 'get', propertyName: 'user' }
        }
      }
    }
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // baseURL: "http://localhost:4000"
    baseURL: "http://www.bitmerce.cloud:5000"
  },

  generate: {
    dir: "dist"
  },

  purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-import': {},
        'postcss-nested': {}
      },
    },
  }
};
