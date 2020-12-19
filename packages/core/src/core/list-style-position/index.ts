import { GlobalCssKeyword } from '../shared'

/** @hide */
type ListStylePositionKeyword = 'inside' | 'outside'

export const serializeListStylePosition = (x: ListStylePositionPropValue): { [key: string]: string } => {
    return {
        listStylePosition: x,
    }
}

/** @hide */
type ListStylePositionPropValue = ListStylePositionKeyword | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type ListStylePositionDeclaration = {
    /**
     * Maps to CSS's **`list-style-position`** property
     * @inital outside
     * @definition https://www.w3.org/TR/2020/WD-css-lists-3-20201117/#propdef-list-style-position
     * @specification {@link https://www.w3.org/TR/2020/WD-css-lists-3-20201117/#propdef-list-style-position CSS Lists and Counters Module Level 3}.
     */
    listStylePosition: ListStylePositionPropValue
}
