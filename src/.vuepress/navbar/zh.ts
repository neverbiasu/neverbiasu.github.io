import { navbar } from "vuepress-theme-hope";
import { readdirSync, statSync } from "fs";
import { join, resolve } from "path";

function getMarkdownFiles(directory: string): string[] {
  return readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .sort();
}

function getSubdirectories(directory: string): string[] {
  return readdirSync(directory).filter((subdir) =>
    statSync(join(directory, subdir)).isDirectory()
  );
}

function getChildren(
  directory: string
): { text: string; icon: string; link: string }[] {
  return getMarkdownFiles(directory).map((file) => ({
    text: file,
    icon: "pen-to-square",
    link: file,
  }));
}

function getAllChildren(
  basePath: string,
  subdirectories: string[]
): {
  text: string;
  icon: string;
  prefix: string;
  children: { text: string; icon: string; link: string }[];
}[] {
  return subdirectories.map((subdir) => ({
    text: subdir,
    icon: "pen-to-square",
    prefix: `${subdir}/`,
    children: getChildren(join(basePath, subdir)),
  }));
}

const basePath = resolve(__dirname, "../../zh/posts");

const subdirectories = getSubdirectories(basePath);

const allChildren = getAllChildren(basePath, subdirectories);

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "博客",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: allChildren,
  },
]);
