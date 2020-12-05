import {
  GlobalCssKeyword,
  Length,
  Calculation,
  serializeAtomicValue,
  PropType,
  ValueOrFunc,
} from '../shared'

export type LetterSpacingCSSProp = 'letter-spacing'

export const serializeLetterSpacing = (type: PropType) => (
  x: 'normal' | Length | Calculation | GlobalCssKeyword
) => ({
  [type === 'inline' ? 'letterSpacing' : 'letter-spacing']: serializeAtomicValue(x),
})

/** @hide */
type LetterSpacingPropValue = 'normal' | Length | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type LetterSpacingDeclaration = {
  /**
   * Maps to CSS's **`letter-spacing`** property
   * @category RBProperty
   * @formalSyntaxForValue normal | <length>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2019/WD-css-text-3-20191113/#letter-spacing-property
   */
  letterSpacing: LetterSpacingPropValue
}

export type LetterSpacingDeclarationJSS = {
  letterSpacing: ValueOrFunc<LetterSpacingPropValue>
}
