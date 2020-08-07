import { DoubleBar2 } from '../shared'
import {
  GlobalCssKeyword,
  Percentage,
  isPercentageType,
  serializePercentage,
} from '../shared/types'

type VoiceRate = DoubleBar2<
  'normal' | 'x-slow' | 'slow' | 'medium' | 'fast' | 'x-fast',
  Percentage
>

export const serializeVoiceRate = (x: VoiceRate | GlobalCssKeyword) => ({
  voiceRate:
    typeof x === 'string'
      ? x
      : isPercentageType(x)
      ? serializePercentage(x)
      : x
          .reduce(
            (acc: any, item) =>
              acc +
              ' ' +
              (typeof item === 'string' ? item : serializePercentage(item)),
            ''
          )
          .trim(),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type VoiceRateDeclaration = {
  /**
   * Maps to CSS's **`voice-rate`** property
   * @category RBProperty
   */
  voiceRate: VoiceRate | GlobalCssKeyword
}
