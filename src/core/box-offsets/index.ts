import {
  GlobalCssKeyword,
  LengthPercentage,
  serializeAtomicValue,
  Calculation,
  ValueOrFunc,
} from '../shared'

export const serializeBoxOffset = (property: string) => (
  x: LengthPercentage | 'auto' | GlobalCssKeyword
) => ({
  [property]: serializeAtomicValue(x),
})

export const serializeTop = serializeBoxOffset('top')

type PropValue = LengthPercentage | 'auto' | Calculation | GlobalCssKeyword

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
  top: PropValue
}
export type TopDeclarationJSS = {
  top: ValueOrFunc<PropValue>
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
  right: PropValue
}
export type RightDeclarationJSS = {
  right: ValueOrFunc<PropValue>
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
  bottom: PropValue
}
export type BottomDeclarationJSS = {
  bottom: ValueOrFunc<PropValue>
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
  left: PropValue
}
export type LeftDeclarationJSS = {
  left: ValueOrFunc<PropValue>
}

export const serializeLeft = serializeBoxOffset('left')
