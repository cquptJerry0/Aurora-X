import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
// @ts-expect-error eslint-plugin-vite 类型定义不完整
import eslintPlugin from 'vite-plugin-eslint'
// 导入demo插件
import vitepressDemo from 'vite-plugin-vitepress-demo'
import { tovUIResolver } from './scripts/vue-aurora-x-resolver'

// 获取当前工作目录的绝对路径
const baseUrl = path.resolve('.')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue'],
      ignore: ['h', 'ClientOnly'],
      resolvers: [
        ElementPlusResolver({
          exclude: /ElButtonGroup/, // 忽略自动导入 ElButtonGroup
        }),
      ],
    }),
    Components({
      // 指定组件位置，首先检查 node_modules 中的 vue-aurora-x
      dirs: ['../node_modules/vue-aurora-x/dist', 'components'],
      // 指定组件的后缀名
      extensions: ['vue'],
      // 配置组件的解析器 - 首先使用 tovUIResolver
      resolvers: [tovUIResolver(), ElementPlusResolver()],
      // 生成 components.d.ts 类型声明文件
      dts: true,
      // 强制包含的组件，优先从 tovUIResolver 解析
      include: [/^A[A-Z]/, /^Bubble/, /^Button/],
      // 排除本地 demos 目录中的组件
      exclude: [/.*\/demos\/.*/],
    }),
    vitepressDemo({
      // 我们让他自动搜索，我们所有项目中的demos下的vue文件
      // glob: ['**/demos/*.vue'],
    }),
    eslintPlugin({
      include: [
        'packages/**/*.js',
        'packages/**/*.vue',
        'packages/**/*.ts',
      ], // 根据你的项目结构调整路径
      exclude: [
        '**/node_modules/**',
        '**/.gitignore',
        '**/dist/**',
        '**/cache/**',
      ],
    }),
    ElementPlus({}),
  ],
  // 使用别名，确保可以直接导入组件库
  resolve: {
    alias: [
      {
        find: /^vue-aurora-x$/,
        replacement: path.resolve(
          baseUrl,
          'node_modules/vue-aurora-x'
        ),
      },
      {
        find: /^vue-aurora-x\/(.*)$/,
        replacement: path.resolve(
          baseUrl,
          'node_modules/vue-aurora-x/$1'
        ),
      },
    ],
  },
})
