# 【论文精读】FramePack：Packing Input Frame Context in Next-Frame Prediction Models for Video Generation

![FramePack Compression Approaches](https://paper-assets.alphaxiv.org/figures/2504.12626/x1.png)

## 摘要

FramePack 由斯坦福大学 Lvmin Zhang 和 Maneesh Agrawala 提出，创新性地解决了视频生成中“遗忘-漂移”两难问题。通过自适应帧压缩与反漂移采样，FramePack 兼顾长时序一致性与视觉质量，支持在有限算力下生成更长、更稳定的视频。该方法可无缝集成到现有主流视频扩散模型，极大提升了视频生成的实用性和可扩展性。

---

## 目录

1. [背景与研究目标](#背景与研究目标)  
2. [方法与创新点](#方法与创新点)  
3. [实验与结果分析](#实验与结果分析)  
4. [模型启发与方法延伸](#模型启发与方法延伸)  
5. [结论与未来展望](#结论与未来展望)  

---

## 背景与研究目标

视频生成领域，基于“下一帧预测”的扩散模型因其逐帧生成能力受到关注。但此类模型普遍面临两大核心挑战：

- **遗忘（Forgetting）**：模型难以长期保持时序一致性，导致角色、场景等随时间漂移。
- **漂移（Drifting）**：误差逐帧累积，后续帧画质下降，出现模糊、失真等问题。

传统方法往往顾此失彼：增加历史帧输入可缓解遗忘，却加剧漂移；减少依赖则反之。加之 Transformer 架构的计算复杂度，直接扩展上下文帧数并不可行。

---

## 方法与创新点

FramePack 提出两大核心创新：

### 1. 自适应帧压缩（Adaptive Frame Compression）

- **核心思想**：利用视频帧间冗余，对不同时间距离的帧采用不同压缩率，远帧高压缩，近帧低压缩。
- **实现方式**：通过调整 Transformer 输入层 patchify kernel size，实现帧级别分辨率动态分配，保证总上下文长度受控。
- **优势**：无需修改主干架构，可直接兼容主流预训练模型，极大提升可用历史帧数。

### 2. 反漂移采样（Anti-Drifting Sampling）

- **创新采样策略**：
  - **Vanilla**：传统顺序采样，误差易累积。
  - **Anti-Drifting**：先生成端点帧，再补中间帧，利用双向上下文提升一致性。
  - **Inverted Anti-Drifting**：逆序采样，适合 image-to-video，能更好保持高质量起始帧特征。
- **实验发现**：反漂移采样显著降低误差累积，提升长视频画质。

---

## 实验与结果分析

- **兼容性**：FramePack 可直接微调 HunyuanVideo、Wan 等主流视频扩散模型。
- **性能提升**：
  - **漂移抑制**：Inverted Anti-Drifting 采样在多项指标和主观评价中表现最佳。
  - **画质提升**：支持更大 batch size，训练更高效，生成视频更长且一致性更好。
  - **效率提升**：6GB 显存即可驱动 13B 模型生成 1 分钟视频，极大降低硬件门槛。
- **消融实验**：不同压缩策略和采样方法对性能影响显著，最佳配置为几何级压缩+反漂移采样。

---

## 模型启发与方法延伸

- **通用性**：FramePack 作为输入预处理模块，可迁移至各类时序生成任务。
- **与现有方法对比**：相比单纯增加上下文或改进主干结构，FramePack以更低成本实现更优时序一致性。
- **未来方向**：可与更高效注意力机制、长时序建模方法结合，进一步提升超长视频生成能力。

---

## 结论与未来展望

FramePack 有效打破了“遗忘-漂移”二难困境，为视频生成模型带来更长时序、更高一致性和更低算力门槛。其自适应帧压缩与创新采样策略为后续视频生成研究提供了新范式。未来，FramePack 有望在内容创作、虚拟现实等领域发挥更大作用。

---

### 参考链接

1. [FramePack 论文](https://arxiv.org/abs/2504.12626)
2. [FramePack 项目主页](https://lllyasviel.github.io/frame_pack_gitpage/)
3. [FramePack GitHub](https://github.com/lllyasviel/FramePack)
4. [alphaXiv 博客原文](https://www.alphaxiv.org/overview/2504.12626)
