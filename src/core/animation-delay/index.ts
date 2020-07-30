import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared'
import { Time } from '../shared'
import { serializeTime } from '../shared'

/**
 * @hide
 */
export type AnimationDelay = GlobalCssKeyword | Time | Time[]

export const serializeValue = (value: AnimationDelay): string =>
  !Array.isArray(value)
    ? isGlobalCssKeyword(value)
      ? value
      : serializeTime(value)
    : value.reduce(
        (acc, item, idx) =>
          acc + serializeTime(item) + (idx === value.length - 1 ? '' : ', '),
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
