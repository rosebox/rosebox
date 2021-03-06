import { DoubleBar2 } from '../shared'
import { Decibel, GlobalCssKeyword, serializeAtomicValue, ValueOrFunc } from '../shared'

type VoiceVolume = 'silent' | DoubleBar2<'x-soft' | 'soft' | 'medium' | 'loud' | 'x-loud', Decibel>

export const serializeVoiceVolume = (x: VoiceVolume | GlobalCssKeyword) => ({
    voiceVolume: !Array.isArray(x)
        ? serializeAtomicValue(x)
        : x
              .reduce(
                  (acc: any, item) => acc + ' ' + (typeof item === 'string' ? item : serializeAtomicValue(item)),
                  '',
              )
              .trim(),
})

/** @hide */
type VoiceVolumePropValue = VoiceVolume | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type VoiceVolumeDeclaration = {
    /**
     * Maps to CSS's **`voice-volume`** property
     * @category RBProperty
     */
    voiceVolume: VoiceVolumePropValue
}

export type VoiceVolumeDeclarationJSS = {
    /**
     * Maps to CSS's **`voice-volume`** property
     * @category RBProperty
     */
    voiceVolume: ValueOrFunc<VoiceVolumePropValue>
}
