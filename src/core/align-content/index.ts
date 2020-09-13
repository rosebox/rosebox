import { GlobalCssKeyword, serializeAtomicValue } from '../shared'

type BaseLinePosition =
  | ['first', 'baseline']
  | ['last', 'baseline']
  | 'baseline'

type ContentDistribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'

/**
 * @hide
 */
type AlignContent =
  | 'normal'
  | BaseLinePosition
  | ContentDistribution
  | 'center'
  | ['safe', 'center']
  | ['unsafe', 'center']
  | 'start'
  | ['safe', 'start']
  | ['unsafe', 'start']
  | 'end'
  | ['safe', 'end']
  | ['unsafe', 'end']
  | 'flex-start'
  | ['safe', 'flex-start']
  | ['unsafe', 'flex-start']
  | 'flex-end'
  | ['safe', 'flex-end']
  | ['unsafe', 'flex-end']

/**
 * @category RBDeclarationTypeAlias
 */
export type AlignContentDeclaration = {
  /**
   * Maps to CSS's **`align-content`** property
   * @category RBProperty
   */
  alignContent: AlignContent | GlobalCssKeyword
}

export const serializeAlignContentPropValue = (
  x: AlignContent | GlobalCssKeyword
): string =>
  Array.isArray(x)
    ? `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}`
    : serializeAtomicValue(x)

export const serializeAlignContent = (
  x: AlignContent | GlobalCssKeyword
): {
  alignContent: string
} => ({
  alignContent: serializeAlignContentPropValue(x),
})
