import {
  GlobalCssKeyword,
  isPercentageType,
  Percentage,
  serializePercentage,
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
  volume: isPercentageType(x) ? serializePercentage(x) : x,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type VolumeDeclaration = {
  /**
   * Maps to CSS's **`visibility`** property
   * @category RBProperty
   */
  volume: Volume | GlobalCssKeyword
}
