import {
  Length,
  Percentage,
  GlobalCssKeyword,
  isGlobalCssKeyword,
} from '../shared/types'
import { serializeLengthPercentage } from '../shared/serializers'

export type TopCSSProp = 'top'
export type RightCSSProp = 'right'
export type BottomCSSProp = 'bottom'
export type LeftCSSProp = 'left'

/**
 * Creates a declaration object for the **`top`** property.
 * @category Declaration function
 * @formalSyntax auto | <length> | <percentage>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
 */
export const top = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { top: string } => ({
  top:
    value === 'auto'
      ? 'auto'
      : isGlobalCssKeyword(value)
        ? value
        : serializeLengthPercentage(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TopDeclaration = {
  /**
   * Maps to CSS's **`top`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | <length> | <percentage>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
   */
  top: Length | Percentage | 'auto' | GlobalCssKeyword
}

/**
 * Creates a declaration object for the **`right`** property.
 * @category Declaration functionn
 * @formalSyntax auto | <length> | <percentage>
 * @added 0.1.4
 * @implementationReference  https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
 */
export const right = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { right: string } => ({
  right:
    value === 'auto'
      ? 'auto'
      : isGlobalCssKeyword(value)
        ? value
        : serializeLengthPercentage(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type RightDeclaration = {
  /**
   * Maps to CSS's **`right`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | <length> | <percentage>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
   */
  right: Length | Percentage | 'auto' | GlobalCssKeyword
}

/**
 * Creates a declaration object for the **`bottom`** property.
 * @category Declaration function
 * @formalSyntax auto | <length> | <percentage>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
 */
export const bottom = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { bottom: string } => ({
  bottom:
    value === 'auto'
      ? 'auto'
      : isGlobalCssKeyword(value)
        ? value
        : serializeLengthPercentage(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BottomDeclaration = {
  /**
   * Maps to CSS's **`bottom`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | <length> | <percentage>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
   */
  bottom: Length | Percentage | 'auto' | GlobalCssKeyword
}

/**
 * Creates a declaration object for the **`left`** property.
 * @category Declaration functionn
 * @formalSyntax auto | <length> | <percentage>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
 */
export const left = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): { left: string } => ({
  left:
    value === 'auto'
      ? 'auto'
      : isGlobalCssKeyword(value)
        ? value
        : serializeLengthPercentage(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type LeftDeclaration = {
  /**
   * Maps to CSS's **`left`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | <length> | <percentage>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
   */
  left: Length | Percentage | 'auto' | GlobalCssKeyword
}
