// @reviewed

import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

/** @hide */
type JustifyContentValue =
  | 'auto'
  | 'normal'
  | 'stretch'
  | ['first', 'baseline']
  | ['last', 'baseline']
  | 'baseline'
  | 'center'
  | ['safe', 'center']
  | ['unsafe', 'center']
  | 'start'
  | ['safe', 'start']
  | ['unsafe', 'start']
  | 'end'
  | ['safe', 'end']
  | ['unsafe', 'end']
  | 'self-start'
  | ['safe', 'self-start']
  | ['unsafe', 'self-start']
  | 'self-end'
  | ['safe', 'self-end']
  | ['unsafe', 'self-end']
  | 'flex-start'
  | ['safe', 'flex-start']
  | ['unsafe', 'flex-start']
  | 'flex-end'
  | ['safe', 'flex-end']
  | ['unsafe', 'flex-end']
  | 'left'
  | ['safe', 'left']
  | ['unsafe', 'left']
  | 'right'
  | ['safe', 'right']
  | ['unsafe', 'right']

/** @hide */
type JustifyContentPropValue = JustifyContentValue | GlobalCssKeyword

const serializeAlignItemsPropValue = (x: JustifyContentPropValue): string =>
  Array.isArray(x)
    ? `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}`
    : serializeAtomicValue(x)

export const serializeJustifyContent = (type: PropType) => (
  x: JustifyContentPropValue
): { [key: string]: string } => {
  const propName = type === 'inline' ? 'justifyContent' : 'justify-content'
  return {
    [propName]: serializeAlignItemsPropValue(x),
  }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type JustifyContentDeclaration = {
  /**
   * Maps to CSS's **`justify-content`** property
   * @inital auto
   * @definition https://www.w3.org/TR/2020/WD-css-align-3-20200421/#justify-self-property
   */
  justifyContent: JustifyContentPropValue
}

export type JustifyContentDeclarationJSS = {
  justifyContent: ValueOrFunc<JustifyContentPropValue>
}
