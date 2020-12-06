import { GlobalCssKeyword, Width, isGlobalCssKeyword, isWidthType, PropType, ValueOrFunc } from '../../shared'
import { serializeKeyword, serializeWidth } from '../../shared'

/**
 * @hide
 * */
export type FlexBasis = 'content' | Width

export const isFlexBasis = (value: unknown): value is FlexBasis => value === 'content' || isWidthType(value)
export const serializeFlexBasisValue = (value: FlexBasis): string =>
    value === 'content' ? 'content' : isGlobalCssKeyword(value) ? serializeKeyword(value) : serializeWidth(value)

export const serializeFlexBasis = (type: PropType) => (value: FlexBasis | GlobalCssKeyword) => ({
    [type === 'inline' ? 'flexBasis' : 'flex-basis']: isGlobalCssKeyword(value)
        ? serializeKeyword(value)
        : serializeFlexBasisValue(value),
})

/** @hide */
type FlexBasisPropValue = FlexBasis | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexBasisDeclaration = {
    /**
     * Maps to CSS's **`flex-basis`** property
     * @category RBProperty
     * @formalSyntaxForValue content | <‘width’>
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-basis-property
     */
    flexBasis: FlexBasisPropValue
}
export type FlexBasisDeclarationJSS = {
    flexBasis: ValueOrFunc<FlexBasisPropValue>
}
