import { type Ref } from 'vue'

/**
 * 雾化效果和背景色处理钩子
 * 用于自动检测和适配容器背景色，应用于打字机雾化效果
 *
 * @param elementRef - 要应用雾化效果的元素引用
 * @param containerRef - 父容器元素引用
 * @returns 雾化效果处理方法
 */
export function useFogEffect(
  elementRef: Ref<HTMLElement | null>,
  containerRef?: Ref<HTMLElement | null>
) {
  /**
   * 获取元素背景色
   * 检测并排除透明背景
   * @param element - 要获取背景色的DOM元素
   * @returns 背景色值或null(透明时)
   */
  function getBackgroundColor(
    element: HTMLElement | null
  ): string | null {
    if (!element) return null

    const color = getComputedStyle(element).backgroundColor
    // 检查是否为透明背景
    const isTransparent =
      color === 'rgba(0, 0, 0, 0)' ||
      color === 'transparent' ||
      color === 'initial'

    return isTransparent ? null : color
  }

  /**
   * 更新雾化背景颜色
   * 自动检测并使用父级容器的背景色
   */
  function updateFogColor(): void {
    // 确保在浏览器环境(非SSR)并且引用有效
    if (typeof window === 'undefined' || !elementRef.value)
      return

    // 优先尝试自身背景色
    let bgColor = getBackgroundColor(elementRef.value)

    // 如果自身无背景色，尝试容器背景色
    if (!bgColor && containerRef?.value) {
      bgColor = getBackgroundColor(containerRef.value)
    }

    // 如果仍未找到，尝试查找特定父级容器
    if (!bgColor) {
      // 尝试查找气泡内容容器
      const bubbleContent = document.querySelector(
        '.au-bubble-content'
      ) as HTMLElement | null
      bgColor = getBackgroundColor(bubbleContent)

      // 如果仍未找到，尝试查找气泡容器
      if (!bgColor) {
        const bubble = document.querySelector(
          '.au-bubble'
        ) as HTMLElement | null
        bgColor = getBackgroundColor(bubble)
      }
    }

    // 将找到的背景色设为CSS变量
    if (bgColor && elementRef.value) {
      elementRef.value.style.setProperty(
        '--au-fill-color',
        bgColor
      )
    }
  }

  return {
    updateFogColor,
    getBackgroundColor,
  }
}
