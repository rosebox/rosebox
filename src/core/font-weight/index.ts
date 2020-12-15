import { GlobalCssKeyword, ValueOrFunc } from '../shared'

export type FontWeightCSSProp = 'font-weight'

type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000

/** @hide */
type FontWeightPropValue = FontWeight | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontWeightDeclaration = {
    /**
     * Maps to CSS's **`font-weight`** property
     * @initial normal
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#fo   nt-weight
     * @specification {@link https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/ CSS Fonts Module Level 4}
     */
    fontWeight: FontWeightPropValue
}

export type FontWeightDeclarationJSS = {
    fontWeight: ValueOrFunc<FontWeightPropValue>
}
