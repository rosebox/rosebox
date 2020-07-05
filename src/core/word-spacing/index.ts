import { GlobalCssKeyword, Length } from '../shared/types'
import { serializeLength } from '../shared/serializers'

export type WordSpacingCSSProp = 'word-spacing'

export const serializeWordSpacingPropValue = (
  x: 'normal' | Length | GlobalCssKeyword
): string => (typeof x === 'string' ? x : serializeLength(x))

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
