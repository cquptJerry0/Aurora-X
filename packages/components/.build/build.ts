/**
 * 组件库构建配置文件
 * 定义了组件库打包的各种选项和入口
 */
import { extname, join, relative, resolve } from 'node:path'
import type { BuildOptions } from 'vite'
import fg from 'fast-glob' // fast-glob 用于快速查找匹配的文件

// 定义根目录路径
const root = resolve(__dirname, '../')
/**
 * 组件库构建配置文件
 * 主要功能：
 * 1. 自动扫描并收集所有组件、hooks和工具函数
 * 2. 为每个文件生成独立的入口点
 * 3. 配置构建输出格式和路径
 */

// 使用 fast-glob 查找所有组件文件
const entries = fg.globSync('src/components/*/*.(tsx|ts|vue)', {
  // 排除类型定义文件
  ignore: [
    'src/components/**/*.d.ts',
    'src/components/**/*.types.ts',
  ],
})

// 查找所有 hooks 文件
const hooksEntries = fg.globSync('src/hooks/*.(ts|tsx)', {
  ignore: ['src/hooks/**/*.d.ts', 'src/hooks/**/*.types.ts'],
})

// 查找所有工具函数文件
const utilsEntries = fg.globSync('src/utils/*.(ts|tsx)', {
  ignore: ['src/utils/**/*.d.ts', 'src/utils/**/*.types.ts'],
})

/**
 * 转换组件文件路径为入口配置
 * 例如：
 * 输入: 'src/components/Button/index.vue'
 * 输出: { 'Button': '/absolute/path/to/Button/index.vue' }
 */
const entriesObj = Object.fromEntries(
  entries.map((f) => {
    return [
      relative(
        'src/components',
        f.slice(0, f.length - extname(f).length)
      ),
      join(root, f),
    ]
  })
)

/**
 * 转换 hooks 文件路径为入口配置
 * 例如：
 * 输入: 'src/hooks/useTheme.ts'
 * 输出: { 'hooks/useTheme': '/absolute/path/to/useTheme.ts' }
 */
const hooksEntriesObj = Object.fromEntries(
  hooksEntries.map((f) => {
    return [
      `hooks/${relative('src/hooks', f.slice(0, f.length - extname(f).length))}`,
      join(root, f),
    ]
  })
)

/**
 * 转换工具函数文件路径为入口配置
 * 例如：
 * 输入: 'src/utils/formatDate.ts'
 * 输出: { 'utils/formatDate': '/absolute/path/to/formatDate.ts' }
 */
const utilsEntriesObj = Object.fromEntries(
  utilsEntries.map((f) => {
    return [
      `utils/${relative('src/utils', f.slice(0, f.length - extname(f).length))}`,
      join(root, f),
    ]
  })
)

/**
 * 构建配置对象
 */
const buildConfig: BuildOptions = {
  lib: {
    name: 'AuroraX',
    entry: {
      // 主入口文件
      index: resolve(__dirname, '../src/index.ts'),
      // 组件统一入口
      components: resolve(__dirname, '../src/components.ts'),
      // 所有组件的独立入口
      ...entriesObj,
      // 所有hooks的独立入口
      ...hooksEntriesObj,
      // 所有utils的独立入口
      ...utilsEntriesObj,
    },
    // 输出文件命名规则
    fileName: (format, entryName) => `${format}/${entryName}.js`,
    // 仅构建ES模块格式
    formats: ['es'],
  },
  rollupOptions: {
    // 外部依赖，不打包进库
    external: ['vue', 'vue/jsx-runtime'],
    output: {
      globals: {
        vue: 'Vue',
      },
      // 使用命名导出
      exports: 'named',
      /**
       * 自定义资源文件（CSS）输出路径
       * 例如：
       * 输入: 'src/components/Button/index.vue'
       * 输出: 'es/Button/index.css'
       */
      assetFileNames: ((info: any) => {
        const srcName = info.originalFileNames[0]
        // 收集所有CSS内容以生成总文件
        if (info.name === 'style.css') {
          return 'index.css' // 总CSS文件输出到根目录
        }
        if (srcName) {
          if (srcName.includes('src/components/')) {
            const fileName = srcName
              .replace('src/components/', '')
              .replace('index.vue', 'index.css')
            return `es/${fileName}`
          }
        }
        return info.name
      }) as unknown as string,
    },
  },
  // 生成 sourcemap 用于调试
  sourcemap: true,
  // 使用 terser 压缩代码
  minify: 'terser',
  // 启用 CSS 代码分割
  cssCodeSplit: true,
  // 不清空输出目录，避免删除其他构建产物
  emptyOutDir: false,
}

export default buildConfig
