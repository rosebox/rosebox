import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue =
  | 'normal'
  | 'embed'
  | 'isolate'
  | 'bidi-override'
  | 'isolate-override'
  | 'plaintext'
  | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type UnicodeBidiDeclaration = {
  /**
   * Maps to CSS's **`unicode-bidi`** property
   * @category RBProperty
   */
  unicodeBidi: PropValue
}

export type UnicodeBidiDeclarationJSS = {
  /**
   * Maps to CSS's **`unicode-bidi`** property
   * @category RBProperty
   */
  unicodeBidi: ValueOrFunc<PropValue>
}
