import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

/**
 * @hide
 */
type BackfaceVisibility = 'visible' | 'hidden'

export const serializeBackfaceVisibility = (type: PropType) => (x: BackfaceVisibilityPropValue) => {
    const propName = type === 'inline' ? 'backfaceVisibility' : 'backface-visibility'
    return {
        [propName]: x,
    }
}

/** @hide */
type BackfaceVisibilityPropValue = BackfaceVisibility | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BackfaceVisibilityDeclaration = {
    /**
     * Maps to CSS's **`backface-visibility`** property
     * @category RBProperty
     */
    backfaceVisibility: BackfaceVisibilityPropValue
}
export type BackfaceVisibilityDeclarationJSS = {
    backfaceVisibility: ValueOrFunc<BackfaceVisibilityPropValue>
}
