"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5961],{6262:(r,t)=>{t.A=(r,t)=>{const e=r.__vccOpts||r;for(const[r,o]of t)e[r]=o;return e}},7083:(r,t,e)=>{e.r(t),e.d(t,{comp:()=>i,data:()=>a});var o=e(641);const n={},i=(0,e(6262).A)(n,[["render",function(r,t){return(0,o.uX)(),(0,o.CE)("div",null,t[0]||(t[0]=[(0,o.Fv)('<h1 id="英伟达发布可控图像编辑框架-字节跳动texttoon实时漫画化头像生成-vivo推出hybridbooth个性化生成【ai周报】" tabindex="-1"><a class="header-anchor" href="#英伟达发布可控图像编辑框架-字节跳动texttoon实时漫画化头像生成-vivo推出hybridbooth个性化生成【ai周报】"><span>英伟达发布可控图像编辑框架|字节跳动TextToon实时漫画化头像生成|Vivo推出HybridBooth个性化生成【AI周报】</span></a></h1><p>!https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3a0efd56-5a31-4661-910b-55d91f9f82b0/width=450/33654117.jpeg</p><h2 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要"><span>摘要</span></a></h2><p>本期汇总展示了六个前沿AI项目，涵盖从图像、视频生成的创新。CtrlX提供无损图像编辑，PixelShuffler实现自监督图像去噪，TextToon推动漫画生成技术，HybridBooth聚焦个性化头像生成，其余论文及项目详见正文。</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><ol><li>CtrlX: 可控图像编辑框架</li><li>PixelShuffler: 高效的自监督图像去噪</li><li>TextToon: 文本驱动的实时漫画化头像生成</li><li>HybridBooth: 高效的个性化生成模型</li><li>Pyramid-Flow: 高效的分层可逆生成模型</li><li>Aria: 开源多模态专家模型</li></ol><hr><h2 id="ctrlx-可控图像编辑框架" tabindex="-1"><a class="header-anchor" href="#ctrlx-可控图像编辑框架"><span>CtrlX: 可控图像编辑框架</span></a></h2><p>!https://github.com/genforce/ctrl-x/raw/main/docs/assets/teaser_github.jpg</p><p><strong>概要</strong>: CtrlX 是由 <strong>英伟达</strong> 和 <strong>UCLA</strong> 的研究人员开发的一个无训练、无引导的文本到图像生成框架。通过结合用户提供的结构和外观图片，CtrlX 实现了精确的结构对齐和语义感知的外观迁移。这一框架能够处理多种结构条件，包括自然图像、线框、3D网格等，还支持视频生成。其设计使得用户能够即时对接任意文本到图像（T2I）或文本到视频（T2V）扩散模型，无需额外训练。</p><p><strong>标签</strong>: #AI #图像编辑 #扩散模型 #生成对抗网络 #深度学习</p><hr><h2 id="pixelshuffler-高效的自监督图像去噪" tabindex="-1"><a class="header-anchor" href="#pixelshuffler-高效的自监督图像去噪"><span>PixelShuffler: 高效的自监督图像去噪</span></a></h2><p>!https://github.com/OmarSZamzam/PixelShuffler/raw/main/Figures/Demonstration.gif</p><p><strong>概要</strong>: <strong>PixelShuffler</strong> 是由 <strong>南加大</strong> 提出的轻量级图像翻译方法，专注于图像去噪和风格迁移。该方法基于像素混洗（Pixel Shuffle）技术，通过重新排列目标图像中的像素，并与源图像进行信息互补，从而在不依赖复杂网络结构的情况下实现高效的图像转换。该技术可以广泛应用于风格迁移、图像去噪等图像翻译任务，甚至在医疗图像转换中也具有潜在的应用场景。</p><p><strong>标签</strong>: #风格迁移 #图像去噪 #像素混洗 #自监督学习 #图像翻译</p><hr><h2 id="texttoon-文本驱动的实时漫画化头像生成" tabindex="-1"><a class="header-anchor" href="#texttoon-文本驱动的实时漫画化头像生成"><span>TextToon: 文本驱动的实时漫画化头像生成</span></a></h2><p>!https://songluchuan.github.io/TextToon/static/images/TextToon_teaser.jpg</p><p><strong>概要</strong>: <strong>TextToon</strong> 是由 <strong>字节跳动团队</strong> 提出的一个实时生成漫画风格头像的系统。该项目通过输入简短的单目视频和文本描述，生成可驱动的高保真卡通化头像。不同于依赖多视角建模的传统方法，TextToon 采用了基于条件嵌入的 <strong>Tri-plane</strong> 模型，在高斯变形场中学习面部表示，并结合自适应像素翻译网络和对比学习实现高质量图像生成。该系统在 <strong>GPU 机器上达到 48 FPS</strong>，而在移动设备上也能保持 <strong>15-18 FPS</strong> 的实时生成能力，展现了其在消费级应用中的潜力。</p><p><strong>标签</strong>: #文本到图像 #卡通头像 #实时生成 #对比学习 #高斯变换</p><hr><h2 id="hybridbooth-高效的个性化生成模型" tabindex="-1"><a class="header-anchor" href="#hybridbooth-高效的个性化生成模型"><span>HybridBooth: 高效的个性化生成模型</span></a></h2><p>!https://arxiv.org/html/2410.08192v1/x4.png</p><p><strong>概要</strong>: <strong>HybridBooth</strong> 是由 <strong>Vivo公司</strong> 提出的一个创新框架，结合了优化和直接回归方法，用于 <strong>高效的个性化图像生成</strong>。该模型特别适用于通过文本提示生成基于特定主体的图像，称为 <strong>主体驱动的生成</strong>。HybridBooth 采用了两阶段的提示反演技术：首先通过<strong>词嵌入探测器</strong>生成稳健的初始词嵌入，然后在<strong>词嵌入细化器</strong>中进一步优化关键参数，使得从单张图像学习到的视觉概念能够被高效地反演至预训练扩散模型中。这种方法兼顾了模型的生成能力和个性化能力，在仅需少量训练的情况下，实现了高质量的个性化生成。</p><p><strong>标签</strong>: #主体驱动生成 #提示反演 #扩散模型 #个性化图像生成</p><hr><h2 id="pyramid-flow-高效的分层可逆生成模型" tabindex="-1"><a class="header-anchor" href="#pyramid-flow-高效的分层可逆生成模型"><span>Pyramid-Flow: 高效的分层可逆生成模型</span></a></h2><p>!https://arxiv.org/html/2410.05954v1/x1.png</p><p><strong>概要</strong>: <strong>Pyramid-Flow</strong> 是由 <strong>北京大学</strong>、<strong>快手科技</strong> 和 <strong>北京邮电大学</strong> 联合推出的一个创新的高效视频生成模型。该模型基于 <strong>金字塔流匹配</strong> 算法，通过将视频生成过程分解为多层次的金字塔结构，逐层生成和解压缩视觉内容。这种方法显著降低了计算量，尤其适用于高分辨率视频的生成任务。Pyramid-Flow 可以生成高达 <strong>1280x768 分辨率、24 帧/秒</strong> 的视频，支持 <strong>文本到视频</strong> 和 <strong>图像到视频</strong> 的生成应用。</p><p><strong>标签</strong>: #视频生成 #金字塔流 #高效生成 #高分辨率</p><hr><h2 id="aria-开源多模态专家模型" tabindex="-1"><a class="header-anchor" href="#aria-开源多模态专家模型"><span>Aria: 开源多模态专家模型</span></a></h2><p>!https://rhymes.ai/images/blog/Aria-intro-10062024/AriaTopPoster.png</p><p><strong>概要</strong>: <strong>Aria</strong> 是由 <strong>Rhymes AI</strong> 推出的 <strong>多模态原生混合专家模型 (MoE)</strong>，能够处理文本、图像和视频等多种输入。该模型旨在为多模态任务提供最佳性能，并在文本理解、视频分析、文档处理等多个领域表现出色。Aria 的设计重点是高效计算和快速推理，仅使用 <strong>3.9B 激活参数</strong>，确保推理速度快且资源占用低。相比于现有的开源模型如 <strong>Pixtral-12B</strong> 和 <strong>Llama3.2-11B</strong>，Aria 在多模态任务中取得了更好的表现。</p><p><strong>标签</strong>: #多模态AI #混合专家模型 #开源 #内容生成 #AI研究</p><hr><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h3><ol><li><a href="https://genforce.github.io/ctrl-x" target="_blank" rel="noopener noreferrer">CtrlX 项目主页</a></li><li><a href="https://github.com/genforce/ctrl-x" target="_blank" rel="noopener noreferrer">CtrlX GitHub 仓库</a></li><li><a href="https://arxiv.org/pdf/2406.07540" target="_blank" rel="noopener noreferrer">CtrlX 论文</a></li><li><a href="https://github.com/OmarSZamzam/PixelShuffler" target="_blank" rel="noopener noreferrer">PixelShuffler GitHub 仓库</a></li><li><a href="https://arxiv.org/pdf/2410.03021" target="_blank" rel="noopener noreferrer">PixelShuffler 论文</a></li><li><a href="https://songluchuan.github.io/TextToon" target="_blank" rel="noopener noreferrer">TextToon 项目主页</a></li><li><a href="https://github.com/Songluchuan/TextToon" target="_blank" rel="noopener noreferrer">TextToon GitHub 仓库</a></li><li><a href="https://arxiv.org/pdf/2410.07160" target="_blank" rel="noopener noreferrer">TextToon 论文</a></li><li><a href="https://sites.google.com/view/hybridbooth" target="_blank" rel="noopener noreferrer">HybridBooth 项目主页</a></li><li><a href="https://github.com/syguan96/HybridBooth" target="_blank" rel="noopener noreferrer">HybridBooth GitHub 仓库</a></li><li><a href="https://arxiv.org/pdf/2410.08192" target="_blank" rel="noopener noreferrer">HybridBooth 论文</a></li><li><a href="https://pyramid-flow.github.io/" target="_blank" rel="noopener noreferrer">Pyramid-Flow 项目主页</a></li><li><a href="https://github.com/jy0205/Pyramid-Flow" target="_blank" rel="noopener noreferrer">Pyramid-Flow GitHub 仓库</a></li><li><a href="https://arxiv.org/pdf/2410.05954" target="_blank" rel="noopener noreferrer">Pyramid-Flow 论文</a></li><li><a href="https://github.com/rhymes-ai/Aria" target="_blank" rel="noopener noreferrer">Aria GitHub 仓库</a></li><li><a href="https://arxiv.org/pdf/2410.05993" target="_blank" rel="noopener noreferrer">Aria 论文</a></li><li><a href="https://rhymes.ai/" target="_blank" rel="noopener noreferrer">Rhymes AI 官方网站</a></li></ol>',39)]))}]]),a=JSON.parse('{"path":"/zh/posts/ai-weekly/007.html","title":"英伟达发布可控图像编辑框架|字节跳动TextToon实时漫画化头像生成|Vivo推出HybridBooth个性化生成【AI周报】","lang":"zh-CN","frontmatter":{"description":"英伟达发布可控图像编辑框架|字节跳动TextToon实时漫画化头像生成|Vivo推出HybridBooth个性化生成【AI周报】 !https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3a0efd56-5a31-4661-910b-55d91f9f82b0/width=450/33654117.jpeg 摘...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://neverbiasu.github.io/zh/posts/ai-weekly/007.html"}],["meta",{"property":"og:site_name","content":"Nlog"}],["meta",{"property":"og:title","content":"英伟达发布可控图像编辑框架|字节跳动TextToon实时漫画化头像生成|Vivo推出HybridBooth个性化生成【AI周报】"}],["meta",{"property":"og:description","content":"英伟达发布可控图像编辑框架|字节跳动TextToon实时漫画化头像生成|Vivo推出HybridBooth个性化生成【AI周报】 !https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3a0efd56-5a31-4661-910b-55d91f9f82b0/width=450/33654117.jpeg 摘..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"英伟达发布可控图像编辑框架|字节跳动TextToon实时漫画化头像生成|Vivo推出HybridBooth个性化生成【AI周报】\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"neverbiasu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"摘要","slug":"摘要","link":"#摘要","children":[]},{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"CtrlX: 可控图像编辑框架","slug":"ctrlx-可控图像编辑框架","link":"#ctrlx-可控图像编辑框架","children":[]},{"level":2,"title":"PixelShuffler: 高效的自监督图像去噪","slug":"pixelshuffler-高效的自监督图像去噪","link":"#pixelshuffler-高效的自监督图像去噪","children":[]},{"level":2,"title":"TextToon: 文本驱动的实时漫画化头像生成","slug":"texttoon-文本驱动的实时漫画化头像生成","link":"#texttoon-文本驱动的实时漫画化头像生成","children":[]},{"level":2,"title":"HybridBooth: 高效的个性化生成模型","slug":"hybridbooth-高效的个性化生成模型","link":"#hybridbooth-高效的个性化生成模型","children":[]},{"level":2,"title":"Pyramid-Flow: 高效的分层可逆生成模型","slug":"pyramid-flow-高效的分层可逆生成模型","link":"#pyramid-flow-高效的分层可逆生成模型","children":[]},{"level":2,"title":"Aria: 开源多模态专家模型","slug":"aria-开源多模态专家模型","link":"#aria-开源多模态专家模型","children":[{"level":3,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}]}],"readingTime":{"minutes":5.02,"words":1506},"filePathRelative":"zh/posts/ai-weekly/007.md","excerpt":"\\n<p>!https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3a0efd56-5a31-4661-910b-55d91f9f82b0/width=450/33654117.jpeg</p>\\n<h2>摘要</h2>\\n<p>本期汇总展示了六个前沿AI项目，涵盖从图像、视频生成的创新。CtrlX提供无损图像编辑，PixelShuffler实现自监督图像去噪，TextToon推动漫画生成技术，HybridBooth聚焦个性化头像生成，其余论文及项目详见正文。</p>\\n<h2>目录</h2>\\n<ol>\\n<li>CtrlX: 可控图像编辑框架</li>\\n<li>PixelShuffler: 高效的自监督图像去噪</li>\\n<li>TextToon: 文本驱动的实时漫画化头像生成</li>\\n<li>HybridBooth: 高效的个性化生成模型</li>\\n<li>Pyramid-Flow: 高效的分层可逆生成模型</li>\\n<li>Aria: 开源多模态专家模型</li>\\n</ol>","autoDesc":true}')}}]);