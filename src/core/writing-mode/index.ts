import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/**
 * @hide
 */
type WritingModeValue =
  | 'horizontal-tb'
  | 'vertical-rl'
  | 'vertical-lr'
  | 'sideways-rl'
  | 'sideways-lr'

export const serializeWritingMode = (
  x: WritingModeValue | GlobalCssKeyword
): { writingMode: string } => ({
  writingMode: x,
})

/** @hide */
type PropValue =  WritingModeValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type WritingModeDeclaration = {
  /**
   * Maps to CSS's **`writing-mode`** property
   * @category RBProperty
   */
  writingMode: PropValue
}

export type WritingModeDeclarationJSS = {
  writingMode: ValueOrFunc<PropValue>
}
