import { GlobalCssKeyword } from '../shared'

type AnimationFillModeKeyword = 'none' | 'forwards' | 'backwards' | 'both'

/**
 * @hide
 */
export type AnimationFillMode =
  | AnimationFillModeKeyword
  | AnimationFillModeKeyword[]
  | GlobalCssKeyword

const serializeValue = (value: AnimationFillMode) => {
  const valArray = Array.isArray(value) ? value : [value]
  return valArray.reduce(
    (acc, item, idx) => acc + item + (idx === valArray.length - 1 ? '' : ', '),
    ''
  )
}

export const serializeAnimationFillMode = (x: AnimationFillMode) => ({
  animationFillMode: serializeValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationFillModeDeclaration = {
  /**
   * Maps to CSS's **`animation-fill-mode`** property
   * @category RBProperty
   */
  animationFillMode: AnimationFillMode
}
