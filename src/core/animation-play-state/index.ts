import { GlobalCssKeyword } from '../shared'

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

export const serializeAnimationPlayState = (x: AnimationPlayState) => ({
  animationPlayState: serializeValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationPlayStateDeclaration = {
  /**
   * Maps to CSS's **`animation-play-state`** property
   * @category RBProperty
   */
  animationPlayState: AnimationPlayState
}
