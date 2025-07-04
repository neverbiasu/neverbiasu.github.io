---
title: "Illustrious-LU v0.03"
icon: fa-solid:microscope
cover: https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-11T07:16:56.712Z/2025-04-11%20Thumbnail.png
date: 2025-04-18
category:
  - 模型开发
  - 转载
tag:
  - Illustrious
  - LU
  - Lumina
  - AI模型
  - 图像生成
  - 训练
author: Angelbottomless
footer: 转载自 Illustrious 技术博客
copyright: reprint
---

# Illustrious-LU v0.03

SD XL 一直受到 CLIP 的困扰--我认为至少这部分是事实。最近的模型在自然语言方面显示出一些潜力，比如理解"左边是红色，右边是蓝色"。然而，由于CLIP没有使用自然语言句子进行训练，基础SD XL及其微调变体在处理自然语言方面受到了显著限制。

Flux和SD3等DiT模型与T5结合表现出更好的能力。特别是，已经证明T5在处理自然语言信息以正确生成文本或组合方面非常重要。然而，T5 非常大而且仍然有限，因此有人尝试直接使用 LLM 作为文本编码器。此外，DiT模型也非常庞大。即使没有T5，12B参数的模型也不太实用，这一点与SD XL非常相似。

流匹配（Flow matching）也很有趣。然而，DiT 的直观结构似乎不可避免地促成了许多有用的研究。不幸的是，与SD XL结合的流匹配并未显示支持这一点的证据；相反，它引发了更多关于SD XL的VAE问题的疑问。

因此，最低要求是：

1. 适当大小的骨干网络，不含TE的2-6B参数
2. 小型文本编码器，可能不是T5
3. RoPE实现（与某些特定模型不同）
4. 良好的VAE – 如Flux VAE

有趣的测试模型是：

1. Infinity：一个带有VAR Lumina 2.0的8B模型
2. Lumina：一个带有LLM + DiT骨干的2B模型
3. Flux：一个12B模型 – 非常标准且吸引人，但体积较大

2025年1月，我决定将Flux的微调工作交给一位有才华的研究员，同时在准备Lumina的同时测试Infinity。结果，Flux-Chroma应运而生，这可能也是一个值得考虑的基础。Infinity实验表明"计算能力不足"。不幸的是，训练一个8B规模的模型至少需要数月的H100节点时间。事实上，在800万张图像上训练10个轮次需要数月时间才能完成模型训练。我肯定想训练那些 8B 模型，但也许不是现在。

因此，Lumina为训练做好了准备--它有着大量的修复和测试。事实上，它很可能只接受过高质量照片的训练，这并不适合插图。但如果它训练不足，我们就有可能解决这个问题。我们可以检查它是否可以通过数据集进一步"训练"，以及它是否能够吸收新知识。然而，我们是否需要训练LLM部分需要测试。

Illustrious-Lumina是一个测试训练模型，具有以下目标：

1. 模型是否可以在不需要LLM部分的情况下进行训练，以更好地理解角色/知识？
2. 模型是否比SD XL适应得更快？
3. 分辨率是否任意？

在这里，我展示了Illustrious-lumina-experimental-v0.03的结果，该模型已训练了2200万个图像样本。请注意，原始模型在插图方面的表现"非常糟糕"。

例如，它不理解任何知名角色。

然而，经过训练后，我们可以看到该模型理解了白上吹雪(shirakami fubuki)、御坂美琴(Misaka Mikoto)或一些流行角色。

![Image 1,2](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:43:42.451Z/2025-04-14(1,2).png)

![Image 3,4](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:41:47.722Z/2025-04-14(3,4).png)

令人惊讶的是，仅仅看过2200万张图像，它就能理解2.5k样本角色、佐天琉子(saten ruiko)或白井黑子(shirai Kuroko)。

![Image 5,6](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:41:55.453Z/2025-04-14(5,6).png)

虽然没有以前的精确，但速度明显很快。

最后，我们可以看到其实有三个著名的流行角色也能正常工作-

![Image 7,8](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:42:05.180Z/2025-04-14(7,8).png)

经过26500步、768批量大小的训练已显示出成功的结果 - 然而，这只是v0.1的15% - 预计至少需要当前算力的8倍来进行训练。

该模型有几个限制，需要改进。

包括一些合成示例、特定风格测试（如像素艺术）以及使用高质量图像进行的后期训练。

此外，我们还没有发现所承诺的文本生成功能--这也需要一些基于数据集的复杂训练。

目前，训练工作已经停止--我首先专注于数据集清理和演示代码修正。改进设置后的模型和推理演示代码将很快发布。
