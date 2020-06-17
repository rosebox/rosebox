import { GlobalCssKeyword } from '../shared/types'

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariationSettingsDeclaration = {
  /**
   * Maps to CSS's **`font-synthesis-style`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | none
   * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#font-synthesis-style
   */
  fontVariationSetting:
    | 'normal'
    | [string, number]
    | [string, number][]
    | GlobalCssKeyword
}
