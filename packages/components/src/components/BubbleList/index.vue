<script setup lang="ts" generic="T extends BubbleProps">
import { ArrowDownBold } from '@element-plus/icons-vue'
import { onBeforeUnmount, onMounted } from 'vue'
import type { BubbleProps } from '../Bubble/type'
import type { TypewriterInstance } from '../Typewriter/type'
import Bubble from '../Bubble/index.vue'
import { createBEM } from '../../utils'
import type { BubbleListProps } from './type.d.ts'
import loadingBg from './loading.vue'
import { ElIcon } from 'element-plus'
const props = withDefaults(defineProps<BubbleListProps<T>>(), {
  list: () => [] as T[],
  maxHeight: '500px',
  triggerIndices: 'only-last',
  alwaysShowScrollbar: false,
  backButtonThreshold: 80,
  showBackButton: true,
  backButtonPosition: () => ({
    bottom: '20px',
    left: 'calc(50% - 19px)',
  }),
  btnLoading: true,
  btnColor: '#409EFF',
  btnIconSize: 24,
})
const emits = defineEmits(['complete'])
const { b } = createBEM('au')
const bubbleList = b('bubble-list')
const bem = bubbleList.aux()

/* 核心点1: 滚动状态检测与控制 */
const scrollContainer = ref<HTMLElement | null>(null)
const hasVertical = ref(false)
const hasHorizontal = ref(false)
const stopAutoScrollToBottom = ref(false)
const lastScrollTop = ref(0)
const accumulatedScrollUpDistance = ref(0)
const threshold = 20
const showBackToBottom = ref(false)

// 内联滚动检测功能
function checkScrollbars() {
  const el = scrollContainer.value
  if (!el) return
  hasVertical.value = el.scrollHeight > el.clientHeight
  hasHorizontal.value = el.scrollWidth > el.clientWidth
}

// 组件挂载时设置滚动条检测
onMounted(() => {
  checkScrollbars()
  const observer = new ResizeObserver(checkScrollbars)
  if (scrollContainer.value) {
    observer.observe(scrollContainer.value)
  }
  onBeforeUnmount(() => observer.disconnect())
})

/* 核心点2: ResizeObserver监听内容变化 */
const resizeObserver = ref<ResizeObserver | null>(null)

/* 核心点3: 索引触发机制 */
const effectiveTriggerIndices = computed(() => {
  if (props.triggerIndices === 'only-last') {
    const indices = props.list
      .filter((item) => item.typing)
      .map((_, index) => index)
    return indices.length > 0
      ? [indices[indices.length - 1]]
      : []
  } else if (props.triggerIndices === 'all') {
    return props.list.map((_, index) => index)
  } else if (Array.isArray(props.triggerIndices)) {
    const validIndices = props.triggerIndices.filter(
      (index) =>
        index >= 0 &&
        index < props.list.length &&
        props.list[index].typing
    )
    return validIndices.length > 0
      ? [validIndices[validIndices.length - 1]]
      : []
  }
  return []
})

// 监听列表变化自动滚动
watch(
  () => props.list.length,
  () => {
    if (props.list.length > 0) {
      nextTick(autoScroll)
    }
  },
  { immediate: true }
)

// 滚动到底部
function scrollToBottom() {
  if (!scrollContainer.value) return

  nextTick(() => {
    if (scrollContainer.value) {
      scrollContainer.value.scrollTop =
        scrollContainer.value.scrollHeight
      stopAutoScrollToBottom.value = false
    }
  })
}

// 滚动到顶部
function scrollToTop() {
  if (!scrollContainer.value) return

  stopAutoScrollToBottom.value = true
  nextTick(() => {
    if (scrollContainer.value) {
      scrollContainer.value.scrollTop = 0
    }
  })
}

// 滚动到指定气泡
function scrollToBubble(index: number) {
  const container = scrollContainer.value
  if (!container) return

  const bubbles = container.querySelectorAll('.au-bubble')
  if (index >= bubbles.length) return

  stopAutoScrollToBottom.value = true
  const targetBubble = bubbles[index] as HTMLElement

  const containerRect = container.getBoundingClientRect()
  const bubbleRect = targetBubble.getBoundingClientRect()
  const scrollPosition =
    bubbleRect.top - containerRect.top + container.scrollTop

  container.scrollTo({
    top: scrollPosition,
    behavior: 'smooth',
  })
}

