import { Color, PropType, serializeAtomicValue } from '../shared'
import { GlobalCssKeyword } from '../shared'

export const serializeBackgroundColor = (type: PropType) => (x: BackgroundColorPropValue) => ({
    [type === 'inline' ? 'backgroundColor' : 'background-color']: serializeAtomicValue(x),
})

/** @hide */
type BackgroundColorPropValue = Color | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BgColorDeclaration = {
    /**
     * Maps to CSS's **`background-color`** property
     * @initial transparent
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-color
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    backgroundColor: BackgroundColorPropValue
}
