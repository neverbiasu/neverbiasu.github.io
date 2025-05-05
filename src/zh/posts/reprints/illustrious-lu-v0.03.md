---
title: "Illustrious-LU v0.03"
icon: fa-solid:microscope
cover: https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:43:42.451Z/2025-04-14(1,2).png
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

SD XL一直受到CLIP的困扰 – 我认为这至少部分是事实。最近的模型在自然语言方面显示出一些潜力，比如理解"左边是红色，右边是蓝色"。然而，由于CLIP没有使用自然语言句子进行训练，基础SD XL及其微调变体在处理自然语言方面受到了显著限制。

Flux和SD3等DiT模型与T5结合表现出更好的能力。特别是，已经证明T5在处理自然语言信息以正确生成文本或组合方面非常重要。然而，T5非常庞大且仍有局限性，因此有人尝试直接使用LLM作为文本编码器。此外，DiT模型也非常庞大。即使没有T5，12B参数的模型也不太实用，这一点与SD XL类似。

流匹配（Flow matching）也很有趣。然而，DiT直观的结构使得许多有用的研究成为可能似乎是不可避免的。不幸的是，与SD XL的流匹配并未显示支持这一点的证据；相反，它引发了更多关于SD XL的VAE问题的疑问。

因此，最低要求是：

1. 适当大小的骨干网络，不含TE的2-6B参数
2. 小型文本编码器，可能不是T5
3. RoPE实现（与某些特定模型不同）
4. 良好的VAE – 如Flux VAE

有趣的测试模型是：

1. Infinity：一个带有VAR Lumina 2.0的8B模型
2. Lumina：一个带有LLM + DiT骨干的2B模型
3. Flux：一个12B模型 – 非常标准且吸引人，但体积较大

2025年1月，我决定将Flux微调交给一位有才华的研究员，同时测试Infinity并准备Lumina。结果，开发了Flux-Chroma，这也可能是一个值得考虑的有趣基础。Infinity实验表明"计算能力不足"。不幸的是，训练一个8B规模的模型至少需要数月的H100节点时间。实际上，对800万张图像进行10个轮次的训练需要数月才能训练完模型。我当然希望训练这些8B模型，但可能不是现在。

因此，Lumina经过了大量修复和测试准备用于训练。实际上，它可能只用高质量照片进行了训练，这不适合插画。但如果它训练不足，我们可以潜在地修复它。我们可以检查它是否可以通过数据集进一步"训练"，以及它是否能够吸收新知识。然而，我们是否需要训练LLM部分需要测试。

Illustrious-Lumina是一个测试训练模型，具有以下目标：

1. 模型是否可以在不需要LLM部分的情况下进行训练，以更好地理解角色/知识？
2. 模型是否比SD XL适应得更快？
3. 分辨率是否任意？

在这里，我展示了Illustrious-lumina-experimental-v0.03的结果，该模型已训练了2200万个图像样本。请注意，原始模型在插图方面的表现"非常糟糕"。

例如，它不理解任何知名角色。

然而，经过训练后，我们可以看到该模型理解了白上吹雪(shirakami fubuki)、御坂美琴(Misaka Mikoto)或一些流行角色。

![Image 4](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:43:42.451Z/2025-04-14(1,2).png)

![Image 5](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:41:47.722Z/2025-04-14(3,4).png)

令人惊讶的是，仅仅看过2200万张图像，它就能理解2.5k样本角色、佐天琉子(saten ruiko)或白井黑子(shirai Kuroko)。

![Image 6](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:41:55.453Z/2025-04-14(5,6).png)

虽然不如前面的准确，但明显快速。

最后，我们可以看到实际上三个著名的流行角色也能正常工作-

![Image 7](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:42:05.180Z/2025-04-14(7,8).png)

经过26500步、768批量大小的训练已显示出成功的结果 - 然而，这只是v0.1的15% - 预计至少需要当前计算量的8倍来进行训练。

该模型有几个限制，需要改进。

它包括一些合成示例，特定风格测试如像素艺术，以及高质量图像的后期训练。

此外，承诺的文本生成能力未能实现 - 这也需要一些复杂的基于数据集的训练。

训练旅程目前已停止 - 我首先专注于数据集清理和代码修复以制作演示。模型和推理演示代码 - 具有改进的设置，将很快发布。
