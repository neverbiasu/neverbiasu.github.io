---
title: "How to create an original character LoRA [SDXL Training] SDXL Character Training"
date: 2025-05-12T16:01:40+09:00
tags:
    - Kohya SS GUI
    - LoRA
    - SDXL
categories:
    - Advanced
---

# How to create an original character LoRA [SDXL Training] SDXL Character Training

![How to create an original character LoRA [SDXL Training] SDXL Character Training featured Image](http://digitalcreativeai.net/_next/image?url=https%3A%2F%2Fdca.data-hub-center.com%2Fcontent%2Fuploads%2F2025%2F05%2Feye_catch_original-character-lora-sdxl-character-training-en.jpg&w=3840&q=80)

## Table of Contents

1. [Compatibility of SDXL’s Pretrained model](#compatibility-of-sdxls-pretrained-model)  
    1.1. [Compatibility test generation](#compatibility-test-generation)  
2. [Training with default parameters in Kohya ss GUI](#training-with-default-parameters-in-kohya-ss-gui)  
    2.1. [Dataset](#dataset)  
    2.2. [Default Parameters](#default-parameters)  
    2.3. [Test generation using trained LoRA](#test-generation-using-trained-lora)  
3. [Parameters used in this train](#parameters-used-in-this-train)  
    3.1. [LR Scheduler](#lr-scheduler)  
    3.2. [Optimizer](#optimizer)  
    3.3. [Other parameters](#other-parameters)  
4. [Training Results](#training-results)  
    4.1. [Combination with other LoRAs](#combination-with-other-loras)  
    4.2. [Apply to checkpoint models of the same lineage](#apply-to-checkpoint-models-of-the-same-lineage)  
5. [Conclusion](#conclusion)  

---

## Compatibility of SDXL’s Pretrained model

LoRA in SDXL is less versatile than in SD1.5. The checkpoint models that LoRA can be applied to are limited depending on the pretrained model lineage. When generated, LoRA application within the same lineage can be used without problems, but when applied to checkpoint models outside the lineage, LoRA cannot be successfully applied. Most common SDXL illustration base model lineages are as follows:

- **SDXL-base-1.0 series**: Fundamental model of SDXL. This model is not so suitable for illustration generation.
- **animagineXL V3 series**: This illustration AI model was popular until the arrival of PDXL (PonyV6). *LoRA trained in V3 cannot be used in V4.*
- **ponyDiffusionV6XL series**: This popular model has quickly dominated the scene since its introduction. However, NSFW images are often generated and need to be adjusted with negative prompts.
- **illustriousXL01 series**: The model on which kohaku-xl-beta5 is used as a base model. At the time of writing, it is the most vibrant model and produces high-quality illustrations. As with animagineXL, compatibility between different versions is not good.
- **NoobAI-XL series**: Illustrious-xl-early-release-v0 is used as the base model, so it may belong to the illustriousXL series, but this is also a popular illustration AI model.

In SDXL’s LoRA training, it is important to determine which lineage model the LoRA will be trained on.

### Compatibility test generation

To make it easier to understand the compatibility, let’s look at the comparison images generated by each model. The LoRAs to be compared are `[SDXL-base-1.0VAEFix / animagineXLV31_v31 / ponyDiffusionV6XL_v6StartWithThisOne / illustriousXL_v01 / noobaiXLNAIXL_epsilonPred 1.1-Version]`. These are specified as pretrained models and trained with default parameters.

**Training Parameters**

```plaintext
Number of training images: 100
Repeats: 5
Train batch size: 1
Epoch: 1
Max train steps: 1600
Seed: 123
LR Scheduler: cosine
Optimizer: AdamW8bit
Learning rate: 0.0001 (1e-4)
Unet learning rate: 0.0001 (1e-4)
Text Encoder learning rate: 0.00005 (5e-5)
Network Rank (Dimension): 8
Network Alpha: 1
clip_skip: 0 *In SDXL, Clip skip is disabled.
```

**A1111 WebUI generation parameters**

**Prompt:**

```plaintext
dcai-girl, 1girl, looking at viewer, solo, short hair, orange hair, brown eyes, animal ears, dress, masterpiece, meadow, sky, day <lora:DCAI_Girl_SDXL_Def_sdxl-base:1>
```

**Negative Prompt:**

```plaintext
worst quality, low quality, bad anatomy, realistic, lips, inaccurate limb, extra digit, fewer digits, six fingers, monochrome, nsfw
```

**Parameters**

```plaintext
Steps: 20
Sampler: DPM++ SDE
Schedule type: Karras
CFG scale: 6
Seed: 3156195032
Size: 1024x1024
VAE: sdxl.vae.safetensors
```

---

**SDXL-base-1.0** The first comparison image is generated using "SDXL-base-1.0". The rightmost image is the generated result before LoRA adaptation.

![LoRA comparison generated by SDXL-base-1.0 model](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-base1.jpg)

Far right: the SDXL-base LoRA has trained reasonably well. You can also see that the other LoRAs are slightly affected by the costumes.

**animagineXLV31_v31** The next comparison image is with "animagineXLV31_v31".

![LoRA comparison generated by animagineXLV31_v31](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-anima3.jpg)

2nd from right: animagineXLV3.1 LoRA has been reproduced better. You can see that the other LoRAs also affected the costumes a little.

**ponyDiffusionV6XL_v6StartWithThisOne** This is a comparison image using "ponyDiffusionV6XL_v6StartWithThisOne". *The quality modifiers "score_9, score_8_up, score_7_up" specific to PonyDiffusionV6XL and "score_6, score_5, score_4" for negative prompts are added for generation.

![LoRA comparison generated by ponyDiffusionV6XL_v6StartWithThisOne](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-pony6.jpg)

3rd from the right: you can see that almost nothing is affected except the LoRA of ponyDiffusionV6XL.

**illustriousXL_v01** This is a comparison image using "illustriousXL_v01".

![LoRA comparison generated by illustriousXL_v01](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-illusxl.jpg)

4th from right: illustriousXL's LoRA is reasonably well learned except for the color of the costume. The other LoRAs can be seen to have little effect.

**noobaiXLNAIXL_epsilonPred 1.1-Version** This is a comparison image using "noobaiXLNAIXL_epsilonPred 1.1-Version". *The main model is "NOOBAI XL-VPred 1.0", but V-prediction is only available in the development version for A1111WebUI. In this case, the Epsilon-prediction version is used.

![LoRA comparison generated by noobaiXLNAIXL_epsilonPred 1.1-Version](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-noobai.jpg)

5th from right: noobaiXLNAIXL_epsilonPred 1.1-Version of LoRA was able to reproduce the face but not the outfit. You can also see a slight influence on illustriousXL.

The above comparison images show that SDXL's LoRA is not compatible.

## Training with default parameters in Kohya ss GUI

Now that you understand SDXL compatibility, let's train with "animagineXLV31_v30Base". If you train LoRA on this model, you can use it as a checkpoint model for animagineXL V3 series. Note that the LoRA of animagineXL V3 cannot be used for animagineXL V4. Let's compare the images generated by Animagine XL 4.0 Opt with the previous comparison image.

![LoRA comparison generated by animagineXLV31_v31](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-anima3.jpg)

![LoRA comparison generated by Animagine XL 4.0 Opt](https://dca.data-hub-center.com/content/uploads/2025/05/compare-sdxl-base-model-anima4.jpg)

2nd from right: Costume affected a little, but generated less reproduction.

### Dataset

First, let's train with default parameters. The dataset for training source is based on the data created in "How to create an original character LoRA [Dataset] Making a training image and caption". If you want to train with the same dataset, it is available on Patreon, but only paid supporters can download it.

![Dataset Image Sample List](https://dca.data-hub-center.com/content/uploads/2025/03/finished-dataset-images.jpg)

### Default Parameters

Once the dataset is ready, we start by training with the default values, slightly modified for the trained illustration of the SDXL model. Areas that need to be entered or changed are noted in red text.

- **Pretrained model name or path:** animagineXLV31_v30Base.safetensors
- **Trained Model output name:** DCAI_Girl_SDXL_Def_anima3 *Output name of the model
- **Instance prompt:** dcai-girl *The caption method used in this case ignores this value, but if you do not enter it, an error will occur.
- **Class prompt:** 1girl *Entered for the same reason as above.
- **Repeats:** 5 [Default: 40] *This is because the training source has 100 images and we want to make the total number of images 500.
- **Presets:** none
- **LoRA type:** Standard
- **Train batch size:** 1
- **Epoch:** 1
- **Max train epoch:** 0
- **Max train steps:** 1600
- **Save every N epochs:** 1
- **Seed:** 123 [Default: 0 = random] *Insert the appropriate number to control the parameter.
- **LR Scheduler:** cosine
- **Optimizer:** AdamW8bit
- **Learning rate:** 0.0001 (1e-4)
- **Text Encoder learning rate:** 0.00005 (5e-5) [Default: 0.0001 (1e-4)] *Changed to the recommended defaults in the official documentation.
- **Unet learning rate:** 0.0001 (1e-4)
- **LR warmup (% of total steps):** 10
- **Network Rank (Dimension):** 8
- **Network Alpha:** 1
- **clip_skip:** 0 [Default: 1] *Because Clip skip is disabled in SDXL

### Test generation using trained LoRA

The trained LoRA was generated using the A1111 WebUI, resulting in the figure below. The "animagineXLV31_v31" was used to generate the LoRA. The image below is before LoRA was applied.

![Default parameter results](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-def.jpg)

![Results without LoRA](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-def-no-lora.jpg)

It is highly reproducible, but it is like a winning Seed Gacha, and other Seeds produced unstable generation. The generation parameters are almost the same as in the previous comparison image, but with a few prompts changed for AnimagineV3.1.

**Prompt:**
```
dcai-girl, 1girl, looking at viewer, solo, short hair, orange hair, brown eyes, animal ears, dress, meadow, sky, day, newest, masterpiece, best quality, very aesthetic, absurdres <lora:DCAI_Girl_SDXL_Def_anima3:1>
```

**Negative Prompt:**
```
worst quality, low quality, bad anatomy, realistic, lips, inaccurate limb, extra digit, fewer digits, six fingers, monochrome, nsfw
```

**Parameters:**
```
Steps: 30
Sampler: DPM++ SDE
Schedule type: Karras
CFG scale: 6
Seed: 3156195032
Size: 1344x768
VAE: sdxl.vae.safetensors
Hires.fix: True
ADetailer: True
```

## Parameters used in this train

Since this is an SDXL train, it is set up to run relatively lightweight, but with no more than 16-24 GB of VRAM.

Different versions of Kohya ss, PyTorch or CUDA will give different results, so the settings I have presented will not guarantee that you will get the same results. There is currently no best setting that can train a high quality LoRA on every dataset and caption, so keep improving the quality through trial and error. For this training, I used the latest version of Kohya ss GUI v25.0.3 at the time of writing and RunPod's ubuntu22.04.

The environment of RunPod is as follows:

- **POD Template:** RunPod Pytorch 2.2.0
- **GPU:** 1 x RTX 4090 *RTX 5090 cannot be used for now because xformars does not meet the requirements. If you really want to use it, you need to uninstall xformars by yourself and use Torch's sdpa for cross-attention.
- **OS:** ubuntu22.04
- **Torch:** 2.5.0+cu124
- **Python:** 3.10.12
- **CUDA:** 12.4
- **cuDNN:** 90100
- **Kohya_ss GUI:** 25.0.3

### LR Scheduler

cosine_with_restarts is one of the LR Scheduler to train while resetting cosine at specified intervals. The number of resets is specified by LR # cycles.

Take a look at the comparison image with the default below.

![Comparison of cosine_with_restarts](https://dca.data-hub-center.com/content/uploads/2025/05/compare-scheduler-restart.jpg)

The color of the clothes has changed, but the reproduction has been slightly improved.

![TB sample for cosine_with_restarts](https://dca.data-hub-center.com/content/uploads/2025/05/cosin-restart-tb-sample.jpg)

TensorBoard example; cyan:cosine_with_restarts-2LR#cycles pink:cosine *0-200 on X axis is LR warmup.

### Optimizer

The official documentation recommends Adafactor. Also, AdamW8bit, which was used in the default settings mentioned earlier, does not seem to be recommended. If the number of training images is small or simple, Prodigy is recommended, but let's train with "AdamW" this time, using Optimizer extra arguments and changing the settings a little.

In the PyTorch documentation, the default class for AdamW is as follows:

```python
torch.optim.AdamW(params, lr=0.001, betas=(0.9, 0.999), eps=1e-08, weight_decay=0.01, amsgrad=False, *, maximize=False, foreach=None, capturable=False, differentiable=False, fused=None)
```

The two AdamW parameters to be changed this time are as follows:

#### betas

The coefficients used to compute the average of the gradients for convergence of the train. The coefficients used to calculate the average of the gradient toward convergence are (beta1, beta2), where beta1 controls how much weight is given to past gradients and beta2 controls how much weight is given to the magnitude of the gradient (the degree of variability).

In this case, I will use beta2 lowered from 0.999 to `0.99`. Lowering the beta2 value makes it more responsive to recent gradient fluctuations and more sensitive to adjustments in the train rate.

#### weight_decay

weight_decay is a regularization technique that prevents the weights in a model from becoming too large. It effectively simplifies the model and increases its versatility.

In this case, we will use `0.05`, up from the default of 0.01. This will increase stability and versatility.

### Other parameters

Basically, there is little change from the previous SD1.5, but the difference is that Scale weight norms and Min SNR gamma are not used. The reason for this is that Scale weight norms is not necessary because the AdamW weight_decay is set to be stronger, and Min SNR gamma is not used because it did not have much effect in this setting.

Now let's look at the study settings after the change:

- **Pretrained model name or path:** animagineXLV31_v30Base.safetensors
- **Trained Model output name:** DCAI_Girl_SDXL_Anima3 *Output name of the model
- **Instance prompt:** dcai-girl
- **Class prompt:** 1girl
- **Repeats:** 5 [Default: 40]
- **Presets:** none
- **LoRA type:** Standard
- **Train batch size:** 1
- **Epoch:** 4 [Default: 1] *To adjust total steps in Epoch
- **Max train epoch:** 0
- **Max train steps:** 0 [Default: 1600] *To adjust total steps in Epoch
- **Save every N epochs:** 0 [Default: 1] *No need to see progress
- **Seed:** 123 [Default: 0 = random]
- **LR Scheduler:** cosine_with_restarts [Default: cosine]
- **Optimizer:** AdamW [Default: AdamW8bit]
- **Optimizer extra arguments:** betas=0.9,0.99 weight_decay=0.05
- **Learning rate:** 0.0004 (4e-4) [Default: 0.0001]
- **Text Encoder learning rate:** 0.00005 (5e-5) [Default: 0.0001 (1e-4)]
- **Unet learning rate:** 0.0004 (4e-4) [Default: 0.0001]
- **LR warmup (% of total steps):** 10
- **LR # cycles:** 2 [Default: 1]
- **Network Rank (Dimension):** 32 [Default: 8]
- **Network Alpha:** 16 [Default: 1]
- **Keep n tokens:** 8 [Default: 0] *Number of instance and class tokens
- **clip_skip:** 0 [Default: 1]
- **Shuffle caption:** true [Default: false]
- **CrossAttention:** sdpa [Default: xformers]

If your VRAM is less than 16 GB, use gradient checkpointing. Although the learning time will increase, VRAM consumption can be reduced. If VRAM is still insufficient, change the Optimizer to "Adafactor".

## Training Results

The A1111 WebUI settings were the same settings used to generate the previous test generation.

![Final results of the training](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final.jpg)

### Combination with other LoRAs

When using with other LoRAs, different weight scales may not apply well. The following is an adaptation of "xl_more_art-full / xl_real / Enhancer" at 1.0 with the same generation settings.

![Results in combination with other LoRA](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-more_art-full.jpg)

The background has changed, but the characters themselves have adapted without much change.

### Apply to checkpoint models of the same lineage

In this case, it was trained with AnimagineV3.1, so it can be used with a checkpoint model of the same lineage. Everything is generated with the same settings as for test generation.

![Generated result for animaPencilXL_v500](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-animapencilxl_v500.jpg)

animaPencilXL_v500

![Generated result for AnythingXL_xl](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-anythingxl_xl.jpg)

AnythingXL_xl

![Generated result for chenkinAnimeImpastoBased_v10](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-chenkinanimeImpastobased.jpg)

chenkinAnimeImpastoBased_v10

![Generated result for lizmix_versionX](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-lizmix_versionx.jpg)

lizmix_versionX

![Generated result for ranimeXLBaseOnAnimagine_v10](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-ranimexlbaseonanimagine_v10.jpg)

ranimeXLBaseOnAnimagine_v10

![Generated result for realAnimagineXL_v10](https://dca.data-hub-center.com/content/uploads/2025/05/sdxl-train-anima3-final-realAnimagineXL_v10.jpg)

realAnimagineXL_v10

As shown above, LoRA can be applied if the merge models includes AnimagineV3.1.

## Conclusion

In this article, I have explained LoRA training for SDXL. Compared to the previous SD1.5, the training time is longer and requires a certain level of PC specs, so trial and error is quite a challenge. However, compared to SD1.5, I think we were able to train LoRA characters with more detail due to the increased resolution. I would like to explain the other lineage (ponyDiffusionV6XL, illustriousXL01, NoobAI-XL) in the near future. I would also like to explain how to use RunPod in DCAI article.
