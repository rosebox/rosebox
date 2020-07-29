import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared'
import { Time } from '../shared'
import { serializeTime } from '../shared'

/**
 * @hide
 */
type AnimationDuration = GlobalCssKeyword | Time | Time[]

export const serializeValue = (value: AnimationDuration): string =>
  !Array.isArray(value)
    ? isGlobalCssKeyword(value)
      ? value
      : serializeTime(value)
    : value.reduce(
        (acc, item, idx) =>
          acc + serializeTime(item) + (idx === value.length - 1 ? '' : ', '),
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
