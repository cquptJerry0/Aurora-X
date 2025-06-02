import type MarkdownIt from 'markdown-it'
// types.ts
import type { ComputedRef, Ref } from 'vue'
import type { MarkdownItPlugin } from '../Config/type'
import type { HighlightFunction } from '../../utils/usePrism'

/**
 * 打字效果配置项
 */
export interface TypingConfig {
  /**
   * 每次打字的步长(每次显示的字符数)
   * @default 2
   */
  step?: number
  /**
   * 打字效果的时间间隔(毫秒)
   * @default 50
   */
  interval?: number
  /**
   * 光标字符
   * @default '|'
   * @note 在Markdown模式下会被强制设为空字符串
   */
  suffix?: string
}

/**
 * 雾化效果配置项
 */
export interface FogConfig {
  /**
   * 雾化效果的背景颜色
   * @default 自动检测背景色
   */
  bgColor?: string
  /**
   * 雾化效果的宽度
   * @default '80px'
   */
  width?: string
}

/**
 * XSS安全配置选项
 */
export interface XSSConfig {
  /**
   * 是否启用XSS过滤
   * @default true
   */
  enable?: boolean

  /**
   * DOMPurify配置选项
   * 允许自定义XSS过滤规则
   * @see https://github.com/cure53/DOMPurify#can-i-configure-dompurify
   */
  options?: {
    /**
     * 允许的HTML标签列表
     */
    ALLOWED_TAGS?: string[]

    /**
     * 允许的HTML属性列表
     */
    ALLOWED_ATTR?: string[]

    /**
     * 是否保留所有元素内容
     * @default false
     */
    KEEP_CONTENT?: boolean

    /**
     * 其他DOMPurify支持的选项
     */
    [key: string]: any
  }
}

/**
 * Typewriter组件属性
 */
export interface TypewriterProps {
  /**
   * 要显示的内容
   */
  content?: string
  /**
   * 是否启用Markdown解析
   * @default false
   */
  isMarkdown?: boolean
  /**
   * 是否启用或配置打字效果
   * @default false
   */
  typing?: boolean | TypingConfig
  /**
   * 是否启用或配置雾化效果
   * @default false
   */
  isFog?: boolean | FogConfig
  /**
   * 代码高亮函数
   */
  highlight?: HighlightFunction
  /**
   * Markdown插件列表
   */
  mdPlugins?: any[]
  /**
   * XSS安全配置
   * 控制内容过滤和安全策略
   * @default { enable: true }
   */
  xss?: boolean | XSSConfig
}

/**
 * Typewriter组件实例
 */
export interface TypewriterInstance {
  /**
   * 中断打字效果
   */
  interrupt: () => void
  /**
   * 继续打字效果
   */
  continue: () => void
  /**
   * 重新开始打字效果
   */
  restart: () => void
  /**
   * 销毁打字效果
   */
  destroy: () => void
  /**
   * 渲染后的内容
   */
  renderedContent: { value: string }
  /**
   * 是否正在打字
   */
  isTyping: { value: boolean }
  /**
   * 打字进度(0-100)
   */
  progress: { value: number }
}
