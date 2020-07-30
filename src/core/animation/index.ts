import { AnimationName } from '../animation-name'
import {
  AnimationDuration,
  serializeValue as serializeDuration,
} from '../animation-duration'
import { GlobalCssKeyword, TimingFunctionValue } from '../shared'
import { AnimationDelay } from '../animation-delay'
import { AnimationIterationCount } from '../animation-iteration-count'
import { AnimationDirection } from '../animation-direction'
import { AnimationFillMode } from '../animation-fill-mode'

export type Animation = {
  name?: AnimationName
  duration?: AnimationDuration
  timingFunction?: TimingFunctionValue
  delay?: AnimationDelay
  iterationCount?: AnimationIterationCount
  direction?: AnimationDirection
  fillMode?: AnimationFillMode
  playState?: AnimationPlayState
}

const serializeSingleAnimationValue = (x: Animation): string => {
  const name = x.name || 'none'
  const duration = x.duration ? serializeDuration(x.duration) : '0s'
  const timingFunction = x.timingFunction || 'ease'
  const delay = x.delay ? serializeDuration(x.delay) : '0s'
  const iterationCount = x.iterationCount || 1
  const direction = x.direction || 'normal'
  const fillMode = x.fillMode || 'none'
  const playState = x.playState || 'running'
  return `${name} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`
}

export const serializeAnimation = (
  x: Animation | Animation[] | GlobalCssKeyword
) => ({
  animation:
    typeof x === 'string'
      ? x
      : !Array.isArray(x)
      ? serializeSingleAnimationValue(x)
      : x
          .reduce(
            (acc: any, item, idx) =>
              acc +
              serializeSingleAnimationValue(item) +
              (idx === x.length - 1 ? '' : ', '),
            ''
          )
          .trim(),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationDeclaration = {
  /**
   * Maps to CSS's **`animation`** property
   * @category RBProperty
   */
  animation: Animation | Animation[] | GlobalCssKeyword
}
