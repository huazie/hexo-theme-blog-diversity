# <img src="source/images/diversity.png" width="80" height="80"> Diversity
博客多样性，一款多主题自由切换的Hexo主题

[英文说明/English Documentation](README_EN.md)

## 安装

在你的 **Hexo** 项目根目录，执行以下命令，并将 `_config.yml` 中的 `theme` 修改为 `diversity`。

```
git clone --depth 1 https://github.com/huazie/hexo-theme-diversity themes/diversity
```

``` diff
_config.yml
- theme: other-theme
+ theme: diversity
```

## 更新

执行以下命令，用以更新 **Diversity**。

```
cd themes/diversity
git pull
```

## 配置

### Diversity主题相关配置

`themes/diversity` 目录下的 `_config.yml` 包含如下配置：

```
title: 主题选择

description: 这是一个主题选择页面

image: /images/diversity.png

favicon: /images/diversity.png
```

- **title** - 主题选择页面的标题
- **description** - 网页描述
- **image** - 当网页链接被分享到社交平台时显示的图片URL
- **favicon** - Favicon路径【一个小型图标，用于在浏览器的标签页、地址栏或书签栏中标识和区分不同的网站】


将 `themes/diversity` 目录下的 `_config.diversity.yml`，添加到你的 **Hexo** 项目根目录

```
themes: [landscape,light,phase]

#ports: [5000,5001,5002]
```

- **themes** - 多主题列表
- **ports** - 多主题服务器端口列表（不配置，默认从4001开始），用于本地 `hexo server` 启动各主题对应的HTTP服务


### 多主题相关配置

在你的 **Hexo** 项目根目录，添加 **config** 目录，为上述多主题列表中的每个主题添加一个对应主题名的配置目录，

并在该配置目录下添加对应的 `_config.yml` 【直接从你原来项目根目录下的 `_config.yml` 复制一份即可】，形如：

```pre
├─config
│  ├─landscape
│  │  ├─_config.yml
│  ├─light
│  │  ├─_config.yml
│  ├─phase
│  │  ├─_config.yml
```

修改上述各主题目录下的 `_config.yml`，以 **landscape** 举例：

``` diff
_config.yml
- url: http://example.com
+ url: http://example.com/landscape

- public_dir: public
+ public_dir: public/landscape

- theme: other-theme
+ theme: landscape
```