import { GlobalCssKeyword, URI, URL, getSerializer } from '../shared'

export type BackgroundImageValue = URL | URI | 'none'

export const serializeBackgroundImage = (
  x: BackgroundImageValue | GlobalCssKeyword
): { backgroundImage: string } => ({
  backgroundImage: typeof x === 'string' ? x : getSerializer(x)(x),
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
  backgroundImage: BackgroundImageValue | GlobalCssKeyword
}
