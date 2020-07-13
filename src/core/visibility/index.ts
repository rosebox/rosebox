import { GlobalCssKeyword } from '../shared'

export type VisibilityCSSProp = 'visibility'

export const serializeVisibilityValue = (
  value: 'visible' | 'hidden' | 'collapse' | GlobalCssKeyword
) => value

/**
 * @category RBDeclarationTypeAlias
 */
export type VisibilityDeclaration = {
  /**
   * Maps to CSS's **`visibility`** property
   * @category RBProperty
   * @formalSyntaxForValue visible | hidden | collapse | inherit
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2011/REC-CSS2-20110607/visufx.html#propdef-visibility
   */
  visibility: 'visible' | 'hidden' | 'collapse' | GlobalCssKeyword
}
