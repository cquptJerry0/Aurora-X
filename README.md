# Aurora-X

<p align="center">专为 AI 应用打造的现代化 Vue3 组件库</p>

## ✨ 特性

- 🤖 **AI 交互优化** - 内置多种 AI 对话组件，支持打字机效果、Markdown 渲染、代码高亮
- 🌊 **流式响应支持** - 完美支持 SSE 流式响应，内置 XStream 工具，轻松处理流式数据
- 🎨 **丰富的交互组件** - 提供气泡、消息列表、文件上传等组件，打造完整的 AI 对话界面
- 🛠️ **开箱即用** - 零配置支持 TypeScript，内置解析器自动处理各类 AI 响应格式

## 📦 安装

```bash
# 使用 npm
npm install vue-aurora-x

# 使用 pnpm
pnpm add vue-aurora-x

# 使用 yarn
yarn add vue-aurora-x
```

## 🚀 快速开始

```vue
<template>
  <AuBubble :content="content" />
  <AuTypewriter :text="streamingContent" />
</template>

<script setup>
import { ref } from 'vue'
import { AuBubble, AuTypewriter } from 'vue-aurora-x'
import 'vue-aurora-x/dist/style.css'

const content = ref('Hello, I am an AI assistant!')
const streamingContent = ref('')

// 处理流式响应
const eventSource = new EventSource('/api/chat')
eventSource.onmessage = (event) => {
  streamingContent.value += event.data
}
</script>
```

## 📚 文档

访问我们的[官方文档](https://cquptjerry0.github.io/Aurora-X/)获取更多信息。

## 🧩 组件

- **输出组件**
  - `Bubble` - AI 回复气泡
  - `BubbleList` - 对话消息列表
  - `Typewriter` - 打字机效果

- **输入组件**
  - `Attachments` - 文件上传附件

- **工具**
  - `XStream` - 流式数据处理
  - `Config` - 全局配置

## 🔨 开发

```bash
# 克隆仓库
git clone https://github.com/cquptJerry0/Aurora-X.git

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建组件库
pnpm build:components

# 构建文档
pnpm build:docs
```
