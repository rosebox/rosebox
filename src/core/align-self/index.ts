import { GlobalCssKeyword } from '../shared'

type BaseLinePosition =
  | ['first', 'baseline']
  | ['last', 'baseline']
  | 'baseline'

type AlignSelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | BaseLinePosition
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
  | 'self-start'
  | ['safe', 'self-start']
  | ['unsafe', 'self-start']
  | 'self-end'
  | ['safe', 'self-end']
  | ['unsafe', 'self-end']

export const serializeAlignSelfPropValue = (x: string | string[]): string =>
  typeof x === 'string' ? x : `${x[0]} ${x[1]}`

export const serializeAlignSelf = (
  x: AlignSelf | GlobalCssKeyword
): {
  alignSelf: string
} => ({
  alignSelf: serializeAlignSelfPropValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type AlignSelfDeclaration = {
  /**
   * Maps to CSS's **`align-self`** property
   * @category RBProperty
   */
  alignSelf: AlignSelf | GlobalCssKeyword
}