import { GlobalCssKeyword } from '../shared/types'

export type PositionCSSProp = 'position'

export const serializePosition = (
  value:
    | 'relative'
    | 'absolute'
    | 'static'
    | 'fixed'
    | 'sticky'
    | GlobalCssKeyword
) => value

/**
 * @category RBDeclarationTypeAlias
 */
export type PositionDeclaration = {
  /**
   * Maps to CSS's **`position`** property
   * @category RBProperty
   * @formalSyntaxForValue relative | absolute | static | fixed | sticky
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#position-property
   */
  position:
    | 'relative'
    | 'absolute'
    | 'static'
    | 'fixed'
    | 'sticky'
    | GlobalCssKeyword
}
