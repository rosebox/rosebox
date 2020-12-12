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
     * @category RBProperty
     */
    flex: FlexPropValue
}
export type FlexDeclarationJSS = {
    flex: ValueOrFunc<FlexPropValue>
}
