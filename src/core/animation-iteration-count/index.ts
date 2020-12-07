import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

/**
 * @hide
 */
export type AnimationIterationCount = 'infinit' | number | ('infinit' | number)[]

export const serializeValue = (value: AnimationIterationCount): string | number =>
    !Array.isArray(value)
        ? value
        : value.reduce((acc, item, idx) => acc + item + (idx === value.length - 1 ? '' : ', '), '')

export const serializeAnimationIterationCount = (type: PropType) => (x: AnimationIterationCount) => {
    const propName = type === 'inline' ? 'animationIterationCount' : 'animation-iteration-count'
    return {
        [propName]: serializeValue(x),
    }
}

/** @hide */
export type AnimationIterationCountPropValue = AnimationIterationCount | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationIterationCountDeclaration = {
    /**
     * Maps to CSS's **`animation-iteration-count`** property
     * @initial 1
     * @definition https://www.w3.org/TR/2018/WD-css-animations-1-20181011/#animation-iteration-count
     * @specification {@link https://www.w3.org/TR/2018/WD-css-animations-1-20181011/ CSS Animations Level 1}.
     */
    animationIterationCount: AnimationIterationCountPropValue
}

export type AnimationIterationCountDeclarationJSS = {
    animationIterationCount: ValueOrFunc<AnimationIterationCountPropValue>
}
