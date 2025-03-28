---
title: Crody's Model Merge Guide // Team-C
cover: https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2d3f67d3-4906-46b0-b27c-63ba7376cca7/width=1320/00000_2500974118.jpeg
date: 2025-03-14
author: Crody
tags:
  - resource guide
  - script
  - stable diffusion
  - merge
  - model
---
Hi this is Crody from Team-C: creator of Nova Series

In this article, I'll write down what kind of merge I use with some knowledge about SDXL models
For how I do, please read Merge Scripter Guide first

## 1. Weighted Sum / Sum Twice

Weighted Sum (WS) merges 2 models, Sum Twice (ST) merges first 2 and 1 model (which means doing WS twice)
You can use Block Merge as well
Using alpha (and beta) to determine how much similarity the result have
Higher value means the results would be similar to latter model

### MMS Text:

#### WS

```markdown
CM A + B alpha Result
A = 1 - alpha
B = alpha
```

#### ST

```markdown
CM A + B +S C alpha beta Result
A = (1 - alpha) * (1 - beta)
B = alpha * (1 - beta)
C = alpha * beta
```

#### Triple Sum (TRS)

Triple Sum (TRS) Merges 3 models with independent ratios

```markdown
CM A + B +T C alpha beta Result
A = 1 - (alpha + beta)
B = alpha
C = beta
```

## 2. Add Difference

Add Difference (AD) merges the difference between latter 2 models into the first model
This can be used when the model needs additional information

### MMS Text:

```markdown
CM A + B - C alpha Result
A + ((B - C) * alpha)
```

## 3. Block Merge

The way to handle values independently for each parts
I'll write down what kind of value it has on below

### Overall analysis:

- BASE : text encoder
- IN00 - IN05 : handles anatomy and details
- IN06 - IN08 : handles tone and poses
- MID00 : over all similarity
- OUT00 - OUT03 : handles shape of face and body
- OUT04 - OUT08 : handles textures

BASE: text encoder, handles what kind of system you use
This also handles the prompt encoding :
::: warning
if you merge SDXL 1.0 models and Pony models with 0.3 BASE, it results in gray images or worse results (using DARE merge also leads in same result so I recommend to set it 0 or 1)
:::
if the base structure is same (Illustrious and NoobAI shares same structure), the BASE can be in between 0 to 1 using DARE merge

IN00: handles overall inputs, outlines, contrast and fingers
To avoid finger errors in Illustrious models, I don't recommend float value (other than 0 and 1) for this as well

IN01: handles background, depth of view and some details in hair and clothes

IN02 and IN03: handles anatomy details, hair and clothes

IN04 and IN05: handles textures, body anatomy and behavior for NSFW prompts

IN06: handles clothing texture and details

IN07: handles pose structures

IN08: handles texture feels, depth and anatomy base

MID00: handles how much it looks like to the latter model
This also handles prompt adherence and drawing style as well

OUT00: handles torso, face structure, age and eyes

OUT01: handles upper body and face shape

OUT02: handles body curves, nose and ears

OUT03: handles skin color and mouth

OUT04 and OUT05: handles overall texture and smooth lights

OUT06: handles overall texture and hard lights

OUT07: handles overall colors and rough draw lines

OUT08: handles output, colors and drawing lines

### MMS Text:

Replace the alpha (beta) with following

```markdown
"BASE, IN00, IN01, IN02, IN03, IN04, IN05, IN06, IN07, IN08, MID00, OUT00, OUT01, OUT02, OUT03, OUT04, OUT05, OUT06, OUT07, OUT08"
```

Replacing each named block with float value in 0 - 1 do the job
For example, if you want to merge 2 models using WS with 0.4 for posing and facial structure, model likeness with 0.3 and other is 0, you can do the following

```markdown
CM A + B "0,0,0,0,0,0,0,0.4,0.4,0.4,0.3,0.4,0.4,0.4,0.4,0,0,0,0,0" Result
```

## 4. Fine Tuning

Handles details, contrast, brightness and colors with using 8 values

- Detail-IN (default:1)
- Detail-MID (default:1)
- Detail-OUT (default:1)
- Contrast (default:1)
- Brightness (default:1)
- Red/Cyan (default:0)
- Green/Magenta (default:0)
- Blue/Yellow (default:0)

For detail values (1-3), make the sum of them around 3.0 and highest value in 1.3
If you have higher contrast, make the brightness high as well
If you change the detail values, please block merge model's IN00 afterwards to maintain the finger details

