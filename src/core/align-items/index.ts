import { GlobalCssKeyword } from '../shared/types'

export const serializeAlignItems = (
  value:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch'
    | GlobalCssKeyword
): string => value

/**
 * @category RBDeclarationTypeAlias
 */
export type AlignItemsDeclaration = {
  /**
   * Maps to CSS's **`align-items`** property
   * @category RBProperty
   * @formalSyntaxForValue 	flex-start | flex-end | center | baseline | stretch
   * @added 0.2.2
   * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#align-items-property
   */
  alignItems:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch'
    | GlobalCssKeyword
}
