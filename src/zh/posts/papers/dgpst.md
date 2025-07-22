# 【论文精读】DGPST：精通百变风格的通用肖像画师

| ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/head/8/contenttext.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/head/8/style0.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/head/8/style3.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/head/8/sketch.png) |
| :---: | :---: | :---: | :---: |
| ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/head/10/contenttext.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/head/10/style5.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/head/10/style3.5.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/head/10/sketch.png) |
<p align="center">DGPST方法效果展示。该方法可实现照片、卡通、素描、动画等不同领域间的高质量风格迁移。</p>

## 摘要

该论文提出了一种通用肖像风格迁移方法DGPST，旨在解决跨领域（如照片、卡通、素描）风格迁移中保留身份与传递风格的难题。通过结合扩散模型、语义对齐和创新的小波变换，DGPST能精准传递风格，同时保留人物细节。实验证明，该方法在多个数据集上均展现了超越SOTA的泛化能力与生成质量。

---

## 目录

1.  [背景与研究目标](#背景与研究目标)
2.  [方法与创新点](#方法与创新点)
3.  [实验与结果分析](#实验与结果分析)
4.  [模型启发与方法延伸](#模型启发与方法延伸)
5.  [结论与未来展望](#结论与未来展望)

---

## 背景与研究目标

肖像风格迁移是图像编辑领域一个备受关注且极具挑战性的任务。其目标是将一张参考图像的艺术风格（如色彩、笔触、光影）应用到一张内容图像上，同时完整保留内容图像中的人物身份和面部结构。

现有方法在该领域取得了显著进展，但普遍存在以下局限性：
*   **领域泛化能力弱**：多数方法在处理来自不同领域（例如，将真实照片转换为卡通或素描风格）的图像时效果不佳，因为源域和目标域之间存在巨大的结构和纹理差异。
*   **内容与风格解耦不佳**：许多模型难以在保留人物关键身份特征（如脸型、五官）的同时，充分学习参考图像的风格，导致生成结果要么“风格不足”，要么“面目全非”。
*   **依赖精确的语义对齐**：对于肖像这一精细任务，风格迁移需要在语义对应的区域（如头发对头发，眼睛对眼睛）进行，否则会导致“风格错位”的现象。

为解决上述问题，本文提出了一种具有强大领域泛化能力的肖像风格迁移框架（DGPST）。其核心研究目标是：
1.  **实现高质量的跨领域风格迁移**，即使输入和参考肖像来自照片、动画、素描等完全不同的领域。
2.  **建立精确的语义对应关系**，确保风格在面部各区域得到正确迁移。
3.  **设计精巧的平衡机制**，在内容保留和风格化之间取得最佳平衡，生成视觉效果自然且身份信息明确的结果。

---

## 方法与创新点

DGPST的整体框架基于预训练的稳定扩散模型（Stable Diffusion），并引入了三大核心创新模块：语义感知风格对齐、双条件扩散模型和初始隐变量的AdaIN-小波变换。

![DGPST方法整体流程图](https://www.arxiv.org/html/2507.04243v2/x1.png)
<p align="center">DGPST方法整体流程图</p>

### 1. 语义感知风格对齐 (Semantic-Aware Style Alignment)

为了实现精准的风格迁移，首先需要将参考图的风格与内容图的结构对齐。DGPST通过一个精巧的“语义适配器”来实现这一点。
*   **特征提取**：利用预训练的CLIP图像编码器和Stable Diffusion的U-Net提取内容图像和参考图像的深层特征。这些特征蕴含了丰富的语义信息。
*   **稠密对应计算**：通过计算两组特征之间的相关性矩阵（Correlation Matrix），模型能够找到内容图每个像素点在参考图中的语义对应点。
*   **图像扭曲 (Warping)**：基于计算出的对应关系，对参考图像进行可微调的扭曲操作，生成一个“扭曲后的参考图”（Warped Reference）。这个新生成的图像在风格上与原始参考图一致，但在结构和姿态上已经与内容图对齐，为后续的风格注入提供了理想的“弹药”。

### 2. 双条件扩散模型 (Dual Conditional Diffusion Model)

在生成最终图像时，模型需要同时考虑内容结构和目标风格。DGPST采用了一个双条件控制的扩散模型，通过两个并行的“指导员”来精确控制生成过程。
*   **结构指导 (Structure Guidance)**：为了保留内容图像的身份细节（如皮肤纹理、面部轮廓），模型首先通过哈尔离散小波变换（Haar DWT）提取出内容图像的高频信息。这些信息代表了图像的结构和边缘细节，随后被送入一个ControlNet中，用于在生成过程中牢牢“抓住”人物的原始结构。
*   **风格指导 (Style Guidance)**：风格信息则来源于前一步生成的“扭曲后的参考图”。该图像被送入一个“风格适配器”（Style Adapter）中，该适配器将风格信息注入到扩散模型的交叉注意力层，从而引导生成图像的色彩、光影和整体氛围向参考风格靠拢。

通过这种结构与风格的双重控制，DGPST能够生成既保留了人物身份又充满了艺术风格的高质量肖像。

### 3. 初始隐变量的AdaIN-小波变换 (Initial Latent AdaIN-Wavelet Transform)

扩散模型的生成起点（即初始隐变量）对最终结果有巨大影响。若直接使用内容图的隐变量，会导致风格学习不足；若直接使用参考图的隐变量，则会丢失内容细节。
为解决此问题，DGPST提出了一种新颖的初始隐变量混合策略：
1.  **分别编码**：首先通过DDIM Inversion技术，分别得到内容图和扭曲参考图的初始隐变量。
2.  **风格混合**：使用AdaIN（Adaptive Instance Normalization）将扭曲参考图的风格信息（均值和方差）应用到内容图的隐变量上，得到一个初步混合的隐变量。
3.  **小波融合**：最关键的一步，对初步混合后的隐变量和扭曲参考图的隐变量进行小波变换，将参考图的低频信息（决定整体色调和氛围）与内容图的高频信息（决定细节和结构）进行融合，再通过逆小波变换（IDWT）得到最终的初始隐变量。

这种方法巧妙地结合了参考图的“灵魂”（低频风格）和内容图的“骨架”（高频细节），为扩散模型提供了一个完美的起点，极大地提升了最终生成图像的质量。

---

## 实验与结果分析

### 实验设置
*   **数据集**：模型仅在包含2.8万张真实人像的CelebAMask-HQ数据集上进行训练。为了验证其泛化能力，测试在多个数据集上进行，包括FFHQ（高质量真实人像）和AAHQ（高质量艺术人像），以及各种卡通、素描等跨领域图像。
*   **评估指标**：
    *   **Gram Loss**：衡量风格迁移的保真度。
    *   **LPIPS**：衡量内容保留的相似度。
    *   **ID Distance**：衡量人物身份信息的一致性。
*   **对比方法**：与两类SOTA方法进行比较：(i) 传统的肖像风格迁移方法（如Shih et al.）；(ii) 基于扩散模型的方法（如IP-Adapter, StyleID, InstantStyle+）。

### 主要实验结果

#### 定量比较
如下表所示，无论是在训练所用的CelebAMask-HQ数据集，还是在包含多领域的混合数据集上，DGPST在关键指标上均表现出色。

| Method | Gram loss↓ | LPIPS↓ | ID↓ |
| :--- | :--- | :--- | :--- |
| Shih et al. [27] | 0.376 | 0.187 | 0.093 |
| Wang et al. [37] | **0.208** | 0.181 | 0.106 |
| IP-A[41] + C.N.[43] | 2.835 | 0.245 | 0.774 |
| StyleID[3] | 0.505 | 0.198 | 0.222 |
| InstantStyle+ [35] | 0.557 | 0.294 | 0.272 |
| **Ours** | 0.274 | **0.116** | **0.057** |
<p align="center">在CelebAMask-HQ数据集上的定量比较</p>

| Method | Gram loss↓ | LPIPS↓ | ID↓ |
| :--- | :--- | :--- | :--- |
| Shih et al. [27] | 0.802 | 0.156 | 0.105 |
| Wang et al. [37] | 1.488 | 0.119 | 0.096 |
| IP-A[41] + C.N.[43] | 4.211 | 0.375 | 0.763 |
| StyleID[3] | 1.343 | 0.149 | 0.165 |
| InstantStyle+ [35] | 0.723 | 0.192 | 0.203 |
| **Ours** | **0.657** | **0.083** | **0.087** |
<p align="center">在混合领域数据集上的定量比较</p>

在混合数据集上，DGPST在所有三个指标上均取得了最优成绩，尤其是在LPIPS（内容保留）和ID（身份保留）上优势明显，充分证明了其强大的领域泛化能力和对内容的保护能力。

#### 定性比较
定性结果更加直观地展示了DGPST的优越性。

| Reference | Input | Ours | Wang et al. | IP-A+C.N. | Deng et al. | StyleID | InstantStyle+ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/11/style.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/11/content.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/11/Ours.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/11/ppst.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/11/ipa.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/11/zxing.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/11/styleid.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/11/instant.jpg) |
| ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/12/style.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/12/content.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/12/Ours.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/12/ppst.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/12/ipa.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/12/zxing.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/12/styleid.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/12/instant.jpg) |
| ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/13/style.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/13/content.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/13/Ours.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/13/ppst.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/13/ipa.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/13/zxing.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/13/styleid.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/cmp_diffusion/13/instant.jpg) |
<p align="center">DGPST与SOTA方法的定性效果对比</p>

从上图可以看出，相比其他方法，DGPST的生成结果在风格上更忠实于参考图（如皮肤色泽、头发颜色和高光），同时人物的面部特征和身份信息也得到了最好的保留。其他方法或多或少存在颜色溢出、身份扭曲或风格学习不充分的问题。

#### 消融实验
为了验证各模块的有效性，论文进行了详细的消融实验。

| Reference | Input | w/o Cont. | Canny Cont. | Input Cont. | w/o style adapter | IP-A.(4 tokens) | Ours |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_ip/8/style.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_ip/8/content.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_ip/8/nocont.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_ip/8/canny.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_ip/8/inputcont.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_ip/8/noip.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_ip/8/4tokens.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_ip/8/Ours.png) |
<p align="center">ControlNet与风格适配器消融实验效果</p>

*   **ControlNet和Style Adapter的作用**：上图显示，去除ControlNet（w/o Cont.）会导致细节丢失；而去除风格适配器（w/o style adapter）则导致风格学习不足。这证明了双条件控制的必要性。

| Reference | Input | Input latent | w.r. latent | AdaIN | Ours |
| :---: | :---: | :---: | :---: | :---: | :---: |
| ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_init/3/style.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_init/3/content.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_init/3/inputlatent.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_init/3/wrlatent.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_init/3/adain.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/ablation_init/3/Ours.png) |
<p align="center">不同初始隐变量初始化策略的效果对比</p>

*   **初始隐变量的作用**：上图对比了不同初始化策略的效果。直接用内容图 latent (c) 会保留过多原始颜色；直接用扭曲参考图 latent (d) 会导致模糊；而本文提出的AdaIN-小波变换 (f) 在内容清晰度和风格化程度上取得了最佳平衡。

#### 领域泛化能力展示
DGPST在多种跨领域任务中均表现出色，包括灰度图上色、老照片修复和真人照片转素描。

| Input | Output | Input | Output |
| :---: | :---: | :---: | :---: |
| ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/colorization/5/content.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/colorization/5/output1.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/colorization/4/input.jpg) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/colorization/4/Style1.png) |
<p align="center">灰度图和素描上色效果展示</p>

