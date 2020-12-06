import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'
import { Duration } from '../shared'

/**
 * @hide
 */
export type AnimationDelay = Duration | Duration[] | GlobalCssKeyword

export const serializeValue = (value: AnimationDelay): string =>
  !Array.isArray(value)
    ? serializeAtomicValue(value)
    : value.reduce(
        (acc, item, idx) =>
          acc +
          serializeAtomicValue(item) +
          (idx === value.length - 1 ? '' : ', '),
        ''
      )

export const serializeAnimationDelay = (type: PropType) => (
  x: AnimationDelay
) => {
  const propName = type === 'inline' ? 'animationDelay' : 'animation-delay'
  return {
    [propName]: serializeValue(x),
  }
}

/** @hide */
type AnimationDelayPropValue = AnimationDelay

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationDelayDeclaration = {
  /**
   * Maps to CSS's **`animation-delay`** property
   * @inital 0s
   * @docsUrl https://www.rosebox.dev/api/#rb-prop-animationdelay
   * @definition https://drafts.csswg.org/css-animations/#animation-delay
   */
  animationDelay: AnimationDelayPropValue
}

export type AnimationDelayDeclarationJSS = {
  animationDelay: ValueOrFunc<AnimationDelayPropValue>
}
