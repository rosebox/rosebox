import { GlobalCssKeyword, serializeAtomicValue } from '../shared'
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

export const serializeAnimationDuration = (x: AnimationDuration) => ({
  animationDuration: serializeValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationDurationDeclaration = {
  /**
   * Maps to CSS's **`animation-duration`** property
   * @category RBProperty
   */
  animationDuration: AnimationDuration
}
