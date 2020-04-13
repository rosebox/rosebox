import { GlobalCssKeyword, isGlobalCssKeyword } from '../../shared/types'
import { serializeKeyword } from '../../shared/serializers'
import { ShrinkGrow, isShrinkGrow } from '../shared/types'
import { FlexBasis, isFlexBasis, serializeFlexBasis } from '../flex-basis'

export type FlexSingleValue = 'none' | ShrinkGrow | FlexBasis
export type FlexTwoValues = [ShrinkGrow, FlexBasis] | [FlexBasis, ShrinkGrow]
export type FlexThreeValues =
  | [ShrinkGrow, ShrinkGrow, FlexBasis]
  | [FlexBasis, ShrinkGrow, ShrinkGrow]

/**
 * @skip
 */
type Flex = FlexSingleValue | FlexTwoValues | FlexThreeValues

const isOneValueSyntax = (value: Flex): value is FlexSingleValue =>
  value === 'none' || isShrinkGrow(value) || isFlexBasis(value)

const isTwoValuesSyntax = (value: Flex): value is FlexTwoValues =>
  Array.isArray(value) &&
  value.length === 2 &&
  ((typeof value[0] === 'number' && isFlexBasis(value[1])) ||
    (isFlexBasis(value[0]) && typeof value[1] === 'number'))

export const isThreeValuesSyntax = (value: Flex): value is FlexThreeValues =>
  Array.isArray(value) &&
  value.length === 3 &&
  typeof value[0] === 'number' &&
  typeof value[1] === 'number' &&
  isFlexBasis(value[2])

const serializeOneValueSyntax = (value: FlexSingleValue) => {
  return typeof value === 'string'
    ? serializeKeyword(value)
    : typeof value === 'number'
    ? `${value}`
    : serializeFlexBasis(value)
}

const serializeTwoValuesSyntax = (value: FlexTwoValues): string => {
  return isFlexBasis(value[0])
    ? `${serializeFlexBasis(value[0])} ${value[1]}`
    : `${value[0]} ${serializeFlexBasis(value[1] as FlexBasis)}`
}
const serializeThreeValuesSyntax = (value: FlexThreeValues) => {
  return isFlexBasis(value[0])
    ? `${serializeFlexBasis(value[0])} ${value[1]} ${value[2]}`
    : `${value[0]} ${value[1]} ${serializeFlexBasis(value[2] as FlexBasis)}`
}

/**
 * Creates a declaration object for the **`flex`** shorthand property.
 * @category Declaration function
 * @formalSyntax none | [ <‘flex-grow’> <‘flex-shrink’>? || <‘flex-basis’> ]
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/css-flexbox-1/#flex-property
 */
export const flex = (value: Flex | GlobalCssKeyword): { flex: string } => ({
  flex: isGlobalCssKeyword(value)
    ? value
    : isOneValueSyntax(value)
    ? serializeOneValueSyntax(value)
    : isTwoValuesSyntax(value)
    ? serializeTwoValuesSyntax(value)
    : serializeThreeValuesSyntax(value),
})

export type FlexDeclaration = {
  /**
   * Maps to CSS's **`flex`** property
   * @category RBProperty
   * @formalSyntaxForValue none | [ <‘flex-grow’> <‘flex-shrink’>? || <‘flex-basis’> ]
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/css-flexbox-1/#flex-property
   */
  flex: Flex | GlobalCssKeyword
}
