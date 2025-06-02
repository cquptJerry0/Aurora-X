/**
 * Prism.js 代码高亮插件配置
 * 为代码块提供语法高亮功能
 * 主要用于文档和示例中的代码展示
 */
import type { PluginOption } from 'vite'
import prismjsPlugin from 'vite-plugin-prismjs'

export default prismjsPlugin({
  languages: 'all', // 支持所有编程语言的语法高亮
  theme: 'default', // 使用默认主题
  // theme: 'okaidia', // 另一种主题选项
  // plugins: ['line-numbers', 'show-language', 'copy-to-clipboard', 'inline-color'], // 额外插件
  // css: true, // 是否包含 CSS
}) as PluginOption
