import { serializeColor, Color } from '../color'
import {
  GlobalCssKeyword,
  isGlobalCssKeyword,
  isURL,
  URI,
  URL,
  serializeURL,
  serializeURI,
} from '../shared'

export type BackgroundColorCSSProp = 'background-color'

export const serializeBackgroundColorValue = (
  value: Color | GlobalCssKeyword
): string => (isGlobalCssKeyword(value) ? value : serializeColor(value))

export const serializeBgImagePropValue = (
  x: URL | URI | GlobalCssKeyword
): string => {
  return typeof x === 'string'
    ? x
    : isURL(x)
    ? serializeURL(x)
    : serializeURI(x)
}

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
  backgroundImage: URL | URI | 'none' | GlobalCssKeyword
}
