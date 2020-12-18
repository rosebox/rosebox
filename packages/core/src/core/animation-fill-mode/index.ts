import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

export type AnimationFillModeKeyword = 'none' | 'forwards' | 'backwards' | 'both'

/**
 * @hide
 */
type AnimationFillMode = AnimationFillModeKeyword | AnimationFillModeKeyword[]

const serializeValue = (value: AnimationFillModePropValue) => {
    const valArray = Array.isArray(value) ? value : [value]
    return valArray.reduce((acc, item, idx) => acc + item + (idx === valArray.length - 1 ? '' : ', '), '')
}

export const serializeAnimationFillMode = (type: PropType) => (x: AnimationFillModePropValue) => {
    const propName = type === 'inline' ? 'animationFillMode' : 'animation-fill-mode'
    return {
        [propName]: serializeValue(x),
    }
}

/** @hide */
type AnimationFillModePropValue = AnimationFillMode | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationFillModeDeclaration = {
    /**
     * Maps to CSS's **`animation-fill-mode`** property
     * @initial none
     * @definition https://www.w3.org/TR/2018/WD-css-animations-1-20181011/#propdef-animation-fill-mode
     * @specification {@link https://www.w3.org/TR/2018/WD-css-animations-1-20181011/ CSS Animations Level 1}.
     */
    animationFillMode: AnimationFillModePropValue
}

export type AnimationFillModeDeclarationJSS = {
    animationFillMode: ValueOrFunc<AnimationFillModePropValue>
}
