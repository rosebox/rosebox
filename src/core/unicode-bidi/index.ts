import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type UnicodeBidiDeclaration = {
  /**
   * Maps to CSS's **`unicode-bidi`** property
   * @category RBProperty
   */
  unicodeBidi:
    | 'normal'
    | 'embed'
    | 'isolate'
    | 'bidi-override'
    | 'isolate-override'
    | 'plaintext'
    | GlobalCssKeyword
}
