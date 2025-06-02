<script setup lang="ts">
// 导入必要的Vue类型和依赖
import type { ComputedRef } from 'vue'
import type {
  TypewriterInstance,
  TypewriterProps,
  TypingConfig,
} from './type'
// 导入自定义工具函数 - 代码高亮和BEM样式工具
import { usePrism, createBEM } from '../../utils'
// 导入应用配置钩子，用于获取全局配置
import { useConfig } from '../Config/hooks.ts'
// 导入拆分出的可组合式函数
import { useMarkdown } from './composables/useMarkdown.ts'
import { useFogEffect } from './composables/useFogEffect.ts'

/**
 * 初始化BEM命名工具
 * BEM: Block-Element-Modifier命名规范
 *
 * 使用示例:
 * bem.b() => 'au-typewriter'
 * bem.e('content') => 'au-typewriter__content'
 * bem.em('content', {active: true}) => 'au-typewriter__content--active'
 */
const { b } = createBEM('au') // 创建以'au'为命名空间的BEM工具
const typewriter = b('typewriter') // 创建以'typewriter'为块的命名工具
const bem = typewriter.aux() // 获取辅助方法集合

/**
 * 组件属性定义及默认值
 * @property {string} content - 显示的文本内容
 * @property {boolean} isMarkdown - 是否将内容解析为Markdown
 * @property {boolean|object} typing - 是否启用打字效果或打字效果配置
 * @property {boolean|object} isFog - 是否启用雾化效果或雾化效果配置
 * @property {boolean} xss - 是否启用XSS过滤
 */
const props = withDefaults(defineProps<TypewriterProps>(), {
  content: '', // 默认为空内容
  isMarkdown: false, // 默认不启用Markdown解析
  typing: false, // 默认不启用打字效果
  isFog: false, // 默认不启用雾化效果
  xss: () => ({
    // 默认XSS过滤配置
    enable: true,
    options: {
      ALLOWED_TAGS: [
        // 基础标签
        'p',
        'div',
        'span',
        'br',
        'hr',
        // 格式化标签
        'b',
        'i',
        'strong',
        'em',
        'mark',
        'small',
        'del',
        'ins',
        'sub',
        'sup',
        // 标题标签
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        // 列表
        'ul',
        'ol',
        'li',
        'dl',
        'dt',
        'dd',
        // 表格
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        // 链接和图像
        'a',
        'img',
        // 代码块
        'pre',
        'code',
        'blockquote',
      ],
      ALLOWED_ATTR: [
        'href',
        'target',
        'rel',
        'src',
        'alt',
        'class',
        'title',
        'width',
        'height',
        'style',
      ],
      // 清理后添加 noopener noreferrer
      ADD_ATTR: ['target', 'rel'],
      // 自动为外部链接添加 noopener
      FORCE_BODY: true,
      SANITIZE_DOM: true,
    },
  }),
})

/**
 * 组件事件定义
 * @event start - 开始打字时触发
 * @event writing - 打字过程中触发
 * @event finish - 打字结束时触发
 */
const emits = defineEmits<{
  /** 开始打字时触发 */
  start: [instance: TypewriterInstance]
  /** 打字过程中触发（携带进度百分比） */
  writing: [instance: TypewriterInstance]
  /** 打字结束时触发 */
  finish: [instance: TypewriterInstance]
}>()

// 获取应用全局配置
const appConfig = useConfig()

/**
 * 计算属性: 代码高亮处理函数
 * 优先级: 属性传入 > 全局配置 > 默认高亮
 */
const highlight = computed(() => {
  if (!props.highlight) {
    return appConfig.highlight ?? usePrism()
  }
  return props.highlight
})

// DOM引用，用于对真实DOM节点的操作
const markdownContentRef = ref<HTMLElement | null>(null)
const typeWriterRef = ref<HTMLElement | null>(null)

// 初始化Markdown渲染器
const { render: renderMarkdown } = useMarkdown({
  highlight: highlight.value,
  plugins: [
    ...(appConfig.mdPlugins || []),
    ...(props.mdPlugins || []),
  ],
  xss: props.xss,
})

// 初始化雾化效果
const { updateFogColor } = useFogEffect(
  markdownContentRef,
  typeWriterRef
)
onMounted(() => {
  updateFogColor()
})

/**
 * 打字效果状态管理
 * @property {number} typingIndex - 当前打字位置索引
 * @property {boolean} isTyping - 是否正在执行打字效果
 * @property {Timeout|null} timer - 定时器引用
 * @property {string} contentCache - 内容缓存
 */
const typingIndex = ref(0) // 当前打字位置
const isTyping = ref(false) // 是否正在打字
let timer: ReturnType<typeof setTimeout> | null = null // 打字效果定时器
const contentCache = ref('') // 内容缓存

