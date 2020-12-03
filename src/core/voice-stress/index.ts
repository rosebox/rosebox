import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue = 'normal'
| 'strong'
| 'moderate'
| 'none'
| 'reduced'
| GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type VoiceStressDeclaration = {
  /**
   * Maps to CSS's **`voice-stress`** property
   * @category RBProperty
   */
  voiceStress: PropValue
}

export type VoiceStressDeclarationJSS = {
  voiceStress: ValueOrFunc<PropValue>
}
