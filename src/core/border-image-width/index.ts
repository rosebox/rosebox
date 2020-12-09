import { serializeShorthandleValue } from '../../utils'
import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc, Width } from '../shared'

/** @hide */
export type BorderImageWidthValue = Width | Width[]

const serializeBorderImageWidthPropValue = (x: BorderImageWidthPropValue): string => {
    return !Array.isArray(x) ? serializeAtomicValue(x) : serializeShorthandleValue(x)
}

export const serializeBorderImageWidth = (type: PropType) => (x: BorderImageWidthPropValue) => {
    const propName = type === 'inline' ? 'borderImageWidth' : 'border-image-width'
    return {
        [propName]: serializeBorderImageWidthPropValue(x),
    }
}

/** @hide */
type BorderImageWidthPropValue = BorderImageWidthValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderImageWidthDeclaration = {
    /**
     * A RB property that maps to CSS's **`border-image-width`** property
     * @initial 1
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-image-width
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderImageWidth: BorderImageWidthPropValue
}

export type BorderImageWidthDeclarationJSS = {
    borderImageWidth: ValueOrFunc<BorderImageWidthPropValue>
}
