import { GlobalCssKeyword } from '../shared'

export type TextAlignCSSProp = 'text-align'

export const serializeTextAlign = (
  value:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'
    | 'justify-all'
    | GlobalCssKeyword
) => value

/**
 * @category RBDeclarationTypeAlias
 */
export type TextAlignDeclaration = {
  /**
   * Maps to CSS's **`text-align`** property
   * @category RBProperty
   * @formalSyntaxForValue start | end | left | right | center | justify | match-parent | justify-all
   * @added 0.2.0
   * @implentationReference @implentationReference https://www.w3.org/TR/2019/WD-css-text-3-20191113/#text-align-property
   */
  textAlign:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent'
    | 'justify-all'
    | GlobalCssKeyword
}
