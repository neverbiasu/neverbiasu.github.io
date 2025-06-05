---
title: Announcing Illustrious Text‑Enhancer: Tag Booster & Mood Enhancer
cover: /assets/images/reprints/illustrious/tag-enhancer/cover.jpg
date: 2025-05-23
author: LivBigStar
---

# Announcing Illustrious Text‑Enhancer: Tag Booster & Mood Enhancer

![Image: userImage](/assets/images/reprints/illustrious/tag-enhancer/compare-tag-booster.png)

Illustrious users often ask: _“How can I get better results without writing long prompts?”_ Today, we’re excited to answer that with **Text‑Enhancer**, a new system that dramatically **enriches user prompts** for our image generation platform.

Text‑Enhancer comprises **two intelligent components** working together:

1. **Tag Booster:** A prompt enrichment tool built on our TIPO (Text-to-Image Prompt Optimization) framework. It **expands short or sparse prompts** by aligning them with the distributions seen in our model’s training data. The result is higher fidelity images and tighter prompt–image alignment.
2. **Mood Enhancer:** A custom LLM-based pipeline that **transforms minimal input into detailed, evocative image prompts**. By leveraging a fixed system prompt and few-shot examples (with an advanced KV caching strategy), it can generate rich descriptions from sparse input **at a fraction of the usual LLM cost** and latency.

Together, Tag Booster and Mood Enhancer **reduce the burden on creators** to hand-craft lengthy prompts, while **consistently yielding higher-quality, on-target generations**. In this post, we’ll dive into how each component works, the technical innovations under the hood, and why this is a game-changer for Illustrious users.

---

## From Sparse to Rich: How Tag Booster Enriches Prompts with TIPO

Creating a vivid image from a one-liner prompt is challenging – diffusion models like Illustrious XL were trained on datasets where prompts/captions have a certain richness and variety. **Tag Booster** bridges this gap by **automatically expanding and refining your prompt** to look more like those in the training distribution. It’s powered by our in-house **TIPO framework**, a lightweight multi-task language model purpose-built for prompt optimization.

![Image: TIPO Architecture](/assets/images/reprints/illustrious/tag-enhancer/tipo-architecture.png)

### What is TIPO?

TIPO stands for **Text-to-Image Prompt Optimization** – a novel approach that uses a **small, efficient model** trained on prompt pairs. It learned to take a simple prompt and output a richer one, adding details while preserving the original intent. This yields _significantly improved visual quality, coherence, and detail_ compared to using the raw prompt.

### Joint-task Training (Tags ↔ Text)

TIPO handles both **tag lists and natural language** and converts one to the other. For example:

- **Input:** autumn forest
- **Tag Booster Output:** autumn forest, golden sunlight, falling leaves, high detail, masterpiece, warm color palette

By adding details and stylistic tags, the enriched prompt better matches the training data, yielding **higher-fidelity images** with minimal extra effort.

---

## Vivid Narratives with Less Effort: Mood Enhancer and LLM-Powered Expansion

While Tag Booster excels at **adding relevant keywords and tags**, **Mood Enhancer** transforms brief ideas into rich, atmospheric prompts using a **custom Large Language Model (LLM) pipeline**.

### How it Works

Mood Enhancer uses a fixed system prompt and few-shot examples to generate elaborated prompts. For instance:

- **Input:** futuristic city at night
- **Mood Enhancer Output:** _“A sprawling futuristic city skyline at night, with neon-lit skyscrapers and flying vehicles weaving between the buildings. The streets below glow with holographic billboards and reflected lights. A sense of rainy ambiance with puddles reflecting the vibrant neon signs adds a cyberpunk mood.”_

This transformation preserves the core idea while adding imaginative details and atmosphere.

![Image: Mood Enhancer Comparison](/assets/images/reprints/illustrious/tag-enhancer/mood-enhancer-compare.jpg)

---

## KV Caching: Supercharging LLM Efficiency

Using an LLM raises concerns about **cost and speed**, but Mood Enhancer employs **Key-Value cache reuse** to optimize efficiency. This technique reduces inference costs by up to 80% without sacrificing quality.

![Image: KV Caching Efficiency](/assets/images/reprints/illustrious/tag-enhancer/kv-caching2.jpg)

---

## Text‑Enhancer in Action

By combining Tag Booster and Mood Enhancer, Illustrious’s Text‑Enhancer system ensures that **any user input evolves into a powerful prompt** for image generation. For example:

- **Input:** a lone castle on a hill
- **Tag Booster Output:** lone castle on a hill, medieval fortress, cloudy sky, twilight, high-resolution, epic scale
- **Mood Enhancer Output:** _“A lone medieval castle stands atop a misty hill under a cloud-laden twilight sky. The ancient stone fortress is illuminated by the last light of dusk, its silhouette towering with epic scale over the darkening valley. Dramatic clouds swirl above, and a faint mist clings to the ground, evoking a mysterious, majestic atmosphere.”_

The enriched prompt yields **dramatic and detailed images** that align with the user’s vision.

![Image: Comparison](/assets/images/reprints/illustrious/tag-enhancer/compare-tag-booster.png)

---

## Conclusion

Illustrious Text‑Enhancer (Tag Booster + Mood Enhancer) bridges natural human input and optimal prompts for high‑quality image generation. By leveraging advanced NLP techniques, our system handles prompt engineering in real‑time, empowering creators to focus on their vision.

Try Text‑Enhancer today and watch your humble prompts transform into masterpiece‑worthy descriptions!

**Happy prompting, and let us know your feedback!**

---
