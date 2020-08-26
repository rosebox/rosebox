import { GlobalCssKeyword, serializeDoubleBar } from '../shared'
import { LengthPercentage, serializeLengthPercentage } from '../shared/types'

const serializeAtomicValue = (x: string | LengthPercentage): string =>
  typeof x === 'string' ? x : serializeLengthPercentage(x)

export const serializeTexIndent = (x: TextIndentValue) => ({
  textIndent:
    typeof x === 'string'
      ? x
      : serializeDoubleBar(!Array.isArray(x) ? [x] : x, serializeAtomicValue),
})

/**
 * @hidden
 */
type TextIndentValue =
  | LengthPercentage
  | [LengthPercentage]
  | [LengthPercentage, 'hanging']
  | ['hanging', LengthPercentage]
  | [LengthPercentage, 'each-line']
  | ['each-line', LengthPercentage]
  | [LengthPercentage, 'hanging', 'each-line']
  | [LengthPercentage, 'each-line', 'hanging']
  | ['hanging', LengthPercentage, 'each-line']
  | ['hanging', 'each-line', LengthPercentage]
  | ['each-line', LengthPercentage, 'hanging']
  | ['each-line', 'hanging', LengthPercentage]
  | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextIndentDeclaration = {
  /**
   * Maps to CSS's **`text-emphasis-skip`** property
   * @category RBProperty
   */
  textIndent: TextIndentValue
}
