import { GlobalCssKeyword, serializeAtomicValue, ValueOrFunc } from '../shared'
import { Duration } from '../shared'

export type TransitionDurationCSSProp = 'transition-durtion'

/**
 * @hide
 */
type TransitionDurationPropValue = GlobalCssKeyword | Duration | Duration[]

export const serializeValue = (
  value: TransitionDurationPropValue
): string | number =>
  !Array.isArray(value)
    ? serializeAtomicValue(value)
    : value.reduce(
        (acc, item, idx) =>
          acc +
          serializeAtomicValue(item) +
          (idx === value.length - 1 ? '' : ', '),
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
   * @formalSyntaxForValue <Duration>#
   * @added 0.2.1
   * @implentationReference @implentationReference https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/#transition-duration-property
   */
  transitionDuration: TransitionDurationPropValue
}

export type TransitionDurationDeclarationJSS = {
  transitionDuration: ValueOrFunc<TransitionDurationPropValue>
}
