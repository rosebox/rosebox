import { GlobalCssKeyword, ValueOrFunc } from '../shared'

export type FontWeightCSSProp = 'font-weight'

type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

/** @hide */
type FontWeightPropValue = FontWeight | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontWeightDeclaration = {
    /**
     * Maps to CSS's **`font-weight`** property
     * @category RBProperty
     * @formalSyntaxForValue normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#font-weight-prop
     */
    fontWeight: FontWeightPropValue
}

export type FontWeightDeclarationJSS = {
    fontWeight: ValueOrFunc<FontWeightPropValue>
}
