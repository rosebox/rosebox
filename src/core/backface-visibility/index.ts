import { GlobalCssKeyword } from '../shared'

/**
 * @hide
 */
type BackfaceVisibility = 'visible' | 'hidden'

export const serializeBackfaceVisibility = (
  x: BackfaceVisibility | GlobalCssKeyword
): {
  backfaceVisibility: string
} => ({
  backfaceVisibility: x,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BackfaceVisibilityDeclaration = {
  /**
   * Maps to CSS's **`backface-visibility`** property
   * @category RBProperty
   */
  backfaceVisibility: BackfaceVisibility | GlobalCssKeyword
}
