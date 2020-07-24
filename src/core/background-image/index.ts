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

export type BackgroundColor = URL | URI | 'none'

export const serializeBackgroundColorValue = (
  value: Color | GlobalCssKeyword
): string => (isGlobalCssKeyword(value) ? value : serializeColor(value))

export const serializeBackgroundImage = (
  x: BackgroundColor | GlobalCssKeyword
): { backgroundImage: string } => ({
  backgroundImage:
    typeof x === 'string' ? x : isURL(x) ? serializeURL(x) : serializeURI(x),
})

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
  backgroundImage: BackgroundColor | GlobalCssKeyword
}
