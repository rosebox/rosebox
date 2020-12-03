import { ShrinkGrow } from '../shared'
import { GlobalCssKeyword, PropType } from '../../shared'

export const serializeFlexShrink = (type: PropType) => (
  value: ShrinkGrow | GlobalCssKeyword
): { [key: string]: string | number } => ({
  [type === 'inline' ? 'flexShrink' : 'flex-shrink']: value,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexShrinkDeclaration = {
  /**
   * Maps to CSS's **`flex-shrink`** property
   * @category RBProperty
   * @formalSyntaxForValue <number>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-shrink-property
   */
  flexShrink: ShrinkGrow | GlobalCssKeyword
}
