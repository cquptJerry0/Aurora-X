import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Aurora-X',
  description: 'Aurora X 组件库文档',
  base: '/Aurora-X/',

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/use/' },
      { text: '组件', link: '/components/Bubble/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [{ text: '安装使用', link: '/guide/use/' }],
        },
      ],
      '/components/': [
        {
          text: '配置',
          items: [
            { text: 'Config 配置', link: '/components/Config/' },
          ],
        },
        {
          text: '输出',
          items: [
            { text: 'Bubble 气泡', link: '/components/Bubble/' },
            {
              text: 'BubbleList 气泡列表',
              link: '/components/BubbleList/',
            },
            {
              text: 'Typewriter 打字机',
              link: '/components/Typewriter/',
            },
          ],
        },
        {
          text: '输入',
          items: [
            {
              text: 'Attachments 附件',
              link: '/components/Attachments/',
            },
          ],
        },
        {
          text: '工具',
          items: [
            {
              text: 'XStream 流式数据处理',
              link: '/components/XStream/',
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/cquptJerry0/Aurora-X',
      },
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/vue-aurora-x',
      },
    ],
  },
})
