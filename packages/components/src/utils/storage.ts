/**
 * 本地存储工具函数
 * 提供对 LocalStorage 和 SessionStorage 的封装
 */

/**
 * LocalStorage 封装
 * 提供类型安全的存取操作
 */
export const LocalStorage = {
  /**
   * 设置 localStorage 项
   * @param key 存储键名
   * @param value 要存储的值（会被 JSON 序列化）
   */
  set<T>(key: string, value: T): void {
    try {
      const stringValue = JSON.stringify(value)
      localStorage.setItem(key, stringValue)
    } catch (error) {
      console.error('Error setting localStorage item:', error)
    }
  },

  /**
   * 获取 localStorage 项
   * @param key 存储键名
   * @param defaultValue 默认值，如果未找到或解析错误时返回
   * @returns 解析后的存储值或默认值
   */
  get<T>(key: string, defaultValue: T): T {
    try {
      const value = localStorage.getItem(key)
      if (value === null) return defaultValue
      return JSON.parse(value) as T
    } catch (error) {
      console.error('Error getting localStorage item:', error)
      return defaultValue
    }
  },

  /**
   * 移除 localStorage 项
   * @param key 要移除的键名
   */
  remove(key: string): void {
    localStorage.removeItem(key)
  },

  /**
   * 清空所有 localStorage 项
   */
  clear(): void {
    localStorage.clear()
  },
}

/**
 * SessionStorage 封装
 * 提供类型安全的存取操作
 */
export const SessionStorage = {
  /**
   * 设置 sessionStorage 项
   * @param key 存储键名
   * @param value 要存储的值（会被 JSON 序列化）
   */
  set<T>(key: string, value: T): void {
    try {
      const stringValue = JSON.stringify(value)
      sessionStorage.setItem(key, stringValue)
    } catch (error) {
      console.error('Error setting sessionStorage item:', error)
    }
  },

  /**
   * 获取 sessionStorage 项
   * @param key 存储键名
   * @param defaultValue 默认值，如果未找到或解析错误时返回
   * @returns 解析后的存储值或默认值
   */
  get<T>(key: string, defaultValue: T): T {
    try {
      const value = sessionStorage.getItem(key)
      if (value === null) return defaultValue
      return JSON.parse(value) as T
    } catch (error) {
      console.error('Error getting sessionStorage item:', error)
      return defaultValue
    }
  },

  /**
   * 移除 sessionStorage 项
   * @param key 要移除的键名
   */
  remove(key: string): void {
    sessionStorage.removeItem(key)
  },

  /**
   * 清空所有 sessionStorage 项
   */
  clear(): void {
    sessionStorage.clear()
  },
}
