import { TimingFunctionValue, serializeTimingFunctionValue, ValueOrFunc } from '../shared'

export const serializeTransitionTimingFunction = (x: TimingFunctionValue): { transitionTimingFunction: string } => ({
    transitionTimingFunction: serializeTimingFunctionValue(x),
})
/**
 * @category RBDeclarationTypeAlias
 */
export type TransitionTimingDeclaration = {
    /**
     * Maps to CSS's **`transition-timing-function`** property
     * @initial ease
     * @definition https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/#transition-timing-function-property
     * @specification {@link https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/ CSS Transitions}.
     */
    transitionTimingFunction: TimingFunctionValue
}

export type TransitionTimingDeclarationJSS = {
    transitionTimingFunction: ValueOrFunc<TimingFunctionValue>
}
