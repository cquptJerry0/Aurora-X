import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'
import fs from 'fs-extra'
import sass from 'sass'

const tovDir = fileURLToPath(
  new URL('../packages/vue-aurora-x', import.meta.url)
)

const lessFiles = fg.sync(
  ['src/**/style/index.less', '!src/style'],
  {
    cwd: tovDir,
  }
)

async function complie() {
  for (const file of lessFiles) {
    const filePath = path.resolve(tovDir, file)
    const lessCode = fs.readFileSync(filePath, 'utf-8')
    const cssCode = sass.compile(lessCode)
    const esDir = path.resolve(
      tovDir,
      `./es${file.slice(3, file.length - 4)}` + 'css'
    )
    const libDir = path.resolve(
      tovDir,
      `./lib${file.slice(3, file.length - 4)}` + 'css'
    )
    fs.outputFileSync(esDir, cssCode.css)
    fs.outputFileSync(libDir, cssCode.css)
  }
}

async function moveLess() {
  const lessFiles = await fg(['src/**/style/**/*.scss'], {
    cwd: tovDir,
  })
  for (const file of lessFiles) {
    const filePath = path.resolve(tovDir, file)
    const lessCode = await fs.readFile(filePath, 'utf-8')
    const esDir = path.resolve(tovDir, `./es${file.slice(3)}`)
    const libDir = path.resolve(tovDir, `./lib${file.slice(3)}`)
    await fs.outputFile(esDir, lessCode)
    await fs.outputFile(libDir, lessCode)
  }
}
await complie()
await moveLess()
