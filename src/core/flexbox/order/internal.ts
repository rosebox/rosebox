import { GlobalCssKeyword } from '../../shared/types'

export type OrderCSSProp = 'order'

/**
 * Creates a declaration object for the **`order`** property.
 * @category Declaration function
 * @formalSyntax <integer>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/css-flexbox-1/#order-property
 */
export const order = (value: number | GlobalCssKeyword) => ({ order: value })

export type OrderDeclaration = {
    /**
     * Maps to CSS's **`order`** property
     * @category RBProperty
     * @formalSyntaxForValue <integer>
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/css-flexbox-1/#order-property
     */
    order: number | GlobalCssKeyword
}