import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "博客",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "人工智能实现",
        icon: "pen-to-square",
        prefix: "ai-impls/",
        children: [
          { text: "YOLOv9代码复现", icon: "pen-to-square", link: "yolov9" },
        ],
      },
      {
        text: "前端开发",
        icon: "pen-to-square",
        prefix: "web/",
        children: [
          { text: "Vue3快速开始", icon: "pen-to-square", link: "vue-1" },
        ],
      },
      {
        text: "AI周报",
        icon: "pen-to-square",
        prefix: "weekly/",
        children: [
          { text: "001", icon: "pen-to-square", link: "001" },
          { text: "002", icon: "pen-to-square", link: "002" },
          { text: "003", icon: "pen-to-square", link: "003" },
          { text: "004", icon: "pen-to-square", link: "004" },
          { text: "005", icon: "pen-to-square", link: "005" },
          { text: "X01", icon: "pen-to-square", link: "X01" },
        ],
      },
    ],
  },
]);
