import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'
import { DoubleBar4 } from '../shared'

type CommonLigValues = 'common-ligatures' | 'no-common-ligatures'
type DiscretionaryLigValues = 'discretionary-ligatures' | 'no-discretionary-ligatures'
type HistoricalLigValues = 'historical-ligatures' | 'no-historical-ligatures'
type ContextualAltValues = 'contextual' | 'no-contextual'

export const serializeFontVariantLigatures = (type: PropType) => (
    x:
        | 'normal'
        | 'none'
        | DoubleBar4<CommonLigValues, DiscretionaryLigValues, HistoricalLigValues, ContextualAltValues>
        | GlobalCssKeyword,
) => ({
    [type === 'inline' ? 'fontVariantLigatures' : 'font-variant-ligatures']: !Array.isArray(x)
        ? x
        : (x as string[]).reduce((acc, item) => acc + ' ' + item, '').trim(),
})

/** @hide */
type FontVariantLigaturesPropValue =
    | 'normal'
    | 'none'
    | DoubleBar4<CommonLigValues, DiscretionaryLigValues, HistoricalLigValues, ContextualAltValues>
    | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantLigaturesDeclaration = {
    /**
     * Maps to CSS's **`font-variant-ligatures`** property
     * @initial normal
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#font-variant-ligatures-prop
     * @specification {@link https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/ CSS Fonts Module Level 4}
     */
    fontVariantLigatures: FontVariantLigaturesPropValue
}

export type FontVariantLigaturesDeclarationJSS = {
    fontVariantLigatures: ValueOrFunc<FontVariantLigaturesPropValue>
}
