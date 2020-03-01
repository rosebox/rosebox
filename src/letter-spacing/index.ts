import { GlobalCssKeyword, Length, isLengthType } from '../shared/types'

import { serializeLength } from '../shared/serializers'

/**
 * Creates a declaration object for the **`letter-spacing`** property.
 * @category Declaration function
 * @formalSyntax normal | <length>
 * @implentationReference https://www.w3.org/TR/css-text-3/#letter-spacing-property
 */
export const letterSpacing = (
  value: 'normal' | Length | GlobalCssKeyword
): { letterSpacing: string } => ({
  letterSpacing: isLengthType(value) ? serializeLength(value) : value
})
