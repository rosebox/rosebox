import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared'
import { Time } from '../shared'
import { serializeTime } from '../shared'

export type TransitionDurationCSSProp = 'transition-durtion'

/**
 * @hide
 */
type TransitionDurationPropValue = GlobalCssKeyword | Time | Time[]

export const serializeValue = (value: TransitionDurationPropValue): string =>
  !Array.isArray(value)
    ? isGlobalCssKeyword(value)
      ? value
      : serializeTime(value)
    : value.reduce(
        (acc, item, idx) =>
          acc + serializeTime(item) + (idx === value.length - 1 ? '' : ', '),
        ''
      )

export const serializeTransitionDuration = (
  x: TransitionDurationPropValue
) => ({
  transitionDuration: serializeValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TransitionDurationDeclaration = {
  /**
   * Maps to CSS's **`transition-duration`** property
   * @category RBProperty
   * @formalSyntaxForValue <time>#
   * @added 0.2.1
   * @implentationReference @implentationReference https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/#transition-duration-property
   */
  transitionDuration: TransitionDurationPropValue
}
