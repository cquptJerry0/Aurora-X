import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'
import type { XSSConfig } from '../type'

/**
 * Markdown渲染和配置管理钩子
 * 提供高度可配置的Markdown渲染功能
 *
 * @param options - Markdown配置选项
 * @returns Markdown相关方法和属性
 */
export function useMarkdown(
  options: {
    highlight?: (code: string, lang: string) => string
    plugins?: any[]
    xss?: boolean | XSSConfig
  } = {}
) {
  // 创建MarkdownIt实例
  const md = new MarkdownIt({
    html: true, // 允许HTML标签
    linkify: true, // 将URL文本转为链接
    typographer: true, // 启用排版功能
    breaks: true, // 将换行符转为<br>
    highlight: options.highlight, // 代码高亮处理函数
  })

  /**
   * 初始化Markdown插件
   * @param plugins - 要应用的插件数组
   */
  function applyPlugins(plugins: any[] = []) {
    if (plugins.length) {
      plugins.forEach((plugin) => {
        md.use(plugin)
      })
    }
  }

  // 应用传入的插件
  if (options.plugins) {
    applyPlugins(options.plugins)
  }

  /**
   * 处理XSS配置选项，确定是否启用过滤及过滤规则
   * @returns 配置对象或false(禁用过滤)
   */
  function getXssOptions() {
    // 默认启用XSS过滤
    if (options.xss === undefined) {
      return {}
    }

    // 如果传入false则禁用XSS过滤
    if (options.xss === false) {
      return false
    }

    // 如果传入true则使用默认配置
    if (options.xss === true) {
      return {}
    }

    // 如果明确禁用XSS过滤
    if (options.xss.enable === false) {
      return false
    }

    // 返回自定义配置项
    return options.xss.options || {}
  }

  /**
   * 渲染Markdown内容并根据配置进行XSS净化
   * @param content - 要渲染的Markdown文本
   * @returns 渲染后的HTML字符串
   */
  function renderMarkdown(content: string): string {
    if (!content) return ''

    const rendered = md.render(content)
    const xssOptions = getXssOptions()

    // 如果xssOptions为false，禁用XSS过滤
    if (xssOptions === false) {
      return rendered
    }

    // 否则应用DOMPurify过滤
    return DOMPurify.sanitize(rendered, xssOptions)
  }

  return {
    md,
    applyPlugins,
    render: renderMarkdown,
  }
}
