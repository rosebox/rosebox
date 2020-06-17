import { LengthPercentage, GlobalCssKeyword, Length } from '../shared/types'
import { serializeLengthPercentage } from '../shared/serializers'

const WHITESPACE = ' '

type TwoValuesSyntax = [
  LengthPercentage | 'left' | 'center' | 'right',
  LengthPercentage | 'top' | 'center' | 'bottom'
]

type ThreeValuesSyntax = [
  LengthPercentage | 'left' | 'center' | 'right',
  LengthPercentage | 'top' | 'center' | 'bottom',
  Length
]

const serializeAtomicValue = (
  x: LengthPercentage | 'left' | 'center' | 'right' | 'top' | 'bottom'
): string => (typeof x === 'string' ? x : serializeLengthPercentage(x))

export const serializeTransformOriginPropertyValue = (
  x: TwoValuesSyntax | ThreeValuesSyntax | GlobalCssKeyword
): string =>
  typeof x === 'string'
    ? x
    : x.reduce(
        (acc, val, idx) =>
          acc +
          serializeAtomicValue(val) +
          (idx === x.length - 1 ? '' : WHITESPACE),
        ''
      )

/**
 * @category RBDeclarationTypeAlias
 */
export type TransformOriginDeclaration = {
  /**
   * Maps to CSS's **`transform-origin`** property.
   * @category RBProperty
   * @added 0.2.3
   */
  transformOrigin: TwoValuesSyntax | ThreeValuesSyntax | GlobalCssKeyword
}
