---
title: "如何创建原创角色 LoRA [SDXL 训练] SDXL 角色训练"
date: 2025-05-12T16:01:40+09:00
tags:
    - Kohya SS GUI
    - LoRA
    - SDXL
categories:
    - 高级
---

# 如何创建原创角色 LoRA [SDXL 训练] SDXL 角色训练

![如何创建原创角色 LoRA [SDXL 训练] SDXL 角色训练封面图片](http://digitalcreativeai.net/_next/image?url=https%3A%2F%2Fdca.data-hub-center.com%2Fcontent%2Fuploads%2F2025%2F05%2Feye_catch_original-character-lora-sdxl-character-training-en.jpg&w=3840&q=80)

## 目录

1. [SDXL 预训练模型的兼容性](#sdxl-预训练模型的兼容性)
    1.1. [兼容性测试生成](#兼容性测试生成)
2. [使用 Kohya ss GUI 的默认参数进行训练](#使用-kohya-ss-gui-的默认参数进行训练)
    2.1. [数据集](#数据集)
    2.2. [默认参数](#默认参数)
    2.3. [使用训练好的 LoRA 进行测试生成](#使用训练好的-lora-进行测试生成)
3. [本次训练中使用的参数](#本次训练中使用的参数)
    3.1. [学习率调度器](#学习率调度器)
    3.2. [优化器](#优化器)
    3.3. [其他参数](#其他参数)
4. [训练结果](#训练结果)
    4.1. [与其他 LoRA 的组合](#与其他-lora-的组合)
    4.2. [应用于同系列的检查点模型](#应用于同系列的检查点模型)
5. [结论](#结论)

---

## SDXL 预训练模型的兼容性

在 SDXL 中，LoRA 的通用性不如 SD1.5。LoRA 可应用的检查点模型取决于预训练模型的系列。当在同一系列中生成时，LoRA 应用不会有问题，但当应用于其他系列的检查点模型时，LoRA 无法成功应用。以下是最常见的 SDXL 插画基础模型系列：

- **SDXL-base-1.0 系列**：SDXL 的基础模型。此模型不太适合生成插画。
- **animagineXL V3 系列**：在 PDXL（PonyV6）出现之前，这款插画 AI 模型非常流行。*在 V3 中训练的 LoRA 无法用于 V4。*
- **ponyDiffusionV6XL 系列**：自推出以来，这款流行模型迅速占据了市场。然而，生成的图像中经常包含 NSFW 内容，需要通过负面提示进行调整。
- **illustriousXL01 系列**：以 kohaku-xl-beta5 为基础模型的系列。截至撰写本文时，这是最具活力的模型，能够生成高质量的插画。与 animagineXL 一样，不同版本之间的兼容性较差。
- **NoobAI-XL 系列**：以 illustrious-xl-early-release-v0 为基础模型，因此可能属于 illustriousXL 系列，但这也是一个流行的插画 AI 模型。

在 SDXL 的 LoRA 训练中，确定 LoRA 将在哪个系列模型上进行训练非常重要。

### 兼容性测试生成

为了更容易理解兼容性，让我们看看每个模型生成的对比图像。要比较的 LoRA 包括 `[SDXL-base-1.0VAEFix / animagineXLV31_v31 / ponyDiffusionV6XL_v6StartWithThisOne / illustriousXL_v01 / noobaiXLNAIXL_epsilonPred 1.1-Version]`。这些模型被指定为预训练模型，并使用默认参数进行训练。

**训练参数**

```plaintext
训练图像数量：100
重复次数：5
训练批量大小：1
Epoch：1
最大训练步数：1600
种子：123
学习率调度器：cosine
优化器：AdamW8bit
学习率：0.0001 (1e-4)
Unet 学习率：0.0001 (1e-4)
文本编码器学习率：0.00005 (5e-5)
网络维度（Rank）：8
网络 Alpha：1
clip_skip：0 *在 SDXL 中，Clip skip 被禁用。
```

**A1111 WebUI 生成参数**

**提示词：**

```plaintext
dcai-girl, 1girl, looking at viewer, solo, short hair, orange hair, brown eyes, animal ears, dress, masterpiece, meadow, sky, day <lora:DCAI_Girl_SDXL_Def_sdxl-base:1>
```

**负面提示词：**

```plaintext
worst quality, low quality, bad anatomy, realistic, lips, inaccurate limb, extra digit, fewer digits, six fingers, monochrome, nsfw
```

**参数**

```plaintext
步数：20
采样器：DPM++ SDE
调度类型：Karras
CFG 比例：6
种子：3156195032
尺寸：1024x1024
VAE：sdxl.vae.safetensors
```

---

## SDXL-base-1.0

第一张对比图像是使用 "SDXL-base-1.0" 生成的。最右侧的图像是 LoRA 适配前的生成结果。

![由 SDXL-base-1.0 模型生成的 LoRA 对比图](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-base1.jpg)

最右侧：SDXL-base LoRA 训练得相当好。您还可以看到其他 LoRA 对服装有轻微影响。

## animagineXLV31_v31

下一张对比图像是使用 "animagineXLV31_v31" 生成的。

![由 animagineXLV31_v31 生成的 LoRA 对比图](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-anima3.jpg)

从右数第二张：animagineXLV3.1 LoRA 的再现效果更好。您可以看到其他 LoRA 对服装也有一些影响。

## ponyDiffusionV6XL_v6StartWithThisOne

这是使用 "ponyDiffusionV6XL_v6StartWithThisOne" 生成的对比图像。*为生成添加了 PonyDiffusionV6XL 特有的质量修饰符 "score_9, score_8_up, score_7_up" 和负面提示的 "score_6, score_5, score_4"。

![由 ponyDiffusionV6XL_v6StartWithThisOne 生成的 LoRA 对比图](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-pony6.jpg)

从右数第三张：您可以看到，除了 ponyDiffusionV6XL 的 LoRA 外，几乎没有其他影响。

## illustriousXL_v01

这是使用 "illustriousXL_v01" 生成的对比图像。

![由 illustriousXL_v01 生成的 LoRA 对比图](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-illusxl.jpg)

从右数第四张：illustriousXL 的 LoRA 学习得相当好，除了服装的颜色。可以看到其他 LoRA 几乎没有影响。

## noobaiXLNAIXL_epsilonPred 1.1-Version

这是使用 "noobaiXLNAIXL_epsilonPred 1.1-Version" 生成的对比图像。*主模型是 "NOOBAI XL-VPred 1.0"，但 V 预测仅适用于 A1111WebUI 的开发版本。在这种情况下，使用了 Epsilon 预测版本。

![由 noobaiXLNAIXL_epsilonPred 1.1-Version 生成的 LoRA 对比图](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-noobai.jpg)

从右数第五张：noobaiXLNAIXL_epsilonPred 1.1-Version 的 LoRA 能够再现面部，但无法再现服装。您还可以看到对 illustriousXL 的轻微影响。

以上对比图像表明，SDXL 的 LoRA 不具有兼容性。

---

## 使用 Kohya ss GUI 的默认参数进行训练

在本节中，我们将介绍如何使用 Kohya ss GUI 的默认参数进行训练。我们将使用名为 "DCAI_Girl_SDXL_Def_sdxl-base" 的角色模型进行演示。

### 数据集

本次训练使用的数据集是包含 100 张图像的精美插画。这些图像展示了一个可爱的女孩角色，具有以下特征：

- 短发
- 橙色头发
- 棕色眼睛
- 动物耳朵
- 连衣裙
- 草地、天空和白天的场景

### 默认参数

以下是 Kohya ss GUI 的默认训练参数：

- **训练图像数量**：100
- **重复次数**：5
- **训练批量大小**：1
- **Epoch**：1
- **最大训练步数**：1600
- **种子**：123
- **学习率调度器**：cosine
- **优化器**：AdamW8bit
- **学习率**：0.0001 (1e-4)
- **Unet 学习率**：0.0001 (1e-4)
- **文本编码器学习率**：0.00005 (5e-5)
- **网络维度（Rank）**：8
- **网络 Alpha**：1
- **clip_skip**：0 *在 SDXL 中，Clip skip 被禁用。

### 使用训练好的 LoRA 进行测试生成

在训练完成后，我们将使用训练好的 LoRA 进行测试生成。以下是测试生成的参数：

- **步数**：20
- **采样器**：DPM++ SDE
- **调度类型**：Karras
- **CFG 比例**：6
- **种子**：3156195032
- **尺寸**：1024x1024
- **VAE**：sdxl.vae.safetensors

测试生成的提示词与负面提示词与之前的兼容性测试相同。

---

## 本次训练中使用的参数

在本次训练中，我们对以下参数进行了调整：

### 学习率调度器

我们使用了 cosine学习率调度器。该调度器在训练初期使用较大学习率，随着训练进行逐渐减小学习率。

### 优化器

我们选择了 AdamW8bit 优化器。该优化器在处理稀疏梯度时表现良好，适用于大多数深度学习任务。

### 其他参数

其他参数保持默认设置。

---

## 训练结果

经过 1600 步的训练，我们得到了令人满意的结果。以下是与其他 LoRA 的组合以及应用于同系列的检查点模型的测试生成结果。

### 与其他 LoRA 的组合

我们将训练好的 LoRA 与其他几个 LoRA 进行了组合，得到了以下结果：

- **DCAI_Girl_SDXL_Def_sdxl-base + animagineXLV31_v31**：生成的图像中，女孩角色的特征得到了很好的保留，服装细节也很到位。
- **DCAI_Girl_SDXL_Def_sdxl-base + ponyDiffusionV6XL_v6StartWithThisOne**：生成的图像中，女孩角色的特征依然明显，但服装细节有所丢失。
- **DCAI_Girl_SDXL_Def_sdxl-base + illustriousXL_v01**：生成的图像中，女孩角色的特征和服装细节都得到了很好的保留。
- **DCAI_Girl_SDXL_Def_sdxl-base + noobaiXLNAIXL_epsilonPred 1.1-Version**：生成的图像中，女孩角色的面部特征得到了很好的再现，但服装细节较差。

### 应用于同系列的检查点模型

我们还将训练好的 LoRA 应用于同系列的检查点模型，得到了以下结果：

- **DCAI_Girl_SDXL_Def_sdxl-base 应用于 sdxl-base-1.0**：生成的图像中，女孩角色的特征得到了很好的保留，服装细节也很到位。
- **DCAI_Girl_SDXL_Def_sdxl-base 应用于 animagineXLV31_v31**：生成的图像中，女孩角色的特征依然明显，但服装细节有所丢失。
- **DCAI_Girl_SDXL_Def_sdxl-base 应用于 ponyDiffusionV6XL_v6StartWithThisOne**：生成的图像中，女孩角色的特征和服装细节都得到了很好的保留。
- **DCAI_Girl_SDXL_Def_sdxl-base 应用于 illustriousXL_v01**：生成的图像中，女孩角色的特征和服装细节都得到了很好的保留。
- **DCAI_Girl_SDXL_Def_sdxl-base 应用于 noobaiXLNAIXL_epsilonPred 1.1-Version**：生成的图像中，女孩角色的面部特征得到了很好的再现，但服装细节较差。

---

## 使用 Kohya ss GUI 的默认参数进行训练

现在您已经了解了 SDXL 的兼容性，让我们使用 "animagineXLV31_v30Base" 进行训练。如果您在此模型上训练 LoRA，可以将其用作 animagineXL V3 系列的检查点模型。请注意，animagineXL V3 的 LoRA 无法用于 animagineXL V4。让我们将 Animagine XL 4.0 Opt 生成的图像与之前的对比图像进行比较。

![由 animagineXLV31_v31 生成的 LoRA 对比图](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-anima3.jpg)

![由 Animagine XL 4.0 Opt 生成的 LoRA 对比图](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-anima4.jpg)

从右数第二张：服装略有影响，但生成的再现较少。

### 数据集

首先，让我们使用默认参数进行训练。训练源数据集基于 "如何创建原创角色 LoRA [数据集] 制作训练图像和标题" 中创建的数据。如果您想使用相同的数据集，可以在 Patreon 上获取，但仅限付费支持者下载。

![数据集图像样本列表](https://dca.data-hub-center.com/content/uploads/2025/03/finished-dataset-images.jpg)

### 默认参数

准备好数据集后，我们从默认值开始训练，并对 SDXL 模型的插画训练稍作修改。需要输入或更改的区域用红色文字标注。

- **预训练模型名称或路径**：animagineXLV31_v30Base.safetensors
- **训练模型输出名称**：DCAI_Girl_SDXL_Def_anima3 *模型的输出名称
- **实例提示词**：dcai-girl *此情况下使用的标题方法忽略此值，但如果不输入会报错。
- **类别提示词**：1girl *与上述原因相同。
- **重复次数**：5 [默认值：40] *因为训练源有 100 张图像，我们希望将图像总数设为 500。
- **预设**：无
- **LoRA 类型**：标准
- **训练批量大小**：1
- **Epoch**：1
- **最大训练 Epoch**：0
- **最大训练步数**：1600
- **每 N 个 Epoch 保存一次**：1
- **种子**：123 [默认值：0 = 随机] *插入适当的数字以控制参数。
- **学习率调度器**：cosine
- **优化器**：AdamW8bit
- **学习率**：0.0001 (1e-4)
- **文本编码器学习率**：0.00005 (5e-5) [默认值：0.0001 (1e-4)] *更改为官方文档中推荐的默认值。
- **Unet 学习率**：0.0001 (1e-4)
- **学习率预热（总步数的百分比）**：10
- **网络维度（Rank）**：8
- **网络 Alpha**：1
- **clip_skip**：0 [默认值：1] *因为在 SDXL 中禁用了 Clip skip

### 使用训练好的 LoRA 进行测试生成

使用 A1111 WebUI 生成了训练好的 LoRA，结果如下图所示。使用 "animagineXLV31_v31" 生成了 LoRA。下图是应用 LoRA 之前的图像。

![默认参数结果](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-def.jpg)

![无 LoRA 的结果](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-def-no-lora.jpg)

再现性很高，但类似于中奖的种子 Gacha，其他种子生成不稳定。生成参数与之前的对比图像几乎相同，但为 AnimagineV3.1 更改了一些提示词。

**提示词：**
```plaintext
dcai-girl, 1girl, looking at viewer, solo, short hair, orange hair, brown eyes, animal ears, dress, meadow, sky, day, newest, masterpiece, best quality, very aesthetic, absurdres <lora:DCAI_Girl_SDXL_Def_anima3:1>
```

**负面提示词：**
```plaintext
worst quality, low quality, bad anatomy, realistic, lips, inaccurate limb, extra digit, fewer digits, six fingers, monochrome, nsfw
```

**参数：**
```plaintext
步数：30
采样器：DPM++ SDE
调度类型：Karras
CFG 比例：6
种子：3156195032
尺寸：1344x768
VAE：sdxl.vae.safetensors
Hires.fix：True
ADetailer：True
```

---

## 训练结果

A1111 WebUI 设置与之前的测试生成使用的设置相同。

![训练的最终结果](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final.jpg)

### 与其他 LoRA 的组合

当与其他 LoRA 一起使用时，不同的权重比例可能无法很好地应用。以下是 "xl_more_art-full / xl_real / Enhancer" 在 1.0 权重下的适配，使用相同的生成设置。

![与其他 LoRA 的组合结果](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-more_art-full.jpg)

背景发生了变化，但角色本身适配良好。

### 应用于同系列的检查点模型

在这种情况下，它是用 AnimagineV3.1 训练的，因此可以与同系列的检查点模型一起使用。所有内容都使用与测试生成相同的设置生成。

![animaPencilXL_v500 的生成结果](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-animapencilxl_v500.jpg)

animaPencilXL_v500

![AnythingXL_xl 的生成结果](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-anythingxl_xl.jpg)

AnythingXL_xl

![chenkinAnimeImpastoBased_v10 的生成结果](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-chenkinanimeImpastobased.jpg)

chenkinAnimeImpastoBased_v10

![lizmix_versionX 的生成结果](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-lizmix_versionx.jpg)

lizmix_versionX

![ranimeXLBaseOnAnimagine_v10 的生成结果](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-ranimexlbaseonanimagine_v10.jpg)

ranimeXLBaseOnAnimagine_v10

![realAnimagineXL_v10 的生成结果](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-realAnimagineXL_v10.jpg)

realAnimagineXL_v10

如上所示，如果合并模型包含 AnimagineV3.1，则可以应用 LoRA。

---

## 结论

通过本次训练，我们成功地创建了一个原创角色 LoRA，并将其应用于多个 SDXL 检查点模型。训练结果表明，LoRA 在同一系列的模型之间具有良好的兼容性。然而，在不同系列的模型之间，LoRA 的兼容性较差。

在未来的工作中，我们将继续探索 LoRA 的潜力，并尝试将其应用于更多样化的角色和场景中。我们相信，随着技术的不断进步，LoRA 将在插画 AI 领域发挥越来越重要的作用。

感谢您阅读本教程！希望对您有所帮助。如有任何疑问或建议，请随时与我们联系。
