# 【项目实战】Claude-Code开源平替——Qwen-Code零成本安装及使用教程

## 摘要

本教程将指导如何安装和配置 Qwen-Code，包括 Node.js 的安装、环境变量的设置以及 Qwen-Code 的初始化和测试。通过本教程，将能够快速上手并成功调用 Qwen-Code。

## 目录

1. [安装 Node.js](#安装-nodejs)
2. [安装 Qwen-Code](#安装-qwen-code)
3. [环境变量配置](#环境变量配置)
4. [初始化 Qwen-Code](#初始化-qwen-code)
5. [使用说明](#使用说明)

---

## 安装 Node.js

首先，确保的系统已安装 Node.js（版本≥20）。

### 方法 1：Linux/Mac 用户

运行以下命令安装 Node.js：

```bash
curl -qL https://www.npmjs.com/install.sh | sh
```

### 方法 2：Windows 用户

前往 [Node.js 官网](https://nodejs.org/dist/v22.17.1/node-v22.17.1-x64.msi) 下载适合系统的安装包，并完成安装。

---

## 安装 Qwen-Code

安装完成 Node.js 后，运行以下命令全局安装 Qwen-Code：

```bash
npm install -g @qwen-code/qwen-code
```

![安装完成](https://faych.notion.site/image/attachment%3Ae3a9cad1-a4c4-431e-a1ad-4bded8bc8ca7%3Aimage.png?table=block&id=23a5f3c4-a139-8023-93ed-d268f118cd22&spaceId=021ded55-a224-419c-939c-70c6888912f7&width=1010&userId=&cache=v2)

安装完成后，可以通过以下命令检查版本：

```bash
qwen --version
```

![安装成功](https://faych.notion.site/image/attachment%3Adeebef56-59ba-4cbb-ae8e-00a319185e45%3Aimage.png?table=block&id=23a5f3c4-a139-8003-9b19-c8eb9dbe3863&spaceId=021ded55-a224-419c-939c-70c6888912f7&width=1420&userId=&cache=v2)

如果成功打印出版本信息，说明安装成功。

---

## 环境变量配置

如果在运行 `qwen` 命令时提示找不到命令，请按照以下步骤配置系统环境变量：

1. 打开系统设置，找到“环境变量”。
2. 在“系统变量”中找到 `Path`，点击“编辑”。
3. 添加 Node.js 的安装目录（例如：`C:\Program Files\nodejs`）。
4. 保存并重新启动终端。

![环境变量配置示例](https://faych.notion.site/image/attachment%3Ac3f6290e-5d32-4d63-ae50-a0da7fdf4cda%3Aimage.png?table=block&id=23a5f3c4-a139-8010-a225-ecf589dcd789&spaceId=021ded55-a224-419c-939c-70c6888912f7&width=1420&userId=&cache=v2)

---

## 初始化 Qwen-Code

运行以下命令初始化 Qwen-Code：

```bash
qwen
```

![初始化界面](https://faych.notion.site/image/attachment%3A5c5bdc50-67bc-4992-9247-496b7c588548%3Aimage.png?table=block&id=23a5f3c4-a139-80b5-b382-e38b06c2e4f6&spaceId=021ded55-a224-419c-939c-70c6888912f7&width=2000&userId=&cache=v2)

初始化过程中，需要选择一个主体并配置 API。

1. **API 秘钥**：前往 [ModelScope](https://modelscope.cn/my/myaccesstoken) 获取。
2. **Base URL**：输入以下地址：

```bash
https://api-inference.modelscope.cn/v1/
```

3. **模型名称**：输入以下内容：

```bash
Qwen/Qwen3-Coder-480B-A35B-Instruct
```

![初始化示例](https://faych.notion.site/image/attachment%3A793a79f8-1338-442f-9554-22ddf630fac7%3Aimage.png?table=block&id=23a5f3c4-a139-809d-84f0-edf9ed76e7cb&spaceId=021ded55-a224-419c-939c-70c6888912f7&width=1420&userId=&cache=v2)

---

## 使用说明

以下是 Qwen-Code 的常见使用场景和命令示例：

### 1. 启动交互式 CLI

运行以下命令启动 Qwen-Code 的交互式命令行界面：

```bash
qwen
```

在交互模式下，可以直接输入指令与模型交互。

### 2. 非交互模式执行指令

使用 `-p` 或 `--prompt` 参数直接执行单条指令：

```bash
qwen -p "生成一个简单的Hello World程序"
```

### 3. 使用沙盒模式

沙盒模式允许在隔离环境中运行代码。使用 `-s` 或 `--sandbox` 参数启用沙盒模式：

```bash
qwen -p "生成一个贪吃蛇游戏" -s
```

还可以指定沙盒镜像：

```bash
qwen -p "生成一个3维弹球游戏" --sandbox-image "sandbox-image-uri"
```

### 4. 调试模式

启用调试模式以获取更详细的日志信息：

```bash
qwen -p "生成一个简单AI网站Landing Page" -d
```

### 5. YOLO 模式

启用 YOLO 模式自动接受所有操作：

```bash
qwen -y
```

### 6. 版本检查

运行以下命令检查 Qwen-Code 的版本：

```bash
qwen --version
```

---

### 参考链接

1. [Qwen-Code GitHub 仓库](https://github.com/QwenLM/qwen-code)
2. [ModelScope API 文档](https://modelscope.cn/docs/model-service/API-Inference/intro)
3. [Qwen3-Coder GitHub 仓库](https://github.com/QwenLM/Qwen3-Coder)
4. [阿里云百炼平台](https://bailian.console.aliyun.com/)
