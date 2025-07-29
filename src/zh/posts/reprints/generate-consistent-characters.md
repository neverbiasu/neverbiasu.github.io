---
title: 生成一致角色 – Replicate 博客
# 原文：https://replicate.com/blog/generate-consistent-characters
date: 2025-07-21
author:
  - name: fofr
    url: https://replicate.com/fofr
---

# 生成一致角色

![图1：同一角色在不同场景下的8张图片网格](/assets/image/reprints/replicate/cover.D2ypzJcL_Z91s9c.webp)

直到最近，生成一致角色图像的最佳方式还是训练一个lora。你需要准备一组图片数据集，然后[用它们训练FLUX lora](https://replicate.com/blog/fine-tune-flux)。

如果再往前追溯，你可能还记得必须用ComfyUI工作流，结合SDXL、controlnet、IPAdapter和一些非商用的人脸关键点模型。现在一切都变得简单多了。

如今我们有多种最先进的图像模型，可以仅凭一张参考图就准确生成一致角色。本文将介绍哪些模型能做到这一点，以及根据你的需求如何选择最合适的模型。

> 她穿着一件印有“Replicate”字样的粉色T恤

![图2：原始参考图](/assets/image/reprints/replicate/0_1%20copy.jpg)

原图

[![图3：4张输出图网格](/assets/image/reprints/replicate/tmp67fsa60i.png)](/assets/image/reprints/replicate/tmp67fsa60i.png)

“她穿着一件印有‘Replicate’字样的粉色T恤”

## 一致角色的最佳模型

截至2025年7月，Replicate上有4个模型可以仅凭一张参考图生成真实且准确的结果，按发布时间排序：

- [OpenAI 的 gpt-image-1](https://replicate.com/openai/gpt-image-1)
- [Runway 的 Gen-4 Image](https://replicate.com/runwayml/gen4-image)
- [Black Forest Labs 的 FLUX.1 Kontext](https://replicate.com/black-forest-labs/flux-kontext-pro)
- [字节跳动的 SeedEdit 3](https://replicate.com/bytedance/seededit-3.0)

FLUX.1 Kontext 有多个版本：[pro](https://replicate.com/black-forest-labs/flux-kontext-pro)、[max](https://replicate.com/black-forest-labs/flux-kontext-max) 和 [dev](https://replicate.com/black-forest-labs/flux-kontext-dev)。Dev 是开源版，更可控、可微调，但不如 pro 强大。

为写这篇博客，我还做了个小工具，方便对比输出。它会并行运行 FLUX.1 Kontext、SeedEdit 3.0、gpt-image-1 和 Runway Gen-4：[fofr/compare-character-consistency](https://replicate.com/fofr/compare-character-consistency)。

（你知道[任何人都可以在 Replicate 上创建和推送模型](https://replicate.com/docs/guides/deploy-a-custom-model)吗？）

## 价格与速度对比

先看最基本的：速度和价格。下表展示了各模型的价格和速度。gpt-image-1 的价格取决于输出质量（低、中、高），Gen-4 Image 则取决于分辨率（720p/1080p）。

总的来说，gpt-image-1 最慢也最贵，Kontext Dev 最快最便宜。质量则各有取舍，后文详述。

| 模型 | 单张价格 | 速度 | 日期 |
| --- | --- | --- | --- |
| OpenAI [gpt-image-1](https://replicate.com/openai/gpt-image-1) | $0.04–$0.17 | 16s–59s | 2025年4月 |
| Runway [Gen-4 Image](https://replicate.com/runwayml/gen4-image) | $0.05–$0.08 | 20s–27s | 2025年4月 |
| Black Forest Labs [FLUX.1 Kontext Pro](https://replicate.com/black-forest-labs/flux-kontext-pro) | $0.04 | 5s | 2025年5月 |
| Black Forest Labs [FLUX.1 Kontext Max](https://replicate.com/black-forest-labs/flux-kontext-max) | $0.08 | 7s | 2025年5月 |
| Black Forest Labs [FLUX.1 Kontext Dev](https://replicate.com/black-forest-labs/flux-kontext-dev) | $0.025 | 4s | 2025年5月 |
| 字节跳动 [SeedEdit 3](https://replicate.com/bytedance/seededit-3.0) | $0.03 | 13s | 2025年7月 |

## 角色一致性对比

下面对比各模型保持角色一致性的能力。

本节对比中，gpt-image-1 采用高质量高保真设置，FLUX.1 Kontext 选用 Pro 版（质量与速度最佳平衡），Gen-4 Image 选用 1080p。

### 照片级准确性

以下是多组例子，展示各模型在照片输出上的优劣。

#### 新活动场景

这两组例子中，Gen-4 的优势明显，构图最吸引人，角色最准确。

> 她在弹钢琴

![图4：原始参考图](/assets/image/reprints/replicate/output.png)

原图

[![图5：4张输出图网格](/assets/image/reprints/replicate/tmpkp9hl6w3.png)](/assets/image/reprints/replicate/tmpkp9hl6w3.png)

“她在弹钢琴”

> 他在弹吉他

![图6：原始参考图](/assets/image/reprints/replicate/output-1.png)

原图

[![图7：4张输出图网格](/assets/image/reprints/replicate/tmphyqs_vms.png)](/assets/image/reprints/replicate/tmphyqs_vms.png)

“他在弹吉他”

#### 场景微调

如果只想改动场景中的小部分，所有模型都能很好应对。

> 移除饮料杯

![图8：原始参考图](/assets/image/reprints/replicate/output(1).png)

原图

[![图9：4张输出图网格](/assets/image/reprints/replicate/tmp5pclzys5.png)](/assets/image/reprints/replicate/tmp5pclzys5.png)

“移除饮料杯”

#### 半身像（异色瞳、双色发、面部特征）

更具挑战性的对比：角色有异色瞳、双色发和面部标记。

所有模型都能处理头发和眼睛（有的需要多试几次）。

> 夏日森林中的她，半身像照片

![图10：原始参考图](/assets/image/reprints/replicate/image.png)

原图

[![图11：4张输出图网格](/assets/image/reprints/replicate/tmpw54nxtoe.png)](/assets/image/reprints/replicate/tmpw54nxtoe.png)

“夏日森林中的她，半身像照片”

#### 剃须、雨衣与下雨

这次尝试让同一人剃须、穿雨衣、下雨。

结果有好有坏，只有 SeedEdit 3 和 gpt-image-1 能处理“剃须”请求，但 gpt-image-1 结果完全变成了另一个人。

> 移除胡须，穿雨衣，下雨

![图12：原始参考图](/assets/image/reprints/replicate/output(2).png)

原图

[![图13：4张输出图网格](/assets/image/reprints/replicate/tmp8138t1_6.png)](/assets/image/reprints/replicate/tmp8138t1_6.png)

“移除胡须，穿雨衣，下雨”

#### 纹身挑战

本例角色有大量独特纹身，考察各模型表现。没有哪个模型完美，Gen-4 和 gpt-image-1 颈部纹身保持得最好。

> 他是餐厅厨房里做饭的厨师

![图14：原始参考图](/assets/image/reprints/replicate/XU793vzcsCZ9Btcg4NKu4xbLfIU24e7vKrXGR2MFp01X8fFqA/output.png)

原图

[![图15：4张输出图网格](/assets/image/reprints/replicate/tmpc4vpr23u.png)](/assets/image/reprints/replicate/tmpc4vpr23u.png)

“他是餐厅厨房里做饭的厨师”

### 创意任务与风格变换

本节尝试将角色变成其他风格或形象。好的模型能在变换风格的同时保持角色一致性。

#### 风格变换

简单风格变换下，Gen-4 不适合做风格化任务。

> 将此人变为动漫风

![图16：原始参考图](/assets/image/reprints/replicate/tmpys9tsu4e.jpg)

原图

[![图17：4张输出图网格](/assets/image/reprints/replicate/tmpqcxmufc8.png)](/assets/image/reprints/replicate/tmpqcxmufc8.png)

“将此人变为动漫风”

> 水彩画风格

![图18：原始参考图](/assets/image/reprints/replicate/tmpys9tsu4e.jpg)

原图

[![图19：4张输出图网格](/assets/image/reprints/replicate/tmperfbtwsy.png)](/assets/image/reprints/replicate/tmperfbtwsy.png)

“水彩画风格”

#### 变身其他形象

万圣节到了。我们把她变成女巫，把他变成食人魔，还有人变成潘多拉的蓝色纳美人。Gen-4 的女巫效果最好，但食人魔最不真实。

> 让她变成女巫

![图20：原始参考图](/assets/image/reprints/replicate/tmprsz0v41u.jpg)

原图

[![图21：4张输出图网格](/assets/image/reprints/replicate/tmpkr6n5gt5.png)](/assets/image/reprints/replicate/tmpkr6n5gt5.png)

“让她变成女巫”

> 让他变成绿色皮肤的食人魔

![图22：原始参考图](/assets/image/reprints/replicate/tmp62yelaf9.jpg)

原图

[![图23：4张输出图网格](/assets/image/reprints/replicate/tmpex69w8bk.png)](/assets/image/reprints/replicate/tmpex69w8bk.png)

“让他变成绿色皮肤的食人魔”

本例中，Kontext Pro 不支持生成潘多拉蓝色纳美人，展示的是 Kontext Dev。

> 让他变成潘多拉的蓝色纳美人（阿凡达）

![图24：原始参考图](/assets/image/reprints/replicate/tmpc081yqvt.jpg)

原图

[![图25：4张输出图网格](/assets/image/reprints/replicate/tmpc2ahjf14.png)](/assets/image/reprints/replicate/tmpc2ahjf14.png)

“让他变成潘多拉的蓝色纳美人（阿凡达）”

## 总结

总体来看：

- Kontext Pro 多才多艺，效果出色，但人脸周围常有伪影，严重时会导致图片不可用（Kontext Dev 没有这些伪影，但整体质量略低）
- gpt-image-1 总会带有明显的黄色调，即使开启高质量高保真，角色一致性也经常丢失。价格最高、速度最慢，仅推荐复杂任务时使用。
- SeedEdit 3 通常会严格保持原始构图，难以提示新角度或场景。输出偏柔和，AI感较强，复杂场景下一致性也有问题。
- Runway Gen-4 在照片类任务中最适合，角色还原度最高。缺点是复杂场景下容易出现多余的手臂、肢体，有时多试几次能修复，有时不能。Gen-4 不支持风格化任务。

## 推荐

照片类建议优先用 [Runway Gen-4 Image](https://replicate.com/runwayml/gen4-image)。如需更快或更便宜的结果，[Kontext Pro](https://replicate.com/black-forest-labs/flux-kontext-pro) 是次优选择。如果 Gen-4 输出不连贯，可以用 Kontext Pro 修复。

创意和变身类任务建议先试 [Kontext Pro](https://replicate.com/black-forest-labs/flux-kontext-pro)。如任务复杂且预算充足，也可试 [gpt-image-1](https://replicate.com/openai/gpt-image-1)。[SeedEdit 3](https://replicate.com/bytedance/seededit-3.0) 是 gpt-image-1 和 kontext 不理想时的廉价备选。风格化任务不建议用 Gen-4。

更多模型、对比和实验敬请期待。现在就去 [replicate.com/explore](http://replicate.com/explore) 试试新东西，或关注我们的 [X](https://x.com/replicate) 账号。

---

[下篇：Bria 已上线 Replicate](https://replicate.com/blog/bria)

[所有服务在线](https://www.replicatestatus.com/)

---

- [首页](https://replicate.com/)
- [关于](https://replicate.com/about)
- [加入我们](https://replicate.com/about#join-us)
- [条款](https://replicate.com/terms)
- [隐私](https://replicate.com/privacy)
- [状态](https://www.replicatestatus.com/)
- [支持](https://replicate.com/support)
