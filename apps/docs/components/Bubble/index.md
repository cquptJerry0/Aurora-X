# Bubble 气泡组件

Bubble 组件提供了一个用于展示对话气泡的组件，支持多种样式变体和打字机效果。

## 功能特点

- 💬 多样化气泡 - 支持多种气泡变体和形状
- 👤 头像配置 - 灵活的头像展示和自定义

## 基础用法

```vue
<template>
  <au-bubble
    content="这是一条消息内容"
    placement="start"
    avatar="/path/to/avatar.jpg"
    variant="filled"
  />
</template>
```

## 属性

| 属性名            | 说明                 | 类型                                                 | 默认值     |
| ----------------- | -------------------- | ---------------------------------------------------- | ---------- |
| content           | 气泡内容             | `string`                                             | -          |
| reasoning_content | 推理内容             | `string`                                             | -          |
| placement         | 气泡位置             | `'start' \| 'end'`                                   | `'start'`  |
| avatar            | 头像图片URL          | `string`                                             | -          |
| variant           | 气泡变体风格         | `'filled' \| 'borderless' \| 'outlined' \| 'shadow'` | `'filled'` |
| maxWidth          | 气泡最大宽度         | `string`                                             | `'500px'`  |
| avatarSize        | 头像大小             | `string`                                             | -          |
| avatarGap         | 头像间距             | `string`                                             | `'12px'`   |
| avatarShape       | 头像形状             | `'circle' \| 'square'`                               | `'circle'` |
| avatarIcon        | 头像图标             | `string`                                             | -          |
| avatarSrcSet      | 头像SRC集合          | `string`                                             | -          |
| avatarAlt         | 头像alt文本          | `string`                                             | -          |
| avatarFit         | 头像适应方式         | `string`                                             | `'cover'`  |
| loading           | 是否正在加载         | `boolean`                                            | `false`    |
| noStyle           | 是否启用无样式模式   | `boolean`                                            | `false`    |
| isMarkdown        | 是否启用Markdown解析 | `boolean`                                            | `false`    |
| isFog             | 是否启用雾化效果     | `boolean`                                            | `false`    |
| shape             | 气泡形状             | `'corner' \| 'round'`                                | -          |
| typing            | 是否启用打字效果     | `boolean \| TypingConfig`                            | `false`    |
| xss               | XSS安全配置          | `boolean \| XSSConfig`                               | `true`     |

## 事件

| 事件名 | 说明               | 回调参数                                 |
| ------ | ------------------ | ---------------------------------------- |
| finish | 打字效果完成时触发 | `(instance: TypewriterInstance) => void` |

## 类型定义

```typescript
interface BubbleProps {
  content?: string
  reasoning_content?: string
  placement?: 'start' | 'end'
  avatar?: string
  variant?: 'filled' | 'borderless' | 'outlined' | 'shadow'
  maxWidth?: string
  avatarSize?: string
  avatarGap?: string
  avatarShape?: 'circle' | 'square'
  avatarIcon?: string
  avatarSrcSet?: string
  avatarAlt?: string
  avatarFit?: string
  loading?: boolean
  noStyle?: boolean
  isMarkdown?: boolean
  isFog?: boolean
  shape?: 'corner' | 'round'
  typing?: boolean | TypingConfig
  xss?: boolean | XSSConfig
}
```
