import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue = 'mixed' | 'upright' | 'sideways' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextOrientationDeclaration = {
  /**
   * Maps to CSS's **`text-orientation`** property
   * @category RBProperty
   */
  textOrientation: PropValue
}

export type TextOrientationDeclarationJSS = {
  textOrientation: ValueOrFunc<PropValue>
}
