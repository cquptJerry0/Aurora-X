# Typewriter 打字机组件

Typewriter 组件提供了一个具有打字机动画效果的文本显示器，支持 Markdown 渲染和代码高亮功能。

## 功能特点

- 🖋 打字机效果 - 逐字显示文本，营造输入过程
- 📝 Markdown 支持 - 可渲染 Markdown 格式文本
- 🌈 代码高亮 - 支持代码块语法高亮
- 🛡️ XSS 防御 - 内置 DOMPurify 安全过滤
- ⏯️ 控制功能 - 可暂停、继续、重新开始打字过程
- 🎛️ 自定义配置 - 灵活调整打字速度、步长和光标样式
- 🌫️ 雾化效果 - 支持内容雾化处理

## 基础用法

```vue
<template>
  <au-typewriter
    content="这是一段带有打字效果的文本，可以实现逐字显示效果。"
    :typing="true"
    :speed="50"
  />
</template>
```

## 高级用法

### Markdown 渲染

```vue
<template>
  <au-typewriter
    content="# 标题\n这是一段 **Markdown** 文本，支持 *斜体* 和 `代码`。"
    :is-markdown="true"
    :typing="true"
  />
</template>
```

### 代码高亮

````vue
<script setup>
import { usePrism } from 'aurora-x'

const highlightFunction = usePrism()
</script>

<template>
  <au-typewriter
    content="```javascript\nfunction hello() {\n  console.log('Hello world');\n}\n```"
    :is-markdown="true"
    :typing="true"
    :highlight="highlightFunction"
  />
</template>
````

## 属性

| 属性名     | 说明                   | 类型                                         | 默认值             |
| ---------- | ---------------------- | -------------------------------------------- | ------------------ |
| content    | 要显示的内容           | `string`                                     | `''`               |
| isMarkdown | 是否启用 Markdown 渲染 | `boolean`                                    | `false`            |
| typing     | 是否启用打字效果       | `boolean \| TypingConfig`                    | `false`            |
| isFog      | 是否启用雾化效果       | `boolean \| FogConfig`                       | `false`            |
| highlight  | 代码高亮函数           | `(code: string, language: string) => string` | -                  |
| mdPlugins  | Markdown 插件列表      | `Array<(md: MarkdownIt) => void>`            | `[]`               |
| xss        | XSS 安全配置           | `boolean \| XSSConfig`                       | `{ enable: true }` |

### TypingConfig 配置

| 属性名   | 说明                             | 类型     | 默认值 |
| -------- | -------------------------------- | -------- | ------ |
| step     | 每次打字的步长(每次显示的字符数) | `number` | `2`    |
| interval | 打字效果的时间间隔(毫秒)         | `number` | `50`   |
| suffix   | 光标字符                         | `string` | `'\|'` |

### FogConfig 配置

| 属性名  | 说明               | 类型     | 默认值         |
| ------- | ------------------ | -------- | -------------- |
| bgColor | 雾化效果的背景颜色 | `string` | 自动检测背景色 |
| width   | 雾化效果的宽度     | `string` | `'80px'`       |

## 事件

| 事件名  | 说明           | 回调参数                       |
| ------- | -------------- | ------------------------------ |
| start   | 开始打字时触发 | `instance: TypewriterInstance` |
| writing | 打字过程中触发 | `instance: TypewriterInstance` |
| finish  | 打字结束时触发 | `instance: TypewriterInstance` |

## 方法

通过 `ref` 获取组件实例后，可以调用以下方法：

| 方法名    | 说明             | 参数 |
| --------- | ---------------- | ---- |
| interrupt | 中断打字过程     | -    |
| continue  | 继续未完成的打字 | -    |
| restart   | 重新开始打字     | -    |
| destroy   | 销毁组件         | -    |

## TypewriterInstance 属性

| 属性名          | 说明                  | 类型                  |
| --------------- | --------------------- | --------------------- |
| renderedContent | 当前渲染的内容        | `ComputedRef<string>` |
| isTyping        | 是否正在打字          | `Ref<boolean>`        |
| progress        | 当前进度百分比(0-100) | `ComputedRef<number>` |

## 类型定义

```typescript
interface TypingConfig {
  step?: number
  interval?: number
  suffix?: string
}

interface FogConfig {
  bgColor?: string
  width?: string
}

interface XSSConfig {
  enable?: boolean
  options?: {
    ALLOWED_TAGS?: string[]
    ALLOWED_ATTR?: string[]
    [key: string]: any
  }
}

interface TypewriterProps {
  content?: string
  isMarkdown?: boolean
  typing?: boolean | TypingConfig
  isFog?: boolean | FogConfig
  highlight?: (code: string, language: string) => string
  mdPlugins?: any[]
  xss?: boolean | XSSConfig
}

interface TypewriterInstance {
  interrupt: () => void
  continue: () => void
  restart: () => void
  destroy: () => void
  renderedContent: { value: string }
  isTyping: { value: boolean }
  progress: { value: number }
}
```
