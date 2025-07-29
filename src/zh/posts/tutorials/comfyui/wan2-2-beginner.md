# 【ComfyUI 实战指南】Wan2.2 入门教程：阿里开源电影级AI视频生成完全指南

## 摘要

Wan2.2 是阿里巴巴通义万相团队开源的电影级视频生成模型，支持文生视频（T2V）、图生视频（I2V）和文图混合生成（TI2V）三种模式。本教程详细介绍 Wan2.2 在 ComfyUI 中的环境搭建、模型配置、工作流使用和实战应用。

## 目录

1. [初识 Wan2.2](#初识-wan22)
2. [环境准备与搭建](#环境准备与搭建)
3. [ComfyUI 配置详解](#comfyui-配置详解)
4. [ComfyUI 实战操作](#comfyui-实战操作)
5. [Prompt 撰写指南](#prompt-撰写指南)
6. [常见问题与解决](#常见问题与解决)

---

## 初识 Wan2.2

### 1.1 什么是 Wan2.2

![Wan2.2 模型推理示意图](https://mmbiz.qpic.cn/sz_mmbiz_png/kfTykfMJicWNOvFsIudTAiaea3SXeibxaQtAicOIynzoZBvkqF8KX8VbXVeQIkOVrOzvBgqFAhsrWA6q0Cq6n6Odvw/640?wx_fmt=png&from=appmsg&randomid=dxvguqb0)
*Wan2.2 模型推理示意图*

**Wan2.2**（通义万相2.2）是阿里巴巴达摩院推出的新一代开源视频生成模型，专门用于高质量视频内容创作。作为 Wan 系列的最新版本，它在视频生成质量、运动一致性和内容理解方面都有显著提升。

**核心特点**：
- **电影级画质**：支持高分辨率视频生成，画面细节丰富
- **多模态输入**：支持纯文本、纯图像、文图混合三种生成模式
- **运动连贯性**：优秀的时序一致性，生成的视频动作自然流畅
- **开源免费**：完全开源，支持商业使用

### 1.2 Wan2.2 核心能力

**三大生成模式**：

1. **文生视频（T2V）** - Text to Video
   - 输入：文本描述
   - 输出：根据描述生成的视频
   - 适用：创意视频、概念展示

2. **图生视频（I2V）** - Image to Video  
   - 输入：静态图像
   - 输出：基于图像的动态视频
   - 适用：照片动画化、产品展示

3. **文图混合生成（TI2V）** - Text and Image to Video
   - 输入：图像 + 文本描述
   - 输出：结合两者信息的视频
   - 适用：精确控制的视频创作

### 1.3 应用场景

**内容创作领域**：
- **短视频制作**：社交媒体内容、营销视频
- **影视预览**：概念验证、故事板动画
- **电商展示**：产品动态展示、广告素材
- **教育培训**：知识可视化、教学动画

**技术优势**：
- 生成时长：支持5秒高清视频
- 分辨率：高清画质输出
- 帧率：流畅的视频播放效果
- 一致性：优秀的时序和空间一致性

---

## 环境准备与搭建

### 2.1 硬件要求

| 配置项目 | 最低配置 | 推荐配置 | 说明 |
|----------|----------|----------|------|
| **GPU显存** | 16GB VRAM | 24GB+ VRAM | RTX 4090/RTX 6000 Ada 等 |
| **系统内存** | 32GB RAM | 64GB+ RAM | 视频生成内存需求较大 |
| **存储空间** | 100GB | 200GB+ | 模型文件和生成内容存储 |
| **操作系统** | Windows 10/11, macOS, Linux | - | 支持主流操作系统 |

**显卡兼容性**：
- **NVIDIA RTX 40系列**：RTX 4090（推荐）、RTX 4080
- **NVIDIA RTX 30系列**：RTX 3090、RTX 3080（最低要求）
- **专业显卡**：RTX 6000 Ada、A6000 等

### 2.2 软件环境准备

**基础软件要求**：
```bash
# Python 环境
Python 3.8+ (推荐 3.10)

# CUDA 支持 (NVIDIA GPU)
CUDA 11.8+ 或 CUDA 12.0+
```

**ComfyUI 安装**：
```bash
# 克隆 ComfyUI 仓库
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI

# 安装依赖
pip install -r requirements.txt
```

### 2.3 模型文件概览

Wan2.2 包含以下核心模型文件：

**扩散模型（Diffusion Models）**：
- `wan2.2_ti2v_5B_fp16.safetensors` - TI2V混合模型（5B参数）
- `wan2.2_t2v_low_noise_14B_fp8_scaled.safetensors` - T2V低噪声模型
- `wan2.2_t2v_high_noise_14B_fp8_scaled.safetensors` - T2V高噪声模型
- `wan2.2_i2v_low_noise_14B_fp16.safetensors` - I2V低噪声模型
- `wan2.2_i2v_high_noise_14B_fp16.safetensors` - I2V高噪声模型

**编码器模型**：
- `umt5_xxl_fp8_e4m3fn_scaled.safetensors` - 文本编码器
- `wan2.2_vae.safetensors` - TI2V专用VAE
- `wan_2.1_vae.safetensors` - T2V/I2V通用VAE

---

## ComfyUI 配置详解

### 3.1 更新 ComfyUI 到最新版本

**步骤1：更新代码库**
```bash
# 进入 ComfyUI 目录
cd ComfyUI

# 拉取最新代码
git pull

# 更新依赖包
pip install -r requirements.txt
```

**步骤2：启动验证**
```bash
# 启动 ComfyUI
python main.py

# 在浏览器中访问
http://localhost:8188
```

### 3.2 模型文件下载与配置

**官方模型仓库**：
访问 [Comfy-Org/Wan_2.2_ComfyUI_Repackaged](https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged) 下载重新打包的模型文件。

**TI2V 混合版配置**：
```
ComfyUI/
├───📂 models/
│   ├───📂 diffusion_models/
│   │   └───wan2.2_ti2v_5B_fp16.safetensors
│   ├───📂 text_encoders/
│   │   └─── umt5_xxl_fp8_e4m3fn_scaled.safetensors 
│   └───📂 vae/
│       └── wan2.2_vae.safetensors
```

下载链接：
- [wan2.2_ti2v_5B_fp16.safetensors](https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged/resolve/main/split_files/diffusion_models/wan2.2_ti2v_5B_fp16.safetensors)
- [wan2.2_vae.safetensors](https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged/resolve/main/split_files/vae/wan2.2_vae.safetensors)
- [umt5_xxl_fp8_e4m3fn_scaled.safetensors](https://huggingface.co/Comfy-Org/Wan_2.1_ComfyUI_repackaged/resolve/main/split_files/text_encoders/umt5_xxl_fp8_e4m3fn_scaled.safetensors)

**T2V 文生视频配置**：

**需要的模型文件**：
- **Diffusion Models**：
  - [wan2.2_t2v_low_noise_14B_fp8_scaled.safetensors](https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged/resolve/main/split_files/diffusion_models/wan2.2_t2v_low_noise_14B_fp8_scaled.safetensors)
  - [wan2.2_t2v_high_noise_14B_fp8_scaled.safetensors](https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged/resolve/main/split_files/diffusion_models/wan2.2_t2v_high_noise_14B_fp8_scaled.safetensors)
- **VAE**：[wan_2.1_vae.safetensors](https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged/resolve/main/split_files/vae/wan_2.1_vae.safetensors)
- **Text Encoder**：[umt5_xxl_fp8_e4m3fn_scaled.safetensors](https://huggingface.co/Comfy-Org/Wan_2.1_ComfyUI_repackaged/resolve/main/split_files/text_encoders/umt5_xxl_fp8_e4m3fn_scaled.safetensors)

**文件目录结构**：
```
ComfyUI/
├───📂 models/
│   ├───📂 diffusion_models/
│   │   ├─── wan2.2_t2v_low_noise_14B_fp8_scaled.safetensors
│   │   └─── wan2.2_t2v_high_noise_14B_fp8_scaled.safetensors
│   ├───📂 text_encoders/
│   │   └─── umt5_xxl_fp8_e4m3fn_scaled.safetensors 
│   └───📂 vae/
│       └── wan_2.1_vae.safetensors
```

**I2V 图生视频配置**：

**需要的模型文件**：
- **Diffusion Models**：
  - [wan2.2_i2v_low_noise_14B_fp16.safetensors](https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged/resolve/main/split_files/diffusion_models/wan2.2_i2v_low_noise_14B_fp16.safetensors)
  - [wan2.2_i2v_high_noise_14B_fp16.safetensors](https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged/resolve/main/split_files/diffusion_models/wan2.2_i2v_high_noise_14B_fp16.safetensors)
- **VAE**：[wan_2.1_vae.safetensors](https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged/resolve/main/split_files/vae/wan_2.1_vae.safetensors)
- **Text Encoder**：[umt5_xxl_fp8_e4m3fn_scaled.safetensors](https://huggingface.co/Comfy-Org/Wan_2.1_ComfyUI_repackaged/resolve/main/split_files/text_encoders/umt5_xxl_fp8_e4m3fn_scaled.safetensors)

**文件目录结构**：
```
ComfyUI/
├───📂 models/
│   ├───📂 diffusion_models/
│   │   ├─── wan2.2_i2v_low_noise_14B_fp16.safetensors
│   │   └─── wan2.2_i2v_high_noise_14B_fp16.safetensors
│   ├───📂 text_encoders/
│   │   └─── umt5_xxl_fp8_e4m3fn_scaled.safetensors 
│   └───📂 vae/
│       └── wan_2.1_vae.safetensors
```

---

## ComfyUI 实战操作

### 4.1 工作流获取

1. 点击左上角"工作流"按钮

![](/assets/images/tutorials/comfyui/wan-2-2/workflow_step1.png)

2. 再点击"浏览模板"选项

![](/assets/images/tutorials/comfyui/wan-2-2/workflow_step2.png)

3. 进入模版弹窗，先点击视频tab，最顶上的就是Wan2.2的三个基础工作流模板。我们先选中最后一个。

![](/assets/images/tutorials/comfyui/wan-2-2/workflow_step3.png)

需要介绍的是，最左边的是TI2V（既能文本也能用图像生成视频），其他两个分别是文生视频和图生视频。

### 4.2 工作流运行

1. 进入工作流后，我们在CLIP Text Encode（Positive Prompt）输入提示词，下面是个案例

![](/assets/images/tutorials/comfyui/wan-2-2/workflow_step4.png)

```
In a bustling mall setting, a white cat stands central in the frame, donning a white strapless gown. With dynamic action, she lands a left hook, toppling a gorilla clad in a blue suit, then swiftly executes a spinning back kick to fell another similarly dressed gorilla. The camera captures the fluidity of her movements and the gorillas' falls from a level angle. The backdrop showcases the mall's decor and passersby.
```

要用图生视频的话，选中Load Image，Ctrl+B开启，上传你的图片即可。

![](/assets/images/tutorials/comfyui/wan-2-2/workflow_step5.png)

![](/assets/images/tutorials/comfyui/wan-2-2/bug1.png)

运行时可能会遇到这个问题，我们删除https://github.com/ty0x2333/ComfyUI-Dev-Utils，参考https://github.com/comfyanonymous/ComfyUI/issues/8884

---

## Prompt 撰写指南

Prompt（提示词）是控制 Wan2.2 视频生成效果的核心要素。本章节基于阿里官方微信推文内容，为你详细介绍提示词的撰写技巧和实战案例。

### 5.1 官方提示词公式

根据 [阿里官方使用指南文档](https://alidocs.dingtalk.com/i/nodes/jb9Y4gmKWrx9eo4dCql9LlbYJGXn6lpz)，Wan2.2 支持以下三种提示词公式：

#### 基础公式（适合新手）
```
提示词 = 主体 + 场景 + 运动
```

- **主体**：视频的主要表现对象（人、动物、植物、物品等）
- **场景**：主体所处的环境（背景、前景、真实或虚构场景）
- **运动**：主体的具体运动和非主体的运动状态

#### 进阶公式（适合有经验用户）
```
提示词 = 主体（主体描述）+ 场景（场景描述）+ 运动（运动描述）+ 美学控制 + 风格化
```

- **主体描述**：外观特征细节，如"身着少数民族服饰的黑发苗族少女"
- **场景描述**：环境特征细节的形容词或短句
- **运动描述**：运动特征细节，包含幅度、速率和效果，如"猛烈地摇摆"、"缓慢地移动"
- **美学控制**：光源、光线环境、景别、视角、镜头、运镜等
- **风格化**：画面风格描述，如"赛博朋克"、"勾线插画"、"废土风格"

#### 图生视频公式（I2V 专用）
```
提示词 = 运动 + 运镜
```

- **运动描述**：结合图像元素描述动态过程，如奔跑、打招呼
- **运镜**：镜头运动控制，如"镜头推进"、"镜头左移"、"固定镜头"

### 5.2 官方案例解析

以下为阿里官方微信推文中的真实 Prompt 案例（1:1 提取自官方教程）：

#### 光源类型控制案例

**人工光**

![人工光案例](https://mmbiz.qpic.cn/sz_mmbiz_gif/kfTykfMJicWNOvFsIudTAiaea3SXeibxaQt4uCy2FzDSd9rWPp8hPMzlmA60mNxCwRPEHCnhl4icKAVrQ1WJfYBGFA/640?wx_fmt=gif&from=appmsg&randomid=a191ko0h)

```
边缘光，中近景，人工光，侧光，低饱和度，暖色调，右侧重构图，过肩镜头角度拍摄，镜头聚焦一位穿着蓝白格子衬衫的外国女孩。她有着立体的五官，眼神专注明亮，几缕发丝从整齐的马尾辫中垂下，增添了一丝柔和感。女孩微微侧头，嘴唇微启，似乎在倾听对面的人说话。背景为昏暗虚化的房间，一台带有白色灯罩的复古台灯从画面一侧提供柔和光源，照亮人物轮廓。柜子旁的黑色木门隐约可见，强化了场景的神秘感与层次感。
```

**火光**

![火光案例](https://mmbiz.qpic.cn/sz_mmbiz_gif/kfTykfMJicWNOvFsIudTAiaea3SXeibxaQtUR3XBWhEBbbmyHDjFT9bpKVOicIRuicTqibwTnj05Cg18CZ40gGK6kOFQ/640?wx_fmt=gif&from=appmsg&randomid=ajvx8p9o)

```
火光，过肩镜头角度拍摄，一个穿着白色衬衫和棕色背心的男人站在壁炉前，看着镜头右边的一个人。
```

**月光**

![月光案例](https://mmbiz.qpic.cn/sz_mmbiz_gif/kfTykfMJicWNOvFsIudTAiaea3SXeibxaQtZGXxMXc4Ah7Bh2Ricyl7UDY9QkmrcrZyLuMwlmUscaP0uSIMiaIygJWw/640?wx_fmt=gif&from=appmsg&randomid=hy60wiut)

```
月光，一个年轻女子站在一间旧式房间中，背景为斑驳的瓷砖墙与一扇老旧的木门。她拥有一头利落的黑色短发，眉毛细长，蓝色眼眸在微弱的月光下显得格外深邃，神情专注而沉思。她身穿黑色上衣，配以干净的白色衣领，双手自然垂落，身体微微侧向一边，目光凝视着镜头外的某处，嘴角紧绷，透露出一丝压抑的情绪。室内光源来自窗外的月光，光线从一侧斜射入内，在她的面部形成柔和的阴影，强化了画面中的静谧与张力。镜头聚焦于她的神态，营造出一种私密、凝固且充满故事感的画面。
```

**实用光**

![实用光案例](https://mmbiz.qpic.cn/sz_mmbiz_gif/kfTykfMJicWNOvFsIudTAiaea3SXeibxaQtO5xq6SsKvVtxEh122oS1WwpZakJxEmqRIJhJKkBiaKmc8F24ZqScg8A/640?wx_fmt=gif&from=appmsg&randomid=ycfuhzn6)

```
实用光，底光，高对比度，夜晚，暖色调，低角度拍摄，中近景，双人镜头。在昏暗的灯光下，一位外国白人女子坐在床边，她穿着一件白色T恤衫，上面印有黑色字母“HUMMER & ELLIS”。她的头发披肩而下，脖子上戴着一条项链。近景仰拍镜头下，她的面前有一盏白色的灯泡照亮了周围的环境。在背景中，可以看到另一位外国白人女子的身影，她穿着黑色的衣服，正在看着前方的女子。
```

**荧光**

![荧光案例](https://mmbiz.qpic.cn/sz_mmbiz_gif/kfTykfMJicWNOvFsIudTAiaea3SXeibxaQtrdyialQPU1IXg2Pvh4ibMb1Tr7vryjWsc6x6CFKWEd5QWCQUT6BAjQLg/640?wx_fmt=gif&from=appmsg&randomid=xv79ejs7)

```
荧光，一个年轻女子站在室内走廊中，背景为蓝色调的金属柜门。女子有着长长的黑发和刘海，穿着格子衬衫，双手垂在身侧，表情由平静逐渐转向轻微焦虑，眼神略带不安地望向镜头一侧。光线来自顶部的线性灯管和侧面的窗户，在她的面部形成柔和的阴影，墙壁与地面呈现出灰蓝色，空间狭长，增强了静谧感。
```

**阴天光**

![阴天光案例](https://mmbiz.qpic.cn/sz_mmbiz_gif/kfTykfMJicWNOvFsIudTAiaea3SXeibxaQth2cBCxhWH43fXvSiccUj7sj2EvRFBtdk67dys4V1MwDBqbIVdJRDiakA/640?wx_fmt=gif&from=appmsg&randomid=gur42fpm)

```
中焦距，柔光，低对比度，边缘光，低角度拍摄，阴天光，低饱和度，中近景，干净的单人镜头，冷色调，中心构图。镜头仰拍拍摄外国男子在户外的近景，他穿着黑色的衣服和灰色的毛衣，白色的衬衫，戴着黑色的领带，眼睛看着镜头，身体向前移动，后面是棕色的建筑上面有窗户，窗户里面有黄色的灯光，前面有黑色的门，镜头向前移动，镜头的右侧有一个虚化的黑色的物品前后晃动，背景是黑色的。
```

#### 景别控制案例

**特写**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/kfTykfMJicWNOvFsIudTAiaea3SXeibxaQt02pibF9TiaKjPswicbiaYtC6dAc9KGPPpHpx3vchTdJCZc0CrpicMh5AAEw/640?wx_fmt=gif&from=appmsg&randomid=ek9ae406)

```prompt
平拍一个外国男人的面部特写，他有着蓝色的眼睛和光头，他的脸上布满了汗水，他盯着镜头，随后低下头。画面下方出现白色英文字幕“My little Max...”。背景虚化，模糊不清。镜头向上移动，俯拍男人后脑勺的特写。
```

**中近景**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/kfTykfMJicWNOvFsIudTAiaea3SXeibxaQtChOM3DjwCO7O0siaGZaYLhy2CHecSrfHIMsAfvZOL4Yq87w4TeCyvPw/640?wx_fmt=gif&from=appmsg&randomid=wl8fzxmh)

```prompt
中近景，平拍近景镜头中，一位外国白人老年男性坐在室内与另一位人物进行对话。他穿着深蓝色的外套，内搭白色衬衫和黑色毛衣，戴着眼镜，头发花白。虚化的前景中有一个穿着棕色衣服的人背对着镜头。背景是一面白色的墙壁，上面有着一扇窗户，窗外可以看到模糊的景色。随后，老人身后的一扇门被打开，一个穿着黑色衣服的人走了进来。
```

**全景**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/kfTykfMJicWNOvFsIudTAiaea3SXeibxaQticxJLAzg5ic1aVAx5BmrKfZlhLHmicJAjCyRz4hzSWSmkctVbLBNFlGBg/640?wx_fmt=gif&from=appmsg&randomid=fdvbk4ug)

```prompt
暴风雪肆虐的夜晚，便利店里温暖而宁静。年轻的收银员穿着简单的工作服，冻得通红的双手哈着热气，认真整理着货架上的商品。冷柜的LED灯光线清冷，将冰淇淋包装纸映出不自然的青白色调。全景镜头下，可以看见店外风雪交加，与店内形成鲜明对比。
```

### 5.3 提示词撰写技巧

**实用建议**：
1. **层次清晰**：按主体→场景→运动→美学→风格的顺序组织
2. **具体描述**：用具体的形容词替代抽象概念
3. **适量控制**：避免过长的描述，重点突出核心信息
4. **风格统一**：确保各部分描述风格协调一致

**常用专业术语**：
- **光线控制**：柔光、硬光、侧光、背光、边缘光、底光
- **色彩控制**：暖色调、冷色调、高饱和度、低饱和度、高对比度、低对比度
- **镜头控制**：特写、近景、中景、全景、广角、长焦、中焦距
- **构图控制**：中心构图、对称构图、平衡构图、左侧重构图、右侧重构图

---

## 常见问题与解决

### 6.1 环境配置问题

**问题：模型加载失败**
- 检查文件路径是否正确
- 确认模型文件完整性
- 验证显存是否充足

**问题：生成速度慢** 
- 降低分辨率设置
- 减少采样步数
- 使用量化版本模型

**问题：显存不足**
- 使用FP8量化模型
- 降低批次大小
- 关闭其他GPU程序

### 6.2 生成质量问题

**视频闪烁抖动**：
- 检查提示词一致性
- 调整CFG参数
- 尝试不同采样器

**动作不自然**：
- 优化动作描述词
- 调整噪声强度
- 使用更合适的参考图

**画质模糊**：
- 增加采样步数
- 提升输入分辨率
- 使用质量增强词汇

---

### 参考资料
1. [Wan2.2 官方仓库](https://github.com/Wan-Video/Wan2.2)
2. [ComfyUI Wan2.2 教程](https://docs.comfy.org/tutorials/video/wan/wan2_2)
3. [Wan2.2 官方主页](https://wan.video/welcome?spm=a2ty_o02.30011076.0.0.6c9ee41eCcluqg)
4. [Wan2.2 HuggingFace模型库](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B)
5. [Wan2.2 使用指南](https://alidocs.dingtalk.com/i/nodes/jb9Y4gmKWrx9eo4dCql9LlbYJGXn6lpz)