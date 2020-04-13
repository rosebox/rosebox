import {
  Length,
  Percentage,
  GlobalCssKeyword,
  isGlobalCssKeyword,
} from '../shared/types'
import { serializeLengthPercentage } from '../shared/serializers'

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

export type TopDeclaration = {
  /**
   * Maps to CSS's **`top`** property
   * @category Property
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

export type RightDeclaration = {
  /**
   * Maps to CSS's **`right`** property
   * @category Property
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

export type BottomDeclaration = {
  /**
   * Maps to CSS's **`bottom`** property
   * @category Property
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

export type LeftDeclaration = {
  /**
   * Maps to CSS's **`left`** property
   * @category Property
   * @formalSyntaxForValue auto | <length> | <percentage>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#box-offsets-trbl
   */
  left: Length | Percentage | 'auto' | GlobalCssKeyword
}
