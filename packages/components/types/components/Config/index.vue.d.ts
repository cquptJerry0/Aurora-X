import { ConfigProps } from './type'
declare function __VLS_template(): {
  attrs: Partial<{}>
  slots: {
    default?(_: {}): any
  }
  refs: {}
  rootEl: any
}
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>
declare const __VLS_component: import('vue').DefineComponent<
  ConfigProps,
  {},
  {},
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
  string,
  import('vue').PublicProps,
  Readonly<ConfigProps> & Readonly<{}>,
  {},
  {},
  {},
  {},
  string,
  import('vue').ComponentProvideOptions,
  false,
  {},
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
