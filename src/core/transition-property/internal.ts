import { GlobalCssKeyword, AnimatableCSSProp } from '../shared/types'

export type TransitionPropertyCSSProp = 'transition-property'

export type TransitionPropertyPropValue = 'none' | GlobalCssKeyword | AnimatableCSSProp | AnimatableCSSProp[]

const serializeValue = (value: TransitionPropertyPropValue) =>
    !Array.isArray(value)
        ? value
        : value.reduce(
            (acc, item, idx) => acc + item + (idx === value.length - 1 ? '' : ', '),
            ''
        )

export const transitionProperty = (
    value: TransitionPropertyPropValue
) => ({
    transitionProperty: serializeValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TransitionPropertyDeclaration = {
    /**
     * Maps to CSS's **`text-align`** property
     * @category RBProperty
     * @formalSyntaxForValue none | <single-transition-property>#
     * @added 0.2.1
     * @implentationReference @implentationReference https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/#transition-property-property
     */
    transitionProperty: TransitionPropertyPropValue
}
