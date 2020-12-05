import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

type AnimationFillModeKeyword = 'none' | 'forwards' | 'backwards' | 'both'

/**
 * @hide
 */
export type AnimationFillMode =
  | AnimationFillModeKeyword
  | AnimationFillModeKeyword[]

const serializeValue = (value: AnimationFillModePropValue) => {
  const valArray = Array.isArray(value) ? value : [value]
  return valArray.reduce(
    (acc, item, idx) => acc + item + (idx === valArray.length - 1 ? '' : ', '),
    ''
  )
}

export const serializeAnimationFillMode =  (type: PropType) => (x: AnimationFillModePropValue) => {
  const propName = type === 'inline' ? 'animationFillMode' : 'animation-fill-mode'
  return {
    [propName]: serializeValue(x),
  }
}

/** @hide */
type AnimationFillModePropValue = AnimationFillMode | GlobalCssKeyword 

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationFillModeDeclaration = {
  /**
   * Maps to CSS's **`animation-fill-mode`** property
   * @category RBProperty
   */
  animationFillMode: AnimationFillModePropValue
}
export type AnimationFillModeDeclarationJSS = {
  animationFillMode: ValueOrFunc<AnimationFillModePropValue>
}
