import {
  GlobalCssKeyword,
  Percentage,
  serializeAtomicValue,
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

/**
 * @category RBDeclarationTypeAlias
 */
export type VolumeDeclaration = {
  /**
   * Maps to CSS's **`volume`** property
   * @category RBProperty
   */
  volume: Volume | GlobalCssKeyword
}
