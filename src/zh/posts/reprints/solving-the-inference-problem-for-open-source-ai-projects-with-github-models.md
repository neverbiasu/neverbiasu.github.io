---
title: 利用 GitHub Models 解决开源 AI 项目的推理难题
date: 2025-07-23T16:00:00+00:00
author: Sean Goedecke
tags:
    - AI models
    - CI/CD
    - GitHub Models
cover: https://github.blog/wp-content/uploads/2025/07/wallpaper-generic-image-logo-github.png?resize=1600%2C850
---

# 利用 GitHub Models 解决开源 AI 项目的推理难题

如何使用 GitHub 的免费推理 API，让你的 AI 开源软件更易于使用。

![图片 8](https://github.blog/wp-content/uploads/2025/07/wallpaper-generic-image-logo-github.png?resize=1600%2C850)

[Sean Goedecke](https://github.blog/author/sgoedecke/ "Sean Goedecke 的文章") · [@sgoedecke](https://github.com/sgoedecke)

2025 年 7 月 23 日 | 更新于 2025 年 8 月 1 日

| 5 分钟

---

## 目录

- [“仅需添加 AI”的隐藏成本](#the-hidden-cost-of-just-add-ai)
- [如何开始使用 GitHub Models](#how-to-get-started-with-github-models)
- [当你的项目起飞时如何扩展](#scaling-when-your-project-takes-off)
- [总结](#take-this-with-you)

---

AI 功能可以使一个开源项目大放异彩。至少，在安装设置要求付费推理 API 密钥之前是这样。要求贡献者甚至普通用户自带大语言模型 (LLM) 密钥会阻碍项目的普及：

```bash
$ my-cool-ai-tool
Error: OPENAI_API_KEY not found
```

开发者可能不想仅仅为了试用你的工具就购买付费套餐，而自托管模型对于笔记本电脑或 GitHub Actions 运行器来说可能过于沉重。

GitHub Models 通过一个免费的、与 OpenAI 兼容的推理 API 解决了这一摩擦，每个 GitHub 账户都可以使用，无需新的密钥、控制台或 SDK。在本文中，我们将向你展示如何将其引入你的项目，在 CI/CD 中运行它，并在你的社区蓬勃发展时进行扩展。

让我们开始吧。

## “仅需添加 AI”的隐藏成本

如今，AI 功能似乎无处不在，但在本地运行它们仍然是一个挑战，原因有几个：

- **付费 API：** 最简单的方法是要求用户提供 OpenAI 或 Anthropic 密钥。但对于许多业余爱好者和学生来说，这是一个不可行的选择，因为付费 API 太昂贵了。
- **本地模型：** 运行一个 20 亿参数的 LLM 可以处理轻量级任务，但任何需要更高智能的任务都会迅速超出典型笔记本电脑的内存——更不用说支持 GitHub Actions 运行器的 14 GB 容器了。
- **Docker 镜像和权重：** 你可以将模型与你的应用程序捆绑在一起，但分发数 GB 大小的权重大大增加了安装包的大小并减慢了 CI 速度。

每一个额外的要求都会筛选掉潜在的用户和贡献者。你需要的是一个满足以下条件的推理端点：

1.  对公共项目免费
2.  与现有的 OpenAI SDK 兼容
3.  在你的代码运行的任何地方都可用，比如你的笔记本电脑、服务器或 Actions 运行器

这就是 GitHub Models 所提供的。

### GitHub Models 简介

- **它是什么：** 一个你已经熟悉的、支持聊天/补全规范的 REST 端点。
- **你能得到什么：** 一组由 GitHub 托管的精选模型（GPT-4o、DeepSeek-R1、Llama 3 等）。
- **谁可以调用它：** 任何拥有 GitHub 个人访问令牌 (PAT) 的人，或者在通过权限选择加入时，存储库的内置 GITHUB_TOKEN。
- **费用如何：** 所有个人账户和开源组织均可免费使用；付费套餐则解锁了更高的吞吐量和更大的上下文窗口。

因为该 API 与 OpenAI 的 API 类似，任何接受 `baseURL` 的客户端都可以在不更改代码的情况下工作。这包括 OpenAI-JS、OpenAI Python、LangChain、llamacpp 或你自己的 curl 脚本。

## 如何开始使用 GitHub Models

由于 GitHub Models 与 OpenAI `chat/completions` API 兼容，几乎所有的推理 SDK 都可以使用它。要开始使用，你可以使用 OpenAI SDK：

```js
import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://models.github.ai/inference/chat/completions",
    apiKey: process.env.GITHUB_TOKEN  // 或任何具有 models:read 权限的 PAT
});

const res = await openai.chat.completions.create({
    model: "openai/gpt-4o",
    messages: [{ role: "user", content: "Hi!" }]
});
console.log(res.choices[0].message.content);
```

如果你使用 GitHub Models 作为推理提供商来编写你的 AI 开源软件，所有 GitHub 用户只需提供一个 GitHub 个人访问令牌 (PAT) 就能上手使用。

如果你的软件在 GitHub Actions 中运行，你的用户甚至不需要提供 PAT。通过在你的工作流文件中请求 `models: read` 权限，内置的 GitHub 令牌将有权向 GitHub Models 发出推理请求。这意味着你可以构建一系列 AI 驱动的 Actions，只需单击一下即可共享和安装。例如：

- 代码审查或 PR 分类机器人
- 智能问题标记工作流
- 每周存储库活动报告生成器
- 以及 GitHub Action 能做的任何其他事情

此外，使用 GitHub Models 使你的用户更容易设置 AI 推理。这还带来了另一个积极影响：你的*贡献者*也更容易设置 AI 推理。当任何拥有 GitHub 账户的人都可以端到端地运行你的代码时，你将能够从所有 GitHub 用户那里获得贡献，而不仅仅是那些拥有 OpenAI 密钥的用户。

### 使用 GitHub Actions 实现零配置 CI

过去，发布一个依赖 AI 的 Action 需要用户将其推理 API 密钥添加为 GitHub Actions 密钥。现在你可以发布一个一键安装的 Action：

```yaml
# .github/workflows/triage.yml
permissions:
    contents: read
    issues: write
    models: read   # 👈 为 GITHUB_TOKEN 解锁 GitHub Models

jobs:
    triage:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - name: 智能问题分类
                run: node scripts/triage.js
```

运行器的 `GITHUB_TOKEN` 带有 `models:read` 范围，因此你的 Action 可以在没有额外设置的情况下调用任何模型。这使其非常适合：

- 自动化的拉取请求摘要
- 问题去重和标记
- 每周存储库摘要
- 你可以在 Action 中编写脚本的任何其他内容

## 当你的项目起飞时如何扩展

GitHub Models 推理 API 对所有人免费。但是，如果你或你的用户想要进行的推理超出了免费速率限制，你可以在你的设置中开启[付费推理](https://docs.github.com/en/billing/managing-billing-for-your-products/about-billing-for-github-models)，以获得更大的上下文窗口和更高的每分钟请求数。

当你的社区增长时，流量也会随之增长。因此，考虑以下几点很重要：

- **每分钟请求数 (RPM)：** 免费套餐提供默认限制，而付费套餐提供数倍的提升。
- **上下文窗口：** 免费套餐最高支持标准模型限制；付费套餐在支持的模型上可启用 128k 令牌。
- **延迟：** 付费套餐在自己独立的部署中运行，所以你不会和免费套餐用户在同一个队列中。

要开始使用，你可以在你的组织或企业的 **设置 > Models** 中启用付费使用。你现有的客户端和令牌将继续工作（但它们会更快并支持更大的上下文）。

## 总结

LLM 正在改变开发者构建和发布软件的方式，但要求用户提供自己的付费 API 密钥可能会成为一个入门障碍。只有当第一次 `npm install`、`cargo run` 或 `go test` 就能正常工作时，魔法才会发生。

如果你维护一个 AI 驱动的开源代码库，你应该考虑将 GitHub Models 添加为默认的推理提供商。你的用户已经通过 GitHub 获得了免费的 AI 推理，所以让他们在你的代码中使用它几乎没有坏处。如果你的项目能够在 GitHub Actions 中运行，那就更是如此。最好的 API 密钥就是没有 API 密钥！

通过为 GitHub 上的每一位开发者提供免费的高质量推理作为默认选项，GitHub Models 消除了开源 AI 普及的最大障碍。这也为更多的贡献、更快的上手和更快乐的用户打开了大门。

想试试吗？ **查看 [GitHub Models 文档](https://docs.github.com/en/github-models)或直接进入 [API 参考](https://docs.github.com/en/github-models/reference)，立即开始交付开箱即用的 AI 功能。**

---

### 参考链接

1. [AI models](https://github.blog/tag/ai-models/)
2. [CI/CD](https://github.blog/tag/ci-cd/)
3. [GitHub Models](https://github.blog/tag/github-models/)
4. [API 参考](https://docs.github.com/en/github-models/reference)
5. [GitHub Models 文档](https://docs.github.com/en/github-models)
6. [博客原文](https://github.blog/ai-and-ml/llms/solving-the-inference-problem-for-open-source-ai-projects-with-github-models/)
