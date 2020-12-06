import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

/**
 * @hide
 */
export type AnimationIterationCount = GlobalCssKeyword | 'infinit' | number | ('infinit' | number)[]

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
export type AnimationIterationCountPropValue = AnimationIterationCount

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationIterationCountDeclaration = {
    /**
     * Maps to CSS's **`animation-iteration-count`** property
     * @category RBProperty
     */
    animationIterationCount: AnimationIterationCountPropValue
}
export type AnimationIterationCountDeclarationJSS = {
    animationIterationCount: ValueOrFunc<AnimationIterationCountPropValue>
}
