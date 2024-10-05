"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1668],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,e]of s)a[i]=e;return a}},3160:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>t});var e=a(641);const n={},l=(0,a(6262).A)(n,[["render",function(i,s){return(0,e.uX)(),(0,e.CE)("div",null,s[0]||(s[0]=[(0,e.Fv)('<h1 id="yolov9-代码复现" tabindex="-1"><a class="header-anchor" href="#yolov9-代码复现"><span>YOLOv9 代码复现</span></a></h1><h2 id="导航" tabindex="-1"><a class="header-anchor" href="#导航"><span>导航</span></a></h2><ul><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E5%BC%95%E8%A8%80" target="_blank" rel="noopener noreferrer">引言</a><ul><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#YOLOv9%E6%A8%A1%E5%9E%8B%E6%A6%82%E8%BF%B0" target="_blank" rel="noopener noreferrer">YOLOv9 模型概述</a><ul><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%A8%A1%E5%9E%8B%E6%A1%86%E6%9E%B6%E5%9B%BE" target="_blank" rel="noopener noreferrer">模型框架图</a></li></ul></li></ul></li><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA%E5%8F%8A%E8%AE%AD%E7%BB%83%E6%8E%A8%E7%90%86" target="_blank" rel="noopener noreferrer">环境搭建及训练推理</a><ul><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">环境配置</a></li><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%95%B0%E6%8D%AE%E9%9B%86%E5%87%86%E5%A4%87" target="_blank" rel="noopener noreferrer">数据集准备</a></li><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E8%AE%AD%E7%BB%83%E8%BF%87%E7%A8%8B" target="_blank" rel="noopener noreferrer">训练过程</a></li><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%B5%8B%E8%AF%95%E5%92%8C%E8%AF%84%E4%BC%B0" target="_blank" rel="noopener noreferrer">测试和评估</a></li><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E5%AE%9E%E8%B7%B5%E5%BA%94%E7%94%A8" target="_blank" rel="noopener noreferrer">实践应用</a></li></ul></li><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%8A%A5%E9%94%99%E4%BF%AE%E5%A4%8D" target="_blank" rel="noopener noreferrer">报错修复</a></li><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%80%BB%E7%BB%93%E5%92%8C%E5%B1%95%E6%9C%9B" target="_blank" rel="noopener noreferrer">总结和展望</a></li><li><a href="notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E5%8F%82%E8%80%83%E9%93%BE%E6%8E%A5" target="_blank" rel="noopener noreferrer">参考链接</a></li></ul><h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言"><span>引言</span></a></h2><p>在目标检测领域，YOLO 系列始终是速度与准确性的标杆。最新进展的 YOLOv9，在《YOLOv9: Learning What You Want to Learn Using Programmable Gradient Information》一文中展示了其性能的进一步提升。特别值得一提的是，即使在未采用 Transformer 结构的情况下，相较于 RT-DETR、Yplov8 等采用 Transformer 结构的模型，YOLOv9 展现出了更为卓越的性能。本篇文章旨在详尽介绍 YOLOv9 的复现过程，包括环境配置、数据准备、模型训练与评估等关键步骤。该论文由 YOLOv4、YOLOv7 的作者王建尧博士撰写，对于目标检测领域的爱好者和研究者而言，无疑是一篇值得深入阅读的佳作。</p><figure><img src="https://raw.githubusercontent.com/WongKinYiu/yolov9/main/figure/performance.png" alt="fig.1. 模型表现图" tabindex="0" loading="lazy"><figcaption>fig.1. 模型表现图</figcaption></figure><p>fig.1. 模型表现图</p><h3 id="yolov9-模型概述" tabindex="-1"><a class="header-anchor" href="#yolov9-模型概述"><span>YOLOv9 模型概述</span></a></h3><p>YOLOv9 沿袭了 YOLO 系列一贯的完全卷积结构，通过引入“Programmable Gradient Information”技术，增强了模型学习目标特征的灵活性，使其在多个标准数据集上实现了最佳状态（SOTA）。尤其在 MS COCO 数据集上，YOLOv9 不同版本的模型在多项性能指标上均实现了显著提升。</p><h3 id="模型框架图" tabindex="-1"><a class="header-anchor" href="#模型框架图"><span>模型框架图</span></a></h3><p>YOLOv9 的模型框架设计体现了其对效率和性能的双重追求。核心改进包括： 深度可编程特征提取器：YOLOv9 采用了先进的深度可编程特征提取器，这使得模型能够根据不同的检测任务自动调整其结构和参数，从而提高学习效率和适应性。</p><ol><li>有序列表增强特征金字塔网络（FPN）：为了提升对小物体的检测能力，YOLOv9 对特征金字塔网络的设计进行了增强，通过更有效的跨尺度连接和特征融合机制，增强了模型对于不同尺寸目标的识别精度。</li><li>有序列表多尺度训练和推理：YOLOv9 实现了在训练和推理阶段的多尺度处理能力，通过动态调整输入图像的尺寸，使模型能够更加鲁棒地处理各种分辨率的图像，进一步提升了模型的泛化能力。</li><li>有序列表这些创新不仅提升了 YOLOv9 在目标检测领域的性能，也为未来的研究和应用提供了新的思路和可能性。</li></ol><figure><img src="https://arxiv.org/html/2402.13616v2/extracted/5439110/figs/pgi.png" alt="fig.2. 模型框架图" tabindex="0" loading="lazy"><figcaption>fig.2. 模型框架图</figcaption></figure><p>fig.2. 模型框架图</p><h2 id="环境搭建及训练推理" tabindex="-1"><a class="header-anchor" href="#环境搭建及训练推理"><span>环境搭建及训练推理</span></a></h2><h3 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h3><p>复现 YOLOv9 需要首先准备适宜的开发环境。我们推荐使用 AutoDL 平台，借助我已经准备好的环境镜像，可以免去繁琐的环境配置和数据集准备工作。 <a href="https://www.autodl.com/create?image=WongKinYiu/yolov9/master:v1.2" target="_blank" rel="noopener noreferrer">镜像地址</a></p><p>通过以下步骤可快速搭建：</p><ol><li>克隆官方代码库：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://github.com/WongKinYiu/yolov9.gi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">t&gt;</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yolov9</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>安装必要的 Python 依赖：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> requirements.txt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">https://pypi.tuna.tsinghua.edu.cn/simple</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用清华大学的 Python 包镜像站点，以加快下载速度。</p><h3 id="数据集准备" tabindex="-1"><a class="header-anchor" href="#数据集准备"><span>数据集准备</span></a></h3><p>使用官方提供的脚本<code>scripts/get_coco.sh</code>下载并准备 MS COCO 数据集。该脚本会自动下载并解压数据集及标注文件。需要确保<strong>数据集目录结构正确</strong>，以便 YOLOv9 能正确读取数据。</p><div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" data-title="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">bash</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> scripts</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">get_coco</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>建议下载到 autodl-tmp 目录再解压回文件目录，需要修改 get_coco.sh 的代码的第 6、10、13、20 行的代码</p><p>也可以从以下网盘链接下载再解压。 <a href="https://pan.baidu.com/s/1EbwMmhaTwV5HNMayjxrLig?pwd=67cc" target="_blank" rel="noopener noreferrer">网盘链接</a> 推荐的数据集文件目录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>├── annotations</span></span>\n<span class="line"><span>│   └── instances_val2017.json</span></span>\n<span class="line"><span>├── images</span></span>\n<span class="line"><span>│   ├── train2017</span></span>\n<span class="line"><span>│   └── val2017</span></span>\n<span class="line"><span>├── labels</span></span>\n<span class="line"><span>│   ├── train2017</span></span>\n<span class="line"><span>│   └── val2017</span></span>\n<span class="line"><span>├── LICENSE</span></span>\n<span class="line"><span>├── README.txt</span></span>\n<span class="line"><span>├── test-dev2017.txt</span></span>\n<span class="line"><span>├── train2017.cache</span></span>\n<span class="line"><span>├── train2017.txt</span></span>\n<span class="line"><span>├── val2017.cache</span></span>\n<span class="line"><span>└── val2017.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="训练过程" tabindex="-1"><a class="header-anchor" href="#训练过程"><span>训练过程</span></a></h3><p>YOLOv9 的训练支持单卡和多卡配置。以下是单卡训练的一个示例命令：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> train_dual.py</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --workers</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --device</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --batch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 16</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> data/coco.yaml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 640</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --cfg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> models/detect/yolov9.yaml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --weights</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yolov9</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --hyp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hyp.scratch-high.yaml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --min-items</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --epochs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 500</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --close-mosaic</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 15</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>多卡训练能够显著提升训练速度和效率，但对硬件资源的要求更高。由于训练数据量庞大，此处将训练轮次调整为 1 轮，在配置有 4090 GPU 的环境下，预计训练时间接近 1 小时。</p><figure><img src="https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_3.png" alt="fig.3. 模型训练图" tabindex="0" loading="lazy"><figcaption>fig.3. 模型训练图</figcaption></figure><p>fig.3. 模型训练图</p><p>如图可以看出，训练所需显存至少要 24G，因此这里推荐使用 3090 或 4090。 输出的结果在 runs/train/yolov9/weights 中。 其中 best.pt 是最好的（损失最小）模型，last.pt 是最新的模型。</p><h3 id="测试和评估" tabindex="-1"><a class="header-anchor" href="#测试和评估"><span>测试和评估</span></a></h3><p>使用训练好的模型(也可以用镜像放置在 ckpt 文件夹下的模型）进行测试和评估，可以通过以下命令执行：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> val_dual.py</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> data/coco.yaml</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 640</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --batch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 32</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --conf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.001</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --iou</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.7</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --device</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --weights</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;./yolov9-c.pt&#39;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --save-json</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yolov9_c_640_val</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>AP（平均精度）是评估目标检测模型性能的关键指标，YOLOv9 在这一指标上的提升体现了其优越性。</p><figure><img src="https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_4.png" alt="fig.4. 模型推理图" tabindex="0" loading="lazy"><figcaption>fig.4. 模型推理图</figcaption></figure><p>fig.4. 模型推理图</p><p>结果保存在 runs/val 中</p><h3 id="实践应用" tabindex="-1"><a class="header-anchor" href="#实践应用"><span>实践应用</span></a></h3><p>YOLOv9 可用于图片和视频的目标检测，以下是测试单张图片的命令示例：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> detect.py</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --weights</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./ckpt/yolov9-c.pt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --conf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.25</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --img-size</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 640</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> infer/images/horses.jpg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --device</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>此命令将输出检测结果，展示 YOLOv9 在实际应用中的强大性能。 在此环节中出现了些许问题，现已解决。</p><figure><img src="https://github.com/WongKinYiu/yolov9/raw/main/figure/horses_prediction.jpg" alt="fig.5. 结果图" tabindex="0" loading="lazy"><figcaption>fig.5. 结果图</figcaption></figure><p>fig.5. 结果图</p><h3 id="报错修复" tabindex="-1"><a class="header-anchor" href="#报错修复"><span>报错修复</span></a></h3><figure><img src="https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_6.png" alt="fig.6. detect 运行中发生的错误" tabindex="0" loading="lazy"><figcaption>fig.6. detect 运行中发生的错误</figcaption></figure><p>fig.6. detect 运行中发生的错误</p><p>通过查看 issues 可知可通过修改 utils/general.py 文件夹中的 902 行可解决。</p><figure><img src="https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_7.png" alt="fig.7. 正确代码" tabindex="0" loading="lazy"><figcaption>fig.7. 正确代码</figcaption></figure><p>fig.7. 正确代码</p><p>成功解决。</p><figure><img src="https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_8.png" alt="fig.8. 成功推理结果" tabindex="0" loading="lazy"><figcaption>fig.8. 成功推理结果</figcaption></figure><p>fig.8. 成功推理结果</p><h3 id="总结和展望" tabindex="-1"><a class="header-anchor" href="#总结和展望"><span>总结和展望</span></a></h3><p>通过复现 YOLOv9，我们不仅深入了解了其核心技术和实现方法，还体验了从环境配置到模型训练、评估的整个过程。YOLOv9 在目标检测领域的高适用性和优异性能，使其成为未来研究和应用的重要基石。随着技术的进一步发展，期待 YOLOv9 在更多场景下的应用和优化。</p><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h3><ul><li>YOLOv9 GitHub 仓库：https://github.com/WongKinYiu/yolov9</li><li>YOLOv9 论文：https://arxiv.org/pdf/2402.13616</li></ul>',62)]))}]]),t=JSON.parse('{"path":"/zh/posts/ai-impls/yolov9.html","title":"YOLOv9 代码复现","lang":"zh-CN","frontmatter":{"description":"YOLOv9 代码复现 导航 引言 YOLOv9 模型概述 模型框架图 环境搭建及训练推理 环境配置 数据集准备 训练过程 测试和评估 实践应用 报错修复 总结和展望 参考链接 引言 在目标检测领域，YOLO 系列始终是速度与准确性的标杆。最新进展的 YOLOv9，在《YOLOv9: Learning What You Want to Learn Us...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://neverbiasu.github.io/zh/posts/ai-impls/yolov9.html"}],["meta",{"property":"og:site_name","content":"Nlog"}],["meta",{"property":"og:title","content":"YOLOv9 代码复现"}],["meta",{"property":"og:description","content":"YOLOv9 代码复现 导航 引言 YOLOv9 模型概述 模型框架图 环境搭建及训练推理 环境配置 数据集准备 训练过程 测试和评估 实践应用 报错修复 总结和展望 参考链接 引言 在目标检测领域，YOLO 系列始终是速度与准确性的标杆。最新进展的 YOLOv9，在《YOLOv9: Learning What You Want to Learn Us..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/WongKinYiu/yolov9/main/figure/performance.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"YOLOv9 代码复现\\",\\"image\\":[\\"https://raw.githubusercontent.com/WongKinYiu/yolov9/main/figure/performance.png\\",\\"https://arxiv.org/html/2402.13616v2/extracted/5439110/figs/pgi.png\\",\\"https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_3.png\\",\\"https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_4.png\\",\\"https://github.com/WongKinYiu/yolov9/raw/main/figure/horses_prediction.jpg\\",\\"https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_6.png\\",\\"https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_7.png\\",\\"https://raw.githubusercontent.com/neverbiasu/acdemicpage/refs/heads/main/images/blogs/b1_8.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"neverbiasu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"导航","slug":"导航","link":"#导航","children":[]},{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[{"level":3,"title":"YOLOv9 模型概述","slug":"yolov9-模型概述","link":"#yolov9-模型概述","children":[]},{"level":3,"title":"模型框架图","slug":"模型框架图","link":"#模型框架图","children":[]}]},{"level":2,"title":"环境搭建及训练推理","slug":"环境搭建及训练推理","link":"#环境搭建及训练推理","children":[{"level":3,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[]},{"level":3,"title":"数据集准备","slug":"数据集准备","link":"#数据集准备","children":[]},{"level":3,"title":"训练过程","slug":"训练过程","link":"#训练过程","children":[]},{"level":3,"title":"测试和评估","slug":"测试和评估","link":"#测试和评估","children":[]},{"level":3,"title":"实践应用","slug":"实践应用","link":"#实践应用","children":[]},{"level":3,"title":"报错修复","slug":"报错修复","link":"#报错修复","children":[]},{"level":3,"title":"总结和展望","slug":"总结和展望","link":"#总结和展望","children":[]},{"level":3,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}]}],"readingTime":{"minutes":6.16,"words":1847},"filePathRelative":"zh/posts/ai-impls/yolov9.md","excerpt":"\\n<h2>导航</h2>\\n<ul>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E5%BC%95%E8%A8%80\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">引言</a>\\n<ul>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#YOLOv9%E6%A8%A1%E5%9E%8B%E6%A6%82%E8%BF%B0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">YOLOv9 模型概述</a>\\n<ul>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%A8%A1%E5%9E%8B%E6%A1%86%E6%9E%B6%E5%9B%BE\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">模型框架图</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA%E5%8F%8A%E8%AE%AD%E7%BB%83%E6%8E%A8%E7%90%86\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">环境搭建及训练推理</a>\\n<ul>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">环境配置</a></li>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%95%B0%E6%8D%AE%E9%9B%86%E5%87%86%E5%A4%87\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">数据集准备</a></li>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E8%AE%AD%E7%BB%83%E8%BF%87%E7%A8%8B\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">训练过程</a></li>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%B5%8B%E8%AF%95%E5%92%8C%E8%AF%84%E4%BC%B0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">测试和评估</a></li>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E5%AE%9E%E8%B7%B5%E5%BA%94%E7%94%A8\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">实践应用</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%8A%A5%E9%94%99%E4%BF%AE%E5%A4%8D\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">报错修复</a></li>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E6%80%BB%E7%BB%93%E5%92%8C%E5%B1%95%E6%9C%9B\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">总结和展望</a></li>\\n<li><a href=\\"notion://www.notion.so/Blog1-YOLOv9-5bfb1b8d97844ba99c6f081ed667721d?pvs=12#%E5%8F%82%E8%80%83%E9%93%BE%E6%8E%A5\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">参考链接</a></li>\\n</ul>","autoDesc":true}')}}]);