# XStream 流式数据处理工具

XStream 是一个高效处理流式数据的工具库，主要用于处理服务器发送事件(SSE)和其他流式数据格式。

## 功能特点

- 🌊 流式解析 - 高效处理二进制流和文本流数据
- 🔄 SSE 支持 - 原生支持服务器发送事件(SSE)格式解析
- ⏹️ 中断控制 - 支持随时中断和取消流处理
- 🔄 异步迭代 - 支持 `for await...of` 语法的异步迭代
- 🔌 可扩展性 - 支持自定义转换流和分隔符
- 🛡️ 错误处理 - 内置错误捕获和处理机制

## 基础用法

### 处理 SSE 流数据

```typescript
import { XStream } from 'aurora-x'

async function handleSSEStream() {
  // 发起流式请求
  const response = await fetch(
    'https://api.example.com/events',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: '你好，请继续对话' }),
    }
  )

  // 检查响应状态
  if (!response.ok || !response.body) {
    throw new Error('请求失败')
  }

  // 创建中断控制器
  const controller = new AbortController()

  // 初始化 XStream
  const stream = XStream(
    {
      readableStream: response.body,
      errorHandler: (error) =>
        console.error('流处理错误:', error),
    },
    controller.signal
  )

  try {
    // 使用异步迭代器处理流数据
    for await (const event of stream) {
      // 处理每个事件
      if (event.event === 'delta' && event.data) {
        const data = JSON.parse(event.data)
        console.log('收到内容:', data.content)
      }

      // 条件性中断流
      if (someCondition) {
        controller.abort()
        break
      }
    }
  } catch (error) {
    console.error('处理流时发生错误:', error)
  }
}
```

### 自定义转换流

```typescript
import { XStream, type XStreamOptions } from 'aurora-x'

// 创建自定义转换流
const customTransformer = new TransformStream<
  string,
  CustomOutput
>({
  transform(chunk, controller) {
    // 自定义逻辑处理每个数据块
    const processed = processChunk(chunk)
    controller.enqueue(processed)
  },
})

// 配置 XStream 使用自定义转换流
const options: XStreamOptions<CustomOutput> = {
  readableStream: response.body,
  transformStream: customTransformer,
}

const stream = XStream(options)

// 处理转换后的数据
for await (const data of stream) {
  // 使用自定义格式的数据
  console.log(data)
}
```

## API 参考

### XStream 函数

```typescript
function XStream<Output = SSEOutput>(
  options: XStreamOptions<Output>,
  signal?: AbortSignal
): XReadableStream<Output>
```

### XStreamOptions 选项

| 选项名          | 说明             | 类型                              | 默认值          |
| --------------- | ---------------- | --------------------------------- | --------------- |
| readableStream  | 二进制数据可读流 | `ReadableStream<Uint8Array>`      | **必填**        |
| transformStream | 自定义转换流     | `TransformStream<string, Output>` | -               |
| streamSeparator | 事件分隔符       | `string`                          | `'\n\n'`        |
| partSeparator   | 行分隔符         | `string`                          | `'\n'`          |
| kvSeparator     | 键值分隔符       | `string`                          | `':'`           |
| errorHandler    | 错误处理函数     | `(error: Error) => void`          | `console.error` |

### XReadableStream 接口

扩展了标准 `ReadableStream`，添加了以下功能：

| 方法/属性              | 说明           | 类型                             |
| ---------------------- | -------------- | -------------------------------- |
| [Symbol.asyncIterator] | 异步迭代器方法 | `() => AsyncGenerator<T>`        |
| reader                 | 流读取器引用   | `ReadableStreamDefaultReader<T>` |
| cancel                 | 取消流处理     | `() => Promise<void>`            |

## 类型定义

```typescript
// SSE字段类型
type SSEFields = 'data' | 'event' | 'id' | 'retry'

// SSE输出对象类型
type SSEOutput = Partial<Record<SSEFields, any>>

// XStream配置选项
interface XStreamOptions<Output = SSEOutput> {
  readableStream: ReadableStream<Uint8Array>
  transformStream?: TransformStream<string, Output>
  streamSeparator?: string
  partSeparator?: string
  kvSeparator?: string
  errorHandler?: (error: Error) => void
}

// 扩展的ReadableStream
interface XReadableStream<T = SSEOutput>
  extends ReadableStream<T> {
  [Symbol.asyncIterator](): AsyncGenerator<T>
  reader?: ReadableStreamDefaultReader<T>
  cancel(): Promise<void>
}
```

## 内部工作原理

XStream 内部实现了一个完整的数据转换流水线：

1. **二进制流解码**：使用 `TextDecoderStream` 将 `Uint8Array` 转换为文本
2. **流分割**：使用 `createSplitStream` 按指定分隔符将文本流分割成块
3. **部分解析**：使用 `createPartParser` 将文本块解析为结构化对象
4. **异步迭代支持**：扩展 `ReadableStream`，添加异步迭代器和取消功能

这一流水线设计使得 XStream 可以高效处理大量流式数据，同时保持内存使用效率。
