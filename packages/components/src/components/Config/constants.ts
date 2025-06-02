import type { ConfigProps } from './type'

export const CONFIG_PROVIDE_KEY = Symbol('aurora-x-config')

export const defaultConfig: ConfigProps = {
  mdPlugins: [],
  highlight: void 0,
}
