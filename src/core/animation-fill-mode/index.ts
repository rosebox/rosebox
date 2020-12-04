import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

type AnimationFillModeKeyword = 'none' | 'forwards' | 'backwards' | 'both'

/**
 * @hide
 */
export type AnimationFillMode =
  | AnimationFillModeKeyword
  | AnimationFillModeKeyword[]
  | GlobalCssKeyword

const serializeValue = (value: AnimationFillMode) => {
  const valArray = Array.isArray(value) ? value : [value]
  return valArray.reduce(
    (acc, item, idx) => acc + item + (idx === valArray.length - 1 ? '' : ', '),
    ''
  )
}

export const serializeAnimationFillMode =  (type: PropType) => (x: AnimationFillMode) => {
  const propName = type === 'inline' ? 'animationFillMode' : 'animation-fill-mode'
  return {
    [propName]: serializeValue(x),
  }
}

/** @hide */
type PropValue = AnimationFillMode | GlobalCssKeyword 

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationFillModeDeclaration = {
  /**
   * Maps to CSS's **`animation-fill-mode`** property
   * @category RBProperty
   */
  animationFillMode: PropValue
}
export type AnimationFillModeDeclarationJSS = {
  animationFillMode: ValueOrFunc<PropValue>
}
