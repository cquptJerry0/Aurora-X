<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type {
  TypewriterInstance,
  TypingConfig,
} from '../Typewriter/type.d.ts'
import type { BubbleProps } from './type.d.ts'
import Typewriter from '../Typewriter/index.vue'
import { createBEM } from '../../utils'
import { ElAvatar as AuAvatar } from 'element-plus'
// 初始化BEM工具类
const { b } = createBEM('au')
const bubble = b('bubble')
const bem = bubble.aux()

const props = withDefaults(defineProps<BubbleProps>(), {
  content: '',
  reasoning_content: '',
  avatar: '',
  placement: 'start',
  variant: 'filled',
  maxWidth: '500px',
  avatarSize: '',
  avatarGap: '12px',
  avatarShape: 'circle',
  avatarIcon: '',
  avatarSrcSet: '',
  avatarAlt: '',
  avatarFit: 'cover',
  noStyle: false,
})

const emits = defineEmits([
  'start',
  'finish',
  'writing',
  'avatarError',
])

const internalDestroyed = ref(false) // 内部销毁状态
// 响应式变量跟踪打字状态
const isTypingClass = ref(false)

// 监听内容变化自动重置
watch(
  () => props.content,
  (newVal, oldVal) => {
    if (newVal !== oldVal && internalDestroyed.value) {
      restart() // 内容变化时自动重置
    }
  }
)

const typewriterRef = ref<TypewriterInstance>()
const instance: TypewriterInstance = {
  interrupt,
  continue: continueTyping,
  restart,
  destroy,
  renderedContent: computed(() =>
    internalDestroyed.value
      ? ''
      : typewriterRef.value?.renderedContent.value || ''
  ),
  isTyping: computed(
    () =>
      !internalDestroyed.value &&
      (typewriterRef.value?.isTyping.value || false)
  ),
  progress: computed(() =>
    internalDestroyed.value
      ? 0
      : typewriterRef.value?.progress.value || 0
  ),
}

/**
 * 计算属性：打字速度
 * 从props.typing中提取步长或使用默认值
 */
const _step: ComputedRef<number> = computed(() => {
  if (typeof props.typing === 'object' && props.typing.step)
    return props.typing.step
  else return 2
})

/**
 * 计算属性：光标样式
 * 从props.typing中提取后缀或使用默认值
 */
const _suffix: ComputedRef<string> = computed(() => {
  if (typeof props.typing === 'object' && props.typing.suffix)
    return props.typing.suffix
  else return '|'
})

/**
 * 计算属性：打字间隔
 * 从props.typing中提取间隔或使用默认值
 */
const _interval: ComputedRef<number> = computed(() => {
  if (typeof props.typing === 'object' && props.typing.interval)
    return props.typing.interval
  else return 50
})

/**
 * 计算属性：组合打字配置
 * 根据props.typing的类型生成最终配置
 */
const _typing = computed(() => {
  if (typeof props.typing === 'undefined') {
    return false
  } else if (typeof props.typing === 'boolean') {
    return props.typing
  } else {
    return {
      suffix: _suffix.value,
      step: _step.value,
      interval: _interval.value,
    }
  }
}) as boolean | TypingConfig

function onStart(instance: TypewriterInstance) {
  emits('start', instance)
}

function onFinish(instance: TypewriterInstance) {
  isTypingClass.value = false
  emits('finish', instance)
}

function onWriting(instance: TypewriterInstance) {
  isTypingClass.value = true
  emits('writing', instance)
}

function avatarError(e: Event) {
  emits('avatarError', e)
}

function interrupt() {
  typewriterRef.value?.interrupt()
}

function continueTyping() {
  typewriterRef.value?.continue()
}

function restart() {
  internalDestroyed.value = false
  typewriterRef.value?.restart()
}

function destroy() {
  typewriterRef.value?.destroy()
  internalDestroyed.value = true
}

// 定义三个点-加载中样式
const dots = [1, 2, 3]

// 组件卸载时自动销毁
onUnmounted(instance.destroy)
defineExpose(instance)

/**
 * 计算容器根元素类名
 * 应用BEM命名规范
 */
const containerClass = computed(() => {
  const modifiers = {
    [props.placement]: true, // 'start' 或 'end' 位置
    'no-style': props.noStyle, // 无样式模式
    'is-typing': isTypingClass.value, // 正在打字状态
  }

  return bem.m(modifiers)
})

/**
 * 计算内容区域类名
 */
const contentClass = computed(() => {
  const modifiers = {
    loading: props.loading,
    [props.shape || '']: !!props.shape, // 'round' 或 'corner'
    [props.variant]: true, // 'filled', 'borderless', 'outlined', 'shadow'
  }

  return bem.em('content', modifiers)
})

/**
 * 计算打字机容器类名
 */
const typewriterClass = computed(() => {
  return bem.em('typewriter', {
    'no-content': !props.content,
  })
})
</script>

<template>
  <div
    v-if="!internalDestroyed"
    :class="[bem.b(), containerClass]"
    :style="{
      '--au-box-shadow-tertiary': `0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)`,
      '--bubble-content-max-width': `${maxWidth}`,
      '--au-bubble-avatar-placeholder-width': `${$slots.avatar ? '' : avatarSize}`,
      '--au-bubble-avatar-placeholder-height': `${$slots.avatar ? '' : avatarSize}`,
      '--au-bubble-avatar-placeholder-gap': `${avatarGap}`,
    }"
  >
    <!-- 头像 -->
    <div
      v-if="!$slots.avatar && avatar"
      :class="[
        bem.e('avatar'),
        bem.em('avatar', { size: true }),
      ]"
    >
      <au-avatar
        :size="0"
        :src="avatar"
        :shape="avatarShape"
        :icon="avatarIcon"
        :src-set="avatarSrcSet"
        :alt="avatarFit"
        @error="avatarError"
      />
    </div>

    <!-- 头像属性进行占位 -->
    <div
      v-if="!$slots.avatar && !avatar && avatarSize"
      :class="bem.e('avatar-placeholder')"
    />

    <div v-if="$slots.avatar" :class="bem.e('avatar')">
      <slot name="avatar" />
    </div>

    <!-- 内容 -->
    <div :class="bem.e('content-wrapper')">
      <!-- 头部内容 -->
      <div v-if="$slots.header" :class="bem.e('header')">
        <slot name="header" />
      </div>

      <div :class="[bem.e('content'), contentClass]">
        <div v-if="!loading" :class="typewriterClass">
          <Typewriter
            v-if="!$slots.content && content"
            ref="typewriterRef"
            :typing="_typing"
            :content="content"
            :is-markdown="isMarkdown"
            :is-fog="props.isFog"
            :xss="props.xss"
            @start="onStart"
            @writing="onWriting"
            @finish="onFinish"
          />
        </div>

        <!-- 内容-自定义 -->
        <slot
          v-if="!internalDestroyed && $slots.content && !loading"
          name="content"
        />

        <!-- 加载中-默认 -->
        <div
          v-if="loading && !$slots.loading"
          :class="bem.e('loading-wrap')"
        >
          <div
            v-for="(_, index) in dots"
            :key="index"
            :class="bem.e('dot')"
            :style="{ animationDelay: `${index * 0.2}s` }"
          />
        </div>

        <!-- 加载中-自定义 -->
        <div
          v-if="loading && $slots.loading"
          :class="bem.e('loading-wrap')"
        >
          <slot name="loading" />
        </div>
      </div>

      <div v-if="$slots.footer" :class="bem.e('footer')">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
