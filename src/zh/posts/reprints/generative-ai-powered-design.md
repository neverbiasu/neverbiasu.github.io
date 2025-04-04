---
title: "生成式AI驱动的设计：使用SD3.5 Large创建游戏环境"
icon: openmoji:video-game
cover: https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2025/03/19/Picture1-11.jpg
order: 1
author: Isha Dua & Parth Patel
date: 2025-03-19
category:
  - 转载
tag:
  - 生成式AI
  - 游戏开发
  - Stable Diffusion
  - 图像生成
  - AWS
  - Amazon Bedrock
sticky: false
star: false
footer: AI驱动的游戏设计
copyright: reprint
---

在竞争激烈的游戏开发世界中，紧跟技术进步至关重要。生成式AI已经成为游戏规则的改变者，为游戏设计师提供了前所未有的机会，使他们能够突破界限并创造身临其境的虚拟世界。在这场革命的前沿是Stability AI的尖端文本到图像AI模型——Stable Diffusion 3.5 Large (SD3.5 Large)，它正在彻底改变我们创建游戏环境的方式。

SD3.5 Large可在Amazon Bedrock上使用，是Stability AI迄今为止最先进的文本到图像模型。拥有81亿参数，该模型擅长从文本描述生成高质量的百万像素图像，具有卓越的提示符合性，使其成为快速创建详细游戏环境的理想选择。其改进的架构基于多模态扩散变换器(MMDiT)，结合多个预训练文本编码器以增强文本理解能力，并使用QK归一化来提高训练稳定性。

该模型在图像质量、排版和复杂提示理解方面表现出色。它擅长创建多种风格的多样化高质量图像，为媒体、游戏、广告和教育等行业提供了宝贵价值。

在本文中，我们将探讨如何使用SD3.5 Large解决早期概念艺术和角色设计等实际游戏需求。

## SD3.5 Large相比SD3 Large的关键改进

SD3.5 Large提供以下改进：

- 增强的照片真实感 – 提供前所未有的逼真详细3D图像
- 卓越的场景复杂性 – 能以显著的准确度处理复杂场景中的多个主体
- 改进的解剖学渲染 – 生成更精确自然的人物表现
- 多样化表现 – 无需冗长提示即可创建包含多样化肤色和特征的包容性图像

## 游戏环境创建的实际应用案例
图像生成技术有望彻底改变游戏行业的几个关键领域。首先，它将显著增强构思和设计过程，使团队能够快速创建新场景和对象，从而加速设计周期。其次，它将实现游戏内容生成，使用户能够创建新对象、修改头像皮肤或生成新纹理。虽然当前应用主要集中在设计阶段，但随着生成式AI的不断进步，预计将导致更多用户生成的AI内容（如玩家头像），这将大幅提升用户创造力和整体游戏体验。这种向AI辅助内容创作的转变，将为开发者和玩家都开辟全新的可能性领域。

以下是创建早期游戏世界的示例提示及其输出：

- 一个充满活力的奇幻景观，包括起伏的山丘、闪闪发光的河流，以及远处明亮蓝天下的宏伟城堡。

![一个充满活力的奇幻景观，包括起伏的山丘、闪闪发光的河流，以及远处明亮蓝天下的宏伟城堡](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2025/03/19/Picture1-11.jpg)

- 一片茂密的热带雨林，充满异国情调的植物和野生动物，阳光透过厚厚的树冠，有一个隐蔽的瀑布流入清澈见底的水池。

![一片茂密的热带雨林，充满异国情调的植物和野生动物，阳光透过厚厚的树冠，有一个隐蔽的瀑布流入清澈见底的水池](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2025/03/19/Picture2-2.jpg)

- 黄昏时分的未来主义城市天际线，有着流线型摩天大楼、霓虹灯和在它们之间飞行的飞行器，倒映在河流的玻璃表面上。
![黄昏时分的未来主义城市天际线，有着流线型摩天大楼、霓虹灯和在它们之间飞行的飞行器，倒映在河流的玻璃表面上](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2025/03/19/Picture3-2.jpg)

以下是从不同角度创建早期游戏资产和道具的示例提示：

