import { CONFIG_PROVIDE_KEY, defaultConfig } from './constants'

export function useConfig() {
  return inject(CONFIG_PROVIDE_KEY, defaultConfig)
}
