# YOLOv9 代码复现

## 导航

- [引言](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E5%BC%95%E8%A8%80)
  - [YOLOv9 模型概述](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#YOLOv9%E6%A8%A1%E5%9E%8B%E6%A6%82%E8%BF%B0)
    - [模型框架图](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%A8%A1%E5%9E%8B%E6%A1%86%E6%9E%B6%E5%9B%BE)
- [环境搭建及训练推理](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA%E5%8F%8A%E8%AE%AD%E7%BB%83%E6%8E%A8%E7%90%86)
  - [环境配置](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE)
  - [数据集准备](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%95%B0%E6%8D%AE%E9%9B%86%E5%87%86%E5%A4%87)
  - [训练过程](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E8%AE%AD%E7%BB%83%E8%BF%87%E7%A8%8B)
  - [测试和评估](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%B5%8B%E8%AF%95%E5%92%8C%E8%AF%84%E4%BC%B0)
  - [实践应用](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E5%AE%9E%E8%B7%B5%E5%BA%94%E7%94%A8)
- [报错修复](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%8A%A5%E9%94%99%E4%BF%AE%E5%A4%8D)
- [总结和展望](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%80%BB%E7%BB%93%E5%92%8C%E5%B1%95%E6%9C%9B)
- [参考链接](notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E5%8F%82%E8%80%83%E9%93%BE%E6%8E%A5)

## 引言

在目标检测领域，YOLO 系列始终是速度与准确性的标杆。最新进展的 YOLOv9，在《YOLOv9: Learning What You Want to Learn Using Programmable Gradient Information》一文中展示了其性能的进一步提升。特别值得一提的是，即使在未采用 Transformer 结构的情况下，相较于 RT-DETR、Yplov8 等采用 Transformer 结构的模型，YOLOv9 展现出了更为卓越的性能。本篇文章旨在详尽介绍 YOLOv9 的复现过程，包括环境配置、数据准备、模型训练与评估等关键步骤。该论文由 YOLOv4、YOLOv7 的作者王建尧博士撰写，对于目标检测领域的爱好者和研究者而言，无疑是一篇值得深入阅读的佳作。

![fig.1. 模型表现图](https://raw.githubusercontent.com/WongKinYiu/yolov9/main/figure/performance.png)

fig.1. 模型表现图

### YOLOv9 模型概述

YOLOv9 沿袭了 YOLO 系列一贯的完全卷积结构，通过引入“Programmable Gradient Information”技术，增强了模型学习目标特征的灵活性，使其在多个标准数据集上实现了最佳状态（SOTA）。尤其在 MS COCO 数据集上，YOLOv9 不同版本的模型在多项性能指标上均实现了显著提升。

### 模型框架图

YOLOv9 的模型框架设计体现了其对效率和性能的双重追求。核心改进包括：
深度可编程特征提取器：YOLOv9 采用了先进的深度可编程特征提取器，这使得模型能够根据不同的检测任务自动调整其结构和参数，从而提高学习效率和适应性。

1. 有序列表增强特征金字塔网络（FPN）：为了提升对小物体的检测能力，YOLOv9 对特征金字塔网络的设计进行了增强，通过更有效的跨尺度连接和特征融合机制，增强了模型对于不同尺寸目标的识别精度。
2. 有序列表多尺度训练和推理：YOLOv9 实现了在训练和推理阶段的多尺度处理能力，通过动态调整输入图像的尺寸，使模型能够更加鲁棒地处理各种分辨率的图像，进一步提升了模型的泛化能力。
3. 有序列表这些创新不仅提升了 YOLOv9 在目标检测领域的性能，也为未来的研究和应用提供了新的思路和可能性。

![fig.2. 模型框架图](https://arxiv.org/html/2402.13616v2/extracted/5439110/figs/pgi.png)

fig.2. 模型框架图

## 环境搭建及训练推理

### 环境配置

复现 YOLOv9 需要首先准备适宜的开发环境。我们推荐使用 AutoDL 平台，借助我已经准备好的环境镜像，可以免去繁琐的环境配置和数据集准备工作。
[镜像地址](https://www.autodl.com/create?image=WongKinYiu/yolov9/master:v1.2)

通过以下步骤可快速搭建：

1. 克隆官方代码库：

```bash
git clone <https://github.com/WongKinYiu/yolov9.git>
cd yolov9

```

1. 安装必要的 Python 依赖：

```bash
pip install -r requirements.txt -i <https://pypi.tuna.tsinghua.edu.cn/simple/>

```

使用清华大学的 Python 包镜像站点，以加快下载速度。

### 数据集准备

使用官方提供的脚本`scripts/get_coco.sh`下载并准备 MS COCO 数据集。该脚本会自动下载并解压数据集及标注文件。需要确保**数据集目录结构正确**，以便 YOLOv9 能正确读取数据。

```jsx
bash scripts/get_coco.sh

```

建议下载到 autodl-tmp 目录再解压回文件目录，需要修改 get_coco.sh 的代码的第 6、10、13、20 行的代码

也可以从以下网盘链接下载再解压。
[网盘链接](https://pan.baidu.com/s/1EbwMmhaTwV5HNMayjxrLig?pwd=67cc)
推荐的数据集文件目录

```
├── annotations
│   └── instances_val2017.json
├── images
│   ├── train2017
│   └── val2017
├── labels
│   ├── train2017
│   └── val2017
├── LICENSE
├── README.txt
├── test-dev2017.txt
├── train2017.cache
├── train2017.txt
├── val2017.cache
└── val2017.txt

```

### 训练过程

YOLOv9 的训练支持单卡和多卡配置。以下是单卡训练的一个示例命令：

```bash
python train_dual.py --workers 8 --device 0 --batch 16 --data data/coco.yaml --img 640 --cfg models/detect/yolov9.yaml --weights '' --name yolov9 --hyp hyp.scratch-high.yaml --min-items 0 --epochs 500 --close-mosaic 15

```

多卡训练能够显著提升训练速度和效率，但对硬件资源的要求更高。由于训练数据量庞大，此处将训练轮次调整为 1 轮，在配置有 4090 GPU 的环境下，预计训练时间接近 1 小时。

![fig.3. 模型训练图](https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_3.png)

fig.3. 模型训练图

如图可以看出，训练所需显存至少要 24G，因此这里推荐使用 3090 或 4090。
输出的结果在 runs/train/yolov9/weights 中。
其中 best.pt 是最好的（损失最小）模型，last.pt 是最新的模型。

### 测试和评估

使用训练好的模型(也可以用镜像放置在 ckpt 文件夹下的模型）进行测试和评估，可以通过以下命令执行：

```bash
python val_dual.py --data data/coco.yaml --img 640 --batch 32 --conf 0.001 --iou 0.7 --device 0 --weights './yolov9-c.pt' --save-json --name yolov9_c_640_val

```

AP（平均精度）是评估目标检测模型性能的关键指标，YOLOv9 在这一指标上的提升体现了其优越性。

![fig.4. 模型推理图](https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_4.png)

fig.4. 模型推理图

结果保存在 runs/val 中

### 实践应用

YOLOv9 可用于图片和视频的目标检测，以下是测试单张图片的命令示例：

```bash
python detect.py --weights ./ckpt/yolov9-c.pt --conf 0.25 --img-size 640 --source infer/images/horses.jpg --device 0

```

此命令将输出检测结果，展示 YOLOv9 在实际应用中的强大性能。
在此环节中出现了些许问题，现已解决。

![fig.5. 结果图](https://github.com/WongKinYiu/yolov9/raw/main/figure/horses_prediction.jpg)

fig.5. 结果图

### 报错修复

![fig.6. detect 运行中发生的错误](https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_6.png)

fig.6. detect 运行中发生的错误

通过查看 issues 可知可通过修改 utils/general.py 文件夹中的 902 行可解决。

![fig.7. 正确代码](https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_7.png)

fig.7. 正确代码

成功解决。

![fig.8. 成功推理结果](https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_8.png)

fig.8. 成功推理结果

### 总结和展望

通过复现 YOLOv9，我们不仅深入了解了其核心技术和实现方法，还体验了从环境配置到模型训练、评估的整个过程。YOLOv9 在目标检测领域的高适用性和优异性能，使其成为未来研究和应用的重要基石。随着技术的进一步发展，期待 YOLOv9 在更多场景下的应用和优化。

### 参考链接

- YOLOv9 GitHub 仓库：https://github.com/WongKinYiu/yolov9
- YOLOv9 论文：https://arxiv.org/pdf/2402.13616
