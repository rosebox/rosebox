import { GlobalCssKeyword } from '../../shared/types'

export type FlexDirectionCSSProp = 'flex-direction'

/**
 * Formal syntax: row | row-reverse | column | column-reverse
 * @skip
 * */
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

/**
 * Creates a declaration object for the **`flex-direction`** property.
 * @category Declaration function
 * @formalSyntax row | row-reverse | column | column-reverse
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-direction-property
 */
export const flexDirection = (value: FlexDirection | GlobalCssKeyword) => ({
    flexDirection: value,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexDirectionDeclaration = {
    /**
     * Maps to CSS's **`flex-direction`** property
     * @category RBProperty
     * @formalSyntaxForValue row | row-reverse | column | column-reverse
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-direction-property
     */
    flexDirection: FlexDirection | GlobalCssKeyword
}
