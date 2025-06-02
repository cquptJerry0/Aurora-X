# BubbleList 气泡列表组件

BubbleList 组件提供了一个用于展示对话气泡列表的容器，支持自动滚动和返回底部功能。

## 功能特点

- 🔄 自动滚动 - 新消息自动滚动到底部
- 🖱️ 智能交互 - 用户向上滚动时自动暂停自动滚动
- ⬇️ 返回底部 - 内置返回底部按钮
- 📱 响应式设计 - 适配各种屏幕尺寸
- 🎭 事件触发 - 可配置的消息完成事件触发机制

## 基础用法

```vue
<template>
  <au-bubble-list
    :list="messageList"
    max-height="600px"
    @complete="handleComplete"
  />
</template>

<script setup>
import { ref } from 'vue'

const messageList = ref([
  {
    content: '你好，这是第一条消息',
    placement: 'start',
    avatar: '/avatar1.jpg',
  },
  {
    content: '你好，这是回复消息',
    placement: 'end',
    avatar: '/avatar2.jpg',
  },
  {
    content: '这是带打字效果的消息',
    placement: 'start',
    avatar: '/avatar1.jpg',
    typing: true,
  },
])

function handleComplete(instance, index) {
  console.log(`消息 ${index} 完成显示`)
}
</script>
```

## 属性

| 属性名              | 说明                 | 类型                               | 默认值                                         |
| ------------------- | -------------------- | ---------------------------------- | ---------------------------------------------- |
| list                | 气泡项列表           | `BubbleProps[]`                    | `[]`                                           |
| maxHeight           | 列表最大高度         | `string`                           | `'500px'`                                      |
| triggerIndices      | 触发完成事件的索引   | `'only-last' \| 'all' \| number[]` | `'only-last'`                                  |
| alwaysShowScrollbar | 是否始终显示滚动条   | `boolean`                          | `false`                                        |
| backButtonThreshold | 返回底部按钮阈值     | `number`                           | `80`                                           |
| showBackButton      | 是否显示返回底部按钮 | `boolean`                          | `true`                                         |
| backButtonPosition  | 返回底部按钮位置     | `{ bottom: string, left: string }` | `{ bottom: '20px', left: 'calc(50% - 19px)' }` |
| btnLoading          | 按钮是否显示加载动画 | `boolean`                          | `true`                                         |
| btnColor            | 按钮颜色             | `string`                           | `'#409EFF'`                                    |
| btnIconSize         | 按钮图标大小         | `number`                           | `24`                                           |

## 事件

| 事件名   | 说明                   | 回调参数                                                |
| -------- | ---------------------- | ------------------------------------------------------- |
| complete | 气泡打字效果完成时触发 | `(instance: TypewriterInstance, index: number) => void` |

## 方法

| 方法名         | 说明           | 参数                      |
| -------------- | -------------- | ------------------------- |
| scrollToTop    | 滚动到顶部     | -                         |
| scrollToBottom | 滚动到底部     | -                         |
| scrollToBubble | 滚动到指定气泡 | `(index: number) => void` |

## 插槽

| 名称         | 说明               | 参数                    |
| ------------ | ------------------ | ----------------------- |
| backToBottom | 自定义返回底部按钮 | -                       |
| default      | 气泡默认插槽       | `{ item: BubbleProps }` |

## 类型定义

```typescript
type TriggerIndices = 'only-last' | 'all' | number[]

interface BubbleListProps<T extends BubbleProps = BubbleProps> {
  list?: T[]
  maxHeight?: string
  triggerIndices?: TriggerIndices
  alwaysShowScrollbar?: boolean
  backButtonThreshold?: number
  showBackButton?: boolean
  backButtonPosition?: {
    bottom: string
    left: string
  }
  btnLoading?: boolean
  btnColor?: string
  btnIconSize?: number
}
```
