import { GlobalCssKeyword, PropType, serializeTimingFunctionValue, TimingFunctionValue, ValueOrFunc } from '../shared'

export const serializeAnimationTimingFunction = (type: PropType) => (x: TimingFunctionValue) => {
    const propName = type === 'inline' ? 'animationTimingFunction' : 'animation-timing-function'
    return {
        [propName]: serializeTimingFunctionValue(x),
    }
}

/** @hide */
type AnimationTimingPropValue = TimingFunctionValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationTimingFunctionDeclaration = {
    /**
     * Maps to CSS's **`animation-timing-function`** property
     * @initial ease
     * @definition https://www.w3.org/TR/2018/WD-css-animations-1-20181011/#animation-timing-function
     * @specification {@link https://www.w3.org/TR/2018/WD-css-animations-1-20181011/ CSS Animations Level 1}.
     */
    animationTimingFunction: AnimationTimingPropValue
}

export type AnimationTimingFunctionDeclarationJSS = {
    animationTimingFunction: ValueOrFunc<AnimationTimingPropValue>
}
