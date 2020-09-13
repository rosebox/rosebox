import { GlobalCssKeyword, serializeAtomicValue } from '../shared'
import { Time } from '../shared'
import { serializeTime } from '../shared'

export type TransitionDelayCSSProp = 'transition-delay'

/**
 *@hide
 */
type TransitionDelayPropValue = GlobalCssKeyword | Time | Time[]

export const serializeValue = (x: TransitionDelayPropValue): string =>
  !Array.isArray(x)
    ? serializeAtomicValue(x)
    : x.reduce(
        (acc, item, idx) =>
          acc + serializeTime(item) + (idx === x.length - 1 ? '' : ', '),
        ''
      )

export const serializeTransitionDelay = (value: TransitionDelayPropValue) => ({
  transitionDelay: serializeValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TransitionDelayDeclaration = {
  /**
   * Maps to CSS's **`transition-delay`** property
   * @category RBProperty
   * @formalSyntaxForValue <time>#
   * @added 0.2.1
   * @implentationReference @implentationReference https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/#transition-delay-property
   */
  transitionDelay: TransitionDelayPropValue
}
