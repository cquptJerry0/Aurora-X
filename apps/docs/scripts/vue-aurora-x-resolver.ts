import type { ComponentResolver } from 'unplugin-vue-components'

export function tovUIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve(name) {
      // 处理Element Plus组件
      if (name.startsWith('El') || name.startsWith('el')) {
        return {
          name,
          from: 'element-plus',
        }
      }

      // 移除 ClientOnly 组件
      if (name === 'ClientOnly') {
        return null
      }

      // 处理Aurora-X组件，直接从类型定义文件导入
      if (name === 'Bubble') {
        return {
          name: 'Bubble',
          from: 'vue-aurora-x',
          // 这里的关键是直接使用导出的组件名
          sideEffects: 'vue-aurora-x/dist/style.css',
        }
      }

      // 处理Button组件
      if (name === 'Button') {
        return {
          name: 'Button',
          from: 'vue-aurora-x',
          sideEffects: 'vue-aurora-x/dist/style.css',
        }
      }

      // 处理其他Aurora-X组件
      if (name.startsWith('A')) {
        const componentName = name.slice(1) // 移除A前缀
        return {
          name: componentName,
          from: 'vue-aurora-x',
          sideEffects: 'vue-aurora-x/dist/style.css',
        }
      }

      return null
    },
  }
}
