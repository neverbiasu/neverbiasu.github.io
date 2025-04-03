---
title: "使用 GitHub Copilot 进行 MCP 实验"
date: 2025-03-18
author: kcon
tags:
    - 编辑器
    - 模型上下文协议
    - 技术
---

# 使用 GitHub Copilot 进行 MCP 实验

## 概述

本文描述了如何在 VS Code 中安装 "Copilot MCP" 扩展，并结合 MCP 使用 GitHub Copilot 从 GitHub 获取信息进行测试。  
注意：由于官方 GitHub Copilot 实现似乎也支持 MCP，一旦该功能发布，此扩展可能将不再必要。

## 测试环境

* Windows 10 Pro
* VS Code

## 准备工作

请提前确保以下事项：

* 安装 node.js  
    * 必须可以使用 `npm` 和 `npx` 命令
* 创建 GitHub 账户

## 安装 MCP 服务器

通过 npm 安装 GitHub MCP 服务器。  
注意：如果你已经为使用其他支持 MCP 的工具（如 Cursor）安装了 MCP 服务器，则可跳过此步骤。

在终端中运行以下命令：  
```bash
npm install @modelcontextprotocol/server-github
```

## 生成 GitHub 个人访问令牌

访问 [https://github.co.jp/](https://github.co.jp/) 并登录。

依次导航到 [Settings] -> [Developer Settings]  
-> Personal access token -> Tokens (classic) -> Generate new token -> Generate new token

* 在 “备注” 字段中，输入令牌的标识符。
* 不需选择任何复选框。
* 点击 [Generate token] 按钮。

如果设置正确，将会生成一个令牌。务必记录该令牌，因为后续将会使用。  
注意：生成后令牌将无法再次查看，但仍可根据需要生成新的令牌。

## 安装 "Copilot MCP" 扩展

在 VS Code 中安装 "Copilot MCP" 扩展。  
[https://marketplace.visualstudio.com/items/?itemName=AutomataLabs.copilot-mcp](https://marketplace.visualstudio.com/items/?itemName=AutomataLabs.copilot-mcp)

## 配置 MCP

安装扩展后，VS Code 活动栏中会出现一个类似服务器的图标，点击该图标。  

![扩展图标](/assets/images/reprints/others/mcp-github-copilot/mcp-icon.png)

点击后，会打开 "MCP 服务器管理器" 窗口。  

![MCP 服务器管理器](/assets/images/reprints/others/mcp-github-copilot/mcp-server-manager.png)

点击 [+ 添加服务器] 按钮以显示配置字段。  

![服务器设置](/assets/images/reprints/others/mcp-github-copilot/add-mcp-server.png)

填写以下内容：

* 服务器名称：输入任意名称。
* 服务器类型：保持为 `Process (Local)`。
* 启动命令：`npx -y @modelcontextprotocol/server-github`

点击 [+ 添加变量] 按钮，添加以下字段：

* KEY: GITHUB_PERSONAL_ACCESS_TOKEN
* 值: 从 GitHub 生成的令牌

完成所有输入后，点击 [Add Server] 按钮。  
如果成功连接至 MCP 服务器，将显示以下信息：  

![连接成功](/assets/images/reprints/others/mcp-github-copilot/mcp-server-list.png)

如果连接失败（或未识别），则不会显示任何内容。  
注意：即便配置正确，识别有时也会不稳定。

## 在 COPILOT 聊天中测试

在聊天输入中，以 `@mcp` 为前缀发送消息以使用 MCP。

![MCP 使用示例](/assets/images/reprints/others/mcp-github-copilot/at-mcp.png)

例如，尝试询问：  
`@mcp 告诉我最受欢迎的仓库`

你将收到类似如下的响应：  

![MCP 响应](/assets/images/reprints/others/mcp-github-copilot/mcp-response.png)

这表明 MCP 已成功提供了回答！
