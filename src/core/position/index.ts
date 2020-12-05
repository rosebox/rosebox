import { GlobalCssKeyword, ValueOrFunc } from '../shared'

export const serializePositionPropValue = (
  value:
    | 'relative'
    | 'absolute'
    | 'static'
    | 'fixed'
    | 'sticky'
    | GlobalCssKeyword
) => value

/** @hide */
type PositionPropValue = 'relative'
| 'absolute'
| 'static'
| 'fixed'
| 'sticky'
| GlobalCssKeyword

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
  position: PositionPropValue
}

export type PositionDeclarationJSS = {
  position: ValueOrFunc<PositionPropValue>
}
