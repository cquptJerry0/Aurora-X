import { Ref } from 'vue';
/**
 * 雾化效果和背景色处理钩子
 * 用于自动检测和适配容器背景色，应用于打字机雾化效果
 *
 * @param elementRef - 要应用雾化效果的元素引用
 * @param containerRef - 父容器元素引用
 * @returns 雾化效果处理方法
 */
export declare function useFogEffect(elementRef: Ref<HTMLElement | null>, containerRef?: Ref<HTMLElement | null>): {
    updateFogColor: () => void;
    getBackgroundColor: (element: HTMLElement | null) => string | null;
};