/**
 * 计算属性: 合并打字效果配置
 * 处理不同形式的typing属性，生成最终配置
 *
 * 使用示例:
 * 1. props.typing = true
 *    结果: { step: 2, interval: 50, suffix: '|' }
 *
 * 2. props.typing = { step: 1, interval: 100 }
 *    结果: { step: 1, interval: 100, suffix: '|' }
 *
 * 3. props.typing = { step: 3, suffix: '▌' }
 *    结果: { step: 3, interval: 50, suffix: '▌' }
 *
 * 4. props.isMarkdown = true, props.typing = true
 *    结果: { step: 2, interval: 50, suffix: '' } (Markdown模式下不显示光标)
 *
 * 5. props.isMarkdown = true, props.typing = { suffix: '>' }
 *    结果: { step: 2, interval: 50, suffix: '' } (强制移除Markdown中的光标)
 */
const mergedConfig: ComputedRef<TypingConfig> = computed(() => {
  // 默认配置基于props.typing的类型动态设置
  const defaultConfig: TypingConfig = {
    step:
      typeof props.typing === 'object'
        ? (props.typing.step ?? 2)
        : 2, // 每次打字字符数
    interval:
      typeof props.typing === 'object'
        ? (props.typing.interval ?? 50)
        : 50, // 打字间隔(毫秒)
    // Markdown模式下不显示光标，否则使用配置或默认光标
    suffix: props.isMarkdown
      ? ''
      : typeof props.typing === 'object'
        ? (props.typing.suffix ?? '|')
        : '|',
  }

  // 布尔值true时使用默认配置
  if (props.typing === true) {
    return {
      ...defaultConfig,
    }
  }

  // 对象配置时合并并覆盖
  if (typeof props.typing === 'object') {
    return {
      ...defaultConfig,
      ...props.typing,
      // 再次确保Markdown模式下不显示光标
      suffix: props.isMarkdown
        ? ''
        : (props.typing.suffix ?? '|'),
    }
  }

  return defaultConfig
})

/**
 * 计算属性: 处理后的显示内容
 * 根据打字状态决定显示全部内容还是部分内容
 */
const processedContent = computed(() => {
  if (!props.content) return ''

  // 非打字模式下直接显示完整内容
  if (!props.typing) {
    return props.content
  }

  // 打字模式下根据当前打字位置截取显示的内容
  const displayed = contentCache.value.slice(
    0,
    typingIndex.value
  )
  return displayed
})

/**
 * 计算属性: 打字进度百分比
 * 范围: 0-100
 */
const typingProgress = computed(() => {
  return contentCache.value
    ? Math.min(
        (typingIndex.value / contentCache.value.length) * 100,
        100
      )
    : 0
})

/**
 * 计算属性: 最终渲染的内容
 * 处理Markdown解析和XSS防护
 */
const renderedContent = computed(() => {
  // 非Markdown模式直接返回处理后的内容
  if (!props.isMarkdown) {
    return processedContent.value
  }
  // Markdown模式下解析内容并进行安全过滤
  return renderMarkdown(processedContent.value)
})

/**
 * 组件实例对象
 * 包含可供外部使用的方法和状态
 * 通过defineExpose暴露给父组件
 */
const instance: TypewriterInstance = {
  interrupt, // 中断打字
  continue: continueTyping, // 继续打字
  restart, // 重新开始
  destroy, // 销毁资源
  renderedContent: computed(() => renderedContent.value), // 当前渲染内容
  isTyping: toRef(isTyping), // 是否正在打字
  progress: computed(() => typingProgress.value), // 打字进度
}

/**
 * 监听内容变化
 * 当content属性变化时，重置或更新打字状态
 */
watch(
  () => props.content,
  (newVal, oldVal) => {
    // 非打字模式直接显示完整内容
    if (!props.typing) {
      typingIndex.value = newVal?.length || 0
      isTyping.value = false
      contentCache.value = newVal || ''
      return
    }

    // 判断是否需要重置打字位置
    // 如果是全新内容(不是原内容的延续)，则重置位置
    const shouldReset = !oldVal || !newVal?.startsWith(oldVal)

    if (shouldReset) {
      typingIndex.value = 0
      contentCache.value = newVal || ''
    } else {
      contentCache.value = newVal || ''
    }

    // 如果当前非打字状态，则开始打字
    if (!isTyping.value) {
      startTyping()
    }
  },
  { immediate: true } // 组件初始化时立即执行
)

/**
 * 开始打字效果
 * 清除之前的定时器并初始化打字逻辑
 */
