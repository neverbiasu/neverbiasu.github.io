# FLUX.1 Kontext 入门教程：从零开始的 ComfyUI 图像编辑之旅

![Hello Kontext](/assets/images/tutorials/comfyui/flux-kontext/beginner/flux-kontext-teaser.png)

## 目录

1. [基础认知](#基础认知)
2. [环境搭建](#环境搭建)  
3. [实战入门](#实战入门)
4. [进阶应用](#进阶应用)
5. [学习资源](#学习资源)

---

## 基础认知

### 1.1 FLUX.1 Kontext 是什么

**FLUX.1 Kontext** 是 Black Forest Labs 开发的新一代图像编辑模型，专门用于基于上下文的图像修改和编辑。

**核心优势**：
1. **局部精准编辑** - 只改想改的部分
2. **上下文理解** - 理解图像中元素的关系  
3. **自然融合** - 编辑结果看起来很自然
4. **语义控制** - 用自然语言描述想要的效果

### 1.2 Context 概念解析

**Context（上下文）** 就是模型能"看懂"整张图片的能力：

1. **空间关系** - 知道前景背景、光影位置
2. **语义理解** - 区分不同物体和概念  
3. **逻辑一致** - 保持场景的合理性

比如说，你输入一张蓝猫，可以让他跳舞、倒立、说唱，但是它始终保持背景和角色本身的一致性。

### 1.3 核心应用场景

**主要用途**：
1. **设计创作** - 海报、UI、插画的快速调整
2. **摄影后期** - 人像服装、风景天空、产品颜色
3. **电商营销** - 同款商品不同颜色展示
4. **内容创作** - 社交媒体、视频缩略图变体

---

## 环境搭建

FLUX.1 Kontext [dev] 有 ComfyUI 原生支持，搭建比较简单。

### 2.1 硬件要求

| 模型版本 | GPU显存需求 | 推荐配置 | 备注 |
|----------|------------|----------|------|
| **Full Version** | 32GB VRAM | RTX 6000 Ada/A6000 | 完整精度，质量最佳 |
| **FP8 精度版本** | 16GB VRAM | RTX 4090/RTX 4080 | 推荐选择，性价比高 |
| **GGUF (Q4_K_M)** | 12GB VRAM | RTX 4070 Ti/RTX 3090 | 量化版本，入门首选 |

**系统内存建议**：至少 16GB RAM，推荐 32GB 以上

### 2.2 模型文件下载

**推荐方法**：手动下载模型文件

**GGUF 量化版本**（入门推荐，12GB 显存）：
```bash
# Q4_K_M 量化版本，显存占用最少
wget https://huggingface.co/bullerwins/FLUX.1-Kontext-dev-GGUF/resolve/main/flux1-kontext-dev-Q4_K_M.gguf
```
下载后放入 `ComfyUI/models/unet/` 目录。

![HuggingFace下载界面](/assets/images/tutorials/comfyui/flux-kontext/beginner/huggingface-download.png)

**FP8 精度版本**（性价比推荐，16GB 显存）：
```bash
wget https://huggingface.co/6chan/flux1-kontext-dev-fp8/resolve/main/flux1-kontext-dev-fp8-e4m3fn.safetensors
```
下载后放入 `ComfyUI/models/unet/` 目录，使用 `fp8_e4m3fn` 精度加载。

**ComfyOrg 官方版本**（标准版本）：
```bash
wget https://huggingface.co/Comfy-Org/flux1-kontext-dev_ComfyUI/resolve/main/split_files/diffusion_models/flux1-dev-kontext_fp8_scaled.safetensors
```
下载后放入 `ComfyUI/models/unet/` 目录，使用 `default` 精度加载。

![模型文件目录结构](/assets/images/tutorials/comfyui/flux-kontext/beginner/model-directory.png)

**直接下载**：也可以直接访问 HuggingFace 页面点击下载按钮

### 2.3 工作流准备

**获取工作流**：
- 下载本教程第一张图到本地（包含工作流元数据）。
- ComfyUI 官方模板：`Workflow` → `Browse Templates` → `Flux.1 Kontext Dev`
- OpenArt.ai：搜索 "FLUX Kontext" 工作流，或者直接到我主页浏览：https://openart.ai/workflows/@elephant_substantial_15。
- 社区分享：Reddit r/comfyui、GitHub

## 实战入门

### 3.1 Hello Kontext 初体验

**第一个任务：加载工作流和基础设置**

![FLUX Kontext工作流预览](/assets/images/tutorials/comfyui/flux-kontext/beginner/flux-kontext-workflow.png)

1. **打开 ComfyUI，加载 Flux.1 Kontext Dev 工作流**
2. **确认模型文件已正确加载**
3. **准备一张测试图片**
4. **在 CLIP文本编码 框输入简单的编辑指令**
5. **点击 "Queue Prompt"，观察生成过程**

**预期效果**：成功生成编辑后的图像，验证环境配置正确。

### 3.2 五大核心功能

**1. 局部编辑** - 只改指定部分

| 原图 | 编辑后 |
|------|--------|
| ![黄色汽车](https://cdn.sanity.io/images/gsvmb6gz/production/3ae6ee032b85373b84934574f3ac3bb2fb792d64-2048x1365.jpg) | ![红色汽车](https://cdn.sanity.io/images/gsvmb6gz/production/b404ea99e309e5b4bab6fcd82a4a13ad18f2c04b-1248x832.jpg) |
| 黄色汽车原图 | 改为红色后，其他部分保持不变 |

Prompt："Change the yellow car to red"
效果：只有车子颜色改变，背景、光影、其他元素完全保持不变

**2. 角色一致性** - 同一角色不同场景

![角色一致性示例](https://cdn.sanity.io/images/gsvmb6gz/production/55131bdeb6ab53ed0d7173f4aac905ab9407577f-1600x800.jpg?fit=max&auto=format)

**3. 风格参考** - 保持艺术风格

| 风格参考输入 | 应用结果 |
|-------------|----------|
| ![风格参考示例](https://cdn.sanity.io/images/gsvmb6gz/production/17f65f8e195e01672bbb1fc0876c5dfd8ba2cab5-1686x1166.jpg) | ![茶会风格输出](https://cdn.sanity.io/images/gsvmb6gz/production/62eb25aa8f24d0f0b7524d052b096c93e4fa6dcc-1248x832.jpg) |
| 风格参考图像 | 应用风格参考后的结果 |

**4. 迭代编辑** - 基于上次结果继续编辑

| 输入图像 | 编辑结果 |
|----------|----------|
| ![夜晚街景输入](https://cdn.sanity.io/images/gsvmb6gz/production/2667b6eeae409799486cda0bddeb8e8ae52dfe0a-843x461.jpg) | ![白天街景输出](https://cdn.sanity.io/images/gsvmb6gz/production/7ffae31e7de2e608f497615a097ae03797c812e8-1392x752.jpg) |
| 原始夜晚街景绘画 | 转换为白天场景 |

### 3.3 风格转换示例

| 原始图像 | 铅笔素描风格 | 油画风格 |
|----------|-------------|----------|
| ![建筑物输入](https://cdn.sanity.io/images/gsvmb6gz/production/cea7c2566880221759691bcd3fe32032a6517722-1408x792.jpg) | ![铅笔素描输出](https://cdn.sanity.io/images/gsvmb6gz/production/b3c1a2881d29f1a24a7dac87a29ea5e1e239215d-1392x752.jpg) | ![油画风格输出](https://cdn.sanity.io/images/gsvmb6gz/production/dd190a7f7c52fd80b1e6735dce7e3840f9b0d69a-1392x752.jpg) |
| 原始建筑物照片 | 转换为铅笔素描风格 | 转换为油画风格 |

风格转换 Prompt 示例：
- 铅笔素描："Convert to pencil sketch style, black and white"
- 油画风格："Transform to oil painting style, rich colors"

### 3.4 提示词技巧

**基本原则**：
1. 简洁明了："Change yellow car to red"
2. 必要时详细："Change to daytime, keep the painting style"
3. 避免冗余："Please change the automotive vehicle..."

**常用动作词**：
- 替换：change, replace, turn into
- 添加：add, include, put  
- 移除：remove, delete
- 调整：make, adjust

**质量控制**：
1. 保持一致："keep the same style"
2. 提升质量："high quality", "detailed"

**Token 限制说明**：
根据官方资料，FLUX.1 使用双编码器架构：
- **CLIP L/14 编码器**：固定 77 tokens 限制
- **T5-v1.1-XXL 编码器**：最大支持 512 tokens

实际使用中建议保持提示词简洁明了。

## 进阶应用

### 4.1 参数优化策略

**重要说明**：以下参数为基于社区经验的建议值，具体参数名称和范围请以实际工作流为准。

![参数调节界面](/assets/images/tutorials/comfyui/flux-kontext/beginner/parameter-adjustment-panel.png)

**常见参数类型**：

**Denoise (去噪强度)**：控制编辑程度
一般无需调整，保持默认值1

**CFG**
一般无需调整，保持默认值1

**FLUX Guidance（FLUX引导强度）**：提示词引导强度
推荐范围2.5-5，实测3.0、3.5效果很好。

**Steps (采样步数)**：生成质量
推荐范围20-30，更多步数通常质量更好但速度更慢

**参数调优建议**：
1. 先使用工作流默认参数测试
2. 根据效果逐步微调单个参数
3. 记录有效的参数组合

### 4.2 硬件加速展示

![Nvidia 加速性能](https://cdn.sanity.io/images/gsvmb6gz/production/f2c2a0a29d912ffe75c7d42a0bacf70c9b8ce6d1-4737x2635.png?fit=max&auto=format)

### 4.3 常见问题解决

| 问题类型         | 解决方法                                                                 |
|------------------|------------------------------------------------------------------------|
| **图片质量下降**   | 1. 检查去噪强度是否过高<br>2. 确认原图分辨率足够<br>3. 检查 VAE 加载是否正确         |
| **编辑指令不生效** | 1. 提示词更具体<br>2. 调整相关强度参数<br>3. 确保编辑对象清晰可见                   |
| **显存不足**       | 1. 降低图片分辨率<br>2. 使用量化版本模型<br>3. 关闭其他GPU程序                      |
| **速度优化**       | 1. 使用 TensorRT 优化版本（如可用）<br>2. 启用 xFormers 加速（如可用）<br>3. 降低不必要的 Steps |

## 学习资源

基础教程学完了，接下来你可能想要更深入地探索。这里列出一些重要的学习资源。

### 5.1 社区平台推荐

**官方资源**：
- **BFL官网**：https://bfl.ai - 最新功能和技术更新
- **ComfyUI GitHub**：https://github.com/comfyanonymous/ComfyUI - 源码和问题讨论

**专业平台**：
- **OpenArt.ai**：工作流分享：https://openart.ai/workflows/profile/elephant_substantial_15?sort=latest
- **Reddit r/comfyui**：技术讨论和经验分享

### 5.2 进阶学习路径

**阶段1：熟练基础操作**
- 完成各种基础编辑任务
- 尝试不同的工作流模板
- 记录好用的参数组合

**阶段2：掌握高级技巧**
- 练习角色一致性编辑
- 学会自定义工作流
- 尝试批量处理任务

**推荐教程**：
- pixaroma - Master Flux Kontext 完整指南
- ComfyUI-Wiki 的高级教程

### 5.3 技术支持渠道

**遇到问题时**：
- **基础问题**：评论区、微信群
- **技术问题**：Reddit、GitHub Issues、Huggingface Community
- **Bug报告**：ComfyUI官方Issue页面

---

### 参考链接
1. [BFL Kontext Prompting Guide (官方文档)](https://docs.bfl.ai/guides/prompting_guide_kontext_i2i)
2. [论文原文](https://arxiv.org/html/2506.15742v2)
3. [Guide to FLUX.1 Kontext: AI Image Editing Tutorial (技术博客)](https://magichour.ai/blog/guide-to-flux1-kontext)
4. [BGL FLUX.1 Kontext Image Editing（BFL官方教程）](https://docs.bfl.ai/kontext/kontext_image_editing)
5. [FLUX.1 Kontext Dev Tutorial (ComfyOrg官方教程)](https://docs.comfy.org/tutorials/flux/flux-1-kontext-dev)
6. [ComfyUI Blog: Flux.1 Kontext Dev Day-0 Support (官方博客)](https://blog.comfy.org/p/flux1-kontext-dev-day-0-support)
7. [ComfyUI FLUX.1 Kontext Complete Guide (综合指南)](https://comfyui-wiki.com/en/tutorial/advanced/image/flux/flux-1-kontext)
8. [OpenArt Workflows](https://openart.ai/workflows/profile/elephant_substantial_15?sort=latest)