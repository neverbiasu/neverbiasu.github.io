---
title: "Explaining Tokens — the Language and Currency of AI"
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

# Explaining Tokens — the Language and Currency of AI

![Image 1: Depiction of a large language model processing data](https://blogs.nvidia.com/wp-content/uploads/2025/03/llm-blog-data-curator-2847806-1280x680-1.png)

Under the hood of every AI application are algorithms that churn through data in their own language, one based on a vocabulary of tokens.

Tokens are tiny units of data that come from breaking down bigger chunks of information. AI models process tokens to learn the relationships between them and unlock capabilities including prediction, generation and reasoning. The faster tokens can be processed, the faster models can learn and respond.

AI factories — a new class of data centers designed to accelerate AI workloads — efficiently crunch through tokens, converting them from the language of AI to the currency of AI, which is intelligence.

With AI factories, enterprises can take advantage of the latest full-stack computing solutions to process more tokens at lower computational cost, [creating additional value for customers](https://blogs.nvidia.com/blog/ai-inference-platform/). In one case, integrating software optimizations and adopting the latest generation NVIDIA GPUs reduced cost per token by 20x compared to unoptimized processes on previous-generation GPUs — [delivering 25x more revenue](https://x.com/NVIDIAAIDev/status/1894172956726890623) in just four weeks.

_By efficiently processing tokens, AI factories are manufacturing intelligence — the most valuable asset in the new industrial revolution powered by AI._

## **What Is Tokenization?** 

Whether a [transformer AI model](https://blogs.nvidia.com/blog/what-is-a-transformer-model/) is processing text, images, audio clips, videos or another modality, it will translate the data into tokens. This process is known as tokenization.

Efficient tokenization helps reduce the amount of computing power required for [training and inference](https://blogs.nvidia.com/blog/difference-deep-learning-training-inference-ai/). There are numerous tokenization methods — and tokenizers tailored for specific data types and use cases can require a smaller vocabulary, meaning there are fewer tokens to process.

For [large language models](https://www.nvidia.com/en-us/glossary/large-language-models/) (LLMs), short words may be represented with a single token, while longer words may be split into two or more tokens.

The word darkness, for example, would be split into two tokens, "dark" and "ness," with each token bearing a numerical representation, such as 217 and 655. The opposite word, brightness, would similarly be split into "bright" and "ness," with corresponding numerical representations of 491 and 655.

In this example, the shared numerical value associated with "ness" can help the AI model understand that the words may have something in common. In other situations, a tokenizer may assign different numerical representations for the same word depending on its meaning in context.

For example, the word "lie" could refer to a resting position or to saying something untruthful. During training, the model would learn the distinction between these two meanings and assign them different token numbers.

For visual AI models that process images, video or sensor data, a tokenizer can help map visual inputs like pixels or voxels into a series of discrete tokens.

Models that process audio may turn short clips into spectrograms — visual depictions of sound waves over time that can then be processed as images. Other audio applications may instead focus on capturing the meaning of a sound clip containing speech, and use another kind of tokenizer that captures semantic tokens, which represent language or context data instead of simply acoustic information.

## **How Are Tokens Used During AI Training?**

Training an AI model starts with the tokenization of the training dataset.

Based on the size of the training data, the number of tokens can number in the billions or trillions — and, per the [pretraining scaling law](https://blogs.nvidia.com/blog/ai-scaling-laws/), the more tokens used for training, the better the quality of the AI model.

As an AI model is [pretrained](https://youtube.com/shorts/18kMZW2HPGQ?si=aySxqllQ0Yg-L2fK), it's tested by being shown a sample set of tokens and asked to predict the next token. Based on whether or not its prediction is correct, the model updates itself to improve its next guess. This process is repeated until the model learns from its mistakes and reaches a target level of accuracy, known as model convergence.

After pretraining, models are further improved by [post-training](https://blogs.nvidia.com/blog/ai-scaling-laws/#post-training-scaling), where they continue to learn on a subset of tokens relevant to the use case where they'll be deployed. These could be tokens with domain-specific information for an application in law, medicine or business — or tokens that help tailor the model to a specific task, like reasoning, chat or translation. The goal is a model that generates the right tokens to deliver a correct response based on a user's query — a skill better known as inference.

## **How Are Tokens Used During AI Inference and Reasoning?** 

During inference, an AI receives a prompt — which, depending on the model, may be text, image, audio clip, video, sensor data or even gene sequence — that it translates into a series of tokens. The model processes these input tokens, generates its response as tokens and then translates it to the user's expected format.

Input and output languages can be different, such as in a model that translates English to Japanese, or one that converts text prompts into images.

To understand a complete prompt, AI models must be able to process multiple tokens at once. Many models have a specified limit, referred to as a context window — and different use cases require different context window sizes.

A model that can process a few thousand tokens at once might be able to process a single high-resolution image or a few pages of text. With a context length of tens of thousands of tokens, another model might be able to summarize a whole novel or an hourlong podcast episode. Some models even provide context lengths of a million or more tokens, allowing users to input massive data sources for the AI to analyze.

Reasoning AI models, the latest advancement in LLMs, can tackle more complex queries by treating tokens differently than before. Here, in addition to input and output tokens, the model generates a host of reasoning tokens over minutes or hours as it thinks about how to solve a given problem.

These reasoning tokens allow for better responses to complex questions, just like how a person can formulate a better answer given time to work through a problem. The corresponding increase in tokens per prompt can require over 100x more compute compared with a single inference pass on a traditional LLM — an example of [test-time scaling](https://blogs.nvidia.com/blog/ai-scaling-laws/#test-time-scaling), aka long thinking.

## **How Do Tokens Drive AI Economics?** 

During [pretraining and post-training](https://blogs.nvidia.com/blog/ai-scaling-laws/), tokens equate to investment into intelligence, and during inference, they drive cost and revenue. So as AI applications proliferate, new principles of AI economics are emerging.

AI factories are built to sustain high-volume inference, manufacturing intelligence for users by turning tokens into monetizable insights. That's why a growing number of AI services are measuring the value of their products based on the number of tokens consumed and generated, offering pricing plans based on a model's rates of token input and output.

Some token pricing plans offer users a set number of tokens shared between input and output. Based on these token limits, a customer could use a short text prompt that uses just a few tokens for the input to generate a lengthy, AI-generated response that took thousands of tokens as the output. Or a user could spend the majority of their tokens on input, providing an AI model with a set of documents to summarize into a few bullet points.

To serve a high volume of concurrent users, some AI services also set token limits, the maximum number of tokens per minute generated for an individual user.

Tokens also define the user experience for AI services. [Time to first token](https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html#time-to-first-token-ttft), the latency between a user submitting a prompt and the AI model starting to respond, and inter-token or token-to-token latency, the rate at which subsequent output tokens are generated, determine how an end user experiences the output of an AI application.

There are tradeoffs involved for each metric, and the right balance is dictated by use case.

For LLM-based chatbots, shortening the time to first token can help improve user engagement by maintaining a conversational pace without unnatural pauses. Optimizing inter-token latency can enable text generation models to match the reading speed of an average person, or video generation models to achieve a desired frame rate. For AI models engaging in long thinking and research, more emphasis is placed on generating high-quality tokens, even if it adds latency.

Developers have to strike a balance between these metrics to deliver high-quality user experiences with optimal throughput, the number of tokens an AI factory can generate.

To address these challenges, the [NVIDIA AI](https://www.nvidia.com/en-us/ai-data-science/generative-ai/) platform offers a vast collection of [software](https://www.nvidia.com/en-us/software/), [microservices](https://www.nvidia.com/en-us/ai-data-science/products/nim-microservices/) and [blueprints](https://www.nvidia.com/en-us/ai-data-science/ai-workflows/) alongside powerful [accelerated computing](https://www.nvidia.com/en-us/data-center/solutions/accelerated-computing/) infrastructure — a flexible, full-stack solution that enables enterprises to evolve, optimize and scale AI factories to generate the next wave of intelligence across industries.

Understanding how to optimize token usage across different tasks can help developers, enterprises and even end users reap the most value from their AI applications.

Learn more in [this ebook](https://www.nvidia.com/en-us/solutions/ai/inference/balancing-cost-latency-and-performance-ebook/) and get started at [build.nvidia.com](https://build.nvidia.com/).
