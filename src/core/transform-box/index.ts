import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue =
  | 'content-box'
  | 'border-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box'
  | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TransformBoxDeclaration = {
  /**
   * Maps to CSS's **`transform-box`** property
   * @category RBProperty
   */
  transformBox: PropValue
}

export type TransformBoxDeclarationJSS = {
  transformBox: ValueOrFunc<PropValue>
}
