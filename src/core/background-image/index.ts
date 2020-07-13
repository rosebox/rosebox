import { serializeColor, Color } from '../color'
import { GlobalCssKeyword, isGlobalCssKeyword, URI } from '../shared'

export type BackgroundColorCSSProp = 'background-color'

export const serializeBackgroundColorValue = (
  value: Color | GlobalCssKeyword
): string => (isGlobalCssKeyword(value) ? value : serializeColor(value))

export const serializeBgImagePropValue = (x: URI | GlobalCssKeyword): string =>
  typeof x === 'string' ? x : x.value

/**
 * @category RBDeclarationTypeAlias
 */
export type BgImageDeclaration = {
  /**
   * A RB property that maps to CSS's **`background-image`** property
   * @category RBProperty
   * @formalSyntaxForValue <uri> | none | inherit
   * @added https://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#propdef-background-image
   */
  backgroundImage: URI | 'none' | GlobalCssKeyword
}
