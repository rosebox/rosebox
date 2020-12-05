import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

/**
 * @hide
 */
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'

export const serializeAlignItems = (type: PropType) => (
  x: AlignItems | GlobalCssKeyword
): { [key: string]: string } => {
  const propName = type === 'inline' ? 'alignItems' : 'align-items'
  return ({
    [propName]: serializeAtomicValue(x),
  })
}
/** @hide */
type PropValue = AlignItems | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AlignItemsDeclaration = {
  /**
   * Maps to CSS's **`align-items`** property
   * @added 0.2.2
   * @basedOn https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#align-items-property
   */
  alignItems: AlignItems | GlobalCssKeyword
}

export type AlignItemsDeclarationJSS = {
  alignItems: ValueOrFunc<PropValue>
}