Notebook edit (MMS cannot determine finetune value):

```markdown
--fine "DtIN,DtMID,DtOUT,CONT,BRIG,RED,GREEN,BLUE \ 
```

Replace each value with float would do the job

## 5. Example Merge using techniques above

MMS text:

```markdown
+NA, https://civitai.com/models/376130?modelVersionId=1474209 
+NO, https://civitai.com/models/967405/nova-orange-xl 
+NU, https://civitai.com/models/982047?modelVersionId=1445113
```

```markdown
CM NA + NO +S NU "0,1,1,0.2,0.2,0.3,0.3,0,0,0,0,0.2,0.1,0.1,0.1,0.4,0.4,0.4,0.4,0.4" "0,0,0,0.3,0.3,0.2,0.2,0.3,0,0,0,0.1,0.1,0.1,0.2,0.2,0.2,0.2,0.2,0.2" _A
-NA
-NU

CM _A + NO "0,1,0,0,0,0,0,0,0.2,0.2,0,0.3,0,0,0,0,0,0,0,0" TestResult
```

Notebook edit: (add fine tune)

```bash
!python merge.py "ST" "/kaggle/tmp/models/" "NA.safetensors" "NO.safetensors" --model_2 "NU.safetensors" \ 
--vae "/kaggle/tmp/vae/VAE.safetensors" \  
--alpha "0,1,1,0.2,0.2,0.3,0.3,0,0,0,0,0.2,0.1,0.1,0.1,0.4,0.4,0.4,0.4,0.4" \  
--beta "0,0,0,0.3,0.3,0.2,0.2,0.3,0,0,0,0.1,0.1,0.1,0.2,0.2,0.2,0.2,0.2,0.2" \  
--fine "1.1,1,0.9,1.2,1.1,0,0,0 \ 
--save_half --prune --save_safetensors --output "TEMP_A"  
flush() 

TEMP_A = model("TEMP_A",1)

remove_model(NA)
remove_model(NU)
flush()

!python merge.py "WS" "/kaggle/tmp/models/" "TEMP_A.safetensors" "NO.safetensors" \
--vae "/kaggle/tmp/vae/VAE.safetensors" \  
--alpha "0,1,0,0,0,0,0,0,0.2,0.2,0,0.3,0,0,0,0,0,0,0,0" \
--save_half --prune --save_safetensors --output "TestResult"  
flush() 
```

## 6. Bonus: Nova Furry XL Illustrious v5.0 Merge

In addition, you can use LoRAs to make style / details correctly

MMS text I used for creating Nova Furry XL Illustrious v5.0:

```markdown
+NF, https://civitai.com/models/503815/nova-furry-xl?modelVersionId=1402403
+SN, https://civitai.com/models/1194136/illustrious-snafu-super-nova-anime-furry-unified
+AL, https://civitai.com/models/1273793/alien-furry-mix-illustrious?modelVersionId=1436977
+YF, https://civitai.com/models/3671/yiffymix?modelVersionId=1447249
+I1, https://huggingface.co/Liberata/illustrious-xl-v1.0/blob/main/Illustrious-XL-v1.0.safetensors

+IE, https://civitai.com/models/1131941?modelVersionId=1423821, %LR
+KF, https://civitai.com/models/1010673?modelVersionId=1132889, %LR
```

```markdown
CM NF + AL - SN 0.7 _A
-AL
-SN

CM _A + YF "0,0,0,0,0,0.2,0.2,0.3,0.2,0.2,0,0.3,0.2,0.2,0.1,0,0,0,0,0" _B
-_A
-YF

CM _B +D I1 0.5 0.1 _C
-_B
-I1

LB _C IE:0.6,KF:0.4 _D
-IE
-KF

PR _D _E
-_D
```

```markdown
CM _C + _D +S NF "1,0,0,0.3,0.3,0.4,0.4,0,0,0,0,0.3,0.2,0.2,0.2,0.3,0.3,0.3,0.3,0.3" "0,0,0,0,0,0,0,0.2,0.3,0.3,0,0.2,0.2,0.2,0.2,0.4,0.4,0.4,0.4,0.4" NovaFurryILV5
```

Notebook (edited to have finetune and change DARE alpha into 0.5):

