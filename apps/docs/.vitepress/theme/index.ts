import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'
import DefaultTheme from 'vitepress/theme'

// 导入组件库
// 导入样式

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // ...
    // app.use(AuroraX)
    app.component('demo', AntdTheme)
  },
}
