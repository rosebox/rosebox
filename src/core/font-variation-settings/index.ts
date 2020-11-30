import { GlobalCssKeyword } from '../shared'

export const serializeFontVariationSettings = (
  x: 'normal' | [string, number] | [string, number][] | GlobalCssKeyword
): { fontVariationSettings: string } => ({
  fontVariationSettings:
    typeof x === 'string'
      ? x
      : !Array.isArray(x[0])
      ? `"${x[0]}" ${x[1]}`
      : (x as [string, number][]).reduce(
          (acc, val, idx) =>
            acc + `"${val[0]}" ${val[1]}` + (x.length - 1 !== idx ? ', ' : ''),
          ''
        ),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariationSettingsDeclaration = {
  /**
   * Maps to CSS's **`font-variation-settings`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | none
   */
  fontVariationSettings:
    | 'normal'
    | [string, number]
    | [string, number][]
    | GlobalCssKeyword
}
