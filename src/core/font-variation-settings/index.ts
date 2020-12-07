import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

export const serializeFontVariationSettings = (type: PropType) => (
    x: 'normal' | [string, number] | [string, number][] | GlobalCssKeyword,
) => ({
    [type === 'inline' ? 'fontVariationSettings' : 'font-variation-settings']:
        typeof x === 'string'
            ? x
            : !Array.isArray(x[0])
            ? `"${x[0]}" ${x[1]}`
            : (x as [string, number][]).reduce(
                  (acc, val, idx) => acc + `"${val[0]}" ${val[1]}` + (x.length - 1 !== idx ? ', ' : ''),
                  '',
              ),
})

/** @hide */
type FontVariationSettingsPropValue = 'normal' | [string, number] | [string, number][] | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariationSettingsDeclaration = {
    /**
     * Maps to CSS's **`font-variation-settings`** property
     * @category RBProperty
     * @formalSyntaxForValue auto | none
     */
    fontVariationSettings: FontVariationSettingsPropValue
}

export type FontVariationSettingsDeclarationJSS = {
    fontVariationSettings: ValueOrFunc<FontVariationSettingsPropValue>
}
