import { GlobalCssKeyword, ValueOrFunc } from '../shared';

/** @hide */
type VoiceStressPropValue = 'normal' | 'strong' | 'moderate' | 'none' | 'reduced' | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type VoiceStressDeclaration = {
    /**
     * Maps to CSS's **`voice-stress`** property
     * @category RBProperty
     */
    voiceStress: VoiceStressPropValue;
};

export type VoiceStressDeclarationJSS = {
    voiceStress: ValueOrFunc<VoiceStressPropValue>;
};
