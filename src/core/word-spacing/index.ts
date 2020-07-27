import { GlobalCssKeyword, Length } from '../shared'
import { serializeLength } from '../shared'

export type WordSpacingCSSProp = 'word-spacing'

export const serializeWordSpacing = (
  x: 'normal' | Length | GlobalCssKeyword
): { wordSpacing: string } => ({
  wordSpacing: typeof x === 'string' ? x : serializeLength(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type WordSpacingDeclaration = {
  /**
   * Maps to CSS's **`word-spacing`** property
   * @category RBProperty
   * @formalSyntaxForValue normal | <length>
   * @added 0.2.0
   * @implentationReference https://drafts.csswg.org/css-text-3/#propdef-word-spacing
   */
  wordSpacing: 'normal' | Length | GlobalCssKeyword
}
