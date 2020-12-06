import { GlobalCssKeyword, serializeAtomicValue, ValueOrFunc } from '../shared'

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

/** @hide */
type AlignContentPropValue = AlignContent | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AlignContentDeclaration = {
  /**
   * Maps to CSS's **`align-content`** property
   * @inital normal
   * @definition https://www.w3.org/TR/2020/WD-css-align-3-20200421/#propdef-align-content 
   * @specification {@link https://www.w3.org/TR/2020/WD-css-align-3-20200421/ CSS Box Alignment Module Level 3}.
   */
  alignContent: AlignContentPropValue
}

export type AlignContentDeclarationJSS = {
  alignContent: ValueOrFunc<AlignContentPropValue>
}

export const serializeAlignContentPropValue = (
  x: AlignContent | GlobalCssKeyword
): string =>
  Array.isArray(x)
    ? `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}`
    : serializeAtomicValue(x)

export const serializeAlignContent = (type: 'css' | 'inline') => (
  x: AlignContent | GlobalCssKeyword
) => {
  const propName = type === 'inline' ? 'alignContent' : 'align-content'
  return {
    [propName]: serializeAlignContentPropValue(x),
  }
}
