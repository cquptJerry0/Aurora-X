import { default as MarkdownIt } from 'markdown-it';
export type MarkdownItPlugin = (md: MarkdownIt) => void

export interface ConfigProps {
  mdPlugins?: MarkdownItPlugin[]
  highlight?: (code: string, language: string) => string
}
