import { DoubleBar2 } from '../shared'
import {
  GlobalCssKeyword,
  Percentage,
  serializeAtomicValue,
} from '../shared/types'

type VoiceRate = DoubleBar2<
  'normal' | 'x-slow' | 'slow' | 'medium' | 'fast' | 'x-fast',
  Percentage
>

export const serializeVoiceRate = (x: VoiceRate | GlobalCssKeyword) => ({
  voiceRate:
    !Array.isArray(x)
    ? serializeAtomicValue(x)
      : x
          .reduce(
            (acc: any, item) =>
              acc +
              ' ' +
              (serializeAtomicValue(item)),
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
