import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

/**
 * @hide
 */
type BackfaceVisibility = 'visible' | 'hidden'

/** @hide */
type BackfaceVisibilityPropValue = BackfaceVisibility | GlobalCssKeyword

export const serializeBackfaceVisibility = (type: PropType) => (x: BackfaceVisibilityPropValue) => {
    const propName = type === 'inline' ? 'backfaceVisibility' : 'backface-visibility'
    return {
        [propName]: x,
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BackfaceVisibilityDeclaration = {
    /**
     * Maps to CSS's **`backface-visibility`** property
     * @initial visible
     * @definition https://www.w3.org/TR/2020/WD-css-transforms-2-20200303/#propdef-backface-visibility
     * @specification {@link https://www.w3.org/TR/2020/WD-css-transforms-2-20200303/ CSS Transforms Module Level 2}.
     */
    backfaceVisibility: BackfaceVisibilityPropValue
}
export type BackfaceVisibilityDeclarationJSS = {
    backfaceVisibility: ValueOrFunc<BackfaceVisibilityPropValue>
}
