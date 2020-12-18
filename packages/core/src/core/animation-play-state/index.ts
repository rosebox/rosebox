import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

export type AnimationPlayStateKeyword = 'running' | 'paused'

const serializeValue = (value: AnimationPlayStatePropValue) => {
    const valArray = Array.isArray(value) ? value : [value]
    return valArray.reduce((acc, item, idx) => acc + item + (idx === valArray.length - 1 ? '' : ', '), '')
}

export const serializeAnimationPlayState = (type: PropType) => (x: AnimationPlayStatePropValue) => {
    const propName = type === 'inline' ? 'animationPlayState' : 'animation-play-state'
    return {
        [propName]: serializeValue(x),
    }
}

/** @hide */
type AnimationPlayStatePropValue = AnimationPlayStateKeyword | AnimationPlayStateKeyword[] | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationPlayStateDeclaration = {
    /**
     * Maps to CSS's **`animation-play-state`** property
     * @initial running
     * @definition https://www.w3.org/TR/2018/WD-css-animations-1-20181011/#animation-play-state
     * @specification {@link https://www.w3.org/TR/2018/WD-css-animations-1-20181011/ CSS Animations Level 1}.
     */
    animationPlayState: AnimationPlayStatePropValue
}
export type AnimationPlayStateDeclarationJSS = {
    animationPlayState: ValueOrFunc<AnimationPlayStatePropValue>
}
