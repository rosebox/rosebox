import {
  GlobalCssKeyword,
  LengthPercentage,
  serializeLengthPercentage,
} from '../shared'

type BaselineSource = 'auto' | 'first' | 'last'
type AlignmentBaseline =
  | 'baseline'
  | 'text-bottom'
  | 'alphabetic'
  | 'ideographic'
  | 'middle'
  | 'central'
  | 'mathematical'
  | 'text-top'
  | 'bottom'
  | 'center'
  | 'top'

type BaselineShift =
  | 'sub'
  | 'super'
  | 'top'
  | 'center'
  | 'bottom'
  | LengthPercentage

export const serializeVerticalAlign = (
  x: BaselineSource | AlignmentBaseline | BaselineShift | GlobalCssKeyword
) => ({
  verticalAlign: typeof x === 'string' ? x : serializeLengthPercentage(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type VerticalAlignDeclaration = {
  /**
   * Maps to CSS's **`vertical-align`** property
   * @category RBProperty
   */
  verticalAlign:
    | BaselineSource
    | AlignmentBaseline
    | BaselineShift
    | GlobalCssKeyword
}
