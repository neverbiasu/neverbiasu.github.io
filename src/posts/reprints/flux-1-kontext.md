---
title: Introducing FLUX.1 Kontext and the BFL Playground
date: 2025-05-29
category: News
author: Black Forest Labs
tags:
    - AI
    - Image Generation
    - FLUX
    - Machine Learning
---

# Introducing FLUX.1 Kontext and the BFL Playground

Today, we are excited to release FLUX.1 Kontext, a suite of generative flow matching models that allows you to generate and edit images. Unlike existing text-to-image models, the FLUX.1 Kontext family performs **_in-context_** image generation, allowing you to prompt with both text and images, and seamlessly extract and modify visual concepts to produce new, coherent renderings.

![Kontext Grid](https://cdn.sanity.io/images/gsvmb6gz/production/52e38891df903fdee79f6b4ed0fb63f00a43e376-2211x1174.png?rect=0,113,2211,949&w=960&h=412&fit=max&auto=format)

![Context-aware editing example](https://cdn.sanity.io/images/gsvmb6gz/production/877061601ac57191c2327c5ab3378587268c945f-1240x1898.png?fit=max&auto=format)

_Consistent, context-aware text-and-image generation and editing._

## YOUR IMAGES. YOUR WORDS. YOUR WORLD.

FLUX.1 Kontext marks a significant expansion of classic text-to-image models by unifying instant text-based image editing and text-to-image generation. As a multimodal flow model, it combines state-of-the-art character consistency, context understanding and local editing capabilities with strong text-to-image synthesis.

## Improved Text-to-Image Capabilities

Whether for ideation, drafting, conceptual design, or just for fun - text-to-image remains a crucial component of today\'s image generation. The FLUX.1 Kontext models deliver state-of-the-art image generation results with strong prompt following, photorealistic rendering, and competitive typography—all at inference speeds up to 8x faster than current leading models (e.g. GPT-Image).

## Play. Create. Manipulate…

FLUX.1 Kontext models go beyond text-to-image. Unlike previous flow models that only allow for pure text based generation, FLUX.1 Kontext models also understand and can create from existing images. With FLUX.1 Kontext you can modify an input image via simple text instructions, enabling flexible and instant image editing - no need for finetuning or complex editing workflows. The core capabilities of the the FLUX.1 Kontext suite are:

- Character consistency: Preserve unique elements of an image, such as a reference character or object in a picture, across multiple scenes and environments.
- Local editing: Make targeted modifications of specific elements in an image without affecting the rest.
- Style Reference: Generate novel scenes while preserving unique styles from a reference image, directed by text prompts.
- Interactive Speed: Minimal latency for both image generation and editing.

## …and Iterate: modify step by step

Flux.1 Kontext allows you to iteratively add more instructions and build on previous edits, refining your creation step-by-step with minimal latency, while preserving image quality and character consistency.

## The FLUX.1 Kontext [pro] Models

As part of the FLUX.1 Kontext suite we bring two new in-context image models to the BFL API.

### FLUX.1 Kontext [pro] - A pioneer for fast, iterative image editing

A single model that delivers local editing, generative in-context modifications and classic text-to-image generation in signature FLUX.1 quality. FLUX.1 Kontext [pro] handles both text and reference images as inputs, seamlessly enabling targeted, local edits in specific image regions and complex transformations of entire scenes. Operating up to an order of magnitude faster than previous state-of-the art models, FLUX.1 Kontext [pro] is a pioneer for iterative editing, since it\'s the first model that allows users to build upon previous edits through multiple turns, while maintaining characters, identities, styles, and distinctive features consistent across different scenes and viewpoints.

### FLUX.1 Kontext [max] - Maximum Performance at High Speed

Our new experimental model greatly improves prompt adherence and typography generation, and high consistency for editing. All these without compromise on speed.

FLUX.1 Kontext [max] and FLUX.1 Kontext [pro] are available at [KreaAI](https://www.krea.ai/edit), [Freepik](https://www.freepik.com/ai/image-generator), [Lightricks](https://ltx.studio/blog/flux-kontext-in-ltx-studio), [OpenArt](https://openart.ai/create) and [LeonardoAI](https://www.canva.com/design/DAGog-jP6m4/ZvVMXL7cop_zqRc0gHnTMg/view?utm_content=DAGog-jP6m4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h68d63046d6) and via our infrastructure partners [FAL](https://blog.fal.ai/flux-kontext-available-on-fal/), [Replicate](https://replicate.com/blog/flux-kontext), [Runware](https://runware.ai/blog/introducing-flux1-kontext-instruction-based-image-editing-with-ai?utm_source=bfl), [DataCrunch](https://datacrunch.io/flux-kontext), [TogetherAI](https://www.together.ai/models/flux-1-kontext-max) and [ComfyOrg](https://blog.comfy.org/p/flux1-kontext-api-node-in-day-1-workflow). We received support for preference data collection by [OpenArt](https://openart.ai/create) and [KreaAI](https://www.krea.ai/edit).

## FLUX.1 Kontext [dev] available in Private Beta

We deeply believe that open research and weight sharing are fundamental to safe technological innovation. We developed an open-weight variant, FLUX.1 Kontext [dev] - a lightweight 12B diffusion transformer suitable for customization and compatible with previous FLUX.1 [dev] inference code. We open FLUX.1 Kontext [dev] in a private beta release, for research usage and safety testing. Please contact us at [kontext-dev@blackforestlabs.ai](mailto:kontext-dev@blackforestlabs.ai) if you\'re interested. Upon public release FLUX.1 Kontext [dev] will be distributed through our partners [FAL](https://blog.fal.ai/flux-kontext-available-on-fal/), [Replicate](https://replicate.com/blog/flux-kontext), [Runware](https://runware.ai/blog/introducing-flux1-kontext-instruction-based-image-editing-with-ai?utm_source=bfl), [DataCrunch](https://datacrunch.io/flux-kontext), [TogetherAI](https://www.together.ai/models/flux-1-kontext-dev) and [HuggingFace](https://huggingface.co/black-forest-labs).

## Performance Evaluation

To validate the performance of our FLUX.1 Kontext models we conducted an extensive performance evaluation that we release in [a tech report](https://cdn.sanity.io/files/gsvmb6gz/production/880b072208997108f87e5d2729d8a8be481310b5.pdf). Here we give a short summary: to evaluate our models, we compile KontextBench, a benchmark for text-to-image generation and image-to-image generation from crowd-sourced real-world use cases. We will release this benchmark in the future.

![Evaluation results](https://cdn.sanity.io/images/gsvmb6gz/production/14b5fef2009f608b69d226d4fd52fb9de723b8fc-3024x2529.png?fit=max&auto=format)

_**We show evaluation results across six in-context image generation tasks. FLUX.1 Kontext [pro] consistently ranks among the top performers across all tasks, achieving the highest scores in Text Editing and Character Preservation**_

We evaluate image-to-image models, including our FLUX.1 Kontext models across six KontextBench tasks. FLUX.1 Kontext [pro] consistently ranks among the top performers across all tasks, achieving the highest scores in text editing and character preservation (see Figure above) while consistently outperforming competing state-of-the-art models in inference speed (see Figure below)

![Latency comparison](https://cdn.sanity.io/images/gsvmb6gz/production/bd7858229e1efefd71b2235c1c8edb64ebbfffe0-1600x535.png?fit=max&auto=format)

_**FLUX.1 Kontext models consistently achieve lower latencies than competing state-of-the-art models for both text-to-image generation (left) and image-editing (right)**_

We evaluate FLUX.1 Kontext on text-to-image benchmarks across multiple quality dimensions. FLUX.1 Kontext models demonstrate competitive performance across aesthetics, prompt following, typography, and realism benchmarks.

![T2I Evaluation](https://cdn.sanity.io/images/gsvmb6gz/production/f71e7c530401b4cb7dcc75af2cf0967e28655bd4-3026x2769.png?fit=max&auto=format)

![Head tilt example](https://cdn.sanity.io/images/gsvmb6gz/production/55131bdeb6ab53ed0d7173f4aac905ab9407577f-1600x800.jpg?fit=max&auto=format)

_**left:** input image; **middle**: edit from input: "tilt her head towards the camera", **right:** "make her laugh"_

![Text editing example](https://cdn.sanity.io/images/gsvmb6gz/production/edb93beadb3a16904da945a1cc1bb7266f18328b-1600x292.jpg?fit=max&auto=format)

_**left:** input image; **middle**: edit from input: "change the \\\'YOU HAD ME AT BEER\\\' to \\\'YOU HAD ME AT CONTEXT\\\'", **right:** "change the setting to a night club"_

## Failure Cases

FLUX.1 Kontext exhibits some limitations in its current implementation. Excessive multi-turn editing sessions can introduce visual artifacts that degrade image quality. The model occasionally fails to follow instructions accurately, ignoring specific prompt requirements in rare cases. World knowledge remains limited, affecting the model\'s ability to generate contextually accurate content. Additionally, the distillation process can introduce visual artifacts that impact output fidelity.

![Failure case illustration](https://cdn.sanity.io/images/gsvmb6gz/production/2971768ab02f9b860c74791e018be2595e521d1b-1600x534.jpg?fit=max&auto=format)

_**Illustration of a FLUX.1 Kontext failure case:** After six iterative edits, the generation is visually degraded and contains visible artifacts._

## A FLUX API Demo: Introducing The BFL Playground

Since launch, we have been consistently asked to make our models easier to test and demo. Today, we are introducing the FLUX Playground: A streamlined interface for testing our most advanced FLUX models without technical integration.

The Playground allows developers and teams to validate use cases, demonstrate capabilities to stakeholders, and experiment with advanced image generation in real-time. Whether evaluating technical feasibility or showcasing results to decision-makers, the Playground provides immediate access to assess FLUX\'s capabilities before moving to full API implementation.

At BFL, our mission is to build the most advanced models and infrastructure for media generation. The Playground serves as an entry point to the BFL API, designed to accelerate the path from evaluation to production deployment. It is available, today, at [https://playground.bfl.ai/](https://playground.bfl.ai/).

_We\'re just getting started. If you want to join us on our mission, we are actively hiring talented individuals across multiple roles. Apply [here.](https://job-boards.greenhouse.io/blackforestlabs)_

## Resources

- [Read the full tech report](https://cdn.sanity.io/files/gsvmb6gz/production/880b072208997108f87e5d2729d8a8be481310b5.pdf)
- [Black Forest Labs](https://bfl.ai/)
- [BFL Playground](https://playground.bfl.ai/)

---

_Originally published by Black Forest Labs on May 29, 2025_
