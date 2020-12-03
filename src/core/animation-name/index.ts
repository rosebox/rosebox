import { CustomIdent, GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

const toHyphenCase = (x: string) =>
  x.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())

/**
 * @hide
 */
export type AnimationName =
  | 'none'
  | GlobalCssKeyword
  | CustomIdent
  | string
  | (string | CustomIdent)[]

const cb = (x: string | CustomIdent): string =>
    toHyphenCase(serializeAtomicValue(x))

const serializeValue = (value: AnimationName) => {
  const valArray = Array.isArray(value) ? value : [value]
  return valArray.reduce(
    (acc, item, idx) =>
      acc + cb(item) + (idx === valArray.length - 1 ? '' : ', '),
    ''
  )
}

export const serializeAnimationName = (type: PropType) => (x: AnimationName) => {
  const propName = type === 'inline' ? 'animationName' : 'animation-name'
  return ({
    [propName]: serializeValue(x),
  })
}

/** @hide */
type PropValue = AnimationName | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationNameDeclaration = {
  /**
   * Maps to CSS's **`animation-property`** property
   * @category RBProperty
   */
  animationName: PropValue
}

export type AnimationNameDeclarationJSS = {
  /**
   * Maps to CSS's **`animation-property`** property
   * @category RBProperty
   */
  animationName: ValueOrFunc<PropValue>
}