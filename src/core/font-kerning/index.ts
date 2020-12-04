import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

export const serializeFontKerning = (type: PropType) => (
  x: 'auto' | 'normal' | 'none' | GlobalCssKeyword
) => ({
  [type === 'inline' ? 'fontKerning' : 'font-kerning']: x,
})

/** @hide */
type PropValue = 'auto' | 'normal' | 'none' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontKerningDeclaration = {
  /**
   * Maps to CSS's **`font-kerning`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | normal | none
   * @implementationReference https://drafts.csswg.org/css-fonts-4/#propdef-font-kerning
   */
  fontKerning: PropValue
}

export type FontKerningDeclarationJSS = {
  fontKerning: ValueOrFunc<PropValue>
}
