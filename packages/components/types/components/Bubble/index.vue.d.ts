import {
  TypewriterInstance,
  TypingConfig,
} from '../Typewriter/type.d.ts'
import { BubbleProps } from './type.d.ts'
declare function __VLS_template(): {
  attrs: Partial<{}>
  slots: {
    avatar?(_: {}): any
    header?(_: {}): any
    content?(_: {}): any
    loading?(_: {}): any
    footer?(_: {}): any
  }
  refs: {
    typewriterRef:
      | import('vue').CreateComponentPublicInstanceWithMixins<
          Readonly<
            import('../Typewriter/type.d.ts').TypewriterProps
          > &
            Readonly<{
              onStart?:
                | ((instance: TypewriterInstance) => any)
                | undefined
              onWriting?:
                | ((instance: TypewriterInstance) => any)
                | undefined
              onFinish?:
                | ((instance: TypewriterInstance) => any)
                | undefined
            }>,
          {
            interrupt: () => void
            continue: () => void
            restart: () => void
            destroy: () => void
            renderedContent: {
              value: string
            }
            isTyping: {
              value: boolean
            }
            progress: {
              value: number
            }
          },
          {},
          {},
          {},
          import('vue').ComponentOptionsMixin,
          import('vue').ComponentOptionsMixin,
          {
            start: (instance: TypewriterInstance) => any
            writing: (instance: TypewriterInstance) => any
            finish: (instance: TypewriterInstance) => any
          },
          import('vue').PublicProps,
          {
            content: string
            isMarkdown: boolean
            typing: boolean | TypingConfig
            isFog:
              | boolean
              | import('../Typewriter/type.d.ts').FogConfig
            xss:
              | boolean
              | import('../Typewriter/type.d.ts').XSSConfig
          },
          false,
          {},
          {},
          import('vue').GlobalComponents,
          import('vue').GlobalDirectives,
          string,
          {
            typeWriterRef: HTMLDivElement
            markdownContentRef: HTMLDivElement
          },
          any,
          import('vue').ComponentProvideOptions,
          {
            P: {}
            B: {}
            D: {}
            C: {}
            M: {}
            Defaults: {}
          },
          Readonly<
            import('../Typewriter/type.d.ts').TypewriterProps
          > &
            Readonly<{
              onStart?:
                | ((instance: TypewriterInstance) => any)
                | undefined
              onWriting?:
                | ((instance: TypewriterInstance) => any)
                | undefined
              onFinish?:
                | ((instance: TypewriterInstance) => any)
                | undefined
            }>,
          {
            interrupt: () => void
            continue: () => void
            restart: () => void
            destroy: () => void
            renderedContent: {
              value: string
            }
            isTyping: {
              value: boolean
            }
            progress: {
              value: number
            }
          },
          {},
          {},
          {},
          {
            content: string
            isMarkdown: boolean
            typing: boolean | TypingConfig
            isFog:
              | boolean
              | import('../Typewriter/type.d.ts').FogConfig
            xss:
              | boolean
              | import('../Typewriter/type.d.ts').XSSConfig
          }
        >
      | null
  }
  rootEl: any
}
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>
declare const __VLS_component: import('vue').DefineComponent<
  BubbleProps,
  {
    interrupt: () => void
    continue: () => void
    restart: () => void
    destroy: () => void
    renderedContent: {
      value: string
    }
    isTyping: {
      value: boolean
    }
    progress: {
      value: number
    }
  },
  {},
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {
    start: (...args: any[]) => void
    writing: (...args: any[]) => void
    finish: (...args: any[]) => void
    avatarError: (...args: any[]) => void
  },
  string,
  import('vue').PublicProps,
  Readonly<BubbleProps> &
    Readonly<{
      onStart?: ((...args: any[]) => any) | undefined
      onWriting?: ((...args: any[]) => any) | undefined
      onFinish?: ((...args: any[]) => any) | undefined
      onAvatarError?: ((...args: any[]) => any) | undefined
    }>,
  {
    content: string
    reasoning_content: string
    placement: 'start' | 'end'
    avatar: string
    variant: 'filled' | 'borderless' | 'outlined' | 'shadow'
    maxWidth: string
    avatarSize: string
    avatarGap: string
    avatarShape: 'circle' | 'square'
    avatarIcon: string
    avatarSrcSet: string
    avatarAlt: string
    avatarFit: string
    noStyle: boolean
  },
  {},
  {},
  {},
  string,
  import('vue').ComponentProvideOptions,
  false,
  {
    typewriterRef:
      | import('vue').CreateComponentPublicInstanceWithMixins<
          Readonly<
            import('../Typewriter/type.d.ts').TypewriterProps
          > &
            Readonly<{
              onStart?:
                | ((instance: TypewriterInstance) => any)
                | undefined
              onWriting?:
                | ((instance: TypewriterInstance) => any)
                | undefined
              onFinish?:
                | ((instance: TypewriterInstance) => any)
                | undefined
            }>,
          {
            interrupt: () => void
            continue: () => void
            restart: () => void
            destroy: () => void
            renderedContent: {
              value: string
            }
            isTyping: {
              value: boolean
            }
            progress: {
              value: number
            }
          },
          {},
          {},
          {},
          import('vue').ComponentOptionsMixin,
          import('vue').ComponentOptionsMixin,
          {
            start: (instance: TypewriterInstance) => any
            writing: (instance: TypewriterInstance) => any
            finish: (instance: TypewriterInstance) => any
          },
          import('vue').PublicProps,
          {
            content: string
            isMarkdown: boolean
            typing: boolean | TypingConfig
            isFog:
              | boolean
              | import('../Typewriter/type.d.ts').FogConfig
            xss:
              | boolean
              | import('../Typewriter/type.d.ts').XSSConfig
          },
          false,
          {},
          {},
          import('vue').GlobalComponents,
          import('vue').GlobalDirectives,
          string,
          {
            typeWriterRef: HTMLDivElement
            markdownContentRef: HTMLDivElement
          },
          any,
          import('vue').ComponentProvideOptions,
          {
            P: {}
            B: {}
            D: {}
            C: {}
            M: {}
            Defaults: {}
          },
          Readonly<
            import('../Typewriter/type.d.ts').TypewriterProps
          > &
            Readonly<{
              onStart?:
                | ((instance: TypewriterInstance) => any)
                | undefined
              onWriting?:
                | ((instance: TypewriterInstance) => any)
                | undefined
              onFinish?:
                | ((instance: TypewriterInstance) => any)
                | undefined
            }>,
          {
            interrupt: () => void
            continue: () => void
            restart: () => void
            destroy: () => void
            renderedContent: {
              value: string
            }
            isTyping: {
              value: boolean
            }
            progress: {
              value: number
            }
          },
          {},
          {},
          {},
          {
            content: string
            isMarkdown: boolean
            typing: boolean | TypingConfig
            isFog:
              | boolean
              | import('../Typewriter/type.d.ts').FogConfig
            xss:
              | boolean
              | import('../Typewriter/type.d.ts').XSSConfig
          }
        >
      | null
  },
  any
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
