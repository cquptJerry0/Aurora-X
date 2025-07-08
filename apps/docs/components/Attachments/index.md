# Attachments 附件组件

Attachments 组件提供一个灵活的文件附件展示容器，支持多种布局方式和拖拽上传功能。

## 功能特点

- 📝 多种布局模式 - 支持水平滚动、垂直滚动和换行布局
- 🚀 拖拽上传 - 内置拖拽区域上传文件功能
- 🔄 自适应渐变 - 滚动边界智能渐变效果
- 📊 文件列表 - 灵活的文件卡片展示系统
- 🎛️ 自定义限制 - 可设置上传数量限制

## 基础用法

```vue
<script setup>
import { ref } from 'vue'

const attachmentList = ref([
  {
    uid: '1',
    name: '设计文档.pdf',
    description: '项目设计文档',
  },
  {
    uid: '2',
    name: '需求说明.docx',
    description: '项目需求文档',
  },
])

function handleFileDrop(files) {
  // 处理文件拖拽上传
}

function handleUploadClick() {
  // 处理点击上传按钮事件
}

function handleDeleteFile(file, index) {
  // 处理删除文件事件
}
</script>

<template>
  <au-attachments
    :items="attachmentList"
    overflow="scrollX"
    @upload-drop="handleFileDrop"
    @upload-change="handleUploadClick"
    @delete-file="handleDeleteFile"
  />
</template>
```

## 示例

<demo src="../../demos/Attachment.vue" />

## 属性

| 属性名     | 说明             | 类型                               | 默认值      |
| ---------- | ---------------- | ---------------------------------- | ----------- |
| items      | 文件列表         | `AttachmentItem[]`                 | `[]`        |
| overflow   | 布局模式         | `'scrollX' \| 'scrollY' \| 'wrap'` | `'scrollX'` |
| listStyle  | 列表容器样式     | `Record<string, string>`           | `{}`        |
| limit      | 文件数量限制     | `number \| undefined`              | `undefined` |
| hideUpload | 是否隐藏上传按钮 | `boolean`                          | `false`     |
| dragTarget | 拖拽上传区域目标 | `string \| HTMLElement \| null`    | `null`      |

## 事件

| 事件名       | 说明               | 回调参数                                        |
| ------------ | ------------------ | ----------------------------------------------- |
| uploadDrop   | 拖拽上传文件时触发 | `(files: File[]) => void`                       |
| uploadChange | 点击上传按钮时触发 | `() => void`                                    |
| deleteFile   | 删除文件时触发     | `(file: AttachmentItem, index: number) => void` |

## 插槽

| 名称          | 说明           | 参数                          |
| ------------- | -------------- | ----------------------------- |
| empty-upload  | 空状态上传按钮 | -                             |
| file-list     | 自定义文件列表 | `{ items: AttachmentItem[] }` |
| append-upload | 附加上传按钮   | -                             |

## 类型定义

```typescript
interface AttachmentItem {
  uid: string
  name: string
  url?: string
  description?: string
  [key: string]: any
}

interface AttachmentsProps {
  items?: AttachmentItem[]
  overflow?: 'scrollX' | 'scrollY' | 'wrap'
  listStyle?: Record<string, string>
  limit?: number
  hideUpload?: boolean
  dragTarget?: string | HTMLElement | null
}
```
