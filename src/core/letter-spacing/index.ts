import { GlobalCssKeyword, Length, isLengthType } from '../shared/types'

import { serializeLength } from '../shared/serializers'

/**
 * Creates a declaration object for the **`letter-spacing`** property.
 * @category Declaration function
 * @formalSyntax normal | <length>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2019/WD-css-text-3-20191113/#letter-spacing-property
 */
export const letterSpacing = (
  value: 'normal' | Length | GlobalCssKeyword
): { letterSpacing: string } => ({
  letterSpacing: isLengthType(value) ? serializeLength(value) : value
})
