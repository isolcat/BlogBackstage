/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-13 22:32:11
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-15 16:20:10
 * @FilePath: \blogBackstage\nuxt.config.js
 */
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blogBackstage',
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
    '~assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/antd-ui',
      ssr: true
    },

    {
      src: '@/plugins/http.js',
      ssr: false
    },
    {
      src: '@/plugins/api.js',
      ssr: false
    },
    {
      src: '@/plugins/vue-cookies.js',
      ssr: false
    }
  ],
  //配置跨域请求
  proxy: {
    '/api': {
      // secure: false, // 如果是https接口，需要配置这个参数
      target: 'http://127.0.0.1:7001', // 目标接口域名
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
        changeOrigin: true // 表示是否跨域
      }
    }
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: true,
          }
        ]
      ]
    },
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.less$/,
        use: [{
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                'primary-color': '#8abcd1', // 自定义 ant-design-vue 主题颜色
                'link-color': '#8abcd1',
                'border-radius-base': '2px'
              },
              javascriptEnabled: true
            }
          }
        }]
      })

    },
    transpile: [/ant-design-vue/],
  },
}
