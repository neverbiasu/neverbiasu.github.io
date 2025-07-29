---
title: Generate consistent characters – Replicate blog
date: 2025-07-21
author:
    - name: fofr
      url: https://replicate.com/fofr
---

# Generate consistent characters

![Image 1: A grid of 8 images showing the same character in different scenes](/assets/images/reprints/replicate/cover.D2ypzJcL_Z91s9c.webp)

Until recently, the best way to generate images of a consistent character was from a trained lora. You would need to create a dataset of images and then [train a FLUX lora on them](https://replicate.com/blog/fine-tune-flux).

If you want to go back further, you might remember having to use a ComfyUI workflow. A workflow that would combine SDXL, controlnets, IPAdapters and some non-commercial face landmark models. Things have got remarkably simpler.

Today we have a choice of state of the art image models that can do this accurately from a single reference. In this blog post we’ll highlight which models can do this, and which is best depending on your needs.

> she is wearing a pink t-shirt with the text “Replicate” on it

![Image 2: Original reference image](/assets/images/reprints/replicate/0_1%20copy.jpg)

Original

[![Image 3: A grid of 4 outputs](/assets/images/reprints/replicate/tmp67fsa60i.png)](/assets/images/reprints/replicate/tmp67fsa60i.png)

“she is wearing a pink t-shirt with the text “Replicate” on it”

## The best models for consistent characters

As of July 2025, there are four models on Replicate that can create a realistic and accurate output from a single reference. In order of release:

- [OpenAI’s gpt-image-1](https://replicate.com/openai/gpt-image-1)
- [Runway’s Gen-4 Image](https://replicate.com/runwayml/gen4-image)
- [Black Forest Labs’s FLUX.1 Kontext](https://replicate.com/black-forest-labs/flux-kontext-pro)
- [Bytedance’s SeedEdit 3](https://replicate.com/bytedance/seededit-3.0)

FLUX.1 Kontext comes in a few different flavors: [pro](https://replicate.com/black-forest-labs/flux-kontext-pro), [max](https://replicate.com/black-forest-labs/flux-kontext-max) and [dev](https://replicate.com/black-forest-labs/flux-kontext-dev). Dev is an open source version of kontext, which is more controllable and fine-tunable, but isn’t as powerful as pro.

To help write this blog post, I put together a little Replicate model to make it easy to compare outputs. Here is our comparison model, it runs FLUX.1 Kontext, SeedEdit 3.0, gpt-image-1 and Runway’s Gen-4 in parallel: [fofr/compare-character-consistency](https://replicate.com/fofr/compare-character-consistency).

(Did you know that [anyone can create and push models to Replicate](https://replicate.com/docs/guides/deploy-a-custom-model)?)

## Price and speed comparison

First, the essentials: speed and cost. The table below shows the price and speed of each model. The price of gpt-image-1 depends on the output quality you choose (low, medium, high). The price of Gen-4 Image depends on whether you choose 720p or 1080p resolution.

In summary though, gpt-image-1 is the slowest and most expensive model, and Kontext Dev is the cheapest and fastest. The tradeoffs are in quality, and we’ll look at that in more detail below.

| Model | Price (per image) | Speed | Date |
| --- | --- | --- | --- |
| OpenAI [gpt-image-1](https://replicate.com/openai/gpt-image-1) | $0.04–$0.17 | 16s–59s | April 2025 |
| Runway [Gen-4 Image](https://replicate.com/runwayml/gen4-image) | $0.05–$0.08 | 20s–27s | April 2025 |
| Black Forest Labs [FLUX.1 Kontext Pro](https://replicate.com/black-forest-labs/flux-kontext-pro) | $0.04 | 5s | May 2025 |
| Black Forest Labs [FLUX.1 Kontext Max](https://replicate.com/black-forest-labs/flux-kontext-max) | $0.08 | 7s | May 2025 |
| Black Forest Labs [FLUX.1 Kontext Dev](https://replicate.com/black-forest-labs/flux-kontext-dev) | $0.025 | 4s | May 2025 |
| Bytedance [SeedEdit 3](https://replicate.com/bytedance/seededit-3.0) | $0.03 | 13s | July 2025 |

## Preserving a character’s identity

Let’s compare how well each model preserves a character’s identity.

In the following comparisons, we are using gpt-image-1 with the high quality and high fidelity settings. We stick with FLUX.1 Kontext Pro as the best compromise between quality and speed. And we use Gen-4 Image at 1080p.

### Photographic accuracy

Below are a varied set of examples, showing the strengths and weaknesses of each model, all focusing on photographic outputs.

#### A new activity

In these two examples, we can see the strengths of Gen-4 coming through. The composition is the most compelling, and the character is the most accurate.

> she is playing the piano

![Image 4: Original reference image](/assets/images/reprints/replicate/output.png)

Original

[![Image 5: A grid of 4 outputs](/assets/images/reprints/replicate/tmpkp9hl6w3.png)](/assets/images/reprints/replicate/tmpkp9hl6w3.png)

“she is playing the piano”

> he is playing the guitar

![Image 6: Original reference image](/assets/images/reprints/replicate/output-1.png)

Original

[![Image 7: A grid of 4 outputs](/assets/images/reprints/replicate/tmphyqs_vms.png)](/assets/images/reprints/replicate/tmphyqs_vms.png)

“he is playing the guitar”

#### Tweak the scene

If you want to keep most of the original composition, and change just a small part of the scene, all models handle this well.

> remove the glass of drink

![Image 8: Original reference image](/assets/images/reprints/replicate/output(1).png)

Original

[![Image 9: A grid of 4 outputs](/assets/images/reprints/replicate/tmp5pclzys5.png)](/assets/images/reprints/replicate/tmp5pclzys5.png)

“remove the glass of drink”

#### Half-length portrait with unusual hair and eye color

A more challenging comparison, here is a character with heterochromia and hair with two colors, as well as some facial marks.

We can see that every model is capable of handling the hair and eyes. ([Some needed a few retries](/assets/images/reprints/replicate/image(1).png) to get this right.)

> a half-length portrait photo of her in a summer forest

![Image 10: Original reference image](/assets/images/reprints/replicate/image.png)

Original

[![Image 11: A grid of 4 outputs](/assets/images/reprints/replicate/tmpw54nxtoe.png)](/assets/images/reprints/replicate/tmpw54nxtoe.png)

“a half-length portrait photo of her in a summer forest”

#### A shave, a coat and some rain

Rather than keeping everything consistent, let’s try to keep the same person but change some things.

It’s a bit of a mixed bag here, only SeedEdit 3 and gpt-image-1 can handle the clean-shaven request. But gpt-image-1 is also a completely different person, so that’s probably the worst result.

> remove his beard, put him in a raincoat, it is raining

![Image 12: Original reference image](/assets/images/reprints/replicate/output(2).png)

Original

[![Image 13: A grid of 4 outputs](/assets/images/reprints/replicate/tmp8138t1_6.png)](/assets/images/reprints/replicate/tmp8138t1_6.png)

“remove his beard, put him in a raincoat, it is raining”

#### Trying tattoos

Here we try a character with many distinct tattoos to see how well each model handles them. None are perfect, with Gen-4 and gpt-image-1 maintaining the neck tattoos the best.

> he is a chef cooking a meal in a restaurant kitchen

![Image 14: Original reference image](/assets/images/reprints/replicate/XU793vzcsCZ9Btcg4NKu4xbLfIU24e7vKrXGR2MFp01X8fFqA/output.png)

Original

[![Image 15: A grid of 4 outputs](/assets/images/reprints/replicate/tmpc4vpr23u.png)](/assets/images/reprints/replicate/tmpc4vpr23u.png)

“he is a chef cooking a meal in a restaurant kitchen”

### Creative tasks and full transformations

In these examples, we are looking to transform the character into something else, or show them in a different style. A good model will perform the transformation while maintaining the character’s identity.

#### Changing the style

With these simple style changes, we can see quickly that Gen-4 should not be used for these stylistic tasks.

> restyle this person as anime

![Image 16: Original reference image](/assets/images/reprints/replicate/tmpys9tsu4e.jpg)

Original

[![Image 17: A grid of 4 outputs](/assets/images/reprints/replicate/tmpqcxmufc8.png)](/assets/images/reprints/replicate/tmpqcxmufc8.png)

“restyle this person as anime”

> make this a watercolor painting

![Image 18: Original reference image](/assets/images/reprints/replicate/tmpys9tsu4e.jpg)

Original

[![Image 19: A grid of 4 outputs](/assets/images/reprints/replicate/tmperfbtwsy.png)](/assets/images/reprints/replicate/tmperfbtwsy.png)

“make this a watercolor painting”

#### Becoming something else

It’s halloween. We turn her into a witch, and him into an ogre, and someone else into a blue na’vi from Pandora. Gen-4 does the best witch output, but also the least convincing ogre.

> make her a witch

![Image 20: Original reference image](/assets/images/reprints/replicate/tmprsz0v41u.jpg)

Original

[![Image 21: A grid of 4 outputs](/assets/images/reprints/replicate/tmpkr6n5gt5.png)](/assets/images/reprints/replicate/tmpkr6n5gt5.png)

“make her a witch”

> turn him into a green skinned ogre

![Image 22: Original reference image](/assets/images/reprints/replicate/tmp62yelaf9.jpg)

Original

[![Image 23: A grid of 4 outputs](/assets/images/reprints/replicate/tmpex69w8bk.png)](/assets/images/reprints/replicate/tmpex69w8bk.png)

“turn him into a green skinned ogre”

For this example, Kontext Pro didn’t want to create an image of a blue na’vi from Pandora, we’re showing Kontext Dev instead.

> turn him into a blue na’vi from pandora (avatar)

![Image 24: Original reference image](/assets/images/reprints/replicate/tmpc081yqvt.jpg)

Original

[![Image 25: A grid of 4 outputs](/assets/images/reprints/replicate/tmpc2ahjf14.png)](/assets/images/reprints/replicate/tmpc2ahjf14.png)

“turn him into a blue na’vi from pandora (avatar)“

## Conclusion

Overall, we found that:

- Kontext Pro is versatile and can give fabulous results, but often there are too many artifacts around the face, and these frequently make the image unusable (these artifacts do not seem to be present in Kontext Dev, but Dev has overall lower quality)
- gpt-image-1 will always add a distinctive yellow tint, and even with the high quality and high fidelity settings enabled, the identity will frequently change. With the highest cost and slowest speed, we’d only use this for the most complex of tasks.
- SeedEdit 3 tends to restrict itself to the initial composition, making it difficult to prompt a new angle or scene. Outputs are typically softer and can look more AI generated. Coherency is also a problem in complex scenes.
- Runway’s Gen-4 is the most adaptable and accurate when it comes to likeness in photos. It’s main drawback is coherency in complex scenes, and you might find some unexpected arms, limbs or hands. Sometimes this can be fixed with a few retries, sometimes not. Gen-4 also cannot restyle a scene.

## Our recommendations

For photos you should start with [Runway’s Gen-4 Image model](https://replicate.com/runwayml/gen4-image). If you need faster or cheaper outputs, then [Kontext Pro](https://replicate.com/black-forest-labs/flux-kontext-pro) is the next best option. If you get some outputs from Gen-4 that aren’t coherent, you can always put them through Kontext Pro to fix them.

For more creative tasks, and complete character transformations, try [Kontext Pro](https://replicate.com/black-forest-labs/flux-kontext-pro) first. If the task is more complex, and if you can afford it, you should also try [gpt-image-1](https://replicate.com/openai/gpt-image-1). [SeedEdit 3](https://replicate.com/bytedance/seededit-3.0) is a good cheap alternative if you can’t afford gpt-image-1 and kontext isn’t working for you. Do not use Gen-4 for stylistic tasks.

That’s it for now, but stay tuned for more models, comparisons and experiments. Until then, try something new at [replicate.com/explore](http://replicate.com/explore), and follow us on [X](https://x.com/replicate) to see what we’re up to.

---

[Next: Bria is now on Replicate](https://replicate.com/blog/bria)

[All services are online](https://www.replicatestatus.com/)

---

- [Home](https://replicate.com/)
- [About](https://replicate.com/about)
- [Join us](https://replicate.com/about#join-us)
- [Terms](https://replicate.com/terms)
- [Privacy](https://replicate.com/privacy)
- [Status](https://www.replicatestatus.com/)
- [Support](https://replicate.com/support)
