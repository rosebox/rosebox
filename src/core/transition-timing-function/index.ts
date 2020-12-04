import { TimingFunctionValue, serializeTimingFunctionValue, ValueOrFunc } from '../shared'

export const serializeTransitionTimingFunction = (
  x: TimingFunctionValue
): { transitionTimingFunction: string } => ({
  transitionTimingFunction: serializeTimingFunctionValue(x),
})
/**
 * @category RBDeclarationTypeAlias
 */
export type TransitionTimingDeclaration = {
  /**
   * Maps to CSS's **`transition-timing-function`** property
   * @category RBProperty
   */
  transitionTimingFunction: TimingFunctionValue
}

export type TransitionTimingDeclarationJSS = {
  transitionTimingFunction: ValueOrFunc<TimingFunctionValue>
}
