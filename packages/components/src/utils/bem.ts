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
export function createBEM(namespace: string) {
  /**
   * 创建块名称
   * @param block 块名称
   */
  const b = (block: string) => {
    const blockName = `${namespace}-${block}`

    /**
     * 创建元素名称
     * @param element 元素名称
     */
    const e = (element: string) => {
      return `${blockName}__${element}`
    }

    /**
     * 创建修饰符名称
     * @param element 元素名称(可选)
     * @param modifiers 修饰符对象或数组
     */
    const m = (
      element: string,
      modifiers?: BEMModifiers
    ): string[] => {
      const elementName = element
        ? `${blockName}__${element}`
        : blockName
      const classes: string[] = [elementName]

      if (!modifiers) {
        return classes
      }

      // 处理数组形式的修饰符
      if (Array.isArray(modifiers)) {
        modifiers.forEach((modifier) => {
          if (modifier) {
            classes.push(`${elementName}--${modifier}`)
          }
        })
        return classes
      }

      // 处理对象形式的修饰符
      Object.entries(modifiers).forEach(([modifier, value]) => {
        if (value === false) return

        if (value === true) {
          classes.push(`${elementName}--${modifier}`)
        } else if (value) {
          classes.push(`${elementName}--${modifier}-${value}`)
        }
      })

      return classes
    }

    /**
     * 创建简化的BEM类名生成器
     * @returns BEM类名工具对象
     */
    const aux = () => {
      return {
        /**
         * 生成块类名
         */
        b: () => blockName,

        /**
         * 生成元素类名
         * @param element 元素名称
         */
        e: (element: string) => e(element),

        /**
         * 生成带修饰符的类名数组
         * @param modifiers 修饰符对象或数组
         */
        m: (modifiers?: BEMModifiers) => m('', modifiers),

        /**
         * 生成带元素和修饰符的类名数组
         * @param element 元素名称
         * @param modifiers 修饰符对象或数组
         */
        em: (element: string, modifiers?: BEMModifiers) =>
          m(element, modifiers),

        /**
         * 生成完整的BEM类名字符串
         * @param element 元素名称(可选)
         * @param modifiers 修饰符对象或数组(可选)
         */
        bem: (element?: string, modifiers?: BEMModifiers) => {
          if (!element && !modifiers) return blockName
          if (element && !modifiers) return e(element)
          return m(element || '', modifiers).join(' ')
        },
      }
    }

    return {
      b: blockName,
      e,
      m,
      aux,
    }
  }

  return { b }
}
