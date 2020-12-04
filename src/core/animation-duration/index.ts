import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'
import { Duration } from '../shared'

/**
 * @hide
 */
export type AnimationDuration = GlobalCssKeyword | Duration | Duration[]

export const serializeValue = (value: AnimationDuration): string =>
  !Array.isArray(value)
    ? serializeAtomicValue(value)
    : value.reduce(
        (acc, item, idx) =>
          acc +
          serializeAtomicValue(item) +
          (idx === value.length - 1 ? '' : ', '),
        ''
      )

export const serializeAnimationDuration = (type: PropType) => (
  x: AnimationDuration
) => {
  const propName =
    type === 'inline' ? 'animationDuration' : 'animation-duration'
  return {
    [propName]: serializeValue(x),
  }
}

/** @hide */
type PropValue = AnimationDuration | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationDurationDeclaration = {
  /**
   * Maps to CSS's **`animation-duration`** property
   * @category RBProperty
   */
  animationDuration: PropValue
}
export type AnimationDurationDeclarationJSS = {
  animationDuration: ValueOrFunc<PropValue>
}
