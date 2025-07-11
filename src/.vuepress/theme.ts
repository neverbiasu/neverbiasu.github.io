import { hopeTheme } from 'vuepress-theme-hope'

import { enNavbar, zhNavbar } from './navbar/index.js'
import { enSidebar, zhSidebar } from './sidebar/index.js'

export default hopeTheme(
  {
    hostname: 'https://neverbiasu.github.io',

    author: {
      name: 'neverbiasu',
      url: 'https://neverbiasu.github.io'
    },

    iconAssets: 'iconify',

    logo: 'logo.svg',

    repo: 'vuepress-theme-hope/vuepress-theme-hope',

    docsDir: 'src',

    blog: {
      medias: {
        // Baidu: "https://example.com",
        BiliBili: 'https://space.bilibili.com/342773888',
        // Bitbucket: "https://example.com",
        // Dingding: "https://example.com",
        // Discord: "https://example.com",
        // Dribbble: "https://example.com",
        Email: 'neverbiasu@gmail.com',
        // Evernote: "https://example.com",
        // Facebook: "https://example.com",
        // Flipboard: "https://example.com",
        // Gitee: "https://example.com",
        GitHub: 'https://github.com/neverbiasu',
        // Gitlab: "https://example.com",
        Gmail: 'neverbiasu@gmail.com',
        Instagram: 'https://instagram.com',
        // Lark: "https://example.com",
        // Lines: "https://example.com",
        // Linkedin: "https://example.com",
        // Pinterest: "https://example.com",
        // Pocket: "https://example.com",
        // QQ: "https://example.com",
        // Qzone: "https://example.com",
        // Reddit: "https://example.com",
        // Rss: "https://example.com",
        // Steam: "https://example.com",
        // Twitter: "https://example.com",
        // Wechat: "https://example.com",
        // Weibo: "https://example.com",
        // Whatsapp: "https://example.com",
        // Youtube: "https://example.com",
        // Zhihu: "https://example.com",
        CodeWithGPU: {
          icon: 'https://raw.githubusercontent.com/neverbiasu/blog/refs/heads/main/src/.vuepress/public/assets/icon/codewithgpu.png',
          link: 'https://www.codewithgpu.com/u/fayche'
        },
        ModelScope: {
          icon: 'https://raw.githubusercontent.com/lobehub/lobe-icons/7dabb828beb43f56512b054447753491366a4197/packages/static-svg/icons/modelscope-color.svg',
          link: 'https://modelscope.cn/profile/ModelE'
        },
        Civitai: {
          icon: 'https://raw.githubusercontent.com/lobehub/lobe-icons/7dabb828beb43f56512b054447753491366a4197/packages/static-svg/icons/civitai-color.svg',
          link: 'https://civitai.com/user/Fetch267'
        },
        HuggingFace: {
          icon: 'https://huggingface.co/front/assets/huggingface_logo.svg',
          link: 'https://huggingface.co/6chan'
        }
      }
    },

    locales: {
      '/': {
        // navbar
        navbar: enNavbar,

        // sidebar
        sidebar: enSidebar,

        footer: 'My own footer',

        displayFooter: true,

        blog: {
          description: 'An AI student && A FrontEnd programmer',
          intro: '/intro.html'
        },

        metaLocales: {
          editLink: 'Edit this page on GitHub'
        }
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: zhNavbar,

        // sidebar
        sidebar: zhSidebar,

        footer: '我的页脚',

        displayFooter: true,

        blog: {
          description: '一个人工智能学习者，前端开发者',
          intro: '/zh/intro.html'
        },

        // page meta
        metaLocales: {
          editLink: '在 GitHub 上编辑此页'
        }
      }
    },

    encrypt: {
      config: {
        '/demo/encrypt.html': ['1234'],
        '/zh/demo/encrypt.html': ['1234']
      }
    },

    // enable it to preview all changes in time
    // hotReload: true,

    plugins: {
      blog: {},

      // Install @waline/client before enabling it
      // Note: This is for testing ONLY!
      // You MUST generate and use your own comment service in production.
      // comment: {
      //   provider: "Waline",
      //   serverURL: "https://waline-comment.vuejs.press",
      // },

      components: {
        components: ['Badge', 'VPCard']
      },

      // These features are enabled for demo, only preserve features you need here
      markdownImage: {
        figure: true,
        lazyload: true,
        size: true
      },

      // markdownMath: {
      //   // install katex before enabling it
      //   type: "katex",
      //   // or install mathjax-full before enabling it
      //   type: "mathjax",
      // },

      // This features is enabled for demo, only preserve if you need it
      markdownTab: true,

      // These features are enabled for demo, only preserve features you need here
      mdEnhance: {
        align: true,
        attrs: true,
        component: true,
        demo: true,
        include: true,
        mark: true,
        plantuml: true,
        spoiler: true,
        stylize: [
          {
            matcher: 'Recommended',
            replacer: ({ tag }) => {
              if (tag === 'em')
                return {
                  tag: 'Badge',
                  attrs: { type: 'tip' },
                  content: 'Recommended'
                }
            }
          }
        ],
        sub: true,
        sup: true,
        tasklist: true,
        vPre: true

        // install chart.js before enabling it
        // chart: true,

        // insert component easily

        // install echarts before enabling it
        // echarts: true,

        // install flowchart.ts before enabling it
        // flowchart: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // install mermaid before enabling it
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // install @vue/repl before enabling it
        // vuePlayground: true,

        // install sandpack-vue3 before enabling it
        // sandpack: true,
      },
      seo: true
      // install @vuepress/plugin-pwa and uncomment these if you want a PWA
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cacheImage: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },

      // install @vuepress/plugin-revealjs and uncomment these if you need slides
      // revealjs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
    }
  },
  { custom: true }
)
