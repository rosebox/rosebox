import { GlobalCssKeyword, Percentage, PropType, serializeAtomicValue } from '../shared'

export const serializeFontStretch = (type: PropType) => (
  x: Percentage | string
) => ({
  [type === 'inline' ? 'fontStretch' : 'font-stretch']: serializeAtomicValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FontStretchDeclaration = {
  /**
   * Maps to CSS's **`font-stretch`** property
   * @category RBProperty
   * @formalSyntaxForValu normal | <percentage> | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded
   */
  fontStretch:
    | Percentage
    | 'normal'
    | 'ultra-condensed'
    | 'extra-condensed'
    | 'condensed'
    | 'semi-condensed'
    | 'semi-expanded'
    | 'expanded'
    | 'extra-expanded'
    | 'ultra-expanded'
    | GlobalCssKeyword
}
