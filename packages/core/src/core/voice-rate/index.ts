import { DoubleBar2 } from '../shared'
import { GlobalCssKeyword, Percentage, serializeAtomicValue, ValueOrFunc } from '../shared/types'

type VoiceRate = DoubleBar2<'normal' | 'x-slow' | 'slow' | 'medium' | 'fast' | 'x-fast', Percentage>

export const serializeVoiceRate = (x: VoiceRate | GlobalCssKeyword) => ({
    voiceRate: !Array.isArray(x)
        ? serializeAtomicValue(x)
        : x.reduce((acc, item) => acc + ' ' + serializeAtomicValue(item), '').trim(),
})

/** @hide */
type VoiceRatePropValue = VoiceRate | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type VoiceRateDeclaration = {
    /**
     * Maps to CSS's **`voice-rate`** property
     * @category RBProperty
     */
    voiceRate: VoiceRatePropValue
}

export type VoiceRateDeclarationJSS = {
    voiceRate: ValueOrFunc<VoiceRatePropValue>
}