| Input | Output | Input | Output |
| :---: | :---: | :---: | :---: |
| ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/oldphotos/1/content.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/oldphotos/1/output.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/oldphotos/5/content.png) | ![](https://www.arxiv.org/html/2507.04243v2/extracted/6604132/figures/oldphotos/5/Output.png) |
<p align="center">老照片修复效果展示</p>

这些结果进一步验证了模型仅需在真实人像上训练，便能泛化到各种艺术风格和图像修复任务中，具有极高的实用价值。

---

## 模型启发与方法延伸

DGPST模型的成功为我们提供了诸多有价值的启发：
*   **融合经典与现代**：该工作巧妙地将经典信号处理技术（小波变换）与现代的深度生成模型（扩散模型、ControlNet）相结合，为解决复杂的生成任务提供了新的思路。
*   **特征的再利用**：该方法充分挖掘了预训练扩散模型内部特征的价值，将其用于计算语义对应关系，这提示我们预训练模型不仅是强大的生成器，其内部特征同样是宝贵的“信息矿藏”。
*   **初始化的重要性**：DGPST对初始隐变量的精巧设计再次证明，在生成任务中，一个好的起点至关重要。AdaIN-小波变换的融合策略对于其他需要平衡内容与风格的生成任务（如图像到图像翻译）具有很高的借鉴意义。

该方法未来可以向以下方向延伸：
*   **视频风格迁移**：将当前对静态图像的处理能力扩展到视频领域，实现动态、时序一致的肖像视频风格迁移。
*   **更细粒度的控制**：除了整体风格迁移，未来可以探索对特定属性（如仅改变发型、妆容或光照）进行更精细、可编辑的控制。
*   **轻量化部署**：目前模型依赖于大型扩散模型，计算开销较大。未来的研究可以探索模型蒸馏或量化技术，以实现更高效的推理和移动端部署。

---

## 结论与未来展望

本文提出的“Domain Generalizable Portrait Style Transfer (DGPST)”框架，通过结合基于扩散模型的语义对齐、双条件控制以及创新的AdaIN-小波变换初始化策略，成功地解决了跨领域肖像风格迁移中的核心挑战。该方法在仅使用真实人像数据进行训练的情况下，展现出了卓越的领域泛化能力，能够在保留人物身份的同时，生成风格鲜明、细节丰富的高质量艺术肖像。大量的定量和定性实验均证明了其相较于现有SOTA方法的优越性。

总而言之，DGPST不仅为肖像风格迁移领域提供了一个强大而可靠的解决方案，其在特征利用、多重条件控制和初始状态设计方面的创新思路，也为更广泛的AIGC领域研究开辟了新的可能性。

---

### 参考链接
1. [代码仓库](https://github.com/wangxb29/DGPST)
2. [论文原文](https://arxiv.org/abs/2507.04243)
3. [论文博客（Alphaxiv）](https://www.alphaxiv.org/overview/2507.04243)