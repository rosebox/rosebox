import { GlobalCssKeyword, PropType } from '../shared'

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
  | [D, A]
  | [A, D]
  | [D, B]
  | [B, D]
  | [D, C]
  | [C, D]
  | [D, B, A]
  | [D, A, B]
  | [B, D, A]
  | [B, A, D]
  | [A, D, B]
  | [A, B, D]
  | [D, C, A]
  | [D, A, C]
  | [C, D, A]
  | [C, A, D]
  | [A, D, C]
  | [A, C, D]
  | [D, C, B]
  | [D, B, C]
  | [C, D, B]
  | [C, B, D]
  | [B, D, C]
  | [B, C, D]
  | [D, C, B, A]
  | [D, C, A, B]
  | [D, B, C, A]
  | [D, B, A, C]
  | [D, A, C, B]
  | [D, A, B, C]
  | [C, D, B, A]
  | [C, D, A, B]
  | [C, B, D, A]
  | [C, B, A, D]
  | [C, A, D, B]
  | [C, A, B, D]
  | [B, D, C, A]
  | [B, D, A, C]
  | [B, C, D, A]
  | [B, C, A, D]
  | [B, A, D, C]
  | [B, A, C, D]
  | [A, D, C, B]
  | [A, D, B, C]
  | [A, C, D, B]
  | [A, C, B, D]
  | [A, B, D, C]
  | [A, B, C, D]

type CommonLigValues = 'common-ligatures' | 'no-common-ligatures'
type DiscretionaryLigValues =
  | 'discretionary-ligatures'
  | 'no-discretionary-ligatures'
type HistoricalLigValues = 'historical-ligatures' | 'no-historical-ligatures'
type ContextualAltValues = 'contextual' | 'no-contextual'

export const serializeFontVariantLigatures = (type: PropType) => (
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
) => ({
  [type === 'inline' ? 'fontVariantLigatures' : 'font-variant-ligatures']: !Array.isArray(x)
    ? x
    : (x as string[]).reduce((acc: any, item) => acc + ' ' + item, '').trim(),
})

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
