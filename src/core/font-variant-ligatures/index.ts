import { GlobalCssKeyword } from '../shared'

type DoubleBar2<A, B> = A | B | [A, B] | [B, A]
type DoubleBar3<A, B, C> =
  | DoubleBar2<A, B>
  | C
  | [A, C]
  | [C, A]
  | [B, C]
  | [C, B]
  | [A, B, C]
  | [A, C, B]
  | [B, A, C]
  | [B, C, A]
  | [C, A, B]
  | [C, B, A]

type DoubleBar4<A, B, C, D> =
  | DoubleBar3<A, B, C>
  | D
  | [A, D]
  | [D, A]
  | [B, D]
  | [D, B]
  | [C, D]
  | [D, C]
  | [A, B, D]
  | [A, D, B]
  | [B, A, D]
  | [B, D, A]
  | [C, A, D]
  | [C, D, A]
  | [C, B, D]
  | [C, D, B]
  | [A, B, C, D]
  | [A, B, D, C]
  | [A, C, B, D]
  | [A, C, D, B]
  | [A, D, B, C]
  | [A, D, C, B]
  | [B, A, C, D]
  | [B, A, D, C]
  | [B, C, A, D]
  | [B, C, D, A]
  | [B, D, A, C]
  | [B, D, C, A]
  | [C, A, B, D]
  | [C, A, B, D]
  | [C, B, A, D]
  | [C, B, D, A]
  | [C, D, A, B]
  | [C, D, B, A]
  | [D, A, B, C]
  | [D, A, C, B]
  | [D, B, A, C]
  | [D, B, C, A]
  | [D, C, A, B]
  | [D, C, B, A]

type CommonLigValues = 'common-ligatures' | 'no-common-ligatures'
type DiscretionaryLigValues =
  | 'discretionary-ligatures'
  | 'no-discretionary-ligatures'
type HistoricalLigValues = 'historical-ligatures' | 'no-historical-ligatures'
type ContextualAltValues = 'contextual' | 'no-contextual'

export const serializeFontVariantLigaturesPropValue = (
  x:
    | 'normal'
    | 'none'
    | DoubleBar4<
        CommonLigValues,
        DiscretionaryLigValues,
        HistoricalLigValues,
        ContextualAltValues
      >
    | GlobalCssKeyword
): string =>
  !Array.isArray(x)
    ? x
    : (x as string[]).reduce((acc: any, item) => acc + ' ' + item, '').trim()

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantLigaturesDeclaration = {
  /**
   * Maps to CSS's **`font-variant-ligatures`** property
   * @category RBProperty
   * @formalSyntaxForValue normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]
   * @implementationReference https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-ligatures
   */
  fontVariantLigatures:
    | 'normal'
    | 'none'
    | DoubleBar4<
        CommonLigValues,
        DiscretionaryLigValues,
        HistoricalLigValues,
        ContextualAltValues
      >
    | GlobalCssKeyword
}
