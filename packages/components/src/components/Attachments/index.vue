<script setup lang="ts">
import {
  ArrowLeftBold,
  ArrowRightBold,
  Plus,
  UploadFilled,
} from '@element-plus/icons-vue'
import { debounce } from '../../utils/deth'
import { createBEM } from '../../utils'
import type { AttachmentsProps } from './type.d.ts'

// 初始化BEM工具类
const { b } = createBEM('au')
const attachments = b('attachments')
const bem = attachments.aux()

const props = withDefaults(defineProps<AttachmentsProps>(), {
  items: () => [],
  overflow: 'scrollX',
  listStyle: () => ({}),
  limit: undefined,
  hideUpload: false,
  dragTarget: null,
})

const emits = defineEmits([
  'uploadDrop',
  'uploadChange',
  'deleteFile',
])

// ==================== 难点1: 滚动检测与优化 ====================
const containerRef = ref<HTMLElement | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)
const pingStart = ref(false)
const pingEnd = ref(false)
const TOLERANCE = 1

// 使用防抖优化滚动性能
const checkScrollPosition = debounce(() => {
  const container = containerRef.value
  if (!container) return

  if (props.overflow === 'scrollX') {
    // 滚动检测核心逻辑 - 精确计算滚动边界
    pingStart.value = Math.abs(container.scrollLeft) >= TOLERANCE
    pingEnd.value =
      container.scrollWidth -
        container.clientWidth -
        Math.abs(container.scrollLeft) >=
      TOLERANCE
  } else if (props.overflow === 'scrollY') {
    pingStart.value = container.scrollTop !== 0
    pingEnd.value =
      container.scrollHeight - container.clientHeight !==
      container.scrollTop
  }
}, 100)

function scrollTo(direction: -1 | 1) {
  const container = containerRef.value
  if (!container) return

  container.scrollTo({
    left:
      props.overflow === 'scrollX'
        ? container.scrollLeft +
          direction * container.clientWidth
        : undefined,
    top:
      props.overflow === 'scrollY'
        ? container.scrollTop +
          direction * container.clientHeight
        : undefined,
    behavior: 'smooth',
  })
}

// ==================== 难点2: 拖拽上传系统 ====================
const targetElement = ref<HTMLElement | null>(null)
const isTargetDrag = ref(false)
const dropAreaRef = ref<HTMLElement | null>(null)

const isOverLimit = computed(
  () =>
    typeof props.limit === 'number' &&
    props.limit > 0 &&
    props.items.length >= props.limit
)

function getTargetElement(): HTMLElement | null {
  // 复杂的目标元素解析逻辑
  if (!props.dragTarget) return wrapperRef.value

  if (typeof props.dragTarget === 'string') {
    return document.getElementById(props.dragTarget)
  } else if (props.dragTarget instanceof HTMLElement) {
    return props.dragTarget
  }

  return wrapperRef.value
}

function toggleDragStyle(isDrag: boolean) {
  isTargetDrag.value = isDrag

  if (!targetElement.value) return

  if (isDrag) {
    // 处理特殊情况: body元素需要fixed定位
    if (
      targetElement.value === document.body &&
      dropAreaRef.value
    ) {
      dropAreaRef.value.style.position = 'fixed'
      dropAreaRef.value.style.width = '100vw'
      dropAreaRef.value.style.height = '100vh'
      dropAreaRef.value.style.left = '0'
      dropAreaRef.value.style.top = '0'
    } else {
      targetElement.value.style.position = 'relative'
    }
  } else {
    targetElement.value.style.position = ''
  }
}

// 拖拽事件处理
function handleDragEnter(e: DragEvent) {
  e.preventDefault()
  toggleDragStyle(true)
}

function handleDragLeave(e: DragEvent) {
  e.preventDefault()
  // 难点细节: 避免拖拽到子元素时触发离开事件
  const relatedTarget = e.relatedTarget as Node
  if (
    targetElement.value &&
    targetElement.value.contains(relatedTarget)
  ) {
    return
  }
  toggleDragStyle(false)
}

function handleDrop(e: DragEvent) {
  e.preventDefault()
  toggleDragStyle(false)

  if (e.dataTransfer?.files.length) {
    emits('uploadDrop', Array.from(e.dataTransfer.files))
  }
}

// ==================== 难点3: 多种布局模式统一处理 ====================
// 使用计算属性处理不同布局模式的样式策略
const containerStyles = computed(() => {
  const baseStyles: Record<string, string> = {}

  switch (props.overflow) {
    case 'scrollX':
      return {
        ...baseStyles,
        whiteSpace: 'nowrap',
        overflowX: 'auto',
        overflowY: 'hidden',
      }
    case 'scrollY':
      return {
        ...baseStyles,
        overflowX: 'hidden',
        overflowY: 'auto',
      }
    case 'wrap':
      return {
        ...baseStyles,
        display: 'flex',
        flexWrap: 'wrap',
      }
    default:
      return baseStyles
  }
})

