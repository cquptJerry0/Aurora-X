/**
 * 防抖函数
 * 在指定时间内多次触发同一函数，只执行最后一次调用
 *
 * @param fn 需要防抖的函数
 * @param delay 延迟时间(毫秒)
 * @param immediate 是否在触发事件后立即执行函数(true)，或者等到延迟结束后才执行(false)
 * @returns 防抖处理后的函数
 */
export declare function debounce<T extends (...args: any[]) => any>(fn: T, delay?: number, immediate?: boolean): (...args: Parameters<T>) => void;
/**
 * 节流函数
 * 在指定时间内多次触发同一函数，按照固定频率执行
 *
 * @param fn 需要节流的函数
 * @param delay 执行间隔(毫秒)
 * @param options 附加选项
 * @returns 节流处理后的函数
 */
export declare function throttle<T extends (...args: any[]) => any>(fn: T, delay?: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): (...args: Parameters<T>) => void;
