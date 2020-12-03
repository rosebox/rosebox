import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

type AnimationPlayStateKeyword = 'running' | 'paused'

/**
 * @hide
 */
export type AnimationPlayState =
  | AnimationPlayStateKeyword
  | AnimationPlayStateKeyword[]
  | GlobalCssKeyword

const serializeValue = (value: AnimationPlayState) => {
  const valArray = Array.isArray(value) ? value : [value]
  return valArray.reduce(
    (acc, item, idx) => acc + item + (idx === valArray.length - 1 ? '' : ', '),
    ''
  )
}

export const serializeAnimationPlayState = (type: PropType) => (x: AnimationPlayState) => {
  const propName = type === 'inline' ? 'animationPlayState' : 'animation-play-state'
  return {
    [propName]: serializeValue(x),
  }
}

/** @hide */
type PropValue = AnimationPlayState | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationPlayStateDeclaration = {
  /**
   * Maps to CSS's **`animation-play-state`** property
   * @category RBProperty
   */
  animationPlayState: PropValue
}
export type AnimationPlayStateDeclarationJSS = {
  animationPlayState: ValueOrFunc<PropValue>
}
