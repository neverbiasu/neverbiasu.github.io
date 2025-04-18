---
title: "解释token— AI的语言和货币 | NVIDIA博客"
cover: https://blogs.nvidia.com/wp-content/uploads/2025/03/llm-blog-data-curator-2847806-1280x680-1.png
date: 2025-03-17
author: Dave Salvator
category:
    - Explainer
    - Generative AI
tag:
    - Artificial Intelligence 
    - Inference
copyright: reprint
---

# 解释token— AI的语言和货币

![图1：大型语言模型处理数据的描述](https://blogs.nvidia.com/wp-content/uploads/2025/03/llm-blog-data-curator-2847806-1280x680-1.png)

在每个AI应用程序的底层，都有算法在以自己的语言处理数据，这种语言基于token词汇。

token是通过分解更大信息块而来的微小数据单元。AI模型处理token以学习它们之间的关系，并解锁包括预测、生成和推理在内的能力。token处理得越快，模型学习和响应的速度就越快。

AI工厂 — 一种设计用于加速AI工作负载的新型数据中心 — 高效地处理token，将它们从AI的语言转换为AI的货币，即智能。

有了AI工厂，企业可以利用最新的全栈计算解决方案以更低的计算成本处理更多token，[为客户创造额外价值](https://blogs.nvidia.com/blog/ai-inference-platform/)。在一个案例中，整合软件优化并采用最新一代NVIDIA GPU，与未优化的前一代GPU相比，每个token的成本降低了20倍 — [在短短四周内带来了25倍的收入增长](https://x.com/NVIDIAAIDev/status/1894172956726890623)。

_通过高效处理token，AI工厂正在制造智能 — 在由AI推动的新工业革命中最有价值的资产。_

## 什么是标记化？

无论[transformer AI模型](https://blogs.nvidia.com/blog/what-is-a-transformer-model/)是处理文本、图像、音频剪辑、视频还是其他模态，它都会将数据转换为token。这个过程被称为标记化。

高效的标记化有助于减少[训练和推理](https://blogs.nvidia.com/blog/difference-deep-learning-training-inference-ai/)所需的计算能力。有多种标记化方法——为特定数据类型和用例定制的分词器可能需要更小的词汇表，意味着需要处理的token更少。

对于[大型语言模型](https://www.nvidia.com/en-us/glossary/large-language-models/)（LLMs），短词可能用单个token表示，而较长的词可能被分割成两个或更多token。

例如，单词"darkness"（黑暗）会被分割成两个token，"dark"和"ness"，每个token都有一个数字表示，比如217和655。相反的词"brightness"（亮度）同样会被分割成"bright"和"ness"，对应的数字表示为491和655。

在这个例子中，与"ness"相关的共享数值可以帮助AI模型理解这些词可能有共同之处。在其他情况下，标记器可能会根据上下文中的含义为同一个词分配不同的数字表示。

例如，词"lie"可能指休息的姿势或说一些不真实的话。在训练过程中，模型会学习这两种含义之间的区别，并为它们分配不同的token编号。

对于处理图像、视频或传感器数据的视觉AI模型，标记器可以帮助将像素或体素等视觉输入映射成一系列离散的token。

处理音频的模型可能会将短片段转化为声谱图——随时间变化的声波视觉描述，然后可以将其作为图像处理。其他音频应用可能更专注于捕捉包含语音的声音片段的含义，并使用另一种捕捉语义token的标记器，这些token代表语言或上下文数据，而不仅仅是声学信息。

## AI训练中如何使用token？

训练AI模型从训练数据集的标记化开始。

基于训练数据的大小，token数量可能达到数十亿或数万亿——根据[预训练缩放法则](https://blogs.nvidia.com/blog/ai-scaling-laws/)，用于训练的token越多，AI模型的质量就越好。

当AI模型进行[预训练](https://youtube.com/shorts/18kMZW2HPGQ?si=aySxqllQ0Yg-L2fK)时，它会通过展示一组样本token并要求预测下一个token来进行测试。根据其预测是否正确，模型会自我更新以改进下一次猜测。这个过程会重复进行，直到模型从错误中学习，达到称为模型收敛的目标准确度水平。

预训练后，模型通过[后训练](https://blogs.nvidia.com/blog/ai-scaling-laws/#post-training-scaling)进一步改进，在这个阶段，它们继续学习与将要部署的用例相关的token子集。这些可能是包含法律、医学或商业领域特定信息的token——或者帮助将模型调整为特定任务的token，如推理、聊天或翻译。目标是生成一个能够根据用户查询生成正确token以提供准确响应的模型——这种技能更广为人知的名称是推理。

## AI推理和推理过程中如何使用token？

在推理过程中，AI接收一个提示——根据模型的不同，可能是文本、图像、音频剪辑、视频、传感器数据甚至基因序列——它将其转换为一系列token。模型处理这些输入token，生成其响应token，然后将其转换为用户期望的格式。

输入和输出语言可以不同，例如将英语翻译成日语的模型，或将文本提示转换为图像的模型。

为了理解完整的提示，AI模型必须能够同时处理多个token。许多模型都有一个特定的限制，称为上下文窗口——不同的用例需要不同的上下文窗口大小。

一次能处理几千个token的模型可能能够处理单张高分辨率图像或几页文本。另一个拥有数万个token上下文长度的模型，可能能够总结整本小说或一小时的播客内容。一些模型甚至提供百万或更多token的上下文长度，允许用户输入大量数据源供AI分析。

推理型AI模型，即LLMs的最新进展，可以通过以不同于以往的方式处理token来解决更复杂的查询。在这里，除了输入和输出token外，模型还会在几分钟或几小时内生成大量推理token，思考如何解决给定的问题。

这些推理token能够对复杂问题提供更好的回答，就像一个人在有时间思考问题时能够提出更好的答案一样。每个提示相应增加的token数量可能需要比传统LLM的单次推理通过多100倍以上的计算能力——这是[测试时缩放](https://blogs.nvidia.com/blog/ai-scaling-laws/#test-time-scaling)（也称为长时间思考）的一个例子。

## token如何推动AI经济？

在[预训练和后训练](https://blogs.nvidia.com/blog/ai-scaling-laws/)过程中，token等同于对智能的投资，而在推理过程中，它们驱动成本和收入。因此，随着AI应用的普及，新的AI经济原则正在形成。

AI工厂的建立是为了维持高容量推理，通过将token转化为可货币化的洞察力为用户制造智能。这就是为什么越来越多的AI服务根据消耗和生成的token数量来衡量其产品价值，并提供基于模型token输入和输出率的定价计划。

一些token定价计划为用户提供在输入和输出之间共享的固定数量token。基于这些token限制，客户可以使用只需几个token作为输入的简短文本提示来生成需要数千个token作为输出的冗长AI生成响应。或者，用户可以将大部分token用于输入，为AI模型提供一组文档，以总结成几个要点。

为了服务于大量并发用户，一些AI服务还设置了token限制，即为单个用户每分钟生成的最大token数。

token还定义了AI服务的用户体验。[首个token时间](https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft)，即用户提交提示和AI模型开始响应之间的延迟，以及token间或token到token的延迟，即生成后续输出token的速率，决定了终端用户如何体验AI应用的输出。

每个指标都涉及权衡，正确的平衡由用例决定。

对于基于LLM的聊天机器人，缩短首个token时间可以通过保持对话节奏而不出现不自然的停顿来提高用户参与度。优化token间延迟可以使文本生成模型匹配普通人的阅读速度，或使视频生成模型达到期望的帧率。对于从事长时间思考和研究的AI模型，更多的重点放在生成高质量token上，即使这会增加延迟。

开发者必须在这些指标之间取得平衡，以提供具有最佳吞吐量（AI工厂可以生成的token数量）的高质量用户体验。

为了解决这些挑战，[NVIDIA AI](https://www.nvidia.com/en-us/ai-data-science/generative-ai/)平台提供了大量[软件](https://www.nvidia.com/en-us/software/)、[微服务](https://www.nvidia.com/en-us/ai-data-science/products/nim-microservices/)和[蓝图](https://www.nvidia.com/en-us/ai-data-science/ai-workflows/)，以及强大的[加速计算](https://www.nvidia.com/en-us/data-center/solutions/accelerated-computing/)基础设施——这是一个灵活的全栈解决方案，使企业能够发展、优化和扩展AI工厂，在各行业生成下一波智能。

了解如何在不同任务中优化token使用可以帮助开发者、企业甚至终端用户从AI应用中获取最大价值。

了解更多[平衡成本、延迟和性能电子书](https://www.nvidia.com/en-us/solutions/ai/inference/balancing-cost-latency-and-performance-ebook/)在[build.nvidia.com](https://build.nvidia.com/)开始使用
