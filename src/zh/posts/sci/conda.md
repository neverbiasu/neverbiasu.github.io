# 【高效科研】Conda：科研代码环境管理的利器

---

## 什么是 Conda？

### Conda 的定义
Conda 是一个开源的包管理和环境管理工具，支持 Python 等多种编程语言，主要用于创建独立环境和管理依赖包，避免依赖冲突。

### 为什么选择 Conda？
- **环境隔离**：每个项目可以拥有独立的环境，互不干扰。
- **依赖管理**：自动解决包之间的依赖关系。
- **跨平台支持**：支持 Windows、macOS 和 Linux。
- **镜像源支持**：国内用户可以通过配置镜像源加速下载。

---

## 如何安装 Conda？

笔者建议使用命令行安装，比较方便~
以下是三个系统的快速入门安装教程：

### Windows Command Prompt
```sh
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe -o .\miniconda.exe
start /wait "" .\miniconda.exe /S
del .\miniconda.exe
```

### macOS / Linux
1. 运行以下四条命令，为所选芯片架构下载并安装最新的 macOS 安装程序。逐行执行这些命令：
    ```sh
    mkdir -p ~/miniconda3
    curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh -o ~/miniconda3/miniconda.sh
    bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
    rm ~/miniconda3/miniconda.sh
    ```
    ![安装miniconda3](/assets/images/sci/conda/install-conda.png)
2. 安装完成后，关闭并重新打开终端应用程序，或运行以下命令刷新它：
    ```sh
    source ~/miniconda3/bin/activate
    ```
    ![激活conda](/assets/images/sci/conda/source-activate.png)
3. 然后，运行以下命令在所有可用 shell 上初始化 conda：
    ```sh
    conda init --all
    ```
    ![初始化conda](/assets/images/sci/conda/conda-init.png)

安装完毕后，运行以下命令检查安装是否成功：
```sh
conda --version
```
![显示版本即安装成功](/assets/images/sci/conda/conda-version.png)

---

## 案例：用 Conda 创建一个终端动画环境

### 背景
在这个案例中，我们将使用 Conda 创建一个独立的环境，并安装一个轻量型的终端动画包 [`asciimatics`](https://github.com/peterbrittain/asciimatics)。

通过这个案例，您将学习如何：
1. 创建和激活 Conda 环境。
2. 安装和管理包。
3. 使用镜像源加速下载。
4. 删除环境和包。

---

### 1. 创建环境并安装包

1. **创建环境**  
    创建一个名为 `ani` 的环境，并指定 Python 版本为 3.9：
    ```sh
    conda create -n ani python=3.9
    ```
    ![创建环境](/assets/images/sci/conda/conda-create.png)
2. **激活环境**  
    激活刚刚创建的环境：
    ```sh
    conda activate ani
    ```
    ![激活环境](/assets/images/sci/conda/conda-activate.png)
3. **配置镜像源**  
    由于conda服务器在海外，国内访问很慢，所以我们配置清华镜像源以加速：
    ```sh
    conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
    conda config --set show_channel_urls yes
    conda config --show channels
    ```
    ![镜像源已添加](/assets/images/sci/conda/conda-config-channels.png)
4. **安装 `asciimatics`**  
    在环境中安装 `asciimatics`：
    ```sh
    conda install asciimatics
    ```
    ![开始安装asciimatics](/assets/images/sci/conda/conda-install.png)
5. 显示conda中的包列表
    检查刚才安装的包是否被包含：
    ```sh
    conda list
    ```
    ![已包含asciimatics](/assets/images/sci/conda/conda-list.png)
---

### 2. 使用 `asciimatics` 展示动画

1. **运行示例代码**  
    在终端中运行以下命令，启动 `asciimatics` 自带的烟花效果案例：
    ```sh
    python <(curl -s https://raw.githubusercontent.com/peterbrittain/asciimatics/master/samples/fireworks.py)
    ```

![烟花效果](/assets/images/sci/conda/fireworks.gif)

---

### 3. 更新和删除包

1. **更新 `asciimatics`**  
    如果需要更新 `asciimatics` 到最新版本：
    ```sh
    conda update asciimatics
    ```
    ![更新asciimatics](/assets/images/sci/conda/conda-update.png)

2. **删除 `asciimatics`**  
    如果不再需要 `asciimatics`，可以将其删除：
    ```sh
    conda remove asciimatics
    ```
    ![删除asciimatics](/assets/images/sci/conda/conda-remove.png)

---

### 4. 删除环境

1. **退出环境**  
    在删除环境之前，先退出当前环境：
    ```sh
    conda deactivate
    ```

2. **删除环境**  
    删除 `ani` 环境及其所有内容：
    ```sh
    conda remove -n ani --all
    ```
    ![退出环境并删除](/assets/images/sci/conda/conda-deactivate-and-remove.png)

---

## Conda 的核心命令

### 1. 环境管理
- 创建环境：
  ```sh
  conda create --name <env_name> python=<version>
  ```
- 激活环境：
  ```sh
  conda activate <env_name>
  ```
- 删除环境：
  ```sh
  conda remove --name <env_name> --all
  ```

### 2. 包管理
- 安装包：
  ```sh
  conda install <package_name>
  ```
- 更新包：
  ```sh
  conda update <package_name>
  ```
- 删除包：
  ```sh
  conda remove <package_name>
  ```

### 3. 镜像源管理
- 添加镜像源：
  ```yaml
  channels:
     - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
     - defaults
  ```
- 查看当前镜像源：
  ```sh
  conda config --show channels
  ```

---

## 总结

Conda 是科研工作中不可或缺的工具，尤其是在需要管理多个项目和复杂依赖时。通过 Conda，您可以轻松创建独立的环境，安装所需的工具包，从而专注于科研本身，而无需担心环境配置问题。

---

## 参考链接

1. [Conda 官方文档](https://docs.conda.io/projects/conda/en/stable/)
2. [Miniconda 下载页面](https://docs.conda.io/en/latest/miniconda.html)
3. [清华镜像源](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)