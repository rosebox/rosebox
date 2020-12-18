import { GlobalCssKeyword, Width, Calculation, serializeAtomicValue, ValueOrFunc } from '../shared'

export type HeightCSSProp = 'height'

export const serializeHeight = (
    x: Width | GlobalCssKeyword,
): {
    height: string
} => ({
    height: serializeAtomicValue(x),
})

/** @hide */
type HeightPropValue = Width | Calculation | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type HeightDeclaration = {
    /**
     * Maps to CSS's **`height`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2011/REC-CSS2-20110607/visudet.html#propdef-height
     * @specification {@link https://www.w3.org/TR/2011/REC-CSS2-20110607/visudet.html CSS 2.1}
     */
    height: HeightPropValue
}

export type HeightDeclarationJSS = {
    height: ValueOrFunc<HeightPropValue>
}
