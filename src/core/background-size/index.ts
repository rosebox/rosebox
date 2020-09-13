import {
  GlobalCssKeyword,
  serializeAtomicValue,
  Width,
  WidthCalculation,
} from '../shared'

const serializeBackgroundSizeAtomic = (x: BackgroundSize): string =>
  typeof x === 'string'
    ? x
    : `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}`

export const serializeBackgroundSizePropValue = (
  x: BackgroundSize | BackgroundSize[] | GlobalCssKeyword
): string => {
  if (typeof x === 'string') return x
  if (Array.isArray(x[0]))
    return (x as BackgroundSize[]).reduce(
      (acc, val, idx) =>
        acc +
        serializeBackgroundSizeAtomic(val) +
        (idx === x.length - 1 ? '' : ', '),
      ''
    )
  return serializeBackgroundSizeAtomic(x as BackgroundSize)
}

type BackgroundSize =
  | [Width | WidthCalculation, Width | WidthCalculation]
  | 'cover'
  | 'contain'

export const serializeBackgroundSize = (
  x: BackgroundSize | BackgroundSize[] | GlobalCssKeyword
): {
  backgroundSize: string
} => ({
  backgroundSize: serializeBackgroundSizePropValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BackgroundSizeDeclaration = {
  /**
   * A RB property that maps to CSS's **`background-size`** property
   * @category RBProperty
   */
  backgroundSize: BackgroundSize | BackgroundSize[] | GlobalCssKeyword
}
