import { KeyFramesName } from '../animation-name'
import { Duration, GlobalCssKeyword, serializeAtomicValue, TimingFunction, ValueOrFunc } from '../shared'
import { AnimationDirectionKeyword } from '../animation-direction'
import { AnimationFillModeKeyword } from '../animation-fill-mode'
import { AnimationPlayStateKeyword } from '../animation-play-state'

export type Animation = {
    name?: KeyFramesName | GlobalCssKeyword
    duration?: Duration | GlobalCssKeyword
    timingFunction?: TimingFunction | GlobalCssKeyword
    delay?: Duration | GlobalCssKeyword
    iterationCount?: 'infinit' | number | GlobalCssKeyword
    direction?: AnimationDirectionKeyword | GlobalCssKeyword
    fillMode?: AnimationFillModeKeyword | GlobalCssKeyword
    playState?: AnimationPlayStateKeyword
}

const serializeSingleAnimationValue = (x: Animation): string => {
    const name = x.name || 'none'
    const delay = serializeAtomicValue(x.delay) || '0s'
    const duration = serializeAtomicValue(x.duration) || '0s'
    const timingFunction = x.timingFunction || 'ease'
    const iterationCount = x.iterationCount || 1
    const direction = x.direction || 'normal'
    const fillMode = x.fillMode || 'none'
    const playState = x.playState || 'running'
    return `${name} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`
}

const serializeAnimationPropValue = (x: Animation | Animation[] | GlobalCssKeyword): string =>
    typeof x === 'string'
        ? x
        : !Array.isArray(x)
        ? serializeSingleAnimationValue(x)
        : x
              .reduce(
                  (acc, item, idx) => acc + serializeSingleAnimationValue(item) + (idx === x.length - 1 ? '' : ', '),
                  '',
              )
              .trim()

export const serializeAnimation = (x: Animation | Animation[] | GlobalCssKeyword) => ({
    animation: serializeAnimationPropValue(x),
})

/** @hide */
type AnimationPropValue = Animation | Animation[] | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationDeclaration = {
    /**
     * Maps to CSS's **`animation`** property
     * @initial See individual properties
     * @docsUrL https://www.rosebox.dev/api/#rb-prop-animation
     * @definition https://drafts.csswg.org/css-animations-1/#animation
     */
    animation: AnimationPropValue
}

export type AnimationDeclarationJSS = {
    animation: ValueOrFunc<AnimationPropValue>
}
