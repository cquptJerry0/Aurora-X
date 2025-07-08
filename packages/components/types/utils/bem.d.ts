/**
 * BEM命名规范工具类
 * b: block - 块
 * e: element - 元素
 * m: modifier - 修饰符
 */
type BEMModifiers =
  | Record<string, boolean | string | undefined>
  | string[]
/**
 * 创建BEM工具类
 * @param namespace 命名空间前缀
 * @returns BEM工具对象
 */
export declare function createBEM(namespace: string): {
  b: (block: string) => {
    b: string
    e: (element: string) => string
    m: (element: string, modifiers?: BEMModifiers) => string[]
    aux: () => {
      /**
       * 生成块类名
       */
      b: () => string
      /**
       * 生成元素类名
       * @param element 元素名称
       */
      e: (element: string) => string
      /**
       * 生成带修饰符的类名数组
       * @param modifiers 修饰符对象或数组
       */
      m: (modifiers?: BEMModifiers) => string[]
      /**
       * 生成带元素和修饰符的类名数组
       * @param element 元素名称
       * @param modifiers 修饰符对象或数组
       */
      em: (element: string, modifiers?: BEMModifiers) => string[]
      /**
       * 生成完整的BEM类名字符串
       * @param element 元素名称(可选)
       * @param modifiers 修饰符对象或数组(可选)
       */
      bem: (element?: string, modifiers?: BEMModifiers) => string
    }
  }
}
export {}
