---
title: "在 Python 中实现 MCP 服务器：使用 Gradio 构建 AI 购物助手"
date: 2025-07-31
author: Freddy Boulton
sidebar: auto
---

# 在 Python 中实现 MCP 服务器：使用 Gradio 构建 AI 购物助手

## 目录

- [目标：你的个人 AI 造型师](#目标：你的个人-ai-造型师)
- [构建 Gradio MCP 服务器](#构建-gradio-mcp-服务器)
- [配置 VS Code](#配置-vs-code)
- [整合所有内容](#整合所有内容)
- [结论](#结论)

---

各位 Python 开发者，想让你的大语言模型（LLM）拥有超能力吗？Gradio 正是实现这一目标的最快途径！借助 Gradio 的模型上下文协议（MCP）集成，你的 LLM 可以直接接入 Hugging Face Hub 上数以千计的 AI 模型和 Spaces。通过将 LLM 的通用推理能力与 Hugging Face 上的专业模型相结合，你的 LLM 将不再局限于回答文本问题，而是能真正解决你日常生活中的实际问题。对于 Python 开发者而言，Gradio 让实现强大的 MCP 服务器变得轻而易举，并提供以下特性：

- **自动将 Python 函数转换为 LLM 工具：** 你 Gradio 应用中的每个 API 端点都会被自动转换成一个 MCP 工具，并附带相应的名称、描述和输入格式。你函数的文档字符串（docstring）将用于生成该工具及其参数的说明。
- **实时进度通知：** Gradio 会将进度通知实时传输到你的 MCP 客户端，让你能随时监控任务状态，而无需亲手实现这一功能。
- **自动文件上传：** 支持公共 URL，并能处理多种文件类型。

想象一下这个场景：你讨厌购物，因为它耗时费力，而且你很怕亲自试穿衣服。如果有一个 LLM 能帮你搞定这一切呢？在本文中，我们将创建一个由 LLM 驱动的 AI 助手，它不仅能浏览在线服装店、寻找特定衣物，还能利用虚拟试穿模型，让你直观地看到这些衣服穿在你身上的效果。演示如下：

## 目标：你的个人 AI 造型师

为了打造我们的 AI 购物助手，我们将整合三大核心组件：

1. **[IDM-VTON](https://huggingface.co/yisol/IDM-VTON) 扩散模型**：这个 AI 模型负责实现虚拟试穿功能。它可以编辑现有照片，让照片里的人仿佛穿上了另一件衣服。我们将使用 Hugging Face Space 上的 IDM-VTON，点击[这里](https://huggingface.co/spaces/yisol/IDM-VTON)即可访问。
2. **Gradio**：Gradio 是一个开源的 Python 库，它能让你轻松构建 AI 驱动的 Web 应用，更关键的是，它能帮助我们创建 MCP 服务器。Gradio 将充当一座桥梁，让我们的 LLM 能够调用 IDM-VTON 模型及其他工具。
3. **Visual Studio Code 的 AI 聊天功能**：我们将利用 VS Code 内置的 AI 聊天功能与我们的 AI 购物助手进行交互，该功能支持添加任意 MCP 服务器。这将为我们提供一个用户友好的界面，方便我们下达指令和查看虚拟试穿结果。

## 构建 Gradio MCP 服务器

我们 AI 购物助手的核心是 Gradio MCP 服务器。该服务器将主要提供一个工具：

1. **`vton_generation`**：此函数接收一张人物模特图和一张服装图作为输入，然后利用 IDM-VTON 模型生成一张模特穿着该服装的新图片。

以下是我们的 Gradio MCP 服务器的 Python 代码：

```python
from gradio_client import Client, handle_file
import gradio as gr
import re

client = Client("freddyaboulton/IDM-VTON",
                hf_token="<Your-token>")

def vton_generation(human_model_img: str, garment: str):
    """使用 IDM-VTON 模型生成一张人物穿着服装的新图片。"""
    """
    参数:
        human_model_img: 穿着服装的人物模型。
        garment: 要穿的服装。
    """
    output = client.predict(
        dict={"background": handle_file(human_model_img), "layers":[], "composite":None},
        garm_img=handle_file(garment),
        garment_des="",
        is_checked=True,
        is_checked_crop=False,
        denoise_steps=30,
        seed=42,
        api_name="/tryon"
    )

    return output[0]

vton_mcp = gr.Interface(
    vton_generation,
    inputs=[
        gr.Image(type="filepath", label="人物模型图片 URL"),
        gr.Image(type="filepath", label="服装图片 URL 或文件")
    ],
    outputs=gr.Image(type="filepath", label="生成的图片")
)

if __name__ == "__main__":
    vton_mcp.launch(mcp_server=True)
```

只需在 `launch()` 方法中设置 `mcp_server=True`，Gradio 就能自动将我们的 Python 函数转换为 LLM 能够理解和使用的 MCP 工具。我们函数的文档字符串（docstrings）会被用来生成工具及其参数的描述。

> 请注意：最初的 IDM-VTON Space 是用 Gradio 4.x 版本实现的，该版本还不支持自动 MCP 功能。因此，在本次演示中，我们将构建一个 Gradio 接口，通过 Gradio API 客户端来查询原有的 Space。

最后，用 Python 运行此脚本。

## 配置 VS Code

为了将我们的 Gradio MCP 服务器连接到 VS Code 的 AI 聊天功能，我们需要编辑 `mcp.json` 文件。这个配置文件会告诉 AI 聊天功能如何找到并与我们的 MCP 服务器进行交互。

你可以在命令面板中输入 `MCP` 并选择 `MCP: Open User Configuration` 来找到此文件。打开后，请确保以下服务器配置存在：

```json
{
  "servers": {
    "vton": {
      "url": "http://127.0.0.1:7860/gradio_api/mcp/"
    },
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

`playwright` MCP 服务器能让我们的 AI 助手浏览网页。

> 请确保 `vton` 服务器的 URL 与上一节中控制台打印出的 URL 一致。要运行 `playwright` MCP 服务器，你需要先安装 Node.js。

## 整合所有内容

现在，我们可以开始与我们的 AI 购物助手互动了。在 VS Code 中打开一个新的聊天窗口，你可以向它发出这样的指令：

> “帮我逛逛优衣库网站，找几件蓝色的 T 恤，然后用我的照片 [你的图片-url] 给我看看其中三件的上身效果。”

你可以参考上面的视频，看看实际操作的例子！

## 结论

Gradio、MCP 与强大的 AI 模型（如 IDM-VTON）的结合，为我们创造智能、实用的 AI 助手开启了无限可能。通过遵循本篇博文的步骤，你也可以构建属于自己的 AI 助手，来解决那些你最关心的问题！
