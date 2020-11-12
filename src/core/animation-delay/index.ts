import { GlobalCssKeyword, serializeAtomicValue } from '../shared'
import { Duration } from '../shared'

/**
 * @hide
 */
export type AnimationDelay = GlobalCssKeyword | Duration | Duration[]

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

export const serializeAnimationDelay = (x: AnimationDelay) => ({
  animationDelay: serializeValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationDelayDeclaration = {
  /**
   * Maps to CSS's **`animation-delay`** property
   * @category RBProperty
   */
  animationDelay: AnimationDelay
}
