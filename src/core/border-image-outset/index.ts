import { serializeShorthandleValue, ArrayMin2Max4 } from '../../utils'
import { GlobalCssKeyword, Length, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

/** @hide */
export type BorderImageOutsetValue = Length | number | ArrayMin2Max4<Length | number>

const serializeBorderImageOutsetPropValue = (x: BorderImageOutsetPropValue | GlobalCssKeyword): string => {
    return !Array.isArray(x)
        ? serializeAtomicValue(x as Length | number | GlobalCssKeyword)
        : serializeShorthandleValue(x)
}

export const serializeBorderImageOutset = (type: PropType) => (x: BorderImageOutsetPropValue) => {
    const propName = type === 'inline' ? 'borderImageOutset' : 'border-image-outset'
    return {
        [propName]: serializeBorderImageOutsetPropValue(x),
    }
}

/** @hide */
type BorderImageOutsetPropValue = BorderImageOutsetValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderImageOutsetDeclaration = {
    /**
     * A RB property that maps to CSS's **`border-image-outset`** property
     * @initial 1
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-image-outset
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderImageOutset: BorderImageOutsetPropValue
}

export type BorderImageOutsetDeclarationJSS = {
    borderImageOutset: ValueOrFunc<BorderImageOutsetPropValue>
}