// 计算动态类名
const wrapperClass = computed(() => {
  return [
    bem.e('wrapper'),
    {
      [bem.e('scroll-start')]:
        props.overflow === 'scrollX' && pingStart.value,
      [bem.e('scroll-end')]:
        props.overflow === 'scrollX' && pingEnd.value,
    },
  ]
})

const overflowClass = computed(() => {
  return bem.e(props.overflow)
})

// 生命周期钩子
onMounted(() => {
  nextTick(() => {
    checkScrollPosition()

    // 拖拽目标设置
    targetElement.value = getTargetElement()
    if (targetElement.value) {
      targetElement.value.addEventListener(
        'dragenter',
        handleDragEnter
      )
      targetElement.value.addEventListener(
        'dragleave',
        handleDragLeave
      )
      targetElement.value.addEventListener('drop', handleDrop)
      targetElement.value.addEventListener('dragover', (e) =>
        e.preventDefault()
      )
    }
  })

  window.addEventListener('resize', checkScrollPosition)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScrollPosition)

  if (targetElement.value) {
    targetElement.value.removeEventListener(
      'dragenter',
      handleDragEnter
    )
    targetElement.value.removeEventListener(
      'dragleave',
      handleDragLeave
    )
    targetElement.value.removeEventListener('drop', handleDrop)
    targetElement.value.removeEventListener('dragover', (e) =>
      e.preventDefault()
    )
  }
})

// 监听项目数量变化
watch(
  () => [props.items.length, props.overflow],
  () => nextTick(checkScrollPosition),
  { immediate: true, deep: true }
)
</script>

<template>
  <div ref="wrapperRef" :class="wrapperClass" :style="listStyle">
    <!-- 背景渐变效果 -->
    <div :class="bem.e('background')">
      <div
        v-if="overflow === 'scrollX' && pingStart"
        :class="bem.e('background-start')"
      />
      <div
        v-if="overflow === 'scrollX' && pingEnd"
        :class="bem.e('background-end')"
      />
    </div>

    <!-- 空状态上传按钮 -->
    <div
      v-if="!items.length && !hideUpload"
      :class="bem.e('empty')"
    >
      <slot name="empty-upload">
        <div
          :class="bem.e('upload-btn')"
          @click="$emit('uploadChange')"
        >
          <el-icon class="upload-icon">
            <Plus />
          </el-icon>
          <span>点击上传文件</span>
        </div>
      </slot>
    </div>

    <!-- 文件列表容器 -->
    <div
      v-if="items.length"
      ref="containerRef"
      :class="[bem.e('container'), overflowClass]"
      :style="containerStyles"
      @scroll="checkScrollPosition"
    >
      <!-- 文件列表 -->
      <div :class="bem.e('list')">
        <slot name="file-list" :items="items">
          <div
            v-for="(item, index) in items"
            :key="item.uid"
            :class="bem.e('item')"
          >
            <!-- 文件卡片 -->
            <div :class="bem.e('card')">
              <div :class="bem.e('card-header')">
                <span>{{ item.name }}</span>
                <el-icon
                  @click="$emit('deleteFile', item, index)"
                  >×</el-icon
                >
              </div>
              <div :class="bem.e('card-body')">
                {{ item.description || '无描述' }}
              </div>
            </div>
          </div>
        </slot>

        <!-- 附加上传按钮 -->
        <div
          v-if="!isOverLimit && !hideUpload"
          :class="bem.e('upload-wrapper')"
        >
          <slot name="append-upload">
            <div
              :class="bem.e('upload-btn')"
              @click="$emit('uploadChange')"
            >
              <el-icon>
                <Plus />
              </el-icon>
            </div>
          </slot>
        </div>
      </div>
    </div>

    <!-- 导航按钮 -->
    <template v-if="overflow === 'scrollX'">
      <el-button
        v-if="pingStart"
        :class="[bem.e('nav-btn'), bem.e('prev-btn')]"
        @click="scrollTo(-1)"
      >
        <el-icon>
          <ArrowLeftBold />
        </el-icon>
      </el-button>

      <el-button
        v-if="pingEnd"
        :class="[bem.e('nav-btn'), bem.e('next-btn')]"
        @click="scrollTo(1)"
      >
        <el-icon>
          <ArrowRightBold />
        </el-icon>
      </el-button>
    </template>

    <!-- 拖拽上传区域 (使用传送门) -->
    <teleport v-if="isTargetDrag" :to="targetElement">
      <div ref="dropAreaRef" :class="bem.e('drop-area')">
        <el-icon :class="bem.e('drop-icon')">
          <UploadFilled />
        </el-icon>
        <div :class="bem.e('drop-text')">拖放文件至此处上传</div>
      </div>
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
