import { GlobalCssKeyword, ValueOrFunc } from '../shared'

type OverflowKeyword = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'

/** @hide */
type OverflowAxisPropValue = OverflowKeyword | GlobalCssKeyword

export type OverflowXDeclaration = {
    /**
     * Maps to CSS's **`overflow-x`** property
     * @category RBProperty
     * @formalSyntaxForValue visible | hidden | clip | scroll | auto
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
     */
    overflowX: OverflowAxisPropValue
}

export type OverflowXDeclarationJSS = {
    overflowX: ValueOrFunc<OverflowAxisPropValue>
}

export type OverflowYDeclaration = {
    /**
     * Maps to CSS's **`overflow-y`** property
     * @category RBProperty
     * @formalSyntaxForValue visible | hidden | clip | scroll | auto
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
     */
    overflowY: OverflowAxisPropValue
}

export type OverflowYDeclarationJSS = {
    overflowY: ValueOrFunc<OverflowAxisPropValue>
}

type OneOverflowKeyword = OverflowKeyword

export const serializeOverflow = (
    value: OneOverflowKeyword | [OneOverflowKeyword, OneOverflowKeyword] | GlobalCssKeyword,
) => ({
    overflow: Array.isArray(value) ? `${value[0]} ${value[1]}` : value,
})

/** @hide */
type OverflowPropValue = OverflowKeyword | [OverflowKeyword, OverflowKeyword] | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type OverflowDeclaration = {
    /**
     * Maps to CSS's **`overflow`** property
     * @category RBProperty
     * @formalSyntaxForValue visible | hidden | clip | scroll | auto
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/css-overflow-3/#overflow-properties
     */
    overflow: OverflowPropValue
}

export type OverflowDeclarationJSS = {
    overflow: ValueOrFunc<OverflowPropValue>
}
