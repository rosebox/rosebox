import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type UnicodeBidiPropValue =
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
    unicodeBidi: UnicodeBidiPropValue
}

export type UnicodeBidiDeclarationJSS = {
    /**
     * Maps to CSS's **`unicode-bidi`** property
     * @category RBProperty
     */
    unicodeBidi: ValueOrFunc<UnicodeBidiPropValue>
}
