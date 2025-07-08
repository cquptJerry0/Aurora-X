/**
 * 自动导出所有组件脚本
 * 扫描 components 目录，自动生成导出和安装文件
 * 生成三个文件：
 * 1. components.ts - 导出所有组件，供按需引入
 * 2. index.ts - Vue插件入口，支持全局安装所有组件
 */
// build/scripts/generate-auto-entry.ts
import path from 'node:path'
import { cwd, exit } from 'node:process'
import fs from 'fs-extra'

/**
 * 组件信息接口
 * @property name 组件名称（驼峰式）
 * @property path 组件相对路径
 */
interface ComponentInfo {
  name: string
  path: string
}

/**
 * 工具函数信息接口
 * @property name 工具函数名称
 * @property path 工具函数相对路径
 */
interface UtilInfo {
  name: string
  path: string
}

/**
 * 生成自动导出文件
 * 扫描 components 和 utils 目录下的文件并生成导出和安装文件
 */
async function generateAutoEntry() {
  // 组件目录路径
  const componentsDir = path.resolve(cwd(), 'src/components')
  const components: ComponentInfo[] = []

  // 扫描组件目录
  if (await fs.exists(componentsDir)) {
    const dirs = await fs.readdir(componentsDir)

    for (const dir of dirs) {
      const compPath = path.join(componentsDir, dir, 'index.vue')
      if (await fs.exists(compPath)) {
        // 将目录名转换为驼峰命名的组件名
        // 例如：my-component -> MyComponent
        const compName = dir.replace(/(^\w|-\w)/g, (m: string) =>
          m.replace('-', '').toUpperCase()
        )

        components.push({
          name: compName,
          path: `./components/${dir}/index.vue`,
        })
      }
    }
  }
  // 生成组件导出文件内容
  // 格式: export { default as Component } from './components/component/index.vue'
  const entryContent = [
    '// Auto-Aurora-X by auto-export-all-components script',
    ...components.map(
      (c) => `export { default as ${c.name} } from '${c.path}'`
    ),
    '',
  ].join('\n')

  // 生成插件安装文件内容
  // 创建Vue插件，注册所有组件为全局组件
  const installContent = [
    "import type { App, Plugin } from 'vue'",
    // 'import { APP_CONFIG_PROVIDE_KEY, defaultAppConfig } from \'./context/constants\'',
    ...components.map(
      (c) => `import ${c.name} from '${c.path}'`
    ),
    '',
    "export * from './components'", // 导出所有组件
    "export * from './hooks'", // 导出所有钩子
    "export * from './utils'", // 导出所有工具函数
    '',
    'const AuroraX: Plugin = {',
    '  install(app: App) {',
    // '    app.provide(APP_CONFIG_PROVIDE_KEY, defaultAppConfig)',
    // 注册所有组件为全局组件
    ...components.map(
      (c) => `    app.component('${c.name}', ${c.name})`
    ),
    '  }',
    '}',
    '',
    'export default AuroraX',
  ].join('\n')

  // 写入文件
  const outputDir = path.resolve(cwd(), 'src')

  try {
    await fs.ensureDir(outputDir)
    await fs.writeFile(
      path.join(outputDir, 'components.ts'),
      entryContent
    )
    await fs.writeFile(
      path.join(outputDir, 'index.ts'),
      installContent
    )
    console.log('✅ Auto entry files generated successfully!')
  } catch (error) {
    console.error('❌ Error generating auto-entry files:', error)
    exit(1)
  }
}

// 执行生成
void generateAutoEntry()
