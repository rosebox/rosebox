import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

type AnimationDirectionKeyword = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'

/**
 * @hide
 */
export type AnimationDirection = GlobalCssKeyword | AnimationDirectionKeyword | AnimationDirectionKeyword[]

export const serializeValue = (value: AnimationDirection): string | number =>
    !Array.isArray(value)
        ? value
        : value.reduce((acc, item, idx) => acc + item + (idx === value.length - 1 ? '' : ', '), '')

export const serializeAnimationDirection = (type: PropType) => (x: AnimationDirection) => {
    const propName = type === 'inline' ? 'animationDirection' : 'animation-direction'
    return {
        [propName]: serializeValue(x),
    }
}

/** @hide */
type AnimationDirectioPropValue = AnimationDirection

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationDirectionDeclaration = {
    // @reviewed
    /**
     * Maps to CSS's **`animation-direction`** property
     * @initial normal
     * @definition https://www.w3.org/TR/2018/WD-css-animations-1-20181011/#propdef-animation-direction
     * @specification {@link https://www.w3.org/TR/2018/WD-css-animations-1-20181011/ CSS Animations Level 1}.
     */
    animationDirection: AnimationDirectioPropValue
}

export type AnimationDirectionDeclarationJSS = {
    animationDirection: ValueOrFunc<AnimationDirectioPropValue>
}
