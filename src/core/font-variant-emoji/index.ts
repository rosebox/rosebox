import { GlobalCssKeyword } from '../shared/types'

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantEmojiDeclaration = {
  /**
   * Maps to CSS's **`font-variant-emoji`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | text | emoji | unicode
   * @implementationReference https://drafts.csswg.org/css-fonts-4/#font-variant-emoji-prop
   */
  fontVariantEmoji: 'auto' | 'text' | 'emoji' | 'unicode' | GlobalCssKeyword
}
