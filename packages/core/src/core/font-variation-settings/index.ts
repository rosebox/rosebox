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
     * @initial normal
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#font-rend-desc
     * @specification {@link https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/ CSS Fonts Module Level 4}
     */
    fontVariationSettings: FontVariationSettingsPropValue
}

export type FontVariationSettingsDeclarationJSS = {
    fontVariationSettings: ValueOrFunc<FontVariationSettingsPropValue>
}
