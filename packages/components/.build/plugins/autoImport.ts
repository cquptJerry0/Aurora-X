/**
 * 自动导入插件配置
 * 配置两个插件：
 * 1. AutoImport - 自动导入 API，无需手动 import
 * 2. Components - 自动导入组件，无需注册
 */
import type { PluginOption } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

const plugins: PluginOption[] = [
  // 自动导入 Vue 相关 API
  AutoImport({
    imports: ['vue'], // 自动导入 Vue 的 ref, reactive 等 API
    ignore: ['h'], // 忽略 h 函数，避免与自定义 h 函数冲突
    resolvers: [ElementPlusResolver()], // Element Plus 组件解析器
    dts: 'src/auto-import.d.ts', // 生成类型定义文件
  }) as PluginOption,
  // 自动注册组件
  Components({
    resolvers: [ElementPlusResolver()],
  }) as PluginOption,
]

export default plugins
