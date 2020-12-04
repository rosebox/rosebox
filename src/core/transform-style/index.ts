import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue = 'flat' | 'preserve-3d' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TransformStyleDeclaration = {
  /**
   * Maps to CSS's **`transform-style`** property
   * @category RBProperty
   */
  transformStyle: PropValue
}

export type TransformStyleDeclarationJSS = {
  transformStyle: ValueOrFunc<PropValue>
}
