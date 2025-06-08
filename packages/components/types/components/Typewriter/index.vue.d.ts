import type {
  TypewriterInstance,
  TypewriterProps,
  TypingConfig,
} from './type'

declare const _default: import('vue').DefineComponent<
  TypewriterProps,
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
    finish: (instance: TypewriterInstance) => any
    writing: (instance: TypewriterInstance) => any
  },
  string,
  import('vue').PublicProps,
  Readonly<TypewriterProps> &
    Readonly<{
      onStart?:
        | ((instance: TypewriterInstance) => any)
        | undefined
      onFinish?:
        | ((instance: TypewriterInstance) => any)
        | undefined
      onWriting?:
        | ((instance: TypewriterInstance) => any)
        | undefined
    }>,
  {
    content: string
    typing: boolean | TypingConfig
    isMarkdown: boolean
    isFog: boolean | import('./type').FogConfig
    xss: boolean | import('./type').XSSConfig
  },
  {},
  {},
  {},
  string,
  import('vue').ComponentProvideOptions,
  false,
  {
    typeWriterRef: HTMLDivElement
    markdownContentRef: HTMLDivElement
  },
  any
>
export default _default
