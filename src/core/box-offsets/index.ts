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

export const serializeBoxOffsetValue = (
  value: Length | Percentage | 'auto' | GlobalCssKeyword
): string =>
  value === 'auto'
    ? 'auto'
    : isGlobalCssKeyword(value)
      ? value
      : serializeLengthPercentage(value)

export const serializeTopValue = serializeBoxOffsetValue

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

export const serializeRightValue = serializeBoxOffsetValue


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

export const serializeBottomValue = serializeBoxOffsetValue

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

export const serializeLeftValue = serializeBoxOffsetValue
