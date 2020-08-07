import { DoubleBar2 } from '../shared'
import {
  Decibel,
  GlobalCssKeyword,
  serializeDecibel,
  isDecibel,
} from '../shared/types'

type VoiceVolume =
  | 'silent'
  | DoubleBar2<'x-soft' | 'soft' | 'medium' | 'loud' | 'x-loud', Decibel>

export const serializeVoiceVolume = (x: VoiceVolume | GlobalCssKeyword) => ({
  voiceVolume:
    typeof x === 'string'
      ? x
      : isDecibel(x)
      ? serializeDecibel(x)
      : x
          .reduce(
            (acc: any, item) =>
              acc +
              ' ' +
              (typeof item === 'string' ? item : serializeDecibel(item)),
            ''
          )
          .trim(),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type VoiceVolumeDeclaration = {
  /**
   * Maps to CSS's **`voice-volume`** property
   * @category RBProperty
   */
  voiceVolume: VoiceVolume | GlobalCssKeyword
}
