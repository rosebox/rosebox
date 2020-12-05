import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type TransformStylePropValue = 'flat' | 'preserve-3d' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TransformStyleDeclaration = {
  /**
   * Maps to CSS's **`transform-style`** property
   * @category RBProperty
   */
  transformStyle: TransformStylePropValue
}

export type TransformStyleDeclarationJSS = {
  transformStyle: ValueOrFunc<TransformStylePropValue>
}
