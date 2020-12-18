// @revisionRequired

import { serializeShorthandleValue } from '../../../utils'
import { GlobalCssKeyword, serializeAtomicValue, ValueOrFunc } from '../../shared'
import { FlexBasisValue } from '../flex-basis'

/**
 * @hide
 */
type FlexValue = FlexSingleValue | FlexTwoValues | FlexThreeValues

/** @hide */
type FlexPropValue = FlexValue | GlobalCssKeyword

export type FlexSingleValue = 'none' | number | FlexBasisValue
export type FlexTwoValues = [number, FlexBasisValue] | [FlexBasisValue, number]
export type FlexThreeValues = [number, number, FlexBasisValue] | [FlexBasisValue, number, number]

export const serializeFlex = (
    x: FlexPropValue,
): {
    flex: string
} => ({
    flex: !Array.isArray(x) ? serializeAtomicValue(x) : serializeShorthandleValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexDeclaration = {
    /**
     * Maps to CSS's **`flex`** property
     * @initial 0 1 auto
     * @definition https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#propdef-flex
     * @specification {@link https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/ CSS Flexible Box Layout Module Level 1}
     */
    flex: FlexPropValue
}
export type FlexDeclarationJSS = {
    flex: ValueOrFunc<FlexPropValue>
}
