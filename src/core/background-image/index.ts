import { GlobalCssKeyword, serializeAtomicValue } from '../shared'
import { Image } from '../shared/types/image'

export type BackgroundImageValue = Image | 'none'

export const serializeBackgroundImage = (
  x: BackgroundImageValue | GlobalCssKeyword
): { backgroundImage: string } => ({
  backgroundImage: serializeAtomicValue(x),
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