function startTyping() {
  clearTimeout(timer!)
  if (!props.typing || !contentCache.value) return

  isTyping.value = true
  emits('start', instance)

  // 递归的定时执行函数，实现打字动画
  const typeNext = () => {
    // 增加索引位置，显示更多字符
    typingIndex.value += mergedConfig.value.step!
    emits('writing', instance)

    // 判断是否完成打字
    if (typingIndex.value >= contentCache.value.length) {
      finishTyping()
      return
    }

    // 继续执行下一个打字周期
    timer = setTimeout(typeNext, mergedConfig.value.interval)
  }

  // 启动首个打字周期
  timer = setTimeout(typeNext, mergedConfig.value.interval)
}

/**
 * 结束打字过程
 * 重置状态并触发finish事件
 */
function finishTyping() {
  isTyping.value = false
  typingIndex.value = contentCache.value.length
  emits('finish', instance)
}

/**
 * 中断打字过程
 * 清除定时器并标记为非打字状态
 */
function interrupt() {
  clearTimeout(timer!)
  isTyping.value = false
}

/**
 * 继续未完成的打字过程
 * 仅当尚未完成时继续
 */
function continueTyping() {
  if (typingIndex.value < contentCache.value.length) {
    startTyping()
  }
}

/**
 * 重新开始打字效果
 * 重置索引位置并开始打字
 */
function restart() {
  typingIndex.value = 0
  startTyping()
}

/**
 * 销毁组件资源
 * 清除定时器和状态
 */
function destroy() {
  clearTimeout(timer!)
  timer = null
  typingIndex.value = 0
  isTyping.value = false
}

/**
 * 组件卸载时清理资源
 * 避免内存泄漏
 */
onUnmounted(destroy)

/**
 * 暴露组件公共接口
 * 允许父组件控制打字效果
 */
defineExpose(instance)

/**
 * 容器根元素的BEM类名
 * 生成: 'au-typewriter'
 */
const containerClass = bem.b()

/**
 * 计算内容元素的类名
 * 根据组件状态动态生成BEM修饰符类
 */
const contentClass = computed(() => {
  // 定义可能的修饰符状态及其条件
  const modifiers: Record<string, boolean> = {
    // 是否为Markdown内容
    markdown: !!props.isMarkdown,
    // 是否显示打字光标
    'typing-cursor': !!(
      props.typing &&
      mergedConfig.value.suffix &&
      isTyping.value
    ),
    // 是否显示雾化效果
    'typing-cursor-foggy': !!(
      props.isFog &&
      props.typing &&
      mergedConfig.value.suffix &&
      isTyping.value
    ),
    // 是否为Markdown特有的雾化效果
    'typing-markdown-cursor-foggy': !!(
      props.isMarkdown &&
      props.isFog &&
      props.typing &&
      isTyping.value
    ),
  }

  // 组合所有类名:
  // 1. 基础元素类: 'au-typewriter__content'
  // 2. 条件修饰符类: 如'au-typewriter__content--markdown'
  // 3. 额外的markdown-body类(如需要)
  return [
    bem.e('content'), // 元素基础类
    ...Object.entries(modifiers) // 处理所有修饰符
      .filter(([_, value]) => value) // 仅保留激活的状态
      .map(([key]) => bem.em('content', { [key]: true })), // 转为BEM修饰符类
    props.isMarkdown ? 'markdown-body' : '', // 额外的Markdown样式类
  ]
    .filter(Boolean)
    .join(' ') // 过滤空值并合并
})
</script>

<template>
  <!-- 
    容器元素：使用BEM命名的根元素
    类名: 'au-typewriter'
  -->
  <div ref="typeWriterRef" :class="containerClass">
    <!-- 
      内容元素：动态生成类名，并设置CSS变量
      可能的类名组合:
      - 'au-typewriter__content'
      - 'au-typewriter__content au-typewriter__content--markdown markdown-body'
      - 'au-typewriter__content au-typewriter__content--typing-cursor'
      - 等多种组合
    -->
    <div
      ref="markdownContentRef"
      :class="contentClass"
      :style="{
        // 设置光标字符，用于--typing-cursor修饰符
        '--cursor-char': `'${mergedConfig.suffix}'`,
        // 设置雾化背景色，自动适配或使用自定义值
        '--cursor-fog-bg-color': props.isFog
          ? typeof props.isFog === 'object'
            ? (props.isFog.bgColor ?? 'var(--au-fill-color)')
            : 'var(--au-fill-color)'
          : '',
        // 设置雾化宽度，默认80px或使用自定义值
        '--cursor-fog-width': props.isFog
          ? typeof props.isFog === 'object'
            ? (props.isFog.width ?? '80px')
            : '80px'
          : '',
      }"
      v-html="renderedContent"
    />
  </div>
</template>

<style scoped lang="scss" src="./style.scss"></style>
