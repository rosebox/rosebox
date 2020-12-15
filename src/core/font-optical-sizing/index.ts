import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

export const serializeFontOpticalSizing = (type: PropType) => (x: 'auto' | 'normal' | 'none' | GlobalCssKeyword) => ({
    [type === 'inline' ? 'fontOpticalSizing' : 'font-optical-sizing']: x,
})

type FontOpticalSizingPropValue = 'auto' | 'none' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontOpticalSizingDeclaration = {
    /**
     * Maps to CSS's **`font-optical-sizing`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#propdef-font-optical-sizing
     * @specification {@link https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/ CSS Fonts Module Level 4}
     */
    fontOpticalSizing: FontOpticalSizingPropValue
}
export type FontOpticalSizingDeclarationJSS = {
    fontOpticalSizing: ValueOrFunc<FontOpticalSizingPropValue>
}
