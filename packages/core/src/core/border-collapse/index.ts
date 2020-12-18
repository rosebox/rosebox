import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

/**
 * @hide
 */
type BorderCollapse = 'separate' | 'collapse'

/** @hide */
type BorderCollapsePropValue = BorderCollapse | GlobalCssKeyword

export const serializeBorderCollapse = (type: PropType) => (x: BorderCollapsePropValue) => {
    const propName = type === 'inline' ? 'borderCollapse' : 'border-collapse'
    return {
        [propName]: x,
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderCollapseDeclaration = {
    /**
     * Maps to CSS's **`border-collapse`** property
     * @initial visible
     * @definition https://www.w3.org/TR/2019/WD-css-tables-3-20190727/#propdef-border-collapse
     * @specification {@link https://www.w3.org/TR/2019/WD-css-tables-3-20190727/ CSS Table Module Level 3}.
     */
    borderCollapse: BorderCollapsePropValue
}
export type BorderCollapseDeclarationJSS = {
    borderCollapse: ValueOrFunc<BorderCollapsePropValue>
}