- 一个精心设计的逼真游戏武器道具，带有火焰般的蓝绿色刀刃，背景是模糊的巨大神庙。刀刃将几何设计与异域文化美学融为一体。
- 特写侧面角度视图，展示一个精心设计的逼真游戏武器道具，带有火焰般的蓝绿色刀刃，背景是模糊的巨大神庙。刀刃将几何设计与异域文化美学融为一体。
- 俯视图，展示一个精心设计的逼真游戏武器道具，带有火焰般的蓝绿色刀刃，背景是模糊的巨大神庙。刀刃将几何设计与异域文化美学融为一体。

![绿色刀刃](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2025/03/19/Picture4-3.jpg)

## 解决方案概述
为了展示SD3.5 Large在游戏环境创建中的威力，让我们通过一个假设的工作流程来演示。我们提供了一个Jupyter笔记本，用于部署以下GitHub仓库中的游戏用例示例。使用us-west-2 AWS区域运行此演示。

### 前提条件
此笔记本设计为在AWS上运行，使用Amazon Bedrock访问Anthropic的Claude 3 Sonnet和Stability AI模型。在继续之前，请确保已设置以下内容：

- AWS账户。
- Amazon SageMaker域。
- 通过Amazon Bedrock控制台访问Stability AI的SD3.5 Large文本到图像模型。有关说明，请参阅管理访问Amazon Bedrock基础模型。

## 定义游戏世界
首先概述游戏世界的核心概念，包括其主题、氛围和关键位置。例如，"神秘王国设定在一个充满活力的奇幻世界中，玩家踏上任务去发现古老的秘密并与神秘生物作战。游戏具有多样化的环境，包括附魔森林、神秘山脉和被遗忘的废墟。氛围是异想天开和魔幻的，有鲜艳的颜色和奇幻元素，唤起一种奇妙感。"

## 制作详细的世界和物体提示
使用自然语言描述您想要创建的特定环境和对象。以下截图展示了一些生成的提示。

![提示](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2025/03/19/Picture5-2-1024x520.jpg)

您还可以通过以下步骤使用Amazon Bedrock生成初始概念图像：

1. 在Amazon Bedrock控制台上，在导航窗格的"Foundation models"下，选择"Model catalog"。
2. 在"Providers"中，选择Stability AI，然后选择Stable Diffusion 3.5 Large。

![模型目录](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2025/03/19/Picture6-1-1024x494.jpg)

3. 选择"Open in playground"。

![在playground中打开Stability](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2025/03/19/Picture7-1-1024x533.jpg)

4. 输入您的提示并选择"Run"。几秒钟内就会生成一张高保真图像。

![高保真图像](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2025/03/19/Picture9-1-1024x518.jpg)

## 迭代和优化

当您对基础概念满意后，可以生成变体来探索同一环境的不同可能性。分析生成的图像并优化您的提示以达到期望的结果。您可能想要调整光照、色彩搭配或特定的环境特征等元素。最终，将生成的图像作为3D艺术家创建完全实现的游戏环境的参考材料。

## 清理

为避免费用，如果使用了笔记本演示，必须停止活动的SageMaker笔记本实例。有关说明，请参阅清理Amazon SageMaker笔记本实例资源。

## 结论

Stability AI的最新系列模型代表了生成式AI的重大进步，为游戏开发者、设计师和内容创作者提供了强大的工具，以增强创意工作流程并探索视觉叙事的新维度。通过使用Stability AI的功能，组织可以解决从概念艺术和角色设计到关卡创建和营销活动等实际游戏需求。然而，重要的是以负责任和道德的心态来使用这项技术，考虑潜在的偏见，尊重知识产权，并减轻误用的风险。通过在意识到其局限性和道德考量的同时采用这些模型，游戏专业人士可以推动游戏设计和视觉内容创作可能性的边界。

要开始使用，请查看Amazon Bedrock中提供的Stability AI模型。

关于作者

Isha Dua是一位位于旧金山湾区的高级解决方案架构师。她通过了解客户的目标和挑战，并指导他们如何以云原生方式构建应用程序，同时确保其具有弹性和可扩展性，帮助AWS企业客户实现增长。她对机器学习技术和环境可持续性充满热情。

Parth Patel是AWS旧金山湾区的高级解决方案架构师。Parth指导客户加速其云端之旅，帮助他们成功地采用和在AWS云上实现增长。他专注于机器学习、环境可持续性和应用程序现代化。
