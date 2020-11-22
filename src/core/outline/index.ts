import { GlobalCssKeyword, LineStyle } from '../shared'
import {
  Color,
  DoubleBar3,
  isLengthType,
  LineWidth,
  serializeColorValue,
  serializeLength,
} from '../shared/types'

const serializeAtomicValue = (x: Color | LineStyle | LineWidth): string =>
  typeof x === 'string'
    ? x
    : isLengthType(x)
    ? serializeLength(x)
    : serializeColorValue(x)

export const serializeOutline = (
  x: DoubleBar3<Color, LineStyle, LineWidth> | GlobalCssKeyword
) => ({
  outline: !Array.isArray(x)
    ? typeof x === 'string'
      ? x
      : serializeAtomicValue(x)
    : (x as (Color | LineStyle | LineWidth)[]).reduce(
        (acc, item, idx) =>
          acc + serializeAtomicValue(item) + (idx === x.length - 1 ? '' : ' '),
        ''
      ),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type OutlineDeclaration = {
  /**
   * Maps to CSS's **`outline-style`** property
   * @category RBProperty
   */
  outline: DoubleBar3<Color, LineStyle, LineWidth> | GlobalCssKeyword
}
