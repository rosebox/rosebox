import { GlobalCssKeyword, PropType, serializeAtomicValue } from '../shared'
import { Duration } from '../shared'

/**
 * @hide
 */
export type AnimationDelay = Duration | Duration[] | GlobalCssKeyword

export const serializeValue = (value: AnimationDelay): string =>
    !Array.isArray(value)
        ? serializeAtomicValue(value)
        : value.reduce(
              (acc, item, idx) => acc + serializeAtomicValue(item) + (idx === value.length - 1 ? '' : ', '),
              '',
          )

export const serializeAnimationDelay = (type: PropType) => (x: AnimationDelay) => {
    const propName = type === 'inline' ? 'animationDelay' : 'animation-delay'
    return {
        [propName]: serializeValue(x),
    }
}

/** @hide */
type AnimationDelayPropValue = AnimationDelay

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationDelayDeclaration = {
    /**
     * Maps to CSS's **`animation-delay`** property
     * @inital 0s
     * @definition https://www.w3.org/TR/2018/WD-css-animations-1-20181011/#propdef-animation-delay
     * @specification {@link https://www.w3.org/TR/2018/WD-css-animations-1-20181011/ CSS Animations Level 1}.
     */
    animationDelay: AnimationDelayPropValue
}
