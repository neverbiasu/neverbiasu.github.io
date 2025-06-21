---
title: 如何使用 niji・journey 制作视频
date: 2025-06-17
tags:
    - 功能发布
    - 使用指南
description: 学习如何使用 niji・journey 的全新视频生成功能，将你的图片制作成动画视频。
---

# 如何使用 niji・journey 制作视频

好久不见！我们确实很久没有更新了。

这次的更新真的令人印象深刻。我们制作了一个动画片头！！！呃，我是说，Niji 现在可以生成视频了！！！！！！！！！

虽然我对我们制作的每一个功能都很兴奋，但我可以肯定地说，将你的图片视频化是我们近期推出的最棒的功能。我真的希望你会喜欢它！

要看到视频模型的实际效果，你可以查看我们使用视频模型制作的这个动画片头！！！！！

（我的二次元梦想成真了！！😭）

这个功能制作了很长时间，所以我们超级兴奋能够最终发布它！在这篇文章中，我将给你一些关于如何使用它的简单说明，然后讲述一些获得最佳质量视频的有用技巧 ✨

## 如何使用 Niji 制作视频

要使用 niji 制作视频，你需要一个起始帧和一个提示词。起始帧描述的是什么在移动，提示词描述的是它如何移动。

### 从你的图片库中选择图片

前往"Create"页面，点击"Imagine Bar"最左侧的小图片图标。

![Select image icon](/assets/images/reprints/nijijourney/video/215bda82-8490-8031-8e70-e4020b215494.jpg)

![Upload interface](/assets/images/reprints/nijijourney/video/215bda82-8490-8072-865c-cf21ff9058c4.jpg)

将任何图片拖拽到"Starting Frame"中。这将成为第一帧！

![Starting frame selection](/assets/images/reprints/nijijourney/video/215bda82-8490-80c3-87e8-cff55af05291.jpg)

任何过去上传的图片，无论是用于图片提示、风格参考，甚至是角色参考，都可以在这个面板中找到。你可以通过点击这里来使用它们中的任何一个。

![Image gallery panel](/assets/images/reprints/nijijourney/video/215bda82-8490-8028-884e-f8d30d1ce278.jpg)

一旦选择了你的图片，在 imagine bar 中输入你的提示词，让视频模型发挥它的魔力！如果你脑中没有提示词，那也没关系！你可以简单地提交图片，Niji 会给你一个推荐的动作。

![Prompt input](/assets/images/reprints/nijijourney/video/215bda82-8490-8024-9a5d-f39fb669ea43.jpg)

## 获得出色视频的技巧

### 图片风格决定动作效果

让我们用不同风格的第一帧来演示效果！这里，我们使用相同的提示词

::: tip
一个女孩伸手向上摘苹果
:::

如果第一帧是 TV 动画风格，它会产生 TV 动画动作。

![TV anime style](/assets/images/reprints/nijijourney/video/215bda82-8490-80cf-9b68-d2a672ab85bb.jpg)

如果第一帧是写实渲染的，它会产生 3D 动作

![Realistic style](/assets/images/reprints/nijijourney/video/215bda82-8490-80cf-9b7c-f523852070d7.jpg)

如果第一帧是插画风格，它会产生故事书插画动作

![Illustration style](/assets/images/reprints/nijijourney/video/215bda82-8490-80e4-a357-cece07a42912.jpg)

如你所见，精心选择第一帧的风格对动画非常重要！

### 不要让它太复杂

记住这个动作将在 5 秒内发生！所以尽量避免让它过于复杂。

编写好的视频提示词有 3 个简单规则：

- 只描述你能看到的，而不是角色内心的感受。
- 描述主要动作（正在发生什么）
- 描述次要动作（由于主要动作而摆动的东西）

例如，注意以下差异：

> 有着蓝眼睛和金发的动画王子困惑地四处张望

vs.

> 一个有着金发和蓝眼睛的动画王子左右转动他的头。当他转身时，斗篷在他身后飘动，而散落的发丝在他脸上摆动，他脸上带着困惑的表情。

通过关注次要动作，我们可以让场景更加生动！

当然，所有这些动作可能会分散注意力。（有时候也许你确实只想要那个人转动头部），所以确保包含你需要的尽可能多或尽可能少的细节。

::: tip
如果你不想考虑所有这些，你当然也可以只放入图片而不写提示词！Niji 会猜测如何为其制作动画。
:::

### 记住，图片是第一帧

当我们设计静态图像时，我们通常选择最有力的时刻：跳跃的最高点、动作的顶点、宏大手势最展开的部分。

然而，如果你想制作一个令人愉悦的视频，重要的是从开始开始，而不是高潮。

例如：

如果你想要一个大理石雕像睁开眼睛，你不能放入一张雕像睁着眼睛的图片。

![Statue with open eyes](/assets/images/reprints/nijijourney/video/215bda82-8490-806f-a2e5-c246298b1948.jpg)

你必须放入一张闭着眼睛的图片：

![Statue with closed eyes](/assets/images/reprints/nijijourney/video/215bda82-8490-802f-91f3-e7f9e96cd098.jpg)

只有这样她才会睁开眼睛。

### 选择动作未解决的场景

有时，遵循第一帧规则是困难的。例如，在上面的例子中，我们无法控制睁开眼睛的形状。

一个解决方案是写"一个雕像闭上眼睛"然后倒播。

另一个解决方案是从未解决动作的中间开始。

例如，如果你想制作一个女孩用嘴接住吐司片的场景，选择这个，吐司的命运还不确定。

![Toast falling - uncertain outcome](/assets/images/reprints/nijijourney/video/215bda82-8490-80b5-8d26-e8600c462677.jpg)

而不是像这样，吐司已经被接住了。

![Toast already caught](/assets/images/reprints/nijijourney/video/215bda82-8490-8076-8b71-ef3bc127c5e3.jpg)

在这种方法中，动作的前半部分缺失了，但你可以通过一些创意剪辑来充实它。

## 新冒险的开始！

获得一些好的镜头只是开始！在我们的下一篇文章中，我们将深入探讨视频的编排和剪辑，包括对我们动画片头制作的深入了解！

我希望你享受让你的创作动起来！

再次感谢你在这个旅程中的支持。

---

*原文来自 [niji・journey blog](https://nijijourney.com/blog/niji-video)*
