import { TypingConfig, XSSConfig } from '../Typewriter/type'
export interface BubbleProps {
  /**
   * 气泡内容
   */
  content?: string
  /**
   * 推理内容
   */
  reasoning_content?: string
  /**
   * 气泡位置
   * @default 'start'
   */
  placement?: 'start' | 'end'
  /**
   * 头像图片URL
   */
  avatar?: string
  /**
   * 气泡变体风格
   * @default 'filled'
   */
  variant?: 'filled' | 'borderless' | 'outlined' | 'shadow'
  /**
   * 气泡最大宽度
   * @default '500px'
   */
  maxWidth?: string
  /**
   * 头像大小
   */
  avatarSize?: string
  /**
   * 头像间距
   * @default '12px'
   */
  avatarGap?: string
  /**
   * 头像形状
   * @default 'circle'
   */
  avatarShape?: 'circle' | 'square'
  /**
   * 头像图标
   */
  avatarIcon?: string
  /**
   * 头像SRC集合
   */
  avatarSrcSet?: string
  /**
   * 头像alt文本
   */
  avatarAlt?: string
  /**
   * 头像适应方式
   * @default 'cover'
   */
  avatarFit?: string
  /**
   * 是否正在加载
   */
  loading?: boolean
  /**
   * 是否启用无样式模式
   * @default false
   */
  noStyle?: boolean
  /**
   * 是否启用Markdown解析
   * @default false
   */
  isMarkdown?: boolean
  /**
   * 是否启用雾化效果
   */
  isFog?: boolean
  /**
   * 气泡形状
   */
  shape?: 'corner' | 'round'
  /**
   * 是否启用打字效果
   */
  typing?: boolean | TypingConfig
  /**
   * XSS安全配置
   * 控制内容过滤和安全策略
   * @default { enable: true }
   */
  xss?: boolean | XSSConfig
}
