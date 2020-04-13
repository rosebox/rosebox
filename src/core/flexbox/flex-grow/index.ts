import { ShrinkGrow } from '../shared/types'
import { GlobalCssKeyword } from '../../shared/types'

/**
 * Creates a declaration object for the **`flex-grow`** property.
 * @category Declaration function
 * @formalSyntax <number>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-grow-property
 */
export const flexGrow = (value: ShrinkGrow | GlobalCssKeyword) => ({
  flexGrow: value,
})

export type FlexGrowDeclaration = {
  /**
   * Maps to CSS's **`flex-grow`** property
   * @category Property
   * @formalSyntaxForValue <number>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-grow-property
   */
  flexGrow: ShrinkGrow | GlobalCssKeyword
}