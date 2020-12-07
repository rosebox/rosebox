import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'
import { Duration } from '../shared'

/**
 * @hide
 */
export type AnimationDuration = Duration | Duration[]

export const serializeValue = (value: AnimationDuration): string =>
    !Array.isArray(value)
        ? serializeAtomicValue(value)
        : value.reduce(
              (acc, item, idx) => acc + serializeAtomicValue(item) + (idx === value.length - 1 ? '' : ', '),
              '',
          )

export const serializeAnimationDuration = (type: PropType) => (x: AnimationDuration) => {
    const propName = type === 'inline' ? 'animationDuration' : 'animation-duration'
    return {
        [propName]: serializeValue(x),
    }
}

/** @hide */
type AnimationDurationPropValue = AnimationDuration | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationDurationDeclaration = {
    /**
     * Maps to CSS's **`animation-duration`** property
     * @initial normal
     * @definition https://www.w3.org/TR/2018/WD-css-animations-1-20181011/#propdef-animation-duration
     * @specification {@link https://www.w3.org/TR/2018/WD-css-animations-1-20181011/ CSS Animations Level 1}.
     */
    animationDuration: AnimationDurationPropValue
}
export type AnimationDurationDeclarationJSS = {
    animationDuration: ValueOrFunc<AnimationDurationPropValue>
}
