import { GlobalCssKeyword, Width, isGlobalCssKeyword, isWidthType, PropType, ValueOrFunc } from '../../shared'
import { serializeKeyword, serializeWidth } from '../../shared'

/**
 * @hide
 * */
export type FlexBasisValue = 'content' | Width

export const isFlexBasis = (value: unknown): value is FlexBasisValue => value === 'content' || isWidthType(value)
export const serializeFlexBasisValue = (value: FlexBasisValue): string =>
    value === 'content' ? 'content' : isGlobalCssKeyword(value) ? serializeKeyword(value) : serializeWidth(value)

export const serializeFlexBasis = (type: PropType) => (value: FlexBasisValue | GlobalCssKeyword) => ({
    [type === 'inline' ? 'flexBasis' : 'flex-basis']: isGlobalCssKeyword(value)
        ? serializeKeyword(value)
        : serializeFlexBasisValue(value),
})

/** @hide */
type FlexBasisPropValue = FlexBasisValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexBasisDeclaration = {
    /**
     * Maps to CSS's **`flex-basis`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#propdef-flex-basis
     * @specification {@link https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/ CSS Flexible Box Layout Module Level 1}
     */
    flexBasis: FlexBasisPropValue
}

export type FlexBasisDeclarationJSS = {
    flexBasis: ValueOrFunc<FlexBasisPropValue>
}
