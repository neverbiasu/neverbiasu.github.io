---
title: 创造者工坊：ComfyMind跑通教程
description: 从零开始搭建AI图像生成神器，体验先进的树状规划与反馈机制
date: 2025-06-07
tags:
  - 技术教程
  - AI生成
  - ComfyMind
  - 开源项目
categories:
  - 创造者工坊
cover: https://neverbiasu.github.io/assets/images/repos/comfy-mind/comfymind-cover.jpg
---

# 创造者工坊：ComfyMind跑通教程

![ComfyMind项目架构图](https://arxiv.org/html/2505.17908v1/x3.png)

## 摘要

ComfyMind是一个基于ComfyUI平台的协作式AI系统，通过树状规划与反馈机制实现通用型AI图像、视频生成功能。本教程将带你从零开始搭建并运行ComfyMind，体验其在图像生成、编辑和推理任务上的强大能力。

---

## 目录

1. [项目简介](#项目简介)
2. [环境准备](#环境准备)
3. [快速开始](#快速开始)
4. [配置项目](#配置项目)
5. [运行项目](#运行项目)
6. [常见问题解决](#常见问题解决)
7. [进阶技巧](#进阶技巧)
8. [参与贡献](#参与贡献)
9. [总结](#总结)

---

## 项目简介

ComfyMind是一个构建在ComfyUI平台上的协作式AI系统，旨在通过树状规划和反馈机制实现通用型AI生成功能。它能够处理生成、编辑和推理等多种任务，表现优于现有开源基线，达到与GPT-Image-1相当的性能水平。

**技术栈**：Python、ComfyUI、websocket、LLM、Agent
**适用场景**：图像生成、图像编辑、视频生成、智能创作助手  
**许可证**：MIT

## 环境准备

### 系统要求

| 需求类型 | 详情 |
|---------|------|
| 操作系统 | Windows 10/11、macOS、Linux |
| 硬件要求 | 8GB+ RAM、NVIDIA GPU (推荐8GB+显存)、30GB + 存储空间 |

### 前置软件

| 软件 | 版本 | 下载链接 |
|------|------|---------|
| Python | 3.12 | [python.org](https://www.python.org/downloads/) |
| Conda | 最新版 | [conda.io](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html) |
| Git | 最新版 | [git-scm.com](https://git-scm.com/downloads) |
| ComfyUI | 最新版 | [github.com/comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) |

## 快速开始

### 1. 克隆仓库

![克隆ComfyMind仓库](https://neverbiasu.github.io/assets/images/repos/comfy-mind/git-clone.png)

```bash
git clone https://github.com/EnVision-Research/ComfyMind.git
cd ComfyMind
```

### 2. 安装依赖

![安装依赖包](https://neverbiasu.github.io/assets/images/repos/comfy-mind/install-deps.png)

```bash
# 创建并激活conda环境
conda create -n comfymind python=3.12
conda activate comfymind

# 安装依赖包
pip install -r requirements.txt
```

## 配置项目

### 3. 配置设置

首先，你需要准备好ComfyUI环境，包括:

1. 安装ComfyUI:

![安装ComfyUI](https://neverbiasu.github.io/assets/images/repos/comfy-mind/install-comfyui.png)

```bash
git clone https://github.com/comfyanonymous/ComfyUI
cd ComfyUI
pip install -r requirements.txt
```

2. 安装ComfyUI-Manager:

![安装ComfyUI-Manager](https://neverbiasu.github.io/assets/images/repos/comfy-mind/install-manager.png)

在ComfyUI的custom_nodes目录下:
```bash
git clone https://github.com/Comfy-Org/ComfyUI-Manager
cd ComfyUI-Manager
pip install -r requirements.txt
```

3. 修改ComfyMind配置文件:

![配置ComfyMind](https://neverbiasu.github.io/assets/images/repos/comfy-mind/config.png)

```bash
# 返回ComfyMind目录
cd path/to/ComfyMind
```

编辑`config.yaml`文件，设置必要参数:
- 模型API配置
- ComfyUI路径
- 其他系统参数

### 4. 下载必要模型

![下载模型](https://neverbiasu.github.io/assets/images/repos/comfy-mind/download-models.png)

通过ComfyUI-Manager或手动下载以下模型:
- SDXL基础模型
- ControlNet模型
- VAE模型

## 运行项目

### 5. 启动应用

![ComfyMind界面](https://neverbiasu.github.io/assets/images/repos/comfy-mind/ui.png)

可使用命令行交互
```bash
# 命令行模式
python main.py --instruction "创建一幅日漫女生头像，淡紫色头发，猫儿，可爱，齐刘海的形象" --resource1 "./resources/little_mermaid.jpg" --output_path "./output"
```

或UI界面交互
```bash
# Gradio界面模式
python main_gradio.py
```

✅ **成功标志**：
- 界面正常加载，无错误提示
- 能够处理生成请求并输出图像结果
- 控制台日志显示"Server running on..."

## 常见问题解决

| 问题 | 解决方案 |
|------|---------|
| 找不到ComfyUI路径 | 在config.yaml中正确设置ComfyUI的绝对路径 |
| CUDA内存不足 | 降低模型大小或批次大小，关闭其他GPU程序 |
| 缺少特定扩展节点 | 通过ComfyUI-Manager安装缺失的节点或扩展 |

## 进阶技巧

### 核心功能速览

| 功能 | 命令/用法 | 说明 |
|------|-----------|------|
| 图像生成 | `--instruction "描述文本"` | 根据文本生成高质量图像 |
| 图像编辑 | `--instruction "编辑指令" --resource1 "原图路径"` | 智能编辑现有图像 |
| 视频生成 | `--instruction "视频描述" --task_modality "t2v"` | 创建短视频或动画序列 |

### 重要参数详解

ComfyMind 提供了多种参数，让您可以精确控制生成过程：

| 参数 | 用法 | 说明 |
|------|------|------|
| `--instruction` | `--instruction "生成一幅夏日黄昏的森林湖泊"` | 定义生成任务，可以是简单描述或复杂指令 |
| `--resource1` | `--resource1 "./resources/reference.jpg"` | 指定第一个参考图像或视频路径 |
| `--resource2` | `--resource2 "./resources/style.jpg"` | 指定第二个参考素材，用于复合参考生成 |
| `--output_path` | `--output_path "./my_output"` | 指定生成结果保存位置 |
| `--task_modality` | `--task_modality "i2i"` | 设置任务模式: t2i(文本到图像), i2i(图像编辑), t2v(文本到视频) |
| `--preprocessing` | `--preprocessing "prompt_optimization"` | 指令预处理方式，优化生成提示 |

#### 组合示例

```bash
# 基于参考图像进行风格迁移
python main.py --instruction "将照片转换为梵高风格油画" --resource1 "./resources/photo.jpg" --task_modality "i2i" --output_path "./output"

# 视频生成示例
python main.py --instruction "创建一段海浪冲击岩石的短视频，慢动作，高清晰度" --task_modality "t2v" --output_path "./videos"

# 复杂编辑案例
python main.py --instruction "保持人物姿势不变，将背景改为城市夜景" --resource1 "./resources/portrait.jpg" --preprocessing "instruction_analysis" --output_path "./edits"
```

### 定制与扩展

ComfyMind基于ComfyUI的节点式工作流，支持自定义扩展：

1. 通过ComfyUI界面设计自定义工作流
2. 导出工作流为API格式的JSON文件
3. 将工作流集成到ComfyMind的原子工作流库中

## 参与贡献

**贡献步骤**：Fork → 修改 → 提交PR

## 总结

ComfyMind通过结合树状规划和反馈机制，为通用型AI生成提供了一个开放且强大的解决方案。这个项目不仅展示了开源生成AI系统的潜力，也为定制化视觉内容创作提供了灵活的工具。通过本教程，你已经掌握了从安装到运行的全过程，可以开始探索AI生成艺术的无限可能。

---

### 参考链接

1. [ComfyMind GitHub仓库](https://github.com/EnVision-Research/ComfyMind)
2. [ComfyMind论文](https://arxiv.org/abs/2505.17908)
3. [ComfyUI官方文档](https://github.com/comfyanonymous/ComfyUI)
4. [DeepWiki技术解读](https://deepwiki.com/EnVision-Research/ComfyMind)
5. [ComfyMind在线演示](https://envision-research.hkust-gz.edu.cn/ComfyMind/)
