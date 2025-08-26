---
title: GPT-5 发布 | OpenAI
date: 2025-08-07
author: OpenAI
---

# GPT-5 发布

我们迄今为止最智能、最快速、最实用的模型，内置思考功能，将专家级智能带到每个人手中。

---

## 目录

- [一个统一的系统](#一个统一的系统)
- [一个更智能、更广泛实用的模型](#一个更智能更广泛实用的模型)
    - [编程](#编程)
    - [创意表达与写作](#创意表达与写作)
    - [健康](#健康)
- [评测](#评测)
    - [编程](#编程-1)
    - [指令遵循与工具使用](#指令遵循与工具使用)
    - [多模态](#多模态)
    - [健康](#健康-1)
    - [经济重要任务](#经济重要任务)
- [更快、更高效的思考](#更快更高效的思考)
- [构建一个更健壮、可靠、有用的模型](#构建一个更健壮可靠有用的模型)
    - [更准确的真实世界问答](#更准确的真实世界问答)
    - [更诚实的回应](#更诚实的回应)
    - [更安全、更有用的回应](#更安全更有用的回应)
    - [减少迎合与优化风格](#减少迎合与优化风格)
    - [更多自定义 ChatGPT 的方式](#更多自定义-chatgpt-的方式)
    - [生物风险的全面防护](#生物风险的全面防护)
- [GPT-5 pro](#gpt-5-pro)
- [如何使用 GPT-5](#如何使用-gpt-5)
- [可用性与访问](#可用性与访问)

---

## 一个统一的系统

GPT-5 是一个统一系统，拥有一个**智能高效的模型**，能回答大多数问题；一个用于更难问题的**更深层次推理模型**（GPT-5 思考）；以及一个**实时路由器**，根据对话类型、复杂度、工具需求和你的明确意图（例如，当你在提示中说“认真思考这个”）快速决定使用哪种模型。路由器持续基于真实信号训练，包括用户切换模型、对回答的偏好率和正确性测量，并随时间不断改进。当使用额度达到上限时，每个模型的迷你版本将处理剩余查询。在不久的将来，我们计划将这些能力整合为单一模型。

## 一个更智能、更广泛实用的模型

GPT-5 不仅在基准测试中超越前代模型、回答更快，更重要的是在真实世界问题上更有用。我们在减少幻觉、提升指令遵循和降低迎合性方面取得重大进展，同时大幅提升了 GPT-5 在 ChatGPT 三大常见用途——写作、编程和健康领域的表现。

### 编程

GPT-5 是我们迄今最强的编程模型。它在**复杂前端生成**和**大型代码库调试**方面表现尤为突出。它常常能凭一个提示就直观且有品味地将创意变为现实，生成美观、响应迅速的网站、应用和游戏。早期测试者还注意到其更佳的设计选择，对间距、排版和留白等有更好理解。有关 GPT-5 为开发者带来的全部功能，请[在此处](https://openai.com/index/introducing-gpt-5-for-developers/)查看完整详情。

以下是 GPT-5 仅用一个提示创作的一些示例：
- 滚动球小游戏
- 像素艺术
- 打字游戏
- 架子鼓模拟器
- Lofi 可视化器

**提示示例：** 创建一个单页应用，要求如下：
- 名称：Jumping Ball Runner
- 目标：跳过障碍，尽可能生存更久。
- 特性：速度递增、高分追踪、重试按钮、动作和事件配有趣味音效。
- UI 要色彩丰富，带视差滚动背景。
- 角色应卡通有趣，观赏性强。
- 游戏适合所有人。

### 创意表达与写作

GPT-5 是我们迄今最强的写作协作伙伴，能帮助你将粗糙想法转化为具有文学深度和节奏感的**引人入胜、产生共鸣的作品**。它更可靠地处理结构模糊的写作，如维持无韵五音步或自然流畅的自由诗，兼顾形式与表达清晰。这些提升后的写作能力意味着 ChatGPT 能更好地协助你完成日常任务，如起草和编辑报告、邮件、备忘录等。下表中可以比较 GPT-5 和 GPT-4o 的写作风格。

### 健康

GPT-5 是我们在健康相关问题上表现最好的模型，帮助用户了解并维护自身健康。该模型在 [**HealthBench**](https://openai.com/index/healthbench/)（我们今年早些时候发布的一项基于真实场景和医生定义标准的评测）上得分显著高于任何先前模型。与先前模型相比，它更像一个积极的思考伙伴，会主动提示潜在问题并提出问题以给出更有帮助的答案。该模型现在还能提供更精准可靠的回应，适应用户的语境、知识水平和地理位置，使其能在多种场景下提供更安全、更有帮助的回应。重要提示：ChatGPT 不能替代医疗专业人士——应将其视为一个帮助你理解结果、在与医疗服务提供者交流时提出正确问题、并在做决定时权衡选择的伙伴。

![HealthBench](https://neverbiasu.github.io/assets/images/reprints/openai/health-bench.png)
![HealthBench Hard Hallucinations](https://neverbiasu.github.io/assets/images/reprints/openai/health-bench-hard-hallucinations.png)
![HealthBench Hard](https://neverbiasu.github.io/assets/images/reprints/openai/health-bench-hard.png)

在以下示例中，你可以看到 GPT-5 在不同领域比我们先前模型更出色的一些方面——更丰富、更详细、更有用：
- 诗歌
- 乐队全球巡演规划
- 家庭太阳能计划
- 投手康复计划
- 对过去模型的悼词

---

## GPT-4o

写一首能产生情感冲击的短诗。一位在京都的寡妇在奇怪的地方不断发现她已故丈夫的袜子。

**不该出现袜子的**

在饭碗柜里——一只，
叠得整整齐齐，像他刚出门一样。
另一只在花园扫帚后，
沾满了梅花和疑云。

榻榻米上，柔软而孤独，
一只脚后跟朝着寺庙的钟声。
一只在被炉里，温暖如呼吸——
她哭泣着，却无人诉说。

洗衣机是空的。一直都是。
但袜子不断冒出来，狡黠而又亲切。
她从不问它们是如何回来的。
她只希望他不会介意。

## GPT-5

写一首能产生情感冲击的短诗。一位在京都的寡妇在奇怪的地方不断发现她已故丈夫的袜子。

茶叶罐里，一只孤零零的袜子，
散发着淡淡的樟脑和雨水的气味。
另一只在木屐架旁等待，
蜷缩着，像一条沉睡的锦鲤。

她掀开被褥——又多了两只，折叠着
在他曾经温暖过她的寂静之中。

京都的钟声将暮色滚下山坡。

她把它们挂在竹竿上，
像一个已不存在的国家的黑色旗帜，
她数着它们，仿佛在数着祝福，
或是呼吸，或是通往一扇门的脚步
那扇门只有在你停止敲门时才会打开。

GPT-5 的回应以更强的结尾、清晰的意象和引人注目的隐喻（“像一个已不存在的国家的黑色旗帜”、“京都的钟声将暮色滚下山坡”）抓住了更宏大的情感弧线，建立了一种生动的文化和地方感。GPT-4o 的版本遵循了更可预测的结构和韵律，是讲述而非展示（“她哭泣着，却无人诉说”）。

*我们根据给定提示在 4o 和 OpenAI o3 之间选择了表现更好的模型的回应。*

---

## 评测

GPT-5 全面更智能，这体现在其在学术和人工评测基准上的表现，尤其是在数学、编程、视觉感知和健康领域。它在**数学（AIME 2025 无工具达到 94.6%）、真实世界编程（SWE-bench Verified 达到 74.9%，Aider Polyglot 达到 88%）、多模态理解（MMMU 达到 84.2%）和健康（HealthBench Hard 达到 46.2%）**方面均创下新的技术水平——这些进步在日常使用中显而易见。借助 GPT-5 pro 的扩展推理，该模型还在 **GPQA** 上创下新的 SOTA，无工具得分达到 88.4%。

![AIME 2025 benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/aime2025.png)
![SWE-bench Verified benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/swe-bench-verified-software-engineering.png)
![SWE benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/swe.png)
![Aider benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/aider.png)
![GPQA benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/gpqa.png)
![GPQA Diamond PhD-level science questions benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/gpqa-diamond-phd-level-science-questions.png)
![Frontier Math benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/frontier-math.png)
![HMMT benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/hmmt.png)
![TAU2 benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/tau2.png)
![Humanity benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/humanity.png)

> _*带工具的 AIME 结果不应直接与无工具访问权限的模型的性能进行比较；它们是 GPT-5 如何有效利用可用工具的一个例子。*

### 编程

### 指令遵循与工具使用

GPT-5 在测试指令遵循和代理工具使用的基准测试中表现出显著的进步，这些能力使其能够可靠地执行多步骤请求、协调不同工具并适应环境变化。在实践中，这意味着它更擅长处理复杂、不断变化的任务；GPT-5 可以更忠实地遵循您的指令，并利用其可用的工具端到端地完成更多工作。

![Scale MultiChallenge Multi-turn instruction following](https://neverbiasu.github.io/assets/images/reprints/openai/scale-multi-challenge.png)
![Collie](https://neverbiasu.github.io/assets/images/reprints/openai/collie.png)
![Browse Comp](https://neverbiasu.github.io/assets/images/reprints/openai/browse-comp.png)

### 多模态

该模型在一系列多模态基准测试中表现出色，涵盖视觉、视频、空间和科学推理。更强的多模态性能意味着 ChatGPT 可以更准确地对图像和其他非文本输入进行推理——无论是解释图表、总结演示文稿的照片，还是回答有关图表的问题。

![MMMU benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/mmmu.png)
![MMMU Pro benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/mmmu-pro.png)
![CharXiv reasoning scientific figure reasoning](https://neverbiasu.github.io/assets/images/reprints/openai/charxiv-reasoning-scientific-figure-reasoning.png)
![Video MMMU](https://neverbiasu.github.io/assets/images/reprints/openai/video-mmmu.png)
![ERQA benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/erqa.png)

### 经济重要任务

GPT-5 在衡量模型在复杂、具有经济价值的知识工作方面表现的内部基准测试中也是我们表现最好的模型。在使用推理时，GPT-5 在大约一半的情况下与专家相当或更优，同时在涵盖法律、物流、销售和工程等 40 多个职业的任务中优于 o3 和 ChatGPT Agent。

![Economically important tasks benchmark](https://neverbiasu.github.io/assets/images/reprints/openai/economically-important-tasks.png)

> _上述评测方法：GPT-4o 的结果反映了截至 2025 年 8 月 ChatGPT 中最新版本的模型。所有模型均在高“推理努力”设置下进行评测。ChatGPT 中的推理努力可能会有所不同，高代表用户在使用模型时可能体验到的上限。_

---

## 更快、更高效的思考

GPT-5 用更少的思考时间获得更高价值。在我们的评测中，GPT-5（含思考）在视觉推理、智能编程和研究级科学问题解决等方面，以 50-80% 更少的输出 token 超越 OpenAI o3。

GPT-5 由 Microsoft Azure AI 超级计算机训练。

---

## 构建一个更健壮、可靠、有用的模型

### 更准确的真实世界问答

GPT-5 的幻觉率显著低于前代模型。在启用网页搜索的匿名 ChatGPT 生产流量提示中，GPT-5 的回答出现事实错误的概率比 GPT-4o 低约 45%，在“思考”模式下比 OpenAI o3 低约 80%。

我们特别加强了模型在复杂、开放性问题推理时的可靠性，并新增了开放性事实性压力测试。我们测量了 GPT-5 在思考来自两个公共事实性基准 [LongFact](https://arxiv.org/abs/2403.18802)（概念和对象）和 [FActScore](https://arxiv.org/abs/2305.14251) 的开放性事实寻求提示时的幻觉率。在所有这些基准中，“GPT-5 思考”的幻觉率大幅下降——约为 o3 的六分之一——标志着长篇内容准确性的一次明显飞跃。有关我们在这些基准上的评测的实现和评分详情，请参见[系统卡](https://openai.com/index/gpt-5-system-card/)。

![Hallucination rate on open source prompts](https://neverbiasu.github.io/assets/images/reprints/openai/hallucination-rate-on-open-source-prompts.png)
![Response-level error rate on de-identified ChatGPT traffic](https://neverbiasu.github.io/assets/images/reprints/openai/response-level-error-rate-onde-identified-chatgpt-traffic.png)

### 更诚实的回应

除了事实性提高外，GPT-5（含思考）在与用户沟通自身能力和操作时更为诚实——尤其在任务不可能、条件不足或缺少关键工具时。为了在训练中获得高奖励，推理模型可能会学会在无法完成任务时撒谎，或对不确定的答案过于自信。例如，为了测试这一点，我们从多模态基准 CharXiv 的提示中移除了所有图像，发现 OpenAI o3 仍然有 86.7% 的时间对不存在的图像给出自信的答案，而 GPT-5 仅为 9%。

![CharXiv missing image](https://neverbiasu.github.io/assets/images/reprints/openai/char-xiv.png)

在推理时，GPT-5 更准确地识别无法完成的任务，并清晰地传达其局限性。我们评估了在涉及不可能的编码任务和缺失的多模态资产的设置下的欺骗率，发现 GPT-5（含思考）在所有方面都比 o3 更少欺骗。在一个代表真实生产 ChatGPT 流量的大型对话集中，我们将欺骗率从 o3 的 4.8% 降低到 GPT-5 推理回应的 2.1%。虽然这对用户来说是一个有意义的改进，但仍有更多工作要做，我们将继续研究提高模型的真实性和诚实性。更多详情请参见[系统卡](https://openai.com/index/gpt-5-system-card/)。

![Deception evals across models](https://neverbiasu.github.io/assets/images/reprints/openai/deception-evals-across-models.png)

---

### 更安全、更有用的回应

GPT-5 在安全性上取得新突破。以往 ChatGPT 主要依赖基于拒绝的安全训练：根据用户提示，模型要么执行要么拒绝。虽然这种训练方式对明确的恶意提示效果很好，但在用户意图不明确或信息可用于良性或恶意目的的情况下可能会遇到困难。拒绝式训练对于病毒学等双重用途领域尤其不灵活，在这些领域，良性请求可以在高层次上安全完成，但如果详细完成则可能被坏人利用。

对于 GPT-5，我们引入了一种新的安全训练形式——安全补全——它教导模型在尽可能提供最有帮助的答案的同时，仍保持在安全边界内。有时，这可能意味着部分回答用户的问题或仅在高层次上回答。如果模型需要拒绝，GPT-5 被训练成透明地告诉你拒绝的原因，并提供安全的替代方案。在受控实验和我们的生产模型中，我们发现这种方法更为细致，能够更好地处理双重用途问题，对模糊意图具有更强的鲁棒性，并减少了不必要的过度拒绝。有关我们新的安全训练方法的更多信息，以及方法、指标和结果的完整详情，请阅读我们的[安全补全论文](https://openai.com/index/gpt-5-safe-completions/)。

### 减少迎合与优化风格

总体而言，与 GPT-4o 相比，GPT-5 **不那么热情附和**，**使用更少不必要的表情符号**，并且在后续追问中更为含蓄和周到。它应该感觉更像是**与一位拥有博士级智能的贴心朋友聊天**，而不是“与 AI 对话”。

今年早些时候，我们[发布了对 GPT-4o 的更新](https://openai.com/index/sycophancy-in-gpt-4o/)，无意中使模型变得过度迎合或过分奉承。我们很快[回滚了这一更改](https://openai.com/index/expanding-on-sycophancy/)，并从此致力于通过以下方式理解和减少这种行为：
- 开发新的评测来衡量迎合程度
- 改进我们的训练，使模型不那么迎合——例如，添加通常会导致过度同意的示例，然后教导它不要这样做。

在专门设计用于引出迎合性回应的提示的目标性迎合评测中，GPT-5 有意义地减少了迎合性回复（从 14.5% 降至 6% 以下）。有时，减少迎合性可能会导致用户满意度下降，但我们所做的改进将迎合性减少了一半以上，同时还带来了其他可衡量的收益，因此用户可以继续进行高质量、建设性的对话——这符合我们[帮助人们善用 ChatGPT](https://openai.com/index/how-we're-optimizing-chatgpt/) 的目标。

### 更多自定义 ChatGPT 的方式

GPT-5 在指令遵循方面有显著提升，我们看到其遵循自定义指令的能力也相应提高。

我们还为所有 ChatGPT 用户推出了四个全新预设人格的研究预览版，这得益于可控性的改进。这些人格最初可用于文本聊天，稍后将应用于语音，让你可以设置 ChatGPT 的互动方式——无论是简洁专业、体贴支持，还是有点讽刺——而无需编写自定义提示。最初的四个选项——Cynic（愤世嫉俗者）、Robot（机器人）、Listener（倾听者）和 Nerd（书呆子）——是可选的，可在设置中随时调整，并旨在匹配你的沟通风格。

所有这些新的人格在减少迎合性的内部评测中都达到或超过了我们的标准。

我们期待根据早期反馈进行学习和迭代。

### 生物风险的全面防护

我们决定将“GPT-5 思考”模型在生物和化学领域视为高能力模型，并已实施强有力的防护措施以充分降低相关风险。我们根据我们的[准备框架](https://openai.com/index/updating-our-preparedness-framework/)，通过与 CAISI 和 UK AISI 等合作伙伴进行的 5000 小时红队测试，对模型进行了严格的安全评测。

与我们对 ChatGPT Agent 的方法类似，虽然我们没有明确证据表明该模型可以有意义地帮助新手造成严重的生物伤害——我们对高能力的[定义阈值](https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf)——但我们正在采取预防性措施，并立即启动所需的防护措施，以便在这些能力可用时做好准备。因此，“GPT-5 思考”拥有一个强大的安全栈，具有多层防御系统，用于生物学：全面的威胁建模，通过我们新的安全补全范式训练模型不输出有害内容，始终在线的分类器和推理监控器，以及明确的执行管道。

有关我们对 GPT-5 的强大安全方法的更多信息，请阅读我们的[系统卡](https://openai.com/index/gpt-5-system-card/)。

---

## GPT-5 pro

对于最具挑战性的复杂任务，我们还发布了 GPT-5 pro，取代了 OpenAI o3-pro，这是 GPT-5 的一个变体，它思考的时间更长，使用可扩展但高效的并行测试时计算，以提供最高质量和最全面的答案。GPT-5 pro 在多个具有挑战性的智能基准测试中，在 GPT-5 系列中取得了最高性能，包括在包含极其困难的科学问题的 GPQA 上的最新技术水平表现。

在对超过 1000 个具有经济价值的真实世界推理提示的评测中，外部专家在 67.8% 的时间内更喜欢 GPT-5 pro 而不是“GPT-5 思考”。GPT-5 pro 的主要错误减少了 22%，并在健康、科学、数学和编码方面表现出色。专家们评价其回应相关、有用且全面。

---

## 如何使用 GPT-5

GPT-5 已成为 ChatGPT 的新默认模型，取代了 GPT-4o、OpenAI o3、OpenAI o4-mini、GPT-4.1 和 GPT-4.5，供已登录用户使用。只需打开 ChatGPT 并输入您的问题；GPT-5 会处理其余部分，在回应会受益于推理时自动应用推理。付费用户仍可从模型选择器中选择 **“GPT-5 思考”**，或在提示中输入类似“认真思考这个”的内容，以确保在生成回应时使用推理。

---

## 可用性与访问

GPT-5 今日起面向 **Plus、Pro、Team 和 Free 用户**逐步开放，企业和教育版将在一周后上线。Pro、Plus 和 Team 用户还可以通过使用 ChatGPT 登录 [Codex CLI](https://github.com/openai/codex) 开始使用 GPT-5 进行编程。

与 GPT-4o 一样，免费和付费访问 GPT-5 的区别在于使用量。Pro 订阅者可以无限制地访问 GPT-5，并可以访问 **GPT-5 Pro**。Plus 用户可以舒适地将其用作日常问题的默认模型，使用量远高于免费用户。Team、Enterprise 和 Edu 客户也可以舒适地将 GPT-5 用作日常工作的默认模型，其慷慨的限制使整个组织可以轻松依赖 GPT-5。对于 ChatGPT 免费用户，完整的推理功能可能需要几天时间才能完全推出。一旦免费用户达到其 GPT-5 使用上限，他们将切换到 **GPT-5 mini**，这是一个更小、更快且功能强大的模型。
