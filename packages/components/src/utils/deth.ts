/**
 * 防抖函数
 * 在指定时间内多次触发同一函数，只执行最后一次调用
 *
 * @param fn 需要防抖的函数
 * @param delay 延迟时间(毫秒)
 * @param immediate 是否在触发事件后立即执行函数(true)，或者等到延迟结束后才执行(false)
 * @returns 防抖处理后的函数
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300,
  immediate: boolean = false
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null
  let isInvoked = false // 记录是否已经执行过(用于立即执行模式)

  return function (this: any, ...args: Parameters<T>): void {
    const context = this

    // 如果已经有定时器，清除它
    if (timer !== null) {
      clearTimeout(timer)
    }

    // 立即执行模式
    if (immediate && !isInvoked) {
      fn.apply(context, args)
      isInvoked = true
      timer = setTimeout(() => {
        isInvoked = false
      }, delay)
      return
    }

    // 常规模式：设置延迟执行
    timer = setTimeout(() => {
      fn.apply(context, args)
      timer = null
      isInvoked = false
    }, delay)
  }
}

/**
 * 节流函数
 * 在指定时间内多次触发同一函数，按照固定频率执行
 *
 * @param fn 需要节流的函数
 * @param delay 执行间隔(毫秒)
 * @param options 附加选项
 * @returns 节流处理后的函数
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300,
  options: { leading?: boolean; trailing?: boolean } = {}
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null
  let lastArgs: Parameters<T> | null = null
  const { leading = true, trailing = true } = options

  return function (this: any, ...args: Parameters<T>): void {
    const context = this

    // 如果没有定时器且设置了首次触发，则立即执行
    if (!timer && leading) {
      fn.apply(context, args)
    } else {
      lastArgs = args // 保存参数以便延迟执行时使用
    }

    // 如果已有定时器，不做任何处理
    if (timer) {
      return
    }

    // 设置定时器
    timer = setTimeout(() => {
      if (trailing && lastArgs) {
        fn.apply(context, lastArgs)
      }
      timer = null
      lastArgs = null
    }, delay)
  }
}
