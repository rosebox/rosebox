import {
  GlobalCssKeyword,
  isGlobalCssKeyword,
  serializePosition,
} from '../shared'
import { Position } from '../shared'

export const serializePerspectiveOrigin = (
  x: Position | GlobalCssKeyword
): { perspectiveOrigin: string } => ({
  perspectiveOrigin: isGlobalCssKeyword(x) ? x : serializePosition(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type PerspectiveOriginDeclaration = {
  /**
   * Maps to CSS's **`perspective-origin`** property
   * @category RBProperty
   */
  perspectiveOrigin: Position | GlobalCssKeyword
}
