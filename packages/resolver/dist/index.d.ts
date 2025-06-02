interface AuroraXResolverOptions {
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
 * Aurora-X 组件解析器
 * 用于 unplugin-vue-components 等自动导入工具
 */
declare function AuroraXResolver(
  options?: AuroraXResolverOptions
): (name: string) => {
  name: string
  from: string
}
declare function AuroraXNoPrefix(
  options?: Omit<AuroraXResolverOptions, 'prefix'>
): (name: string) => {
  name: string
  from: string
}

export {
  AuroraXNoPrefix,
  AuroraXResolver,
  type AuroraXResolverOptions,
}
