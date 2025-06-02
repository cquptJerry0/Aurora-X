import { default as MarkdownIt } from 'markdown-it';
import { XSSConfig } from '../type';
/**
 * Markdown渲染和配置管理钩子
 * 提供高度可配置的Markdown渲染功能
 *
 * @param options - Markdown配置选项
 * @returns Markdown相关方法和属性
 */
export declare function useMarkdown(options?: {
    highlight?: (code: string, lang: string) => string;
    plugins?: any[];
    xss?: boolean | XSSConfig;
}): {
    md: MarkdownIt;
    applyPlugins: (plugins?: any[]) => void;
    render: (content: string) => string;
};
