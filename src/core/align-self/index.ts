import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

type BaseLinePosition =
  | ['first', 'baseline']
  | ['last', 'baseline']
  | 'baseline'

/**
 * @hide
 */
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
  Array.isArray(x)
    ? `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}`
    : serializeAtomicValue(x)

export const serializeAlignSelf = (type: PropType) => (
  x: AlignSelf | GlobalCssKeyword
): { [key: string]: string } => {
  const propName = type === 'inline' ? 'alignSelf' : 'align-self'
  return {
    [propName]: serializeAlignSelfPropValue(x),
  }
}

/** @hide */
type PropValue = AlignSelf | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AlignSelfDeclaration = {
  /**
   * Maps to CSS's **`align-self`** property
   * @inital auto
   * @basedOn https://drafts.csswg.org/css-align-3/#propdef-align-self
   */
  alignSelf: PropValue
}

export type AlignSelfDeclarationJSS = {
  alignSelf: ValueOrFunc<PropValue>
}
