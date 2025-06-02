import { BubbleProps } from '../Bubble/type';
import { CSSProperties } from 'vue';
// 触发索引的类型：只有最后一个、全部或自定义索引数组
export type TriggerIndices = 'only-last' | 'all' | number[]

// 气泡列表组件属性
export interface BubbleListProps<
  T extends BubbleProps = BubbleProps,
> {
  /**
   * 气泡项列表
   */
  list?: T[]

  /**
   * 列表最大高度
   * @default '500px'
   */
  maxHeight?: string

  /**
   * 触发完成事件的索引
   * 'only-last': 只有最后一个正在打字的气泡
   * 'all': 所有气泡
   * number[]: 自定义索引数组
   * @default 'only-last'
   */
  triggerIndices?: TriggerIndices

  /**
   * 是否始终显示滚动条
   * @default false
   */
  alwaysShowScrollbar?: boolean

  /**
   * 返回底部按钮阈值，超过此距离显示按钮
   * @default 80
   */
  backButtonThreshold?: number

  /**
   * 是否显示返回底部按钮
   * @default true
   */
  showBackButton?: boolean

  /**
   * 返回底部按钮位置
   * @default { bottom: '20px', left: 'calc(50% - 19px)' }
   */
  backButtonPosition?: {
    bottom: string
    left: string
  }

  /**
   * 按钮是否显示加载动画
   * @default true
   */
  btnLoading?: boolean

  /**
   * 按钮颜色
   * @default '#409EFF'
   */
  btnColor?: string

  /**
   * 按钮图标大小
   * @default 24
   */
  btnIconSize?: number
}