// 核心功能：自动滚动
function autoScroll() {
  if (!scrollContainer.value) return

  const listBubbles = scrollContainer.value.querySelectorAll(
    '.au-bubble-content-wrapper'
  )
  if (resizeObserver.value) {
    resizeObserver.value.disconnect()
  }

  const lastItem = listBubbles[listBubbles.length - 1]
  if (lastItem) {
    resizeObserver.value = new ResizeObserver(() => {
      if (!stopAutoScrollToBottom.value) {
        scrollToBottom()
      }
    })
    resizeObserver.value.observe(lastItem)
  }
}

// 打字机完成回调
function handleBubbleComplete(
  index: number,
  instance: TypewriterInstance
) {
  if (effectiveTriggerIndices.value.includes(index)) {
    emits('complete', instance, index)
  }
}

// 核心功能：滚动事件处理
function handleScroll() {
  if (!scrollContainer.value) return

  const { scrollTop, scrollHeight, clientHeight } =
    scrollContainer.value
  const distanceToBottom =
    scrollHeight - (scrollTop + clientHeight)

  // 显示/隐藏返回底部按钮
  showBackToBottom.value =
    props.showBackButton &&
    distanceToBottom > props.backButtonThreshold

  // 是否接近底部
  const isCloseToBottom = distanceToBottom <= 30
  const isScrollingUp = lastScrollTop.value > scrollTop
  const isScrollingDown = lastScrollTop.value < scrollTop
  const scrollDelta = lastScrollTop.value - scrollTop

  lastScrollTop.value = scrollTop

  // 处理向上滚动 - 停止自动滚动
  if (isScrollingUp) {
    accumulatedScrollUpDistance.value += scrollDelta
    if (
      accumulatedScrollUpDistance.value >= threshold &&
      !stopAutoScrollToBottom.value
    ) {
      stopAutoScrollToBottom.value = true
      accumulatedScrollUpDistance.value = 0
    }
  } else {
    accumulatedScrollUpDistance.value = 0
  }

  // 处理向下滚动到底部 - 重新启用自动滚动
  if (
    isScrollingDown &&
    isCloseToBottom &&
    stopAutoScrollToBottom.value
  ) {
    stopAutoScrollToBottom.value = false
  }
}

defineExpose({
  scrollToTop,
  scrollToBottom,
  scrollToBubble,
})
</script>

<template>
  <div
    ref="scrollContainer"
    :class="[
      bem.b(),
      { 'always-scrollbar': props.alwaysShowScrollbar },
    ]"
    :style="{
      '--au-bubble-list-max-height': maxHeight,
      '--au-bubble-list-btn-size': `${props.btnIconSize}px`,
    }"
    @scroll="handleScroll"
  >
    <Bubble
      v-for="(item, index) in list"
      :key="index"
      :content="item.content"
      :placement="item.placement"
      :loading="item.loading"
      :avatar="item.avatar"
      :typing="item.typing"
      :is-markdown="item.isMarkdown"
      :is-fog="item.isFog"
      :xss="item.xss"
      @finish="
        (instance) => handleBubbleComplete(index, instance)
      "
    >
      <template v-for="(_, slot) in $slots" #[slot]="slotProps">
        <slot :name="slot" :item="slotProps.item || item" />
      </template>
    </Bubble>

    <div
      v-if="showBackToBottom && hasVertical"
      :class="[
        bem.e('back-button'),
        $slots.backToBottom
          ? bem.em('back-button', { custom: true })
          : '',
      ]"
      :style="backButtonPosition"
      @click="scrollToBottom"
    >
      <slot name="backToBottom">
        <el-icon
          :class="bem.e('back-icon')"
          :style="{ color: props.btnColor }"
        >
          <ArrowDownBold />
          <loadingBg
            v-if="props.btnLoading"
            :class="bem.e('loading-bg')"
          />
        </el-icon>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
