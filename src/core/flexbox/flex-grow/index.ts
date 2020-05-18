import { ShrinkGrow } from '../shared/types'
import { GlobalCssKeyword } from '../../shared/types'

export type FlexGrowCSSProp = 'flex-grow'

export const serializeFlexGrowValue = (value: ShrinkGrow | GlobalCssKeyword): string | number => value

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexGrowDeclaration = {
    /**
     * Maps to CSS's **`flex-grow`** property
     * @category RBProperty
     * @formalSyntaxForValue <number>
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-grow-property
     */
    flexGrow: ShrinkGrow | GlobalCssKeyword
}
