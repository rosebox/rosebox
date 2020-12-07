import { Color, GlobalCssKeyword, serializeAtomicValue, ValueOrFunc } from '../shared'

export const serializeColor = (
    x: Color | GlobalCssKeyword,
): {
    color: string
} => ({
    color: serializeAtomicValue(x),
})

/** @hide */
type ColorPropValue = Color | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type ColorDeclaration = {
    /**
     * Maps to CSS's **`color`** property
     * @initial transparent
     * @definition https://www.w3.org/TR/2020/WD-css-color-4-20201112/#propdef-color
     * @specification {@link https://www.w3.org/TR/2020/WD-css-color-4-20201112/ CSS Backgrounds and Borders Module Level 4}.
     */
    color: ColorPropValue
}

export type ColorDeclarationJSS = {
    color: ValueOrFunc<ColorPropValue>
}
