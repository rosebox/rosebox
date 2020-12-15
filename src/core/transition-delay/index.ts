import { GlobalCssKeyword, serializeAtomicValue, ValueOrFunc } from '../shared'
import { Duration } from '../shared'

export type TransitionDelayCSSProp = 'transition-delay'

/**
 * @hide
 */
type TransitionDelayPropValue = GlobalCssKeyword | Duration | Duration[]

export const serializeValue = (x: TransitionDelayPropValue): string =>
    !Array.isArray(x)
        ? serializeAtomicValue(x)
        : x.reduce((acc, item, idx) => acc + serializeAtomicValue(item) + (idx === x.length - 1 ? '' : ', '), '')

export const serializeTransitionDelay = (value: TransitionDelayPropValue) => ({
    transitionDelay: serializeValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TransitionDelayDeclaration = {
    /**
     * Maps to CSS's **`transition-delay`** property
     * @initial 0s
     * @definition https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/#transition-delay-property
     * @specification {@link https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/ CSS Transitions}.
     */
    transitionDelay: TransitionDelayPropValue
}

export type TransitionDelayDeclarationJSS = {
    transitionDelay: ValueOrFunc<TransitionDelayPropValue>
}
