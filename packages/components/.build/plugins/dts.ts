/**
 * TypeScript 类型定义生成插件配置
 * 使用 vite-plugin-dts 自动生成类型定义文件 (.d.ts)
 */
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

/**
 * 导出 DTS 插件配置
 * - outDir: 输出类型定义的目录
 * - tsconfigPath: TypeScript 配置文件路径
 * - copyDtsFiles: 是否复制已有的 .d.ts 文件
 * - exclude: 排除的文件
 */
export default dts({
  outDir: 'types', // 输出目录，类型文件会生成到 types/ 目录
  tsconfigPath: resolve(__dirname, '../../tsconfig.app.json'), // tsconfig 路径
  copyDtsFiles: true, // 复制已有的类型定义文件
  exclude: ['dom-speech-recognition-env.d.ts', 'vite-env.d.ts'], // 排除环境声明文件
})
