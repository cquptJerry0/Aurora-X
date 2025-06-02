import fs from 'node:fs/promises'
import path from 'node:path'
import fg from 'fast-glob'

async function generateImports() {
  const cssFiles = await fg('dist/es/**/*.css')

  // 创建相对路径的@import语句
  const imports = cssFiles
    .map((file) => {
      const relativePath = file.replace('dist/', './')
      return `@import '${relativePath}';`
    })
    .join('\n')

  // 写入index.css
  await fs.writeFile('dist/index.css', imports)
  console.log('已生成index.css (使用@import语法)')
}

generateImports()
