import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog of neverbiasu",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "neverbiasu 的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
