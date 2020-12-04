import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

export const serializeFontStyle = (type: PropType) => (
  x: 'normal' | 'italic' | 'oblique' | GlobalCssKeyword
) => ({
  [type === 'inline' ? 'fontStyle' : 'font-style']: x,
})

/** @hide */
type PropValue = 'normal' | 'italic' | 'oblique' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontStyleDeclaration = {
  /**
   * Maps to CSS's **`font-style`** property
   * @category RBProperty
   * @formalSyntaxForValue normal | italic | oblique
   * @implementationReference https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#font-style-prop
   */
  fontStyle: PropValue
}
export type FontStyleDeclarationJSS = {
  /**
   * Maps to CSS's **`font-style`** property
   * @category RBProperty
   * @formalSyntaxForValue normal | italic | oblique
   * @implementationReference https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#font-style-prop
   */
  fontStyle: ValueOrFunc<PropValue>
}
