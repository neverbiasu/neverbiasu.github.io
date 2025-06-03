---
title: AI插画生成中的prompt介绍【composition/camera angle/facial expression】
date: 2024-12-11T14:45:46+09:00
updated: 2024-12-20T00:00:00+09:00
categories:
    - 初学者
tags:
    - Prompt
    - text2image
description: 一份全面的AI插画生成prompt指南，涵盖camera angle、composition和facial expression，助力更好的AI艺术创作。
---

# AI插画生成中的prompt介绍

本指南涵盖AI插画生成的prompt，重点介绍camera angle、composition和facial expression，以提升您的创作过程。

## Camera angle和composition的prompt

### Camera angle

| Prompt | 描述 | 图片 |
|--------|-------------|-------|
| `from the front`, `front view` | 从正面拍摄。 | ![Front view](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-from_the_front.jpg) |
| `from above`, `high angle` | 从上方拍摄。 | ![High angle](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-from_above.jpg) |
| `from below`, `low angle` | 从下方拍摄。 | ![Low angle](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-from_below.jpg) |
| `side view`, `side angle` | 从侧面拍摄。 | ![Side view](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-side_view.jpg) |
| `back shot`, `back view` | 从后方拍摄。使用`looking back`可实现转身姿势。 | ![Back view](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-back_shot.jpg) |
| `overhead shot`, `bird's-eye view` | 从上方俯拍，通常用于躺着的主体。 | ![Bird's-eye view](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-overhead_shot.jpg) |
| `pov` | 第一人称主观视角。结合`pov hand`可实现手部视角。 | ![POV](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-pov.png) |
| `dutch angle` | 倾斜拍摄以实现引人注目的构图。 | ![Dutch angle](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-dutch_angle.jpg) |

### Framing height

| Prompt | 描述 | 图片 |
|--------|-------------|-------|
| `full body` | 捕捉整个身体。 | ![Full body](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-full_body.jpg) |
| `half body`, `upper body` | 捕捉腰部以上。 | ![Half body](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-medium_shot.jpg) |
| `bust shot`, `close-up` | 捕捉胸部以上。 | ![Bust shot](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-close_shot.jpg) |
| `head shot`, `portrait` | 捕捉面部和肩膀。 | ![Head shot](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-wide_close-up.jpg) |
| `extreme close-up` | 聚焦于特定部位，例如眼睛。 | ![Extreme close-up](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-extreme_close-up.jpg) |

## Facial Expression的Prompt

![Plutchik-wheel](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/plutchik-wheel_en.png)

这是用于表达facial expression的prompt。这也是生成质量的主要因素之一。它大致按照Robert Plutchick的[🔗8种基本情绪](https://en.wikipedia.org/wiki/Emotion_classification#Plutchik's_wheel_of_emotions)分类。

| Prompt | 描述 | 图片 |
|--------|-------------|-------|
| `smile` | 普通的微笑，嘴角上扬。如果权重较高，嘴巴可能会张开。 | ![Smile](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-smile.jpg) |
| `laugh` | 张大嘴巴的笑。 | ![Laugh](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-laugh.jpg) |
| `giggling`, `chuckling` | 张开嘴巴的微笑。眼睛也会笑起来。 | ![Giggle](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-giggle.jpg) |
| `laughing out loud` | 所谓的"LOL"；我们没有使用缩写，因为lol对我们不起作用。 | ![Laughing out loud](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-lol.jpg) |
| `grin` | 露齿而笑。 | ![Grin](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-grin.jpg) |
| `smirk`, `smug` | 当你想表现出得意的脸时使用。 | ![Smirk](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-smirk.jpg) |
| `joyful`, `delighted` | 快乐的表情不仅通过面部表现，也通过手势表现。 | ![Joyful](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-joyful.jpg) |
| `cheerful` | 当你想生成欢快感觉时使用。 | ![Cheerful](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-cheerful.jpg) |
| `pleased` | 愉悦的表情。 | ![Pleased](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-pleased.jpg) |
| `amused` | 生成有趣的表情。 | ![Amused](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-amused.jpg) |
| `interested`, `curious` | 生成好奇或感兴趣的表情。 | ![Interested](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-interested.jpg) |
| `attracted` | 生成被吸引的表情。 | ![Attracted](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-attracted.jpg) |
| `excited` | 生成兴奋的表情，通常涉及整个身体。 | ![Excited](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-excited.jpg) |

### Anger关系

| Prompt | 描述 | 图片 |
|--------|-------------|-------|
| `fierce` | 生成凶猛的表情。 | ![Fierce](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-fierce.jpg) |
| `angry`, `pissed off` | 生成愤怒的表情。 | ![Angry](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-angry.jpg) |
| `furious` | 生成狂怒的表情。 | ![Furious](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-furious.jpg) |
| `shouting`, `yelling` | 生成大喊或叫喊的表情。 | ![Shouting](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-shouting.jpg) |
| `screaming` | 生成尖叫的表情。 | ![Screaming](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-screaming.jpg) |
| `arguing` | 生成争论的表情，通常涉及多人。 | ![Arguing](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-arguing.jpg) |
| `pouty` | 生成嘟嘴或撅嘴的表情。 | ![Pouty](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-pouty.jpg) |
| `jealous` | 生成嫉妒的表情。 | ![Jealous](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-jealous.jpg) |

### Disgust关系

| Prompt | 描述 | 图片 |
|--------|-------------|-------|
| `disgusted` | 生成厌恶的表情，表现出似乎要爆发的压力感。 | ![Disgusted](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-disgusted.jpg) |
| `mean laugh` | 生成讽刺的笑，通常双臂交叉以增加态度感。 | ![Mean laugh](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-mean_laugh.jpg) |
| `menacing` | 生成威胁性的表情，适合"yandere"或严厉的角色。 | ![Menacing](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-menacing.jpg) |
| `annoyed`, `frustrated`, `irritated` | 生成烦躁的表情。 | ![Irritated](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-annoyed.jpg) |
| `grumpy` | 生成暴躁的表情。 | ![Grumpy](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-grumpy.jpg) |
| `contemptuous` | 生成轻蔑的表情。 | ![Contemptuous](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-contemptuous.jpg) |
| `not impressed` | 生成漠不关心的表情。 | ![Not impressed](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-not_impressed.jpg) |
| `exhausted` | 生成疲惫的表情。 | ![Exhausted](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-exhausted.jpg) |
| `yawning` | 生成打哈欠的表情，表示失去兴趣。 | ![Yawning](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-yawning.jpg) |
| `sneezing` | 生成打喷嚏的表情。 | ![Sneezing](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-sneezing.jpg) |

### Sadness关系

| Prompt | 描述 | 图片 |
|--------|-------------|-------|
| `sad` | 生成悲伤的表情。添加`tears`可产生哭泣效果。 | ![Sad](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-sad.jpg) |
| `unhappy` | 生成不快乐的表情。 | ![Unhappy](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-unhappy.jpg) |
| `weeping`, `sobbing` | 生成哭泣或抽泣的表情。 | ![Weeping](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-weeping.jpg) |
| `cry` | 生成哭泣的表情。与`scream`结合可产生戏剧性效果。 | ![Cry](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-cry.jpg) |
| `tormented` | 生成黑暗、痛苦的表情。 | ![Tormented](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-tormented.jpg) |
| `depressed` | 生成抑郁的表情。 | ![Depressed](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-depressed.jpg) |
| `forlorn` | 生成孤独的表情。 | ![Forlorn](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-forlorn.jpg) |

### Surprise关系

| Prompt | 描述 | 图片 |
|--------|-------------|-------|
| `surprised` | 生成惊讶的表情。 | ![Surprised](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-surprised.jpg) |
| `amazed` | 生成惊奇的表情。 | ![Amazed](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-amazed.jpg) |
| `astonished` | 生成震惊的表情。 | ![Astonished](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-astonished.jpg) |
| `agitated`, `flustered` | 生成激动或慌乱的表情。 | ![Agitated](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-agitated.jpg) |
| `embarrassed grin` | 生成害羞的微笑，通常手放在脸颊上以增加羞涩感。 | ![Embarrassed grin](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-embarrassed-grin.jpg) |
| `shy` | 生成扭捏、害羞的表情。 | ![Shy](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-shy.jpg) |

### Fear关系

| Prompt | 描述 | 图片 |
|--------|-------------|-------|
| `scared` | 生成害怕的表情。 | ![Scared](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-mean_scared.jpg) |
| `horrified` | 生成恐惧的表情。 | ![Horrified](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-horrified.jpg) |
| `bewildered` | 生成困惑的表情。 | ![Bewildered](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-bewildered.jpg) |
| `worried` | 生成担心的表情。 | ![Worried](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-worried.jpg) |
| `silly` | 生成愚蠢或傻气的表情。 | ![Silly](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-silly.jpg) |

### Trust关系

| Prompt | 描述 | 图片 |
|--------|-------------|-------|
| `trusted` | 生成信任的表情。 | ![Trusted](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-trusted.jpg) |
| `acceptance` | 生成接受的表情。 | ![Acceptance](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-acceptance.jpg) |
| `relaxed` | 生成放松的表情。 | ![Relaxed](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-relaxed.jpg) |
| `loving`, `beloved` | 生成充满爱意的表情。添加`blush`可加强效果。 | ![Loving](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-loving.jpg) |
| `fell in love` | 生成坠入爱河的表情。 | ![Fell in love](https://neverbiasu.github.io/assets/images/reprints/digitalcreativeai/prompt-samples-fell_in_love.jpg) |

## 结论

怎么样？Prompt是AI生成中最重要的参数。我们在本文中介绍了composition和facial expression的prompt，但要涵盖所有内容需要很长时间，所以我们将在单独的文章中介绍其他内容。