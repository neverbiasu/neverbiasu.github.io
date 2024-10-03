import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Nlog",
      description: "A blog of neverbiasu",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Nlog",
      description: "neverbiasu 的博客",
    },
  },

  theme,

  // alias: {
  //   // 将主题的主页组件别名指向自定义的 HomePage.vue
  //   "@theme-hope/components/HomePage": path.resolve(
  //     __dirname,
  //     "./components/HomePage.vue"
  //   ),
  // },
  // Enable it with pwa
  // shouldPrefetch: false,
});
