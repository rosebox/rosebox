// @revisionRequired

import { serializeShorthandleValue } from '../../../utils'
import { AtLeastOnePropRequired, GlobalCssKeyword, serializeAtomicValue } from '../../shared'
import { FlexBasisValue } from '../flex-basis'

type FlexThreeValues = [number, number, FlexBasisValue]

type FlexObject = AtLeastOnePropRequired<{
    grow: number
    shirnk: number
    basis: FlexBasisValue
}>

const serializeFlexObject = (x: FlexObject): string => {
    const grow = x.grow || '0'
    const shirnk = x.shirnk || '1'
    const basis = x.basis ? serializeAtomicValue(x.basis) : 'auto'
    return `${grow} ${shirnk} ${basis}`
}

const serializeArrayOrObject = (x: FlexObject | FlexThreeValues): string => {
    return Array.isArray(x) ? serializeShorthandleValue(x) : serializeFlexObject(x)
}

/**
 * @hide
 */
type FlexValue = FlexThreeValues

/** @hide */
type FlexPropValue = FlexValue | FlexObject | GlobalCssKeyword

export const serializeFlex = (
    x: FlexPropValue,
): {
    flex: string
} => ({
    flex: typeof x === 'string' ? x : serializeArrayOrObject(x),
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
