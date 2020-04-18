import { GlobalCssKeyword } from '../shared/types'

type Position = 'relative' | 'absolute' | 'static' | 'fixed' | 'sticky'

/**
 * Creates a declaration object for the **`position`** property.
 * @category Declaration function
 * @formalSyntaxForValue relative | absolute | static | fixed | sticky
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#position-property
 */
export const position = (value: Position | GlobalCssKeyword) => ({
    position: value,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type PositionDeclaration = {
    /**
     * Maps to CSS's **`position`** property
     * @category RBProperty
     * @formalSyntaxForValue relative | absolute | static | fixed | sticky
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#position-property
     */
    position: Position | GlobalCssKeyword
}
