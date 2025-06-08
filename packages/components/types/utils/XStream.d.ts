/**
 * XStream - 高效处理流式数据的工具库
 *
 * 主要用于处理服务器发送事件(SSE)和其他流式数据格式
 * 支持二进制数据流到结构化对象的转换、流的中断和异步迭代
 */
/**
 * SSE字段类型定义
 * 符合SSE规范的四种标准字段
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format
 */
export type SSEFields = 'data' | 'event' | 'id' | 'retry'
/**
 * SSE输出对象类型
 * 例如: { event: "delta", data: '{"content":"hello"}' }
 */
export type SSEOutput = Partial<Record<SSEFields, any>>
/**
 * XStream选项接口
 * 定义流处理的各种配置项
 */
export interface XStreamOptions<Output = SSEOutput> {
  /**
   * 二进制数据可读流
   * 通常来自fetch API的response.body
   * @example const response = await fetch(url); options.readableStream = response.body;
   */
  readableStream: ReadableStream<Uint8Array>
  /**
   * 自定义转换流，用于处理特定格式数据
   * 若不提供，则使用默认的SSE解析流程
   * @default 使用SSE解析流(createSplitStream + createPartParser)
   */
  transformStream?: TransformStream<string, Output>
  /**
   * 自定义流分隔符 - 用于分割不同事件
   * 在SSE中，双换行符用于分隔不同事件
   * @default '\n\n'
   */
  streamSeparator?: string
  /**
   * 自定义部分分隔符 - 用于分割事件内的不同行
   * 在SSE中，单个换行符用于分隔事件内的字段
   * @default '\n'
   */
  partSeparator?: string
  /**
   * 自定义键值分隔符 - 用于分割字段名和值
   * 在SSE中，冒号用于分隔字段名和字段值
   * @default ':'
   */
  kvSeparator?: string
  /**
   * 错误处理选项
   * 当流处理过程中发生错误时的回调函数
   * @default console.error
   */
  errorHandler?: (error: Error) => void
}
/**
 * 扩展的ReadableStream，支持异步迭代和中断控制
 * 在标准ReadableStream基础上添加了更多功能
 */
export interface XReadableStream<T = SSEOutput>
  extends ReadableStream<T> {
  /**
   * 异步迭代器方法，支持for await...of语法
   * @example for await (const event of stream) { ... }
   */
  [Symbol.asyncIterator]: () => AsyncGenerator<T>
  /**
   * 流读取器引用，用于内部管理
   */
  reader?: ReadableStreamDefaultReader<T>
  /**
   * 取消流的处理方法
   * @returns Promise<void>
   */
  cancel: () => Promise<void>
}
/**
 * XStream - 通用流处理函数
 * 将二进制流数据转换为结构化对象的完整流程
 *
 * 数据转换完整流程:
 * 1. [二进制流(Uint8Array)] - 从网络请求中获取的原始数据
 * 2. → TextDecoder → [UTF-8文本流(string)]
 * 3. → createSplitStream → [分割后的文本块(string)]
 * 4. → createPartParser → [结构化对象(SSEOutput)]
 *
 * @param options 流处理选项
 * @param signal 可选的中断信号，用于取消流处理
 * @returns 处理后的可读流，支持异步迭代
 */
export declare function XStream<Output = SSEOutput>(
  options: XStreamOptions<Output>,
  signal?: AbortSignal
): XReadableStream<Output>
