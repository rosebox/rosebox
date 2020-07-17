import {
  GlobalCssKeyword,
  AnimatableCSSProp,
  CustomIdent,
} from '../shared/types'
import { serializeCustomIdent } from '../shared/serializers'

export type TransitionPropertyCSSProp = 'transition-property'

export type TransitionPropertyPropValue =
  | 'none'
  | 'all'
  | GlobalCssKeyword
  | AnimatableCSSProp
  | CustomIdent
  | (AnimatableCSSProp | CustomIdent)[]

const serializeValue = (value: TransitionPropertyPropValue) => {
  const valArray = Array.isArray(value) ? value : [value]
  return valArray.reduce(
    (acc, item, idx) =>
      acc +
      (typeof item === 'string' ? item : serializeCustomIdent(item)) +
      (idx === valArray.length - 1 ? '' : ', '),
    ''
  )
}

export const serializeTransitionPropertyValue = (
  value: TransitionPropertyPropValue
): string => serializeValue(value)

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
