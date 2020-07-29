import { GlobalCssKeyword } from '../shared'

type AnimationPlayModeKeyword = 'running' | 'paused'

/**
 * @hide
 */
export type AnimationPlayModeValue =
  | AnimationPlayModeKeyword
  | AnimationPlayModeKeyword[]
  | GlobalCssKeyword

const serializeValue = (value: AnimationPlayModeValue) => {
  const valArray = Array.isArray(value) ? value : [value]
  return valArray.reduce(
    (acc, item, idx) => acc + item + (idx === valArray.length - 1 ? '' : ', '),
    ''
  )
}

export const serializeAnimationPlayMode = (x: AnimationPlayModeValue) => ({
  animationPlayMode: serializeValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationPlayModeDeclaration = {
  /**
   * Maps to CSS's **`animation-property`** property
   * @category RBProperty
   */
  animationPlayMode: AnimationPlayModeValue
}
