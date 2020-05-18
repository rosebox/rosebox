import { GlobalCssKeyword } from '../../shared/types'

export type FlexWrapCSSProp = 'flex-wrap'

export const serializeFlexWrap = (
    value: 'nowrap' | 'wrap' | 'wrap-reverse' | GlobalCssKeyword
) => value

export type FlexWrapDeclaration = {
    /**
     * Maps to CSS's **`flex-wrap`** property
     * @category RBProperty
     * @formalSyntaxForValue nowrap | wrap | wrap-reverse
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-wrap-property
     */
    flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse' | GlobalCssKeyword
}
