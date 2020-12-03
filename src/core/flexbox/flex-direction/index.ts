import { GlobalCssKeyword, PropType } from '../../shared'

/**
 * Formal syntax: row | row-reverse | column | column-reverse
 * @hide
 * */
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export const serializeFlexDirectionValue = (type: PropType) => (
  value: FlexDirection | GlobalCssKeyword
) => ({
  [type === 'inline' ? 'flexDirection' : 'flex-direction']: value,
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
