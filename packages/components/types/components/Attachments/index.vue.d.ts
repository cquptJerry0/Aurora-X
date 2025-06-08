import type { AttachmentsProps } from './type.d.ts'

declare function __VLS_template(): {
  attrs: Partial<{}>
  slots: {
    'empty-upload'?: (_: {}) => any
    'file-list'?: (_: {
      items: import('./type.d.ts').AttachmentItem[]
    }) => any
    'append-upload'?: (_: {}) => any
  }
  refs: {
    wrapperRef: HTMLDivElement
    containerRef: HTMLDivElement
    dropAreaRef: HTMLDivElement
  }
  rootEl: HTMLDivElement
}
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>
declare const __VLS_component: import('vue').DefineComponent<
  AttachmentsProps,
  {},
  {},
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {
    uploadDrop: (...args: any[]) => void
    uploadChange: (...args: any[]) => void
    deleteFile: (...args: any[]) => void
  },
  string,
  import('vue').PublicProps,
  Readonly<AttachmentsProps> &
    Readonly<{
      onUploadDrop?: ((...args: any[]) => any) | undefined
      onUploadChange?: ((...args: any[]) => any) | undefined
      onDeleteFile?: ((...args: any[]) => any) | undefined
    }>,
  {
    items: import('./type.d.ts').AttachmentItem[]
    overflow: 'scrollX' | 'scrollY' | 'wrap'
    listStyle: Record<string, string>
    limit: number
    hideUpload: boolean
    dragTarget: string | HTMLElement | null
  },
  {},
  {},
  {},
  string,
  import('vue').ComponentProvideOptions,
  false,
  {
    wrapperRef: HTMLDivElement
    containerRef: HTMLDivElement
    dropAreaRef: HTMLDivElement
  },
  HTMLDivElement
>
declare const _default: __VLS_WithTemplateSlots<
  typeof __VLS_component,
  __VLS_TemplateResult['slots']
>
export default _default
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S
  }
}
