import { serializeShorthandleValue } from '../../utils'
import { GlobalCssKeyword, Length, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

/**
 * @hide
 */
type BorderSpacing = Length | [Length, Length]

/** @hide */
type BorderSpacingPropValue = BorderSpacing | GlobalCssKeyword

const serializeBorderImageWidthPropValue = (x: BorderSpacingPropValue): string => {
    return !Array.isArray(x) ? serializeAtomicValue(x) : serializeShorthandleValue(x)
}

export const serializeBorderSpacing = (type: PropType) => (x: BorderSpacingPropValue) => {
    const propName = type === 'inline' ? 'borderSpacing' : 'border-spacing'
    return {
        [propName]: serializeBorderImageWidthPropValue(x),
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderSpacingDeclaration = {
    /**
     * Maps to CSS's **`border-spacing`** property
     * @initial visible
     * @definition https://www.w3.org/TR/2019/WD-css-tables-3-20190727/#propdef-border-spacing
     * @specification {@link https://www.w3.org/TR/2019/WD-css-tables-3-20190727/ CSS Table Module Level 3}.
     */
    borderSpacing: BorderSpacingPropValue
}
export type BorderSpacingDeclarationJSS = {
    borderSpacing: ValueOrFunc<BorderSpacingPropValue>
}
