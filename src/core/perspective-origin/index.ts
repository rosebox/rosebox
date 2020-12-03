import {
  GlobalCssKeyword,
  isGlobalCssKeyword,
  serializePosition,
  ValueOrFunc,
} from '../shared'
import { Position } from '../shared'

export const serializePerspectiveOrigin = (
  x: Position | GlobalCssKeyword
): { perspectiveOrigin: string } => ({
  perspectiveOrigin: isGlobalCssKeyword(x) ? x : serializePosition(x),
})

/** @hide */
type PropValue = Position | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type PerspectiveOriginDeclaration = {
  /**
   * Maps to CSS's **`perspective-origin`** property
   * @category RBProperty
   */
  perspectiveOrigin: PropValue
}

export type PerspectiveOriginDeclarationJSS = {
  perspectiveOrigin: ValueOrFunc<PropValue>
}
