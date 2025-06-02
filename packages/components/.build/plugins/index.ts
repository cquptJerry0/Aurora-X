/**
 * Vite 插件集合文件
 * 整合并导出所有构建所需的 Vite 插件
 */
import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import autoImportPlugin from './autoImport'
import dtsPlugin from './dts'

import Components from 'unplugin-vue-components/vite'
// import prismjsPlugin from './prismjs'

/**
 * 插件配置数组
 * 按照特定顺序应用各插件
 */
const plugins: PluginOption[] = [
  // Vue 插件，支持 .vue 文件
  vue({
    script: {
      propsDestructure: true, // 启用 props 解构功能（实验性）
    },
  }),
  // prismjsPlugin, // 代码高亮插件（已注释）
  ...autoImportPlugin, // 自动导入 API 和组件
  dtsPlugin, // 类型定义生成
  libInjectCss(), // CSS 注入插件，确保组件样式正确打包
]

export default plugins
