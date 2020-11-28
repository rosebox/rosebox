import {
  GlobalCssKeyword,
  LengthPercentage,
  serializeAtomicValue,
  Calculation,
} from '../shared'

export const serializeBoxOffset = (property: string) => (
  x: LengthPercentage | 'auto' | GlobalCssKeyword
) => ({
  [property]: serializeAtomicValue(x),
})

export const serializeTop = serializeBoxOffset('top')

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
  top: LengthPercentage | 'auto' | Calculation | GlobalCssKeyword
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
  right: LengthPercentage | 'auto' | Calculation | GlobalCssKeyword
}

export const serializeRight = serializeBoxOffset('right')

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
  bottom: LengthPercentage | Calculation | 'auto' | GlobalCssKeyword
}

export const serializeBottom = serializeBoxOffset('bottom')

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
  left: LengthPercentage | 'auto' | Calculation | GlobalCssKeyword
}

export const serializeLeft = serializeBoxOffset('left')
