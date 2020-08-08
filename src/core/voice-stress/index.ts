import { GlobalCssKeyword } from '../shared'

/**
 * @category RBDeclarationTypeAlias
 */
export type VoiceStressDeclaration = {
  /**
   * Maps to CSS's **`voice-stress`** property
   * @category RBProperty
   */
  voiceStress:
    | 'normal'
    | 'strong'
    | 'moderate'
    | 'none'
    | 'reduced'
    | GlobalCssKeyword
}
