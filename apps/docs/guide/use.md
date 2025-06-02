# 使用指南

## 自动导入配置

Aurora X 提供了组件自动导入的解析器，可以配合 `unplugin-vue-components` 使用。

### 1. 安装依赖

```bash
# 使用 pnpm 安装
pnpm add -D unplugin-vue-components
pnpm add aurora-x
```

### 2. 配置解析器

在 `vite.config.ts` 中添加以下配置：

```ts
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { AuroraXResolver } from 'aurora-x/resolver'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        AuroraXResolver({
          // 自定义前缀，默认为 'Au'
          prefix: 'Au',
          // 自定义包名，默认为 'aurora-x'
          packageName: 'aurora-x',
          // 排除不需要自动导入的组件
          exclude: []
        })
      ]
    })
  ]
})
```

### 3. 使用组件

配置完成后，你可以直接在模板中使用组件，无需手动导入：

```vue
<template>
  <!-- 使用带前缀的组件名 -->
  <AuBubble content="Hello World" />
  <AuTypewriter :text="text" />
</template>

<script setup>
// 无需手动导入组件
const text = ref('Hello World')
</script>
```

### 不使用前缀

如果你不想使用前缀，可以使用 `AuroraXNoPrefix` 解析器：

```ts
import { AuroraXNoPrefix } from 'aurora-x/resolver'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        AuroraXNoPrefix({
          packageName: 'aurora-x',
          exclude: []
        })
      ]
    })
  ]
})
```

然后可以直接使用原始组件名：

```vue
<template>
  <Bubble content="Hello World" />
  <Typewriter :text="text" />
</template>
``` 