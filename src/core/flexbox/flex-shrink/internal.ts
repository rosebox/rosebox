import { ShrinkGrow } from '../shared/types'
import { GlobalCssKeyword } from '../../shared/types'

export type FlexShrinkCSSProp = 'flex-shrink'

/**
 * Creates a declaration object for the **`flex-shrink`** property.
 * @category Declaration function
 * @formalSyntax <number>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-shrink-property
 */

export const flexShrink = (value: ShrinkGrow | GlobalCssKeyword) => ({
    flexShrink: value,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexShrinkDeclaration = {
    /**
     * Maps to CSS's **`flex-shrink`** property
     * @category RBProperty
     * @formalSyntaxForValue <number>
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-shrink-property
     */
    flexShrink: ShrinkGrow | GlobalCssKeyword
}
