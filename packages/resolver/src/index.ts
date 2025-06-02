export interface AuroraXResolverOptions {
  /**
   * 排除不需要自动导入的组件
   *
   * @default []
   */
  exclude?: string[]

  /**
   * 自定义包名
   *
   * @default 'aurora-x'
   */
  packageName?: string

  /**
   * 自定义组件前缀
   *
   * @default 'Au'
   */
  prefix?: string
}

/**
 * 包含在组件库中的组件集合
 */
const primitiveNames = new Set<string>([
  'Attachments',
  'Bubble',
  'BubbleList',
  'Config',
  'Typewriter',
  // 在这里添加其他组件...
])

function isAuroraXComponent(name: string) {
  return primitiveNames.has(name)
}

/**
 * Aurora-X 组件解析器
 * 用于 unplugin-vue-components 等自动导入工具
 */
export function AuroraXResolver(
  options: AuroraXResolverOptions = {}
) {
  const {
    prefix = 'Au',
    packageName = 'vue-aurora-x',
    exclude = [],
  } = options

  return (name: string) => {
    // 检查是否以指定前缀开头
    if (!name.startsWith(prefix)) return

    // 去掉前缀获取实际组件名
    const componentName = name.slice(prefix.length)

    // 检查是否为有效组件
    if (
      !isAuroraXComponent(componentName) ||
      exclude.includes(componentName)
    )
      return

    return {
      // 返回组件信息
      name: `Au${componentName}`, // 从包中导入带前缀的组件
      from: packageName,
    }
  }
}

// 同时提供不带前缀的版本，支持用户选择使用原始组件名
export function AuroraXNoPrefix(
  options: Omit<AuroraXResolverOptions, 'prefix'> = {}
) {
  const { packageName = 'vue-aurora-x', exclude = [] } = options

  return (name: string) => {
    // 直接检查组件名
    if (!isAuroraXComponent(name) || exclude.includes(name))
      return

    return {
      name,
      from: packageName,
    }
  }
}
