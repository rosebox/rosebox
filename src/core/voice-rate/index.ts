import { DoubleBar2 } from '../shared'
import {
  GlobalCssKeyword,
  Percentage,
  serializeAtomicValue,
  ValueOrFunc,
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

/** @hide */
type PropValue = VoiceRate | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type VoiceRateDeclaration = {
  /**
   * Maps to CSS's **`voice-rate`** property
   * @category RBProperty
   */
  voiceRate: PropValue
}

export type VoiceRateDeclarationJSS = {
  voiceRate: ValueOrFunc<PropValue>
}
