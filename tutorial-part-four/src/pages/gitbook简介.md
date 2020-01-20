---
title: "Gitbook简介"
date: "2020-01-20"
---

### Gitbook简介

这是一个使用nodejs技术开发设计的命令行工具，可以直接将Markdown文件，生成静态`html`文件、`pdf`文件等电子书格式。其官方网站 [www.gitbooks.io](http://www.gitbooks.io/)便是一个开放的写书、发布、销售的管理平台。

### 什么是自出版平台

[自出版平台](https://baike.baidu.com/item/自出版平台)，指一些电商在没有传统出版商介入的情况下，直接签约[作者](https://baike.baidu.com/item/作者/144157)，利用电子图书平台自主出版书籍或多媒体产品，也称为“原生电子书”。有了[iPad](https://baike.baidu.com/item/iPad)、[kindle](https://baike.baidu.com/item/kindle/10724509)等手持阅读终端，任何写作者都可将文字作品直接放入阅读器图书商店出售。

### 如何打造自己的平台

#### 目录生成

+ Summary简介：

[gitbook-summary](https://github.com/imfly/gitbook-summary)(简称Summary），它是一个自动构建文档目录的小工具。Summary默认将文件夹作为章节名称，文件夹嵌套对应目录结构。这样做，有很多好处，首先，把每一章的主题抽象为一个文件夹，然后把各章节独立成一个文件，放在该文件夹下，层次清晰，维护方便；其次，针对每一个概念，可以按照“面向对象”编程的思维去拆分，去写作。

+ 安装Summary

```
npm install -g gitbook-summary
```

+ 配置电子书信息

  + 进入项目根目录

  + 创建`book.json`
```json
{
    "bookname": "My First Book",
    "description": "电子书生成测试",
    "author": {
        "name": "Tad",
        "email": "xiaozl1@digitalchina.com"
    },
    "keywords": [
        "gitbook",
        "summary"
    ]
}
```
+ 调整目录顺序

内容是有先后逻辑的。Summary默认按照章节（文件夹）的字母顺序排列。如果需要制定顺序，可以在文件夹前面加上字母或数字， 具体格式是:

`{数字或字母}-文件夹或文件名称`

比如：

`1-Gitbook简介`

+ 在每个叶子节点创建并编辑书籍正文

下图中可点击章节均为叶子节点，在其中创建`readme.md`即可被识别为章节内容
![2020-01-14-17-34-14](https://i.imgur.com/FXWUNUT.png)

+ 生成目录文件`SUMMARY.md`

```
book sm
```

#### 电子书生成

+ 安装Gitbook
```
npm install  -g  gitbook-cli
```

+ 构建电子书
  + 这将把所有`.md`文件，转换成`.html`格式的静态文件，并存放在根目录下的`_book`目录
  + 要在自己的网站上发布新书，只需把_book目录复制到服务器相应目录即可。
```
gitbook build
```
+ 添加插件

  + Gitbook支持将一些外部的JavaScript文件嵌入到HTML中，例如Google统计、Disqus评论系统等。
  + 安装Disqus插件
```
npm install gitbook-plugin-disqus
```

在`book.json`中添加如下内容：

```
{
  "plugins": ["disqus"],
  "pluginsConfig": {
    "disqus": {
      "shortName": "你在Disqus上的项目名"
    }
  }
}
```
