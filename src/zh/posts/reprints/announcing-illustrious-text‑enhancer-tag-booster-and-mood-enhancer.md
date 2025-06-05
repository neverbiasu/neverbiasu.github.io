---
title: 发布 Illustrious Text‑Enhancer：Tag Booster 和 Mood Enhancer
cover: https://neverbiasu.github.io/assets/images/reprints/illustrious/tag-enhancer/cover.jpg
date: 2025-05-23
author: LivBigStar
---

# 发布 Illustrious Text‑Enhancer：Tag Booster 和 Mood Enhancer

![Image: userImage](https://neverbiasu.github.io/assets/images/reprints/illustrious/tag-enhancer/compare-tag-booster.png)

Illustrious 用户经常问："_如何在不编写冗长 prompt 的情况下获得更好的结果？_" 今天，我们很兴奋地通过 **Text‑Enhancer** 来回答这个问题，这是一个新系统，可以显著**丰富用户 prompt**，用于我们的图像生成平台。

Text‑Enhancer 包含**两个智能组件**协同工作：

1. **Tag Booster：** 基于我们的 TIPO（Text-to-Image Prompt Optimization）框架构建的 prompt 增强工具。它通过将短或稀疏的 prompt 与我们模型训练数据中看到的分布对齐来**扩展短或稀疏的 prompt**。结果是更高保真度的图像和更紧密的 prompt-图像对齐。
2. **Mood Enhancer：** 基于自定义 LLM 的管道，**将最少的输入转换为详细、引人注目的图像 prompt**。通过利用固定的系统 prompt 和少量示例（配合先进的 KV 缓存策略），它可以从稀疏输入生成丰富的描述，**成本和延迟仅为通常 LLM 的一小部分**。

Tag Booster 和 Mood Enhancer 共同**减轻了创作者**手工制作冗长 prompt 的负担，同时**持续产生更高质量、更符合目标的生成结果**。在这篇文章中，我们将深入探讨每个组件的工作原理、底层的技术创新，以及为什么这对 Illustrious 用户来说是一个游戏规则改变者。

---

## 从稀疏到丰富：Tag Booster 如何通过 TIPO 丰富 Prompt

从一行 prompt 创建生动的图像是具有挑战性的——像 Illustrious XL 这样的扩散模型是在 prompt/说明具有一定丰富性和多样性的数据集上训练的。**Tag Booster** 通过**自动扩展和优化您的 prompt** 使其更像训练分布中的那些来弥补这一差距。它由我们内部的 **TIPO 框架**提供支持，这是一个专为 prompt 优化而构建的轻量级多任务语言模型。

![Image: TIPO Architecture](https://neverbiasu.github.io/assets/images/reprints/illustrious/tag-enhancer/tipo-architecture.png)

### 什么是 TIPO？

TIPO 代表 **Text-to-Image Prompt Optimization**——一种使用在 prompt 对上训练的**小型、高效模型**的新方法。它学会了接受简单的 prompt 并输出更丰富的 prompt，在保持原始意图的同时添加细节。与使用原始 prompt 相比，这产生了_显著改善的视觉质量、连贯性和细节_。

### 联合任务训练（Tags ↔ Text）

TIPO 处理**标签列表和自然语言**并将一个转换为另一个。例如：

- **输入：** autumn forest
- **Tag Booster 输出：** autumn forest, golden sunlight, falling leaves, high detail, masterpiece, warm color palette

通过添加细节和风格标签，增强的 prompt 更好地匹配训练数据，以最少的额外努力产生**更高保真度的图像**。

---

## 用更少努力创造生动叙述：Mood Enhancer 和 LLM 驱动的扩展

虽然 Tag Booster 擅长**添加相关关键词和标签**，**Mood Enhancer** 使用**自定义大语言模型 (LLM) 管道**将简短想法转换为丰富、有氛围的 prompt。

### 工作原理

Mood Enhancer 使用固定的系统 prompt 和少量示例来生成详细的 prompt。例如：

- **输入：** futuristic city at night
- **Mood Enhancer 输出：** _"一个夜晚的广阔未来主义城市天际线，霓虹灯照亮的摩天大楼和飞行器在建筑物之间穿梭。下面的街道被全息广告牌和反射的灯光照亮。雨天氛围和反射霓虹标志的水坑增添了赛博朋克的情调。"_

这种转换在保持核心想法的同时添加了富有想象力的细节和氛围。

![Image: Mood Enhancer Comparison](https://neverbiasu.github.io/assets/images/reprints/illustrious/tag-enhancer/mood-enhancer-compare.jpg)

---

## KV 缓存：超级增强 LLM 效率

使用 LLM 引起了对**成本和速度**的担忧，但 Mood Enhancer 采用 **Key-Value 缓存重用**来优化效率。这种技术在不牺牲质量的情况下将推理成本降低了多达 80%。

![Image: KV Caching Efficiency](https://neverbiasu.github.io/assets/images/reprints/illustrious/tag-enhancer/kv-caching2.jpg)

---

## Text‑Enhancer 实际应用

通过结合 Tag Booster 和 Mood Enhancer，Illustrious 的 Text‑Enhancer 系统确保**任何用户输入都能发展成用于图像生成的强大 prompt**。例如：

- **输入：** a lone castle on a hill
- **Tag Booster 输出：** lone castle on a hill, medieval fortress, cloudy sky, twilight, high-resolution, epic scale
- **Mood Enhancer 输出：** _"一座孤独的中世纪城堡矗立在云雾缭绕的山丘顶上，在阴云密布的黄昏天空下。这座古老的石头堡垒被黄昏的最后光线照亮，其轮廓以史诗般的规模耸立在渐暗的山谷之上。戏剧性的云彩在上方翻滚，淡淡的薄雾贴着地面，唤起一种神秘、雄伟的氛围。"_

增强的 prompt 产生**戏剧性和详细的图像**，与用户的愿景保持一致。

![Image: Comparison](https://neverbiasu.github.io/assets/images/reprints/illustrious/tag-enhancer/compare-tag-booster.png)

---

## 结论

Illustrious Text‑Enhancer（Tag Booster + Mood Enhancer）在自然人类输入和高质量图像生成的最佳 prompt 之间架起了桥梁。通过利用先进的 NLP 技术，我们的系统实时处理 prompt 工程，使创作者能够专注于他们的愿景。

今天就试试 Text‑Enhancer，看着您谦逊的 prompt 转变为值得杰作的描述！

**愉快的 prompting，让我们知道您的反馈！**

---
