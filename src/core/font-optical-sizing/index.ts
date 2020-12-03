import { GlobalCssKeyword, PropType } from '../shared'

export const serializeFontOpticalSizing = (type: PropType) => (
  x: 'auto' | 'normal' | 'none' | GlobalCssKeyword
) => ({
  [type === 'inline' ? 'fontOpticalSizing' : 'font-optical-sizing']: x,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FontOpticalSizingDeclaration = {
  /**
   * Maps to CSS's **`font-optical-sizing`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | none
   * @implementationReference https://drafts.csswg.org/css-fonts-4/#font-optical-sizing-def
   */
  fontOpticalSizing: 'auto' | 'none' | GlobalCssKeyword
}
