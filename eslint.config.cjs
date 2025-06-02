// .eslintrc.cjs
const antfu = require('@antfu/eslint-config')

module.exports = antfu({
  // Vue 相关配置
  vue: {
    // 强制 Vue 单文件组件中的块顺序
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'], // 顺序：脚本 -> 模板 -> 样式
    }],
    // 强制组件名称使用 PascalCase
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // 强制属性使用 kebab-case
    'vue/attribute-hyphenation': ['error', 'always'],
  },

  // TypeScript 支持
  typescript: {
    // 启用 TypeScript 相关规则
    enabled: true,
    // 严格模式
    strict: true,
  },

  // 代码风格配置
  stylistic: {
    // 缩进使用 2 个空格
    indent: 2,
    // 不使用分号
    semi: false,
    // 使用单引号
    quotes: 'single',
    // 对象属性使用引号
    'quote-props': ['error', 'as-needed'],
    // 箭头函数参数使用括号
    'arrow-parens': ['error', 'always'],
    // 对象末尾逗号
    'comma-dangle': ['error', 'always-multiline'],
  },

  // 自定义规则
  rules: {
    // 关闭构造函数首字母大写规则
    'new-cap': ['off', {
      newIsCap: true,    // 允许 new 操作符使用大写开头的函数
      capIsNew: false,   // 允许大写开头的函数不使用 new
    }],
    // 允许使用 console
    'no-console': 'off',
    // 允许使用 debugger
    'no-debugger': 'warn',
    // 允许未使用的变量
    'no-unused-vars': 'warn',
    // 允许使用 var
    'no-var': 'error',
    // 强制使用 const
    'prefer-const': 'error',
  },

  // 忽略的文件和目录
  ignores: [
    '**/dist/**',        // 构建输出目录
    '**/node_modules/**', // 依赖包目录
    '**/build/**',       // 构建相关目录
    '**/lib/**',         // 库文件目录
    '**/es/**',          // ES 模块目录
    '**/types/**',       // 类型定义目录
    '**/public/**',      // 静态资源目录
    '**/vite.config.ts', // Vite 配置文件
    '**/eslint.config.js', // ESLint 配置文件
    '**/.turbo/**',      // Turborepo 缓存目录
    '**/.changeset/**',  // Changesets 目录
  ],

  // 编辑器配置
  editor: {
    // 自动修复
    formatOnSave: true,
    // 默认格式化工具
    defaultFormatter: 'prettier',
  },
})