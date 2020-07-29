import { GlobalCssKeyword } from '../shared'

type AnimationDirectionKeyword =
  | 'normal'
  | 'reverse'
  | 'alternate'
  | 'alternate-reverse'

/**
 * @hide
 */
type AnimationDirection =
  | GlobalCssKeyword
  | AnimationDirectionKeyword
  | AnimationDirectionKeyword[]

export const serializeValue = (value: AnimationDirection): string | number =>
  !Array.isArray(value)
    ? value
    : value.reduce(
        (acc, item, idx) => acc + item + (idx === value.length - 1 ? '' : ', '),
        ''
      )

export const serializeAnimationDirection = (x: AnimationDirection) => ({
  animationDirection: serializeValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationDirectionDeclaration = {
  /**
   * Maps to CSS's **`animation-direction`** property
   * @category RBProperty
   */
  animationDirection: AnimationDirection
}
