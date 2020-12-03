import { ShrinkGrow } from '../shared'
import { GlobalCssKeyword, PropType } from '../../shared'

export const serializeFlexGrow = (type: PropType) => (
  value: ShrinkGrow | GlobalCssKeyword
): {
  [key: string]: string | number
} => ({
  [type === 'inline' ? 'flexGrow' : 'flex-grow']: value,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexGrowDeclaration = {
  /**
   * Maps to CSS's **`flex-grow`** property
   * @category RBProperty
   * @formalSyntaxForValue <number>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-grow-property
   */
  flexGrow: ShrinkGrow | GlobalCssKeyword
}
