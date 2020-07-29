import { serializeTimingFunctionValue, TimingFunctionValue } from '../shared'

export const serializeAnimationTimingFunction = (
  x: TimingFunctionValue
): { animationTimingFunction: string } => ({
  animationTimingFunction: serializeTimingFunctionValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationTimingFunctionDeclaration = {
  /**
   * Maps to CSS's **`animation-timing-function`** property
   * @category RBProperty
   */
  animationTimingFunction: TimingFunctionValue
}
