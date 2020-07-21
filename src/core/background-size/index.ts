import { GlobalCssKeyword, serializeWidth, Width } from '../shared'

const serializeBackgroundSize = (x: BackgroundSize): string =>
  typeof x === 'string' ? x : `${serializeWidth(x[0])} ${serializeWidth(x[1])}`

export const serializeBackgroundSizePropValue = (
  x: BackgroundSize | BackgroundSize[] | GlobalCssKeyword
): string => {
  if (typeof x === 'string') return x
  if (Array.isArray(x[0]))
    return (x as BackgroundSize[]).reduce(
      (acc, val, idx) =>
        acc + serializeBackgroundSize(val) + (idx === x.length - 1 ? '' : ', '),
      ''
    )
  return serializeBackgroundSize(x as BackgroundSize)
}

type BackgroundSize = [Width, Width] | 'cover' | 'contain'

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
