import { GlobalCssKeyword, Percentage } from '../shared/types'
import { serializePercentage } from '../shared/serializers'

export const serializeFontStretchPropertyValue = (
  x: Percentage | string
): string => (typeof x === 'string' ? x : serializePercentage(x))

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
