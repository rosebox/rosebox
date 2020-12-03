import { GlobalCssKeyword, ValueOrFunc } from '../shared'

type NumericFigureValues = 'lining-nums' | 'oldstyle-num'
type NumericSpacingValues = 'proportional-nums' | 'tabular-nums'
type NumericFractionValues = 'diagonal-fractions' | 'stacked-fractions'

/** @hide */
type PropValue = 'normal'
| 'ordinal'
| 'slashed-zero'
| NumericFigureValues
| NumericSpacingValues
| NumericFractionValues
| GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantNumericDeclaration = {
  /**
   * Maps to CSS's **`font-variant-numeric`** property
   * @category RBProperty
   * @formalSyntaxForValue 	normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]
   * @implementationReference https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-numeric
   */
  fontVariantNumeric: PropValue
}

export type FontVariantNumericDeclarationJSS = {
  fontVariantNumeric: ValueOrFunc<PropValue>
}
