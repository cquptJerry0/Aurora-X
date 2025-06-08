# Config 全局配置组件

Config 组件提供了一种为组件树提供全局配置的机制，特别是针对 Markdown 相关功能的配置。

## 功能特点

- 🌍 全局配置 - 统一管理组件配置
- 🔌 插件系统 - 支持 Markdown 插件配置
- 🎨 代码高亮 - 配置代码块高亮方式
- 🧩 依赖注入 - 使用 Vue 的 provide/inject 机制

## 基础用法

```vue
<script setup>
import { markdownItAnchor } from 'markdown-it-anchor'
import { ref } from 'vue'
import hljs from 'highlight.js'

// Markdown 插件配置
const markdownPlugins = [
  (md) => {
    return markdownItAnchor(md, { level: 2 })
  },
]

// 代码高亮函数
function highlightFunction(code, language) {
  if (language && hljs.getLanguage(language)) {
    try {
      return hljs.highlight(code, { language }).value
    } catch (error) {
      console.warn('高亮错误:', error)
    }
  }
  return ''
}
</script>

<template>
  <au-config
    :md-plugins="markdownPlugins"
    :highlight="highlightFunction"
  >
    <!-- 组件内容将继承配置 -->
    <au-typewriter content="# 标题" is-markdown />
    <au-bubble content="## 子标题" is-markdown />
  </au-config>
</template>
```

## 属性

| 属性名    | 说明              | 类型                                         | 默认值 |
| --------- | ----------------- | -------------------------------------------- | ------ |
| mdPlugins | Markdown 插件列表 | `MarkdownItPlugin[]`                         | `[]`   |
| highlight | 代码高亮函数      | `(code: string, language: string) => string` | -      |

## 插槽

| 名称    | 说明               |
| ------- | ------------------ |
| default | 配置应用的组件内容 |

## 类型定义

```typescript
type MarkdownItPlugin = (md: MarkdownIt) => void

interface ConfigProps {
  mdPlugins?: MarkdownItPlugin[]
  highlight?: (code: string, language: string) => string
}
```

## 内部机制

Config 组件通过 Vue 的 `provide/inject` API 将配置注入到子组件中。在子组件中，可以通过 `useConfig` 钩子获取这些配置：

```typescript
// 在子组件中使用
import { useConfig } from '../Config/hooks'

// 获取全局配置
const config = useConfig()

// 使用配置
const highlight = config.highlight
const mdPlugins = config.mdPlugins
```
