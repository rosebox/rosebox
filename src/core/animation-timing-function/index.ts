import { GlobalCssKeyword, PropType, serializeTimingFunctionValue, TimingFunctionValue, ValueOrFunc } from '../shared'

export const serializeAnimationTimingFunction = (type: PropType) => (
  x: TimingFunctionValue
) => {
  const propName = type === 'inline' ? 'animationTimingFunction' : 'animation-timing-function'
  return ({
    [propName]: serializeTimingFunctionValue(x),
  })
}

/** @hide */
type PropValue = TimingFunctionValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationTimingFunctionDeclaration = {
  /**
   * Maps to CSS's **`animation-timing-function`** property
   * @category RBProperty
   */
  animationTimingFunction: PropValue
}
export type AnimationTimingFunctionDeclarationJSS = {
  animationTimingFunction: ValueOrFunc<PropValue>
}
