import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

export const serializeFontSynthesis = (type: PropType) => (
    x: 'none' | 'weight' | 'style' | ['weight', 'style'] | ['style', 'weight'] | GlobalCssKeyword,
) => ({
    [type === 'inline' ? 'fontSynthesis' : 'font-synthesis']: typeof x === 'string' ? x : `${x[0]} ${x[1]}`,
})

/** @hide */
type FontSynthesisPropValue = 'none' | 'weight' | 'style' | ['weight', 'style'] | ['style', 'weight'] | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSynthesisDeclaration = {
    /**
     * Maps to CSS's **`font-synthesis`** property
     * @initial weight style
     * @definition https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#font-synthesis
     * @specification {@link https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/ CSS Fonts Module Level 4}
     */
    fontSynthesis: FontSynthesisPropValue
}

export type FontSynthesisDeclarationJSS = {
    fontSynthesis: ValueOrFunc<FontSynthesisPropValue>
}
