---
title: "Illustrious-LU v0.03"
icon: fa-solid:microscope
cover: https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-11T07:16:56.712Z/2025-04-11%20Thumbnail.png
date: 2025-04-18
category:
  - Model Development
  - reprint
tag:
  - Illustrious
  - LU
  - Lumina
  - AI Model
  - Image Generation
  - Training
author: Angelbottomless
footer: Reprinted from Illustrious Tech Blog
copyright: reprint
---

# Illustrious-LU v0.03

SD XL has been suffering from CLIP – I think this is true, at least partially. Recent models have shown some potential related to natural language, like understanding "left is red, right is blue". However, since CLIP was not trained with natural language sentences, base SD XL and its finetuned variants were significantly limited regarding processing it.

Flux and SD3, like other DiT models, have shown better capabilities with T5. Especially, it has been shown that T5 is very important in processing natural language information to correctly generate text or compositions. However, T5 is very big and still limited, so there have been attempts to use LLMs directly as text encoders. Also, the DiT models have been very big. Even without T5, 12B models are not really feasible enough, much like SD XL.

Flow matching is also interesting. However, it seems inevitable that DiT's intuitive structure enabled much useful research. Unfortunately, flow matching with SD XL didn't show evidence supporting this; rather, it raised more questions about SD XL's VAE problems.

So, the minimal requirements were:

1.  A good-sized backbone, 2-6B parameters without TE
2.  A small text encoder, perhaps not T5
3.  RoPE implementation (unlike some specific models)
4.  A good VAE – like the Flux VAE

The interesting models to test were:

1.  Infinity: An 8B model with VAR Lumina 2.0
2.  Lumina: A 2B model with an LLM + DiT backbone
3.  Flux: A 12B model – very standard and appealing, but large

In January 2025, I decided to leave Flux finetuning to a talented researcher and tested Infinity while preparing Lumina. As a result, Flux-Chroma was developed, which may also be an interesting base to consider. The Infinity experiment showed that "the compute is not enough". Unfortunately, training an 8B scale model requires at least months with an H100 node. In fact, training on 8 million images for 10 epochs would require months to train the model. I'd definitely like to train those 8B models, but perhaps not now.

So Lumina was prepared for training – with numerous fixes and tests. In fact, it was likely only trained with high-quality photographs, which is not suitable for illustrations. But if it is undertrained, we can potentially fix it. We can check if it can be further "trained" with a dataset and whether it can absorb new knowledge. However, whether we need to train the LLM part required testing.

Illustrious-Lumina is a test-train model with the following objectives:

1.  Can the model be trained without the LLM part for better understanding of characters/knowledge?
2.  Does the model adapt faster than SD XL?
3.  Is the resolution arbitrary?

Here, I showcase the result of Illustrious-lumina-experimental-v0.03, trained for 22M image samples. Please note that the original model's performance regarding illustration is "severely bad".

For example, it does not understand any well-known characters.

However, after training – we can see that the model understands shirakami fubuki, Misaka Mikoto, or some popular characters.

![Image 1,2](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:43:42.451Z/2025-04-14(1,2).png)

![Image 3,4](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:41:47.722Z/2025-04-14(3,4).png)

Surprisingly, with just 22M images seen – it can understand 2.5k sample character, saten ruiko or shirai Kuroko too.

![Image 5,6](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:41:55.453Z/2025-04-14(5,6).png)

Not accurate as previous ones, however distinctly fast.

Finally, we can see that actually, three famous popular characters are also working-

![Image 7,8](https://illustrious-prod.s3.ap-northeast-2.amazonaws.com/blog/2025-04-18T09:42:05.180Z/2025-04-14(7,8).png)

The 26500 step, 768 batch size training has shown the successful result – however, it is 15% of v0.1 – at least 8x of current compute amount, is expected to be required for training.

The model has several limitations, and requires improvements.

It includes some synthetic examples, specific style tests such as pixel arts, and post-training with high quality images.

Also, the promised text generation capability, were not found – it requires some sophisticated dataset based training too.

The training journey is currently stopped – I am focusing on dataset cleanup & code fixes for demo first. The model and the inference demo code – with improved setup, will be released soon.
