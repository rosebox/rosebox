import { GlobalCssKeyword } from '../shared'

export type ZIndexCSSProp = 'z-index'

export const serializezIndexValue = (
  value: number | 'auto' | GlobalCssKeyword
) => value

/**
 * @category RBDeclarationTypeAlias
 */
export type ZIndexDeclaration = {
  /**
   * Maps to CSS's **`z-index`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | <integer>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#propdef-z-index
   */
  zIndex: number | 'auto' | GlobalCssKeyword
}
