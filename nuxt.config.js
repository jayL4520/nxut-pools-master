export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pools',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
  ],
  router:{
    mode:'hash',
    extendRoutes(routes, resolve) {
      let routess =  routes.filter(route => route.name.indexOf('index')>-1)
    
       routess[0].children=[{
        path:"/:wxid",
        name:'userWxId',
        component:"@/components/Tutorial.vue"
       },
       {
        path:"/:wxid/:id",
        name:'pool',
        component:"@/components/pool.vue"
       },
       {
        path:"/:userId",
        name:'userInfo',
        component:"@/components/userInfo.vue"
       },
       
      //  {
      //  path:"/:wxid",
      //  name:'user',
      //  component:"@/components/userInfo.vue"
      //  }
      ]
       return routess
      //  console.log("routes",JSON.stringify(routes),mode)
    }
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  server: {
    default: 'localhost'
  },
  generate: {
    dir: 'pool-dist'
  },
  axios:{
    baseURL:'http://206.237.4.200:18001'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  proxy:{
    '/api/':{
      target:'http://206.237.4.200:18001',
      changeOrigin: true,
      pathRewrite:{
        '^/api/':''
      }
    }
  },
  env: {
    baseURL: 'http://206.237.4.200:18001'
    //API_URL: 'http://www.danzhuadmin.com'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
