import { GlobalCssKeyword } from '../shared'

/**
 * @hide
 */
type AnimationIterationCount =
  | GlobalCssKeyword
  | 'infinit'
  | number
  | ('infinit' | number)[]

export const serializeValue = (
  value: AnimationIterationCount
): string | number =>
  !Array.isArray(value)
    ? value
    : value.reduce(
        (acc, item, idx) => acc + item + (idx === value.length - 1 ? '' : ', '),
        ''
      )

export const serializeAnimationIterationCount = (
  x: AnimationIterationCount
) => ({
  animationIterationCount: serializeValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationIterationCountDeclaration = {
  /**
   * Maps to CSS's **`animation-iteration-count`** property
   * @category RBProperty
   */
  animationIterationCount: AnimationIterationCount
}
