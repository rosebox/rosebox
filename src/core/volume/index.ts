import {
  GlobalCssKeyword,
  Percentage,
  serializeAtomicValue,
  ValueOrFunc,
} from '../shared'

type Volume =
  | number
  | Percentage
  | 'silent'
  | 'x-soft'
  | 'soft'
  | 'medium'
  | 'loud'
  | 'x-loud'

export const serializeVolume = (x: Volume | GlobalCssKeyword) => ({
  volume: serializeAtomicValue(x),
})


/** @hide */
type PropValue = Volume | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type VolumeDeclaration = {
  /**
   * Maps to CSS's **`volume`** property
   * @category RBProperty
   */
  volume: PropValue
}

export type VolumeDeclarationJSS = {
  volume: ValueOrFunc<PropValue>
}