```bash
%cd /kaggle/working/merge-models

NF = custom_model("https://civitai.com/models/503815/nova-furry-xl?modelVersionId=1402403","NF",mode="checkpoint")
SN = custom_model("https://civitai.com/models/1194136/illustrious-snafu-super-nova-anime-furry-unified","SN",mode="checkpoint")
AL = custom_model("https://civitai.com/models/1273793/alien-furry-mix-illustrious?modelVersionId=1436977","AL",mode="checkpoint")
YF = custom_model("https://civitai.com/models/3671/yiffymix?modelVersionId=1447249","YF",mode="checkpoint")
I1 = custom_model("https://huggingface.co/Liberata/illustrious-xl-v1.0/blob/main/Illustrious-XL-v1.0.safetensors","I1",mode="checkpoint")

IE = custom_model("https://civitai.com/models/1131941?modelVersionId=1423821","IE",mode="lora")
KF = custom_model("https://civitai.com/models/1010673?modelVersionId=1132889","KF",mode="lora")
flush()

!python merge.py "AD" "/kaggle/tmp/models/" "NF.safetensors" "AL.safetensors" --model_2 "SN.safetensors" \
--vae "/kaggle/tmp/vae/VAE.safetensors" \
--alpha 0.7 \
--save_half --prune --save_safetensors --output "TEMP_A"
flush()

TEMP_A=model("TEMP_A",1)

remove_model(AL)
remove_model(SN)
flush()

!python merge.py "WS" "/kaggle/tmp/models/" "TEMP_A.safetensors" "YF.safetensors" \
--vae "/kaggle/tmp/vae/VAE.safetensors" \
--alpha "0,0,0,0,0,0.2,0.2,0.3,0.2,0.2,0,0.3,0.2,0.2,0.1,0,0,0,0,0" \
--fine "1.1,1,1,0.9,1,0,0,0" \
--save_half --prune --save_safetensors --output "TEMP_B"
flush()

TEMP_B=model("TEMP_B",1)

remove_model(TEMP_A)
remove_model(YF)
flush()

!python merge.py "DARE" "/kaggle/tmp/models/" "TEMP_B.safetensors" "I1.safetensors" \
--vae "/kaggle/tmp/vae/VAE.safetensors" \
--alpha 0.5 \
--beta 0.1 \
--save_half --prune --save_safetensors --output "TEMP_C"
flush()

TEMP_C=model("TEMP_C",1)
remove_model(TEMP_B)
remove_model(I1)
flush()

!python lora_bake.py "/kaggle/tmp/models/" "TEMP_C.safetensors" \
"IE.safetensors:0.6,KF.safetensors:0.4" \
--save_safetensors --output "TEMP_D"
flush()

TEMP_D=model("TEMP_D",1)
remove_model(IE)
remove_model(KF)
flush()

!python merge.py "NoIn" "/kaggle/tmp/models/" "TEMP_D.safetensors" None \
--vae "/kaggle/tmp/vae/VAE.safetensors" \
--save_half --prune --save_safetensors --output "TEMP_E"
flush()

TEMP_E=model("TEMP_E",1)

remove_model(TEMP_D)
flush()

!python merge.py "ST" "/kaggle/tmp/models/" "TEMP_C.safetensors" "TEMP_E.safetensors" --model_2 "NF.safetensors" \
--vae "/kaggle/tmp/vae/VAE.safetensors" \
--alpha "1,0,0,0.3,0.3,0.4,0.4,0,0,0,0,0.3,0.2,0.2,0.2,0.3,0.3,0.3,0.3,0.3" \
--beta "0,1,0,0,0,0,0,0.2,0.3,0.3,0,0.2,0.2,0.2,0.2,0.4,0.4,0.4,0.4,0.4" \
--save_half --prune --save_safetensors --output "NovaFurryILV5"
flush()
```

Brief context of the MMS Text:

```markdown
+NF, https://civitai.com/models/503815/nova-furry-xl?modelVersionId=1402403
```

Download Checkpoint

```markdown
+IE, https://civitai.com/models/1131941?modelVersionId=1423821, %LR
```

Download LoRA

```markdown
_A
```

TEMP_A, names that starts with _ becomes TEMP model

```markdown
-AL
```

Removes the model: AL

```markdown
CM _B +D I1 0.5 0.1 _C
```

Merge Illustrious v1.0 (I1) into TEMP_B using DARE merge
alpha sets to 0.5, likeness value sets to 0.1

```markdown
LB _C IE:0.6,KF:0.4 _D
```

Merge LoRA into TEMP_C, IE with alpha 0.6 and KF with alpha 0.4

```markdown
PR _D _E
```

Prune TEMP_D and save it as TEMP_E
LoRA Merge results in bigger file so in order to do the further merges and saving, please do this
