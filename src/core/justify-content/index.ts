import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type JustifyContentPropValue = 'flex-start'
| 'flex-end'
| 'center'
| 'space-between'
| 'space-around'
| GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type JustifyContentDeclaration = {
  /**
   * Maps to CSS's **`justify-content`** property
   * @category RBProperty
   * @formalSyntaxForValue flex-start | flex-end | center | space-between | space-around
   * @added 0.2.2
   * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#justify-content-property
   */
  justifyContent: JustifyContentPropValue
}

export type JustifyContentDeclarationJSS = {
  justifyContent: ValueOrFunc<JustifyContentPropValue>
}
